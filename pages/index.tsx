import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AddNote from "@/components/add-notes";
import NotesList from "@/components/notes-list";
import Auth from "@/components/auth";
import { getNotes } from "@/pages/api/notes";
import nookies from "nookies";
import { firebaseAdmin } from "@/firebase/admin";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import RefreshNotesContext from "@/context/RefreshNotesContext";

const inter = Inter({ subsets: ["latin"] });

type HomePageProps = {
  data: Array<any>;
  error: any;
};

export default function Home(props: HomePageProps) {
  const { user } = useAuth();
  const router = useRouter();

  const refreshNotesList = () => {
    router.replace(router.asPath);
  };

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      {user ? (
        <>
          <RefreshNotesContext.Provider value={refreshNotesList}>
            <Navbar />
            <AddNote />
            <NotesList data={props.data} />
          </RefreshNotesContext.Provider>
        </>
      ) : (
        <Auth loading={user === undefined} />
      )}
    </main>
  );
}
export const getServerSideProps = async (ctx: any) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid } = token;
    const data = await getNotes(uid);
    if (!data) return { props: { data: [], error: null } };
    return { props: { data, error: null } };
  } catch (e: any) {
    console.log("error", e);
    return { props: { data: null, error: e?.code } };
  }
};
