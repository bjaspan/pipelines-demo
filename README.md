This tutorial demonstrates the ability to build a Drupal site with Composer, with only the essential
local files (e.g.: not the vendor directory) committed to the source branch.  It builds Acquia Lightning, based on the [Lightning Project](https://github.com/acquia/lightning-project). To use it, copy the files from this branch
into your Acquia Cloud repository, then run pipeline start.

Notes:

* We have already set up this branch to contain the output from "composer create-project" and prepopulated settings.php with database
  configration and profile name.  Doing that set up from scratch will be the subject of a different tutorial.
* This branch is set up exclusively for Acquia Cloud.  To do additional development on it, enable Live Development on an environment
  running this branch, then run composer install in the livedev directory.
* An environment running this cannot currently be cloned into Dev Desktop due to a number of complex integration issues.  
 
Installing lighting via drush:

* drush @<<pipelinesdemo>>.test ac-code-path-deploy master-build
* drush @<<pipelinesdemo>>.test ac-task-info <<14726779>>
* drush @<<pipelinesdemo>>.test ac-environment-livedev enable 1
* drush @<<pipelinesdemo>>.test.livedev si
* drush @pipelinesdemo.test.livedev ac-domain-list

Take the username and password from the si command response and enter it at the domain provided by ac-domain-list
