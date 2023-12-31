const NoData = () => {
  return (
    <div className="border-2 border-indigo-200 flex justify-center items-center w-full h-1/2 p-10 rounded flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="grey"
        className="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <h5 className="text-slate-900 font-semibold text-indigo-500">No notes</h5>
      <p className="text-slate-500 text-sm">
        Once you start adding notes they will appear here
      </p>
    </div>
  );
};

export default NoData;
