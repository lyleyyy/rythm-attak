"use client";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLibraryMusic } from "react-icons/md";
import IconButton from "@/ui/IconButton";
import { searchTracks } from "@/services/apiTracks";

function SearchBar() {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  async function onChangHandler(e) {
    setInputValue(e.target.value);
    // console.log(e.target.value);

    if (e.target.value !== "") setDeleteBtn(true);
    else setDeleteBtn(false);

    if (e.target.value.length > 2) await searchTracks(e.target.value);
  }

  function onClickHandler(e) {
    e.preventDefault();
    setInputValue("");
    setDeleteBtn(false);
    inputRef.current.focus();
  }

  return (
    <form className="flex w-1/4 items-center justify-between rounded-lg bg-zinc-800 px-2">
      <span className="flex items-center justify-center py-2 text-3xl">
        <IoSearch />
      </span>
      <input
        placeholder="Search songs..."
        className="h-10 w-80 bg-zinc-800 p-1 focus:outline-none"
        onChange={onChangHandler}
        value={inputValue}
        ref={inputRef}
      />
      <IconButton iconSize="text-3xl" onClick={onClickHandler}>
        {deleteBtn ? <RxCross2 /> : <MdOutlineLibraryMusic />}
      </IconButton>
    </form>
  );
}

export default SearchBar;
