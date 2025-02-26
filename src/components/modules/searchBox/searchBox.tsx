import { useState } from "react";

export default function SearchBox({
  startSearching,
}: {
  startSearching: (query: string) => void;
}) {
  const [value, setValue] = useState<string>("");

  const searchingHandler = () => {
    startSearching(value.toLowerCase());
  };

  return (
    <div className="bg-lightBlue p-3 rounded-xl mt-5 md:mt-0 md:!w-96 flex justify-between items-center gap-0">
      <input
        type="text"
        className=" bg-transparent  focus:outline-none focus:shadow-none w-full"
        placeholder="Search Your City"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            searchingHandler();
          }
        }}
      />
      <button
        type="button"
        className="bg-darkBlue py-1 px-3 rounded-xl"
        onClick={() => searchingHandler()}
      >
        Search
      </button>
    </div>
  );
}
