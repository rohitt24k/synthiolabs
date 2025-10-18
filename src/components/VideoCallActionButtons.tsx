import { useCallStore } from "@/store/useCallStore";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

function VideoCallActionButtons({
  parentRef,
}: {
  parentRef?: React.RefObject<HTMLDivElement | null>;
}) {
  // const [show, setShow] = useState(true);
  const { endCall } = useCallStore();

  // useEffect(() => {
  //   if (!parentRef?.current) return;

  //   const handleMouseEnter = () => setShow(true);
  //   const handleMouseLeave = () =>
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 1000);

  //   const el = parentRef.current;
  //   el.addEventListener("mouseenter", handleMouseEnter);
  //   el.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     el.removeEventListener("mouseenter", handleMouseEnter);
  //     el.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, [parentRef]);

  return (
    <>
      <div className={` transition-all duration-300 `}>
        <div className=" flex justify-center -mt-9 items-center gap-6 bg-[#F8F8F8]/50I backdrop-blur-[20px] rounded-full px-4 py-2 shadow-[0_0_0_2px_rgba(0,0,0,0.04),inset_0_0_12px_rgba(214,220,231,0.24)]">
          <button className="flex justify-center items-center w-11 h-11 rounded-full hover:shadow-[inset_0_0_4px_rgba(0,0,0,0.08),_0_4px_24px_0_rgba(0,0,0,0.05)] bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.05)]">
            <img src="/images/microphone.svg" className="w-5 h-5" />
          </button>
          <button className="flex justify-center items-center w-11 h-11 rounded-full hover:shadow-[inset_0_0_4px_rgba(0,0,0,0.08),_0_4px_24px_0_rgba(0,0,0,0.05)] bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.05)]">
            <img
              src="/images/chat-circle.svg"
              className="w-5 h-5 text-[#53596C]"
            />
          </button>
          <button
            className="flex justify-center items-center w-11 h-11 rounded-full bg-[#EE4D37] shadow-[0_4px_24px_0_rgba(0,0,0,0.05)]"
            onClick={() => endCall()}
          >
            <Phone
              className="w-5 h-5 text-white rotate-[136deg]"
              fill="white"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoCallActionButtons;
