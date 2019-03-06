// Type definitions by: Jules Sam. Randolph, https://github.com/jsamr

declare namespace Notification {
  type TimeInterval = 'minute' | 'hour' | 'halfDay' | 'day' | 'week' | 'month' | 'year'
  type Category = 'alarm' | 'call' | 'email' | 'event' | 'progress' | 'reminder' | 'social'
  interface Instance<P = {}> {
    // Basic
    id?: number
    subject?: string
    message: string
    action?: string
    payload?: P
    // Scheduling
    delay?: number
    sendAt?: Date
    repeatEvery?: TimeInterval|number
    repeatCount?: number
    endAt?: Date
    // Channels
    channelID?: string
    channelName?: string
    // Customization
    priority?: number
    smallIcon?: string
    largeIcon?: string
    sound?: string|null
    vibrate?: string|null
    lights?: string|null
    autoClear?: boolean
    onlyAlertOnce?: boolean
    tickerText?: string|null
    when?: Date
    bigText?: string
    bigStyleImageBase64?: string
    subText?: string
    progress?: number
    color?: string
    number?: number
    private?: boolean
    ongoing?: boolean
    category?: Category
    localOnly?: boolean
  }
  type EventType = 'press' | 'click'
  interface Event<P = {}> {
    action: string
    payload: P
  }
  type EventCallback<P = {}> = (e: Event<P>) => void
}

interface Notification {
    create: <P = {}>(notif: Notification.Instance<P>) => Promise<Notification.Instance<P>>
    addListener: <P = {}>(type: Notification.EventType, callback: Notification.EventCallback<P>) => void
    removeAllListeners: (type: Notification.EventType) => void
    getIDs: () => Promise<number[]>
    find: <P = {}>(id: number) => Promise<Notification.Instance<P>>
    delete: <P = {}>(id: number) => Promise<Notification.Instance<P>>
    deleteAll: () => Promise<void>
    clear: <P = {}>(id: number) => Promise<Notification.Instance<P>>
    clearAll: () => Promise<void>
}

declare const Notification: Notification

export = Notification
  
  