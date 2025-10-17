import { useChatStore } from "@/store/useChatStore";
import { useEffect } from "react";

function Sidebar() {
  const { chats, changeCurrentChat } = useChatStore();

  useEffect(() => {
    if (changeCurrentChat) changeCurrentChat(chats[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-[362px] h-auto p-0">
      <div className="flex items-center justify-between w-full px-1 h-[72px]">
        <h2 className="text-[24px] font-semibold text-[#1C274C] tracking-[-0.04em] leading-[36px]">
          Chats
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer">
          <img src="/images/square-pen.svg" className=" h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 w-full px-2">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 w-full max-w-[346px] h-[72px] rounded-xl border-b border-[#EEEEEE] hover:bg-primary-tint-02 ${
              i === 0 ? "bg-[#EBF0FF]" : ""
            } p-3`}
            onClick={() => changeCurrentChat && changeCurrentChat(chat.id)}
          >
            <div
              className="w-12 h-12 rounded-full bg-[#EBF0FF] overflow-hidden flex-shrink-0"
              style={{
                backgroundImage: `url(${chat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Text */}
            <div className="flex-1 overflow-hidden flex flex-col justify-center text-left w-full">
              <h3 className="text-[16px] font-medium text-[#1C274C] leading-[24px] line-clamp-1">
                {chat.name}
              </h3>
              {chat.messages.length > 0 && (
                <p className="text-[14px] font-normal text-[#93A1B8] leading-[20px] truncate ">
                  {chat.messages[chat.messages.length - 1]?.message.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
