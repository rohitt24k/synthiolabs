import { useChatStore } from "@/store/useChatStore";
import type { IChatMessage } from "@/types/input";
import {
  Copy,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

interface ChatMessageProps extends IChatMessage {
  currentChatId: string;
}

function ChatMessage({
  id,
  senderId,
  message,
  liked,
  disliked,
  currentChatId,
}: ChatMessageProps) {
  const isUser = senderId === "0";
  const { likeOrDislikeMessage } = useChatStore();
  const [copied, setCopied] = useState(false);
  const handleButtonClick = (action: string) => {
    if (action === "like") {
      likeOrDislikeMessage(currentChatId, id, "like");
    } else if (action === "dislike") {
      likeOrDislikeMessage(currentChatId, id, "dislike");
    }
  };

  const handleCopy = (text: string) => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div
      className={`flex flex-col ${isUser ? "items-end" : "items-start"} w-full`}
    >
      {/* Message Bubble */}
      <div
        className={` rounded-[20px] p-3 text-[16px] leading-[24px] flex flex-col items-end gap-1 ${
          isUser
            ? "bg-[#4B7BFF] text-white rounded-tr-[0px]"
            : "bg-[#F6F6F6] text-[#16191D] rounded-tl-[0px]"
        }`}
      >
        <p className={`${message.files?.length ? "text-right" : ""} w-fit`}>
          {message.content}
        </p>

        {message.files?.map((file) =>
          file.mimeType.startsWith("image") ? (
            <img
              src={file.url}
              className=" max-w-[20vw] min-w-40 min-h-40 rounded-xl "
            />
          ) : (
            file.mimeType === "application/pdf" && (
              <div
                className=" size-[10vw] min-w-20 min-h-20 grid place-items-center bg-[#ED676A]/20 rounded overflow-hidden "
                title={file.name}
              >
                <img
                  src="/images/pdf-icon.svg"
                  className=" size-[5vw] min-w-12 min-h-12 max-w-20 "
                />
              </div>
            )
          )
        )}
      </div>

      {/* Action Buttons */}
      {!isUser && (
        <div className="flex items-center gap-1.5 mt-2 mb-3">
          <button
            key={"copy"}
            className="p-1.5 rounded-md hover:bg-[#E8E8E8] transition-colors"
            title={"Copy"}
            onClick={() => {
              handleCopy(message.content!);
            }}
          >
            <Copy
              size={16}
              className={copied ? "text-[#1072f2]" : "text-[#16191D]"}
            />
          </button>
          <button
            key={"play-audio"}
            className="p-1.5 rounded-md hover:bg-[#E8E8E8] transition-colors"
            title={"Play audio"}
          >
            <Volume2 size={16} className="text-[#16191D]" />
          </button>
          <button
            key={"like"}
            className="p-1.5 rounded-md hover:bg-[#E8E8E8] transition-colors"
            title={"Like"}
            onClick={() => {
              handleButtonClick("like");
            }}
          >
            <ThumbsUp
              size={16}
              className={liked ? " fill-[#1072f2]/30" : "text-[#16191D]"}
            />
          </button>
          <button
            key={"dislike"}
            className="p-1.5 rounded-md  hover:bg-[#E8E8E8] transition-colors"
            title={"Dislike"}
            onClick={() => {
              handleButtonClick("dislike");
            }}
          >
            <ThumbsDown
              size={16}
              className={disliked ? "fill-[#f21410]/30" : "text-[#16191D]"}
            />
          </button>

          {[
            { Icon: Sparkles, label: "Magic" },
            { Icon: RotateCcw, label: "Regenerate" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              className="p-1.5 rounded-md hover:bg-[#E8E8E8] transition-colors"
              title={label}
            >
              <Icon size={16} className="text-[#16191D]" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
