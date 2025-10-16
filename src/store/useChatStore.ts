import { create } from "zustand";

export interface ChatItem {
  id: string;
  name: string;
  message: string;
  image: string;
}

interface ChatStore {
  chats: ChatItem[];
  addChat: (name: string, message: string, image?: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [
    {
      id: "1",
      name: "Dr. Emily Chen",
      message:
        "What roles do regulatory affairs specialists play in drug approval?",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "2",
      name: "Sarah Patel",
      message: "How do clinical research associates contribute to trials?",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
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
          image:
            image ||
            `https://randomuser.me/api/portraits/${
              Math.random() > 0.5 ? "women" : "men"
            }/${Math.floor(Math.random() * 90)}.jpg`,
        },
      ],
    })),
}));
