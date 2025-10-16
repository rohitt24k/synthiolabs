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
  return (
    <Chat.Content className=" flex flex-col ">
      <div className=" relative flex-1 flex flex-col gap-2.5 ">
        {chats.map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
      </div>
      <ChatInput />
    </Chat.Content>
  );
}

export default ChatMessageFrame;
