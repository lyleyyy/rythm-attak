"use client";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLibraryMusic } from "react-icons/md";

function SearchBar() {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function onChangHandler(e) {
    setInputValue(e.target.value);
    if (e.target.value !== "") setDeleteBtn(true);
    else setDeleteBtn(false);
  }

  function onClickHandler(e) {
    e.preventDefault();
    setInputValue("");
    setDeleteBtn(false);
    inputRef.current.focus();
  }

  return (
    <form className="ml-36 flex items-center justify-center rounded-lg bg-zinc-800">
      <div className="flex items-center justify-center p-2 text-3xl">
        <IoSearch />
      </div>
      <input
        placeholder="Search songs..."
        className="h-10 w-80 bg-zinc-800 p-1 focus:outline-none"
        onChange={onChangHandler}
        value={inputValue}
        ref={inputRef}
      />
      <button
        className="flex items-center justify-center p-2 text-3xl"
        onClick={onClickHandler}
      >
        {deleteBtn ? <RxCross2 /> : <MdOutlineLibraryMusic />}
      </button>
    </form>
  );
}

export default SearchBar;
