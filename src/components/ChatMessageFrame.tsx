import { useEffect, useRef } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import type { IInputItem } from "@/types/input";

import DoctorCard from "./DoctorCard";
import { useDoctorCardStore } from "@/store/useDoctorCard";
import { useChatStore } from "@/store/useChatStore";

const assistantReplies: {
  message: string;
}[] = [
  {
    message:
      "For patients who are NPO (nothing by mouth) prior to a procedure or may have GI prep that could impact absorption, there isn’t a specific adjustment required for Zepzelca, since it’s administered as an intravenous infusion...",
  },
  {
    message:
      "Clinical research associates (CRAs) play a crucial role in managing clinical trials. They monitor trial sites to ensure compliance with protocols, verify data accuracy, and ensure patient safety throughout the study.",
  },
  {
    message:
      "Regulatory affairs specialists ensure compliance with drug approval requirements, prepare documentation, and communicate with health authorities.",
  },
  {
    message:
      "Zepzelca (lurbinectedin) is primarily metabolized by the liver enzyme CYP3A4. Therefore, co-administration with strong CYP3A4 inhibitors or inducers can significantly affect Zepzelca plasma levels.",
  },
  {
    message:
      "CRAs are responsible for site selection, initiation visits, monitoring visits, and close-out visits, ensuring that trials are conducted according to Good Clinical Practice (GCP) guidelines.",
  },
  {
    message:
      "Regulatory affairs specialists play a key role in preparing and submitting regulatory documents, ensuring that all aspects of drug development comply with relevant laws and guidelines.",
  },
  {
    message:
      "When Zepzelca is administered with strong CYP3A4 inhibitors, there is a risk of increased plasma concentrations of Zepzelca, which may lead to enhanced toxicity. Conversely, strong CYP3A4 inducers may decrease Zepzelca levels, potentially reducing its efficacy.",
  },
];

function ChatMessageFrame() {
  const chatInputBoxRef = useRef<HTMLInputElement>(null);
  const chatContentRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const {
    currentChatId,
    chats,
    addMessage,
    addChat,
    currentRecipients,
    changeCurrentChat,
    setCurrentRecipients,
  } = useChatStore();
  let currentChat = chats.find((chat) => chat.id === currentChatId);
  const currentMessages = currentChat?.messages || [];
  let type = currentChat?.type;
  const { selectedDoctorId, clearSelection } = useDoctorCardStore();

  const onSend = (message: IInputItem) => {
    if (!addMessage) return;
    let chatId = currentChatId;
    if (!chatId && currentMessages.length === 0) {
      if (!currentRecipients || currentRecipients.length === 0) {
        console.log("No recipients");
        return;
      }
      const memberIds = currentRecipients.map((r) => r.id);
      const newChat = addChat(
        memberIds.length === 1 ? "individual" : "group",
        memberIds
      );

      changeCurrentChat(newChat.id);
      chatId = newChat.id;
      type = memberIds.length === 1 ? "individual" : "group";
      currentChat = newChat;
      setCurrentRecipients([]);
    }

    if (!chatId || !currentChat) return;

    addMessage(chatId, {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      senderId: "0",
      message,
      liked: false,
      disliked: false,
    });
    const assistantReply: IInputItem = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type: "text",
      content:
        assistantReplies[Math.floor(Math.random() * assistantReplies.length)]
          .message,
    };
    addMessage(chatId, {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      senderId:
        type === "individual"
          ? currentChat.members[0]
          : currentChat.members[
              Math.floor(Math.random() * currentChat.members.length)
            ],
      message: assistantReply,
      liked: false,
      disliked: false,
    });
  };

  const handleCloseDoctorCard = () => {
    clearSelection();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages.length]);

  return (
    <Chat.Content className=" flex flex-col w-full " ref={chatContentRef}>
      <div className=" relative flex-1 flex flex-col gap-2.5 ">
        {[...currentMessages].map((chat, index) => (
          <ChatMessage key={index} {...chat} currentChatId={currentChatId!} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div
        className=" sticky bottom-0 left-0 -mx-2 translate-y-3 "
        ref={chatInputBoxRef}
      >
        <div className=" absolute top-0 -left-6 inset-0 w-[calc(100%+48px)] h-[calc(100%+24px)] bg-white " />
        <div className=" w-full relative z-[1] ">
          <ChatInput
            onSend={onSend}
            isDisabled={!currentChatId && !currentRecipients.length}
          />
        </div>
      </div>
      {selectedDoctorId && (
        <div className=" absolute top-3 right-3 max-w-full pl-6 ">
          <DoctorCard onClose={() => handleCloseDoctorCard()} />
        </div>
      )}
    </Chat.Content>
  );
}

export default ChatMessageFrame;
