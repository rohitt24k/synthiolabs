import { LayoutGrid, MessageCircle, NotebookText, Wand2 } from "lucide-react";
import GradientBorderBox from "./GradientBorderBox ";

function Header() {
  return (
    <div className=" flex justify-between items-center py-3 px-8 ">
      <div>
        <img src="/images/logo.svg" className=" h-8 " />
      </div>
      <nav>
        <div
          className="flex items-center justify-center gap-2 p-2 w-full h-[52px]
                 bg-white/80 border-2 border-white shadow-[-1px_3px_7px_rgba(0,0,0,0.1),inset_-1px_3px_7px_rgba(0,0,0,0.02)]
                 backdrop-blur-[10px] rounded-full"
        >
          {/* Dashboard */}
          <button className="flex items-center justify-center gap-2 px-3 py-1">
            <LayoutGrid className="w-4 h-4 text-[#93A1B8]" />
            <span className="text-[#93A1B8] font-medium text-sm">
              Dashboard
            </span>
          </button>

          {/* Insights */}
          <button className="flex items-center justify-center gap-2 px-3 py-1">
            <Wand2 className="w-4 h-4 text-[#93A1B8]" />
            <span className="text-[#93A1B8] font-medium text-sm">Insights</span>
          </button>

          {/* Transcript */}
          <button className="flex items-center justify-center gap-2 px-3 py-1">
            <NotebookText className="w-4 h-4 text-[#93A1B8]" />
            <span className="text-[#93A1B8] font-normal text-sm">
              Transcript
            </span>
          </button>

          {/* Chat (active) */}
          <GradientBorderBox
            gradient="linear-gradient(180deg, #013BDB 0%, #77C0FF 100%)"
            borderWidth={1}
            borderRadius={999}
            className="relative flex items-center justify-center gap-2 px-5 py-3 h-9 w-[116px] rounded-full
                   bg-gradient-to-b from-[#013BDB] to-[#2C62F7]
                   shadow-[-1px_1px_3px_rgba(1,59,219,0.4),-2px_2px_3px_rgba(1,32,60,0.34),inset_0px_1px_9px_2px_rgba(210,234,255,0.3)]"
            style={{
              background:
                "url('/images/background-dirt.png') center/300px 300px no-repeat, linear-gradient(180deg, #013BDB 0%, #2C62F7 100%)",
            }}
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-normal">Chat</span>
          </GradientBorderBox>
        </div>
      </nav>
      <div className=" opacity-0 ">
        <img src="/images/logo.svg" className=" h-8 " />
      </div>
    </div>
  );
}

export default Header;
