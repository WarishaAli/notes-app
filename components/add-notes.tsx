import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import EditIcon from "../public/icons/edit-icon.png";

const AddNote = () => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const ref = useRef<null | HTMLDivElement>(null);

  const closeNotesEditor = useCallback(() => {
    setEditing(false);
    setNote("");
    setTitle("");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeNotesEditor && closeNotesEditor();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeNotesEditor]);

  return (
    <div className="flex items-center justify-center mt-5 px-5">
      {isEditing ? (
        // expanded typing area, opens up when user clicks on add note text field
        <div
          ref={ref}
          className="flex flex-col grow rounded-lg shadow-lg bg-white px-5 items-stretch"
        >
          {/* title */}
          <input
            placeholder="Title"
            className="flex grow py-3 outline-0 text-md font-semibold"
          />

          {/* note */}
          <textarea
            aria-multiline
            placeholder="Take a note"
            className="grow py-3 outline-0 text-sm max-h-screen"
          />

          {/* toolbar: add label and close buttons */}
          <div className="flex flex-row bg-blue items-center justify-end my-4 relative">
            {/* <button className="peer p-2 rounded-full hover:bg-indigo-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="grey"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            </button>
            <div className="hidden peer-hover:flex absolute top-10 bg-indigo-600 px-2 py-1 text-xs text-white rounded opacity-80">
              Add Label
            </div> */}
            <button
              className="px-3 py-1 rounded-md hover:bg-indigo-100 text-indigo-800 text-md"
              onClick={closeNotesEditor}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="flex grow items-center rounded-lg shadow-lg bg-white px-5 border">
          <input
            placeholder="Take a note"
            className="flex grow py-3 outline-0 rounded-full"
            onFocus={() => setEditing(true)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default AddNote;
