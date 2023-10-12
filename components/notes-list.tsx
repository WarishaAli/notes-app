import NotesItem from "./notes-item";

const NotesArray = [
  {
    title: "Some Note",
    note: "here is my sample note. hope you lke it",
    id: "4",
    date: "",
    color: "",
    label: "",
  },
  {
    title: "Todos 2023",
    note: "Fix portfolio website, Upload some sample projects on github, Learn tailwind ,Learn jest or other unit tests",
    id: "4",
    date: "",
    color: "",
    label: "",
  },
  {
    title: "Todos 2023",
    note: "Fix portfolio website, Upload some sample projects on github, Learn tailwind ,Learn jest or other unit tests",
    id: "4",
    date: "",
    color: "",
    label: "",
  },
];

const NotesList = (props: { data: Array<any> }) => {
  const { data } = props;
  return (
    <div className="flex px-5 py-5 flex-wrap gap-2">
      {NotesArray.map((note) => (
        <NotesItem key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;
