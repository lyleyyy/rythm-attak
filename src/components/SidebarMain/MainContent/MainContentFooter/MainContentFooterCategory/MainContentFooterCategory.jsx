import Link from "next/link";

function MainContentFooterCategory({ label, list }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-bold">{label}</h3>
      {list.map((el) => (
        <Link
          href="#"
          key={el}
          className="hover: text-zinc-400 hover:text-white hover:underline"
        >
          {el}
        </Link>
      ))}
    </div>
  );
}

export default MainContentFooterCategory;
