import { useChatStore } from "@/store/useChatStore";
import { Phone, Video } from "lucide-react";
import NewChatheader from "./NewChatHeader";

function Chat({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex-1 h-full w-full relative flex flex-col items-center bg-white rounded-[20px] overflow-hidden">
      {children}
    </div>
  );
}

function ChatHeader() {
  const { currentChatId, chats } = useChatStore();
  const currentChat = chats.find((chat) => chat.id === currentChatId);
  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-[#EEEEEE] rounded-t-[20px]">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-[#EBF0FF] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              currentChat?.image || "/images/doctor-placeholder.jpg"
            })`,
          }}
        ></div>
        <div className="flex flex-col">
          <h3 className="text-[#1C274C] text-[16px] font-medium leading-[24px]">
            {currentChat?.name || "Dr. Jane Smith"}
          </h3>
          <p className="text-[#93A1B8] text-[14px] leading-[20px]">
            {currentChat?.specification || "Cardiologist"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex justify-center items-center w-10 h-10 rounded-full border border-[#EEEEEE] bg-white">
          <Video className="w-4 h-4 text-[#16191D]" />
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-full border border-[#EEEEEE] bg-white">
          <Phone className="w-4 h-4 text-[#16191D]" />
        </button>
      </div>
    </div>
  );
}

function ChatContent({
  children,
  className = "",
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div
      className={`flex-1 h-full px-8 py-9 overflow-auto ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
}

Chat.Header = ChatHeader;
Chat.Content = ChatContent;
Chat.NewChatHeader = NewChatheader;

export default Chat;
