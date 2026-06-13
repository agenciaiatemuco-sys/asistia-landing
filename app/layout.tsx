import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Asistia — Tu negocio se atiende solo, las 24 horas",
  description:
    "Asistente con IA para WhatsApp. Responde consultas, agenda citas y atiende clientes automáticamente. Actívalo en 10 minutos.",
  openGraph: {
    title: "Asistia — Tu negocio se atiende solo, las 24 horas",
    description:
      "Asistente con IA para WhatsApp. Responde consultas, agenda citas y atiende clientes automáticamente.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
