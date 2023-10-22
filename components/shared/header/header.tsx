// import { FaHome, FaQuestionCircle } from "react-icons/fa";
// import { AiOutlineFontSize } from "react-icons/ai";
// import { LuExpand } from "react-icons/lu";
import { UserMenu } from "@/components/shared/header/UserMenu";
import { ThemeSwitch } from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  return (
    <nav
      className={cn(
        "flex w-screen fixed bg-background justify-between p-2 shadow items-center space-x-4 lg:space-x-6 px-8"
      )}
    >
      <div>
        <a
          href="/dashboard"
          className="flex items-center gap-2 text-foreground font-semibold text-lg"
        >
          {/* <FaHome size={"20px"} />  */}
          Home
        </a>
      </div>
      <div className=" flex gap-2">
        <div
          className={cn(
            "flex rounded-sm  p-1 border items-center gap-2 text-foreground"
          )}
        >
          <button className="p-2 hover:bg-muted focus:border">
            {/* <AiOutlineFontSize /> */} fontsize
          </button>
          <button className="p-2 hover:bg-muted focus:border">
            {/* <LuExpand /> */} Expand
          </button>
          <button className="p-2 hover:bg-muted focus:border">
            {/* <FaQuestionCircle /> */} ?
          </button>
        </div>
        <div className="flex items-center">
          <UserMenu />
        </div>
       
          <ThemeSwitch />

      </div>
    </nav>
  );
};
