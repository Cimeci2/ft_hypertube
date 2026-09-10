import type { Metadata } from "next";
import NotificationProvider from "@/components/notification/NotificationProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "LostMedia",
  description: "Stream anything lost on internet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <NotificationProvider>
        <Header/>
        {children}
      </NotificationProvider>
  );
}
