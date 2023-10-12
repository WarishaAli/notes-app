import { db } from "../firebase/index";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
} from "firebase/firestore";

/* the data is stored in the firestore as follows:
  data
    notes (collection)
      user1 (document)
        notesList (sub collection)
          notes-1 (document)
              title: "Some Note",
              note: "here is my sample note. hope you lke it",
              id: "4",
              date: "",
              color: "",
              label: "",
          notes-2 (document)
            title: "Some Note",
              note: "here is my sample note. hope you lke it",
              id: "4",
              date: "",
              color: "",
              label: "",
*/

// const notesRef = collection(db, "notes")

const getNotes = async (userId: string) => {
  try {
    const notesData = doc(db, "notes", userId, "notesList");
    console.log({notesData})
    return notesData
  } catch(e){
    console.log("error in getNotes >", e)
    return null
  }
}

const addNotes = async ({ userId, title, notes, }) => {
  try {
    await addDoc(collection(db, "notes", userId, "notesList"), {
      user: userId,
      title: title,
      notes: notes,
      label: "",
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    console.log("error in add notes >>>", err)
  }
};

const editNotes = async (note, userId) => {
  const {id, notes, title, label} = note
    try {
      const noteToEditRef = doc(db, "notes", userId, "notesList", id)
        await updateDoc(noteToEditRef, {
          title, notes, label

        })
    } catch(e) {
      console.log("error in editNotes", e)
    }
}

const deleteNotes = async (docId, userId) => {
  try {
    const noteRef = doc(db, "notes", userId, "notesList", docId);
    await deleteDoc(noteRef);
  } catch (err) {
    console.log(err);
  }
};

export { getNotes, addNotes, deleteNotes, editNotes };