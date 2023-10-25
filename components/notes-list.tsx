import NoData from "./no-data";
import NotesItem from "./notes-item";

const NotesList = (props: { data: Array<any> }) => {
  const { data } = props;
  return (
    <div className="flex px-5 py-5 flex-wrap gap-2">
      {data && data.length > 0 ? (
        data.map((note) => <NotesItem key={note.id} {...note} />)
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default NotesList;
