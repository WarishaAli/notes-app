type Props = {
  title: string;
  note: string;
  id: string;
  date: string;
  color: string;
  label: string;
};

const NotesItem = (props: Props) => {
  return (
    <div className="bg-white rounded px-4 py-3 border border-slate-200">
      <h6 className="font-semibold mb-2 text-slate-400">{props.title}</h6>
      <p className="text-sm">{props.note}</p>
    </div>
  );
};

export default NotesItem;
