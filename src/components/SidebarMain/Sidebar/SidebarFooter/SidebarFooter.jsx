import { GrLanguage } from "react-icons/gr";
import Link from "next/link";
import BorderedButton from "@/ui/BorderedButton";

function SidebarFooter() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex gap-6 text-sm text-zinc-400">
        <Link href="#" target="_blank">
          Legal
        </Link>
        <Link href="#" target="_blank">
          Safety & Privacy
        </Link>
        <Link href="#" target="_blank">
          Cookies
        </Link>
        <Link href="#" target="_blank">
          Privacy Policy
        </Link>
      </div>
      <span className="mb-4 text-sm text-zinc-400">
        © 2024 RythmAttak Inc. All Rights Reserved.
      </span>
      <BorderedButton>
        <span className="flex items-center justify-center gap-2">
          <GrLanguage />
          <span>English (EU)</span>
        </span>
      </BorderedButton>
    </div>
  );
}

export default SidebarFooter;
