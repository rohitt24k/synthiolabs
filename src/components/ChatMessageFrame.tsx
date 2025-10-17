import { useRef } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const chats: {
  role: "user" | "assistant";
  message: string;
}[] = [
  {
    role: "assistant",
    message:
      "For patients who are NPO (nothing by mouth) prior to a procedure or may have GI prep that could impact absorption, there isn’t a specific adjustment required for Zepzelca, since it’s administered as an intravenous infusion...",
  },
  {
    role: "user",
    message:
      "What roles do regulatory affairs specialists play in drug approval?",
  },
  {
    role: "assistant",
    message:
      "Regulatory affairs specialists ensure compliance with drug approval requirements, prepare documentation, and communicate with health authorities.",
  },
];

function ChatMessageFrame() {
  const chatInputBoxRef = useRef<HTMLInputElement>(null);
  const chatContentRef = useRef<HTMLInputElement>(null);

  return (
    <Chat.Content className=" flex flex-col w-full " ref={chatContentRef}>
      <div className=" relative flex-1 flex flex-col gap-2.5 ">
        {[...chats, ...chats, ...chats].map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
      </div>
      <div
        className=" sticky bottom-0 left-0 -mx-2 translate-y-3 "
        ref={chatInputBoxRef}
      >
        <div className=" absolute top-0 -left-6 inset-0 w-[calc(100%+48px)] h-[calc(100%+24px)] bg-white " />
        <div className=" w-full relative z-[1] ">
          <ChatInput />
        </div>
      </div>
    </Chat.Content>
  );
}

export default ChatMessageFrame;
