import type { DoctorInfo, IChatMessage } from "@/types/input";
import { create } from "zustand";

export interface ChatItem {
  id: string;
  type: "individual" | "group";
  members: string[];
  messages: IChatMessage[];
}

interface ChatStore {
  chats: ChatItem[];
  currentChatId?: string;
  currentRecipients?: DoctorInfo[];
  addChat: (type: "individual" | "group", members: string[]) => string;
  addMessage: (chatId: string, message: IChatMessage) => void;
  changeCurrentChat: (chatId: string) => void;
  likeOrDislikeMessage: (
    chatId: string,
    messageId: string,
    action: "like" | "dislike"
  ) => void;
  setCurrentRecipients: (recipients: DoctorInfo[]) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [
    {
      id: "chat1",
      type: "individual",
      members: ["1"],
      messages: [],
    },
  ],

  addChat: (type: "individual" | "group", members: string[]): string => {
    const newChatId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    set((state) => ({
      chats: [
        ...state.chats,
        {
          id: newChatId,
          type,
          members,
          messages: [],
        },
      ],
      currentChatId: newChatId,
    }));
    return newChatId;
  },
  addMessage: (chatId, message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: chat.messages ? [...chat.messages, message] : [message],
            }
          : chat
      ),
    })),
  changeCurrentChat: (chatId) =>
    set(() => ({
      currentChatId: chatId,
    })),
  likeOrDislikeMessage: (chatId, messageId, action) =>
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id !== chatId) return chat;
        console.log("Toggling", action, "for message", messageId);
        return {
          ...chat,
          messages: chat.messages.map((msg) => {
            if (msg.id !== messageId) return msg;
            return {
              ...msg,
              liked: action === "like" ? !msg.liked : false,
              disliked: action === "dislike" ? !msg.disliked : false,
            };
          }),
        };
      }),
    })),
  setCurrentRecipients: (recipients) =>
    set(() => ({
      currentRecipients: recipients,
    })),
}));
