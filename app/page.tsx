import Image from "next/image";
import LogoutButton from "@/components/LogoutButton"
import NotificationModal from "@/components/notification/Notification"

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center text-center items-center">
        hello
      </div>
      <div className="flex justify-center">
        <LogoutButton className="w-1/2" toggleOnHover={{hoverDelay: 1000}} >logout</LogoutButton>
      </div>

    </>
  );
}
