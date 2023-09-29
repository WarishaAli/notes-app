import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchIcon from "../public/icons/search-icon.svg";

const AddNote = () => {
    const [isEditing, setEditing] = useState(false)
    const ref = useRef<null|HTMLDivElement>(null);


   const onClickOutside = useCallback(() => setEditing(false), []
   )

    useEffect(() => {
        const handleClickOutside = (event:any) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ onClickOutside ]);
    
    return <div 
    className="flex items-center justify-center mt-5 px-10"   
    >
       {isEditing ? <div 
       ref={ref}
       className="flex flex-col grow rounded-lg shadow-lg bg-white px-5"
       >
        <input
        placeholder="Title"
        className="flex grow py-3 outline-0 rounded-full text-md"

        
        ></input>
        <input
        placeholder="Take a note"
        className="flex grow py-3 outline-0 rounded-full text-sm"
        
        ></input>
        <div>
            <button onClick={() => setEditing(false)}>Close</button>
        </div>
       </div> :  <div className="flex grow rounded-lg shadow-lg bg-white px-5">
        <input
        placeholder="Take a note"
        className="flex grow py-3 outline-0 rounded-full"
        onFocus={() => setEditing(true)}
        />
        <Image src={SearchIcon} alt={"edit"}/>
        </div>}
        
    </div>
};

export default AddNote