import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "@/node_modules/next/head";
import Navbar from "@/components/navbar";
import AddNote from "@/components/add-notes";
import NotesList from "@/components/notes-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar />
      <AddNote />
      <NotesList/>
    </main>
  );
}
