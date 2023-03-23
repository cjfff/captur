export class RRwebSentryCollection {
  sentryEvents: string[] = []
  messageId: string

  add(eventId) {
    this.sentryEvents.push(eventId)
    return true
  }

  clear() {
    this.sentryEvents = []
    this.messageId = ''
    return true
  }
}

const collection = new RRwebSentryCollection()

export default collection

export const sentryRRwebEventHandle = (event) => {
  if (event?.message) {
    collection.messageId = event.event_id
  } else {
    collection.add(event.event_id)
  }
}
