import {
  Copy,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  RotateCcw,
} from "lucide-react";

function ChatMessage({
  role,
  message,
}: {
  role: "user" | "assistant";
  message: string;
}) {
  const isUser = role === "user";

  return (
    <div
      className={`flex flex-col ${isUser ? "items-end" : "items-start"} w-full`}
    >
      {/* Message Bubble */}
      <div
        className={` rounded-[20px] px-4 py-3 text-[16px] leading-[24px] ${
          isUser
            ? "bg-[#4B7BFF] text-white rounded-tr-[0px]"
            : "bg-[#F6F6F6] text-[#16191D] rounded-tl-[0px]"
        }`}
      >
        {message}
      </div>

      {/* Action Buttons */}
      {!isUser && (
        <div className="flex items-center gap-1.5 mt-2 mb-3">
          {[
            { Icon: Copy, label: "Copy" },
            { Icon: Volume2, label: "Play audio" },
            { Icon: ThumbsUp, label: "Like" },
            { Icon: ThumbsDown, label: "Dislike" },
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
