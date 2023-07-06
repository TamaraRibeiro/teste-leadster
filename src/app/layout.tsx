
import { Plus_Jakarta_Sans }  from "next/font/google";
import '../styles/global.css'


const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: "Leadster",
  description: "Teste Leadster vaga Desenvolvedor Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={plus_jakarta.className}>{children}</body>
    </html>
  );
}
