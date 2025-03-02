import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {CommonLayout} from "@commonLayout/commonLayout.jsx"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CommonLayout>
        {children}
        </CommonLayout>
        <script src="https://console.authkey.io/js/main.js" id="authkey-chat-widget" widget-id="50595f9b-feec-472d-bcc0-f19d788740f8"></script>
      </body>
    </html>
  );
}
