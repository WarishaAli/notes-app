import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "@/node_modules/next/head";
import Navbar from "@/components/navbar";
import AddNote from "@/components/add-notes";
import NotesList from "@/components/notes-list";
import Auth from "@/components/auth";
import useAuth from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      {isLoggedIn ? (
        <>
          <Navbar />
          <AddNote />
          <NotesList />{" "}
        </>
      ) : (
        <Auth />
      )}
    </main>
  );
}
