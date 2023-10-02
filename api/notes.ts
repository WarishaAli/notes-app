import { db } from "../firebase/index";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
} from "firebase/firestore";

const notesRef = collection(db, "notes")

const addNotes = async ({ userId, title, notes, }) => {
  try {
    await addDoc(collection(db, "notes"), {
      user: userId,
      title: title,
      notes: notes,
      createdAt: new Date().getTime(),
    });
  } catch (err) {}
};

const editNotes = async () => {
    try {
      const noteToEditRef = query(notesRef, )
        await updateDoc()
    } catch(e) {

    }
}

const deleteNotes = async (docId) => {
  try {
    const noteRef = doc(db, "notes", docId);
    await deleteDoc(noteRef);
  } catch (err) {
    console.log(err);
  }
};

export { addNotes as addTodo, deleteNotes as deleteTodo };