import { useState } from "react";
import Modal from "./modal";
import ViewAndEditNotes from "./view-edit-notes";

export type NoteProps = {
  title: string;
  note: string;
  id: string;
  date: string;
  color: string;
  label: string;
};

const NotesItem = (props: NoteProps) => {
  const [showNotes, setShowNotes] = useState(false);
  const toggleNotesPreview = (show: boolean) => () => setShowNotes(show);
  return (
    <>
      <div
        onClick={toggleNotesPreview(true)}
        className="bg-white rounded px-4 py-3 border border-slate-200 cursor-pointer"
      >
        <h6 className="font-semibold mb-2 text-slate-400">{props.title}</h6>
        <p className="text-sm">{props.note}</p>
      </div>
      <Modal title="" visible={showNotes}>
        <ViewAndEditNotes {...props} onClose={toggleNotesPreview(false)} />
      </Modal>
    </>
  );
};

export default NotesItem;
