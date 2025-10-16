import { useState } from "react";
import { Paperclip, ArrowUp } from "lucide-react";

function ChatInput({ onSend }: { onSend?: (text: string) => void }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    onSend?.(message.trim());
    setMessage("");
  };

  return (
    <div className="absolute left-[22px] top-[45px] md:static max-w-full box-border flex flex-col justify-center items-start p-4 gap-4 bg-white border border-[#EEEEEE] shadow-[ -1px_1px_20px_rgba(0,0,0,0.1)] rounded-[16px]">
      {/* Text Input */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What roles do regulatory affairs specialists play in drug approval?"
        className="w-full text-[#16191D] font-medium text-[16px] leading-[24px] outline-none bg-transparent placeholder:text-[#A1A1A1]"
      />

      {/* Bottom Row */}
      <div className="flex w-full justify-between items-center">
        {/* Left: Paperclip */}
        <button
          className="flex justify-center items-center w-10 h-10 border border-[#EEEEEE] rounded-full bg-white hover:bg-[#F8F8F8] transition-colors"
          title="Attach"
        >
          <Paperclip className="w-4 h-4 text-[#16191D]" />
        </button>

        {/* Right: Send */}
        <button
          onClick={handleSend}
          className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-b from-[#013BDB] to-[#2C62F7] shadow-[ -1px_1px_3px_rgba(1,59,219,0.4), -2px_2px_3px_rgba(1,32,60,0.34), inset_0px_1px_9px_2px_rgba(210,234,255,0.3)] hover:scale-105 transition-transform"
          title="Send"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
