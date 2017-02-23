<?php

namespace CloudAPI;

/**
 * Quick SDK for the N3 API.
 * http://acquia.github.io/network-n3/
 *
 * @todo: Yeah, this is terrible. Replace it with a real Cloud API SDK.
 */

require 'vendor/autoload.php';

use Acquia\Hmac\Guzzle\HmacAuthMiddleware;
use Acquia\Hmac\Key;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;

class QuickCloudAPI {
    function __construct($key_id, $secret, $opts = []) {
        $this->opts = $opts;
        $key = new Key($key_id, $secret);
        $middleware = new HmacAuthMiddleware($key);
        $stack = HandlerStack::create();
        $stack->push($middleware);

        $this->client = new Client([
            'handler' => $stack,
            'http_errors' => false,
            'debug' => ($this->opts['debug'] > 1),
        ]);
        if (!isset($this->opts['endpoint'])) {
            $this->opts['endpoint'] = "https://cloud.acquia.com/api";
        }
    }

    function debug($msg, $level = 1) {
        if ($this->opts['debug'] >= $level) {
            print "$msg\n";
        }
    }

    function get($path) {
        $this->debug("GET $path");
        $response = $this->client->get("{$this->opts['endpoint']}/$path");
        return $this->do_response($response);
    }

    function post($path, $body_params = []) {
        $this->debug("POST $path");
        $this->debug('  ' . json_encode($body_params));
        $response = $this->client->request('POST', "{$this->opts['endpoint']}/$path", [
            'json' => $body_params
        ]);
        return $this->do_response($response);
    }

    function delete($path) {
        $this->debug("DELETE $path");
        $response = $this->client->request('DELETE', "{$this->opts['endpoint']}/$path");
        return $this->do_response($response);
    }

    function poll($path, $callback, $opts = []) {
        $opts = [
            'timeout' => 300,
            'interval' => 10,
        ] + $opts;

        $this->debug("POLL $path timeout {$opts['timeout']} interval {$opts['interval']}");
        $start = time();
        $timeout = $start + $opts['timeout'];
        $count = 0;
        while (time() < $timeout) {
            $result = $this->get($path);
            if ($callback($result, $count)) {
                return $result;
            }
            $count++;
            sleep($opts['interval']);
        }

        throw new Exception("timeout after {$opts['timeout']} seconds and {$count} tries");
    }

    function do_response($response) {
        switch ($response->getStatusCode()) {
        case 200:
        case 202:
            $parsed = json_decode($response->getBody());
            if ($parsed === NULL) {
                throw new UnparseableResponseBodyException($response);
            }
            return $parsed;
        default:
            throw new UnexpectedResponseStatusException($response);
        }
    }
}

class Exception extends \Exception {
    function __construct($response, $message) {
        $this->response = $response;
        parent::__construct($message);
    }

    function getStatus() {
        return $this->response->getStatusCode();
    }

    function getBody() {
        return $this->response->getBody();
    }

    function getResponse() {
        return $this->response;
    }
}

class UnparseableResponseBodyException extends Exception {
    function __construct($response) {
        parent::__construct($response, 'Unexpected response');
        $this->message .= ": HTTP status ".$this->getStatus().": ".$this->getBody();
    }
}

class UnexpectedResponseStatusException extends Exception {
    function __construct($response) {
        parent::__construct($response, 'Unexpected HTTP status');
        $this->message .= ' '.$this->getStatus().': '.$this->getBody();
        $this->result = @json_decode($this->getBody(), TRUE);
    }

    function getResult() {
        return $this->result;
    }
}
