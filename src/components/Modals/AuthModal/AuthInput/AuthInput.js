import capitalizeEachWord from "@/helper/capitalizeEachWord";

function AuthInput({ name, type, error, ...props }) {
  return (
    <div className="w-72 space-y-2">
      <label>{capitalizeEachWord(name)}</label>
      <input
        className="h-12 w-72 rounded border border-zinc-600 bg-black p-2 outline-none focus:border-white"
        {...props}
        placeholder={name === "email" ? "name@domain.com" : ""}
        name={name}
        type={type}
      />
      {error && <span className="w-72 text-red-500">{error.message}</span>}
    </div>
  );
}

export default AuthInput;
