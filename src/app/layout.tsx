import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "yet-another-react-lightbox/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import "@/assets/css/combined.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Heater Service Melbourne | Professional Heating & Hydronic Services",
  description:
    "Expert heating services in Melbourne. Specializing in Hydronic Heating, Gas Ducted Heating, and Split Systems in Clayton South. 24/7 Emergency heating repairs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <ContextProvider>
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
