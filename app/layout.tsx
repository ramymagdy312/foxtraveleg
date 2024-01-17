"use client";

import Providers from "@/src/providers/Providers";
import "@/src/styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Fox Travel",
//   description: "Powered by RTS",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    AOS.init({
      offset: -50,
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      //@ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <MainHeader /> */}
          {children}
          {/* <MainFooter /> */}
        </Providers>
      </body>
    </html>
  );
}
