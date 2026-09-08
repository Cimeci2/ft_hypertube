import type { Notification, NotificationType } from "./notification.type"

type NotificationProps = Notification & {
  onClose: () => void
}

type NotificationTypeBannerProps = {
  type: NotificationType
}

function NotificationTypeBanner({ type }: NotificationTypeBannerProps) {
  return (
    <>
      {type == "success" && (
        <div className="bg-green-700">

        </div>
      )}
      {type == "warning" && (
        <div className="bg-orange-400">
          
        </div>
      )}
      {type == "error" && (
        <div className="bg-red-500">
          
        </div>
      )}
      {type == "info" && (
        <div className="bg-blue-400">
          
        </div>
      )}
    </>
  )
}

export default function Notification({
  id,
  title,
  message,
  type,
  duration,
  onClose
}: NotificationProps) {
  console.log('logout modal')
  return (
    <>
      <div className="bg-gray-400 gap-2.5">
        {/* header */}
        <div className="bg-gray-500 flex justify-end items-center p-2">
          <NotificationTypeBanner type={type}/>
        </div>
        {/* title */}
        <div>
          <h1>{title}</h1>
        </div>
        {/* texte */}
        <div>
          <p>{message}</p>
        </div>
        {/* close */}
        <div className="bg-gray-500 flex justify-end items-center p-2">
          <p onClick={onClose}>X</p>
        </div>
      </div>
    </>
  );
}
