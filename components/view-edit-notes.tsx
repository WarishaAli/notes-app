import Modal from "./modal";
import { NoteProps } from "./notes-item";

export interface IPreviewNotes {
  onClose: () => void;
}

type PreviewNotesProps = NoteProps & IPreviewNotes;

const ViewAndEditNotes = (props: PreviewNotesProps) => {
  return (
    <div className="flex flex-col justify-stretch	items-stretch w-full">
      {/* title */}
      <input
        defaultValue={props.title}
        placeholder="Title"
        className="outline-0 text-md semibold"
      />

      {/* note */}
      <textarea
        defaultValue={props.note}
        aria-multiline
        placeholder="Take a note"
        className="py-3 outline-0 text-sm max-w-screen h-full"
      />

      <div className="flex flex-row bg-blue items-center justify-end my-4 relative">
        <button className="px-3 py-1 rounded-md hover:bg-indigo-100 text-indigo-800 text-sm">
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
