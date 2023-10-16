import { useState } from "react";
import Modal from "./modal";
import ViewAndEditNotes from "./view-edit-notes";

export type NoteProps = {
  title: string;
  notes: string;
  id: string;
  date: string;
  color: string;
  label: string;
  createdAt: string;
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
        <p className="text-xs mb-3 font-thin">
          {new Date(props.createdAt).toDateString()}
        </p>
        <h6 className="font-semibold mb-2 text-slate-400">{props.title}</h6>
        <p className="text-sm">{props.notes}</p>
      </div>
      <Modal title="" visible={showNotes}>
        <ViewAndEditNotes {...props} onClose={toggleNotesPreview(false)} />
      </Modal>
    </>
  );
};

export default NotesItem;
