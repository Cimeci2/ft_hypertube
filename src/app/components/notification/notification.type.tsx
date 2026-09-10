export type Notification = {
  id: string,
  title: string,
  message?: string,
  type: NotificationType,
  duration?: number
}

export type NotificationType = "success" | "warning" | "error" | "info"