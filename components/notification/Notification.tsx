import type { Notification, NotificationType } from "./notification.type"

type NotificationProps = Notification & {
  onClose: () => void
}

type NotificationTypeBannerProps = {
  type: NotificationType
}

function NotificationTypeBanner({ type }: NotificationTypeBannerProps): string {
  switch (type){
    case "success":
      return "bg-green-500"
    case "warning":
      return "bg-orange-400"
    case "error":
      return "bg-red-500"
    case "info":
      return "bg-blue-400"
    default :
      return "bg-blue-400"
  }
}

export default function Notification({
  id,
  title,
  message,
  type,
  duration,
  onClose
}: NotificationProps) {
  return (
    <>
      <div className="bg-blue-300 flex flex-col gap-2.5 rounded-lg">
        {/* header */}
        <div className={`flex justify-end h-1/6 w-full ${NotificationTypeBanner({ type })} rounded-t-lg`}>
          <p className="mr-1.5" onClick={onClose}>X</p>
        </div>
        <div className="pb-3 pl-3 pr-3">
          {/* title */}
          <div className="">
            <h1 className="text-md">{title}</h1>
          </div>
          {/* texte */}
          <div>
            <p className="text-xs">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
