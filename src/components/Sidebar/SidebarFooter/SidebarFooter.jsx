import Button from "@/ui/Button";
import Link from "next/link";
import { GrLanguage } from "react-icons/gr";

function SidebarFooter() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex gap-6 text-sm text-zinc-500">
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
      <span className="mb-4 text-sm text-zinc-500">
        © 2024 RythmAttak Inc. All Rights Reserved.
      </span>
      <Button bgColor="bg-black" borderWidth={true} isHover={true}>
        <div className="flex items-center justify-center gap-2">
          <GrLanguage />
          <span>English (EU)</span>
        </div>
      </Button>
    </div>
  );
}

export default SidebarFooter;
