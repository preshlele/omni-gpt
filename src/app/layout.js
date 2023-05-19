import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from 'next/font/local'

export const meridian = localFont({
  src: [
    { path: '../fonts/FSMeridianTrial-Bold.otf'},
    { path: "../fonts/FSMeridianTrial-Medium.otf" },
    { path: "../fonts/FSMeridianTrial-Regular.otf" },
    { path: "../fonts/FSMeridianTrial-Thin.otf" },
  ],
});

export const metadata = {
  title: "OmniGPT",
  description: "Welcome to the omnigpt app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#111826]` }>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
