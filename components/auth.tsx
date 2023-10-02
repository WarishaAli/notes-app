// import useAuth from "@/hooks/useAuth";
import { auth } from "../firebase/index";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
//   const { isLoggedIn, user } = useAuth();

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[url('https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg?w=900&t=st=1696265065~exp=1696265665~hmac=30c5f6253759a9ddb015b4110e757723b8806544d1ce88a97da31726659ac2b6')] bg-no-repeat bg-cover">
      <h1 className="text-3xl font-black text-indigo-800">Notes App</h1>
      <h1 className="text-xl font-mono text-indigo-900">
        Simple & Quick Note Taking
      </h1>
      <br />
      <button
        className="bg-slate-100 px-4 py-2 rounded-lg mt-3 font-semibold text-sm text-indigo-800 shadow-lg hover:bg-indigo-100 hover:text-indigo-900"
        onClick={handleAuth}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;
