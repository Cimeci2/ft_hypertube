import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "LostMedia",
  description: "Stream anything lost on internet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <>
        <Header/>
        {children}
      </>
  );
}
