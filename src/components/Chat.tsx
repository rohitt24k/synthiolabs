import { useChatStore } from "@/store/useChatStore";
import { Phone, Video } from "lucide-react";
import NewChatheader from "./NewChatHeader";
import { doctors } from "@/data/doctors";
import type { DoctorInfo } from "@/types/input";
import GroupVideoCall from "./GroupVideoCall";
import VideoCallFrame from "./VideoCallFrame";
import { useCallStore } from "@/store/useCallStore";

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
  const type = currentChat?.type;
  let doctorsInfo: DoctorInfo[] = [];
  const { startCall } = useCallStore();
  if (currentChat) {
    doctorsInfo = currentChat.members
      .map((memberId) => doctors.find((doc) => doc.id === memberId))
      .filter((doc): doc is DoctorInfo => doc !== undefined);
  }

  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-[#EEEEEE] rounded-t-[20px]">
      {type === "individual" && (
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full bg-[#EBF0FF] bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                doctorsInfo[0]?.image || "/images/doctor-placeholder.jpg"
              })`,
            }}
          ></div>
          <div className="flex flex-col">
            <h3 className="text-[#1C274C] text-[16px] font-medium leading-[24px]">
              {doctorsInfo[0]?.name || "Dr. Jane Smith"}
            </h3>
            <p className="text-[#93A1B8] text-[14px] leading-[20px]">
              {doctorsInfo[0]?.specialization || "Cardiologist"}
            </p>
          </div>
        </div>
      )}
      {type === "group" && (
        <div className="flex items-center gap-2 line-clamp-1">
          {doctorsInfo.map((doc) => (
            <div key={doc.id} className="">
              {doc.name}
              {doc.id !== doctorsInfo[doctorsInfo.length - 1].id && ","}
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3">
        <button
          className="flex justify-center items-center w-10 h-10 rounded-full border border-stroke-01 bg-white"
          onClick={() => startCall()}
        >
          <Video className="w-4 h-4 text-[#16191D]" />
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-full border border-stroke-01 bg-white">
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
  ref?: React.RefObject<HTMLDivElement | null>;
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

Chat.ShowChatHeader = function ShowNewChatHeader() {
  const { currentChatId } = useChatStore();
  return !currentChatId ? <Chat.NewChatHeader /> : <Chat.Header />;
};

Chat.VideoCallFrame = function ChatVideoCallFrame() {
  const { currentChatId, chats } = useChatStore();
  const chat = chats.find((chat) => chat.id === currentChatId);
  console.log("Current Chat in VideoCallFrame:", chat);
  if (!chat) return null;
  return chat.type === "group" ? <GroupVideoCall /> : <VideoCallFrame />;
};

export default Chat;
