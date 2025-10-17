import type { IChatMessage } from "@/types/input";
import { create } from "zustand";

export interface ChatItem {
  id: string;
  name: string;
  message: string;
  specification: string;
  image: string;
  messages: IChatMessage[];
}

interface ChatStore {
  chats: ChatItem[];
  currentChatId?: string;
  addChat: (name: string, message: string, image?: string) => void;
  addMessage: (chatId: string, message: IChatMessage) => void;
  changeCurrentChat: (chatId: string) => void;
  likeOrDislikeMessage: (
    chatId: string,
    messageId: string,
    action: "like" | "dislike"
  ) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [
    {
      id: "1",
      name: "Dr. Emily Chen",
      specification: "Clinical Research Specialist",
      message:
        "What roles do regulatory affairs specialists play in drug approval?",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      messages: [],
    },
    {
      id: "2",
      name: "Sarah Patel",
      specification: "Pharmacovigilance Officer",
      message: "How do clinical research associates contribute to trials?",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      messages: [],
    },
  ],

  addChat: (name, message, image) =>
    set((state) => ({
      chats: [
        ...state.chats,
        {
          id: Date.now().toString(),
          name,
          message,
          specification: "Medical Professional",
          image:
            image ||
            `https://randomuser.me/api/portraits/${
              Math.random() > 0.5 ? "women" : "men"
            }/${Math.floor(Math.random() * 90)}.jpg`,
          messages: [],
        },
      ],
    })),
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
}));
