class RejectionReason {
  constructor(message: string, exception?: Error) {
    let reason = exception instanceof Error ? exception : new Error(message)
    reason = Object.assign(reason, exception)
    reason.message = message

    return reason
  }
}

export default RejectionReason
