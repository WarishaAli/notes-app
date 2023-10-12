import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "@/node_modules/next/head";
import Navbar from "@/components/navbar";
import AddNote from "@/components/add-notes";
import NotesList from "@/components/notes-list";
import Auth from "@/components/auth";
import { getNotes } from "@/api/notes";
import { auth } from "@/firebase/index";
import nookies from "nookies";
import { firebaseAdmin } from "@/firebase/admin";
import { useAuth } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

type HomePageProps = {
  data: Array<any>;
};

export default function Home(props: HomePageProps) {
  const { user } = useAuth();

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      {user ? (
        <>
          <Navbar />
          <AddNote />
          <NotesList data={props.data} />{" "}
        </>
      ) : (
        <Auth />
      )}
    </main>
  );
}
export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    console.log("cookies >>>>>", cookies);

    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid } = token;
    const data = await getNotes(uid);
    if (!data) return { notFound: true };
    return { props: { data } };
  } catch (e) {
    console.log("error", e);
    return { props: { data: null } };
  }
};
