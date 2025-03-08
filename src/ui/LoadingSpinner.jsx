function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center text-white">
      <span
        className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></span>
    </div>
  );
}

export default LoadingSpinner;
