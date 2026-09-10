"use client";

import { createContext, useEffect, useState } from "react";
import type { Notification } from "@/app/components/notification/notification.type"
import NotificationContainer from "./NotificationContainer";

type CreateNotification = Omit<Notification, "id">

type NotificationContextType = {
  notifications: Notification[]
  notify: (notification: CreateNotification) => void
  removeNotification: (id: string) => void
};

export const NotificationContext =
  createContext<NotificationContextType | null>(null);

export default function NotificationProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  function notify(notification: CreateNotification) {
    const newNotification = {
      id: crypto.randomUUID(),
      ...notification
    }
    setNotifications(previous => [
      ...previous,
      newNotification
    ])
  }

  function removeNotification(id: string) {
    setNotifications(previous => 
      previous.filter(notification => notification.id !== id)
    )
  }
  
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        notify,
        removeNotification
      }}
    >
      {children}
      <NotificationContainer/>
    </NotificationContext.Provider>
  )
}