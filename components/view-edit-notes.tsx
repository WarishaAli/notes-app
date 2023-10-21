import { editNotes } from "@/api/notes";
import { useAuth } from "@/context/AuthContext";
import { NoteProps } from "./notes-item";
import { useState, useContext } from "react";
import LoadingSpinner from "./loading-spinner";
import RefreshNotesContext from "@/context/RefreshNotesContext";

export interface IPreviewNotes {
  onClose: () => void;
}

type PreviewNotesProps = NoteProps & IPreviewNotes;

const ViewAndEditNotes = (props: PreviewNotesProps) => {
  const { user } = useAuth();
  const [title, setTitle] = useState(props.title);
  const [notes, setNotes] = useState(props.notes);
  const [loading, setLoading] = useState(false);
  const onRefreshData = useContext(RefreshNotesContext);

  const onEditNotes = async () => {
    try {
      setLoading(true);
      const { label, createdAt, color, id } = props;
      const result = await editNotes(
        {
          notes: notes ?? props.notes,
          label,
          title: title ?? props.title,
          createdAt,
          color,
          id,
        },
        user.uid
      );
      onRefreshData();
      props.onClose();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };
  return (
    <div className="flex flex-col justify-stretch	items-stretch w-full">
      {loading && <LoadingSpinner />}
      {/* title */}
      <input
        defaultValue={props.title}
        placeholder="Title"
        className="outline-0 text-md semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* note */}
      <textarea
        defaultValue={props.notes}
        aria-multiline
        placeholder="Take a note"
        className="py-3 outline-0 text-sm max-w-screen h-full"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="flex flex-row bg-blue items-center justify-end my-4 relative">
        <button
          onClick={onEditNotes}
          className="px-3 py-1 rounded-md hover:bg-indigo-100 text-indigo-800 text-sm"
        >
          Save Changes
        </button>

        <button
          onClick={props.onClose}
          className="px-3 py-1 rounded-md hover:bg-slate-100 text-slate-800 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewAndEditNotes;
