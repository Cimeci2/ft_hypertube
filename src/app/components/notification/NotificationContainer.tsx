"use client";

import Notification from "./Notification";
import { useNotification } from "./useNotification";

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}