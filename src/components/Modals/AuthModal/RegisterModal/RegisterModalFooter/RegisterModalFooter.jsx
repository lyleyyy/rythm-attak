import Link from "next/link";

function RegisterModalFooter() {
  return (
    <div className="flex w-72 flex-col gap-4 text-zinc-400">
      <span>
        Already have account? Sign in{" "}
        <Link href="/" className="text-white underline">
          here
        </Link>
      </span>
      <span className="text-sm">
        This site is protected by reCAPTCHA and the Google{" "}
        <Link
          href="https://policies.google.com/privacy"
          className="underline"
          target="_blank"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="https://policies.google.com/terms"
          className="underline"
          target="_blank"
        >
          Terms of Service
        </Link>{" "}
        apply.
      </span>
    </div>
  );
}

export default RegisterModalFooter;
