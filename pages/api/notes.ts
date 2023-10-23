import { db } from "@/firebase/index";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { NoteProps } from "@/components/notes-item";

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
    let data:Array<DocumentData>=[]
    let notesData = await getDocs(collection(db, "notes", `${userId}/notesList`));
    // console.log({notesData})
    notesData.forEach((doc) =>{ 
      // console.log(doc.id)
      data.push( JSON.parse( JSON.stringify( {...doc.data(), id : doc.id})));
    
    })
    console.log({data})
    return data
  } catch(e){
    console.log("error in getNotes >", e)
    return null
  }
}

const addNotes = async ({ userId, title, notes, label }: {userId: string, title: string, notes: string, label: string}) => {
  try {
    const addDocResult = await addDoc(collection(db, "notes", userId, "notesList"), {
      // user: userId,
      title: title,
      notes: notes,
      label: label,
      createdAt: new Date().toISOString(),
    });
    // console.log({addDocResult})
    return addDocResult
  } catch (err) {
    console.log("error in add notes >>>", err)
    return err
  }
};

const editNotes = async (note: NoteProps, userId: string) => {
  const {id, notes, title, label} = note
    try {
      const noteToEditRef = doc(db, "notes", userId, "notesList", id)
        const result = await updateDoc(noteToEditRef, {
          title, notes, label
        })
        console.log("edit result >>>>>>", result)
    } catch(e) {
      console.log("error in editNotes", e)
    }
}

const deleteNotes = async (noteId: string, userId: string) => {
  try {
    const noteRef = doc(db, "notes", userId, "notesList", noteId);
    await deleteDoc(noteRef);
  } catch (err) {
    console.log(err);
  }
};

export { getNotes, addNotes, deleteNotes, editNotes };