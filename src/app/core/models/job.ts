/**
 * Pipelines Job model
 */
export class Job {

  /**
   * Creates a Job object
   * @param obj {any} Base object to use
   */
  constructor(obj: any) {
    Object.assign(this, obj);
  }

  /**
   * A Job's unique ID
   */
  job_id: string;

  /**
   * The site the job is for (Fully Qualified Name)
   */
  sitename: string;

  /**
   * The pipeline this job is assigned to
   */
  pipeline_id: string;

  /**
   * The specified repo branch
   */
  branch: string;

  /**
   * The associated commit that triggered this job
   */
  commit: string;

  /**
   * The current Job status (String enum)
   */
  status: string;

  /**
   * Email of the requester
   */
  requested_by: string;

  /**
   * An Timestamp of when the job was created
   */
  requested_at: number|Date;

  /**
   * A Timestamp of when the job was started
   */
  started_at: number|Date;

  /**
   * A Timestamp of when the job was finished
   */
  finished_at: number|Date;

  /**
   * An integer value specifying number of milliseconds the job took
   */
  duration: number|Date;

  /**
   * The job output
   */
  output: any;

  /**
   * The Job Exit message
   */
  exit_message: string;

  /*
   * From https://github.com/acquia/pipeline/blob/master/lib/model/job.rb#L21
   STATUS_SUCCEEDED ||= 'succeeded'.freeze
   STATUS_WARNING ||= 'warning'.freeze
   STATUS_TERMINATING ||= 'terminating'.freeze
   STATUS_TERMINATED ||= 'terminated'.freeze
   STATUS_FAILED_BY_USER ||= 'failed_by_user'.freeze
   STATUS_FAILED_BY_SYSTEM ||= 'failed_by_system'.freeze
   STATUS_QUEUED ||= 'queued'.freeze
   STATUS_STARTING ||= 'starting'.freeze
   STATUS_STARTED ||= 'started'.freeze
   STATUS_RUNNING ||= 'running'.freeze
   STATUS_PAUSED ||= 'paused'.freeze
   * */

  /**
   * Returns a user friendly message about the job status
   * @returns {String}
   */
  get message() {
    if (this.exit_message) {
      return this.exit_message;
    }
    switch (this.status) {
      case 'succeeded':
        return 'Job has succeeded';
      case 'warning':
        return 'Job contains warnings';
      case 'terminating':
        return 'Job is terminating';
      case 'terminated':
        return 'Job has been terminated';
      case 'failed_by_user':
        return 'Failed by user';
      case 'starting':
        return 'Job is starting';
      case 'started':
        return 'Job has started';
      case 'running':
        return 'Job is running';
      case 'paused':
        return 'Job is paused';
      case 'queued':
        return 'Job is queued for launch';
      case 'failed_by_system':
        return 'System Failure';
      default:
        return '-';
    }
  }

  /**
   * Check if the job is in failed state
   * @returns {boolean}
   */
  get isFailed() {
    switch (this.status) {
      case 'succeeded':
      case 'warning':
      case 'terminating':
      case 'starting':
      case 'started':
      case 'running':
      case 'paused':
      case 'queued':
        return false;
      case 'terminated':
      case 'failed_by_user':
      case 'failed_by_system':
        return true;
      default:
        return false;
    }
  }

  /**
   * Check if the job in in succeeded state
   * @returns {boolean}
   */
  get isSucceeded() {
    switch (this.status) {
      case 'succeeded':
      case 'warning':
        return true;
      default:
        return false;
    }
  }

  /**
   * Check if the job is in finished state
   * @returns {boolean}
   */
  get isFinished() {
    switch (this.status) {
      case 'succeeded':
      case 'warning':
      case 'terminated':
      case'failed_by_user':
      case 'failed_by_system':
        return true;
      default:
        return false;
    }
  }

  /**
   * Check if the job is in unfinished state
   * @returns {boolean}
   */
  get isUnfinished() {
    switch (this.status) {
      case 'succeeded':
      case 'warning':
      case 'terminated':
      case 'failed_by_user':
      case 'failed_by_system':
        return false;
      default:
        return true;
    }
  }
}
