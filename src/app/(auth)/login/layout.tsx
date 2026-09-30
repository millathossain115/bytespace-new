import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Log in to ByteSpace to access your courses, track learning progress, and connect with creators.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
