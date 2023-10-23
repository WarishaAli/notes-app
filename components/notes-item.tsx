import { deleteNotes } from "@/pages/api/notes";
import { useAuth } from "@/context/AuthContext";
import RefreshNotesContext from "@/context/RefreshNotesContext";
import { useState, useContext, useEffect, useRef } from "react";
import LoadingSpinner from "./loading-spinner";
import Modal from "./modal";
import ViewAndEditNotes from "./view-edit-notes";

export type NoteProps = {
  title: string;
  notes: string;
  id: string;
  color: string;
  label: string;
  createdAt: string;
};

const NotesItem = (props: NoteProps) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const onRefreshData = useContext(RefreshNotesContext);
  const ref = useRef<null | HTMLDivElement>(null);

  const toggleNotesPreview = (show: boolean) => () => setShowNotes(show);

  const toggleMenu = (show: boolean) => () => setShowMenu(show);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleMenu(false)();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const onDeleteNote = async () => {
    setLoading(true);
    await deleteNotes(props.id, user.uid);
    onRefreshData();
    setLoading(false);
  };

  return (
    <>
      <div className="relative group bg-white rounded gap-x-5 px-4 py-3 border border-slate-200 cursor-pointer">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs text-indigo-300">
            {new Date(props.createdAt).toDateString()}
          </p>
          <button
            className="opacity-0 group-hover:opacity-100"
            onClick={toggleMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          {showMenu && (
            <div
              ref={ref}
              className="absolute py-2 px-2 -right-0 top-2 z-10 mt-5 rounded bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <ul>
                <li>
                  <button
                    className="hover:bg-indigo-100 rounded px-4 py-1"
                    onClick={onDeleteNote}
                  >
                    <p className="text-xs text-left">Delete note</p>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <h6 className="mb-2" onClick={toggleNotesPreview(true)}>
          {props.title}
        </h6>
        <p className="text-sm" onClick={toggleNotesPreview(true)}>
          {props.notes}
        </p>
      </div>
      {loading && <LoadingSpinner />}
      <Modal title="" visible={showNotes}>
        <ViewAndEditNotes {...props} onClose={toggleNotesPreview(false)} />
      </Modal>
    </>
  );
};

export default NotesItem;
