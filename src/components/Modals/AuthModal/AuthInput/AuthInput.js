function AuthInput({ label, error, ...props }) {
  return (
    <div className="w-72 space-y-2">
      <label>{label}</label>
      <input
        className="h-12 w-72 rounded border border-zinc-600 bg-black p-2 outline-none focus:border-white"
        {...props}
      />
      {error && <span className="w-72 text-red-500">{error.message}</span>}
    </div>
  );
}

export default AuthInput;
