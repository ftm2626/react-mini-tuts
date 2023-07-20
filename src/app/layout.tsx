import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React mini tutorials",
  description: "This is a personal mini tutorial document.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
