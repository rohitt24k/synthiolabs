import { AudioLines, ClosedCaption } from "lucide-react";
import Chat from "./Chat";
import VideoCallActionButtons from "./VideoCallActionButtons";
import TranscriptPanel from "./TranscriptPanel";
import { useRef, useState } from "react";

interface IVideoCardProps {
  name: string;
  image: string;
  status?: "Speaking";
}

const VideoCard = ({ name, image, status }: IVideoCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-[280px]">
      <div
        className={`relative w-full h-[165px] bg-white ${
          status ? "border-4 border-system-success" : ""
        } shadow-[0_4px_24px_rgba(0,0,0,0.05)] rounded-[20px] overflow-hidden`}
      >
        <img src={image} alt={name} className=" w-full h-full object-cover " />

        {status && (
          <div className="absolute left-[13.5px] top-[113px] flex items-center gap-1 px-2 py-[6px] bg-white border border-[#EEEEEE] shadow-[0px_4px_24px_rgba(0,0,0,0.05)] rounded-full">
            <AudioLines className=" text-primary-main " />
            <span className="text-[#16191D] text-[12px] font-normal leading-[14px] ml-1">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Doctor name */}
      <span className="text-[#16191D] text-[16px] font-normal leading-[24px] w-full">
        {name}
      </span>
    </div>
  );
};

function GroupVideoCall() {
  const [showTranscript, setShowTranscript] = useState(false);
  const chatContentRef = useRef<HTMLDivElement>(null);

  return (
    <Chat.Content className=" relative flex items-center " ref={chatContentRef}>
      <div className=" flex h-fit max-h-full overflow-auto items-center justify-center gap-x-5 gap-y-4 w-full flex-wrap ">
        <VideoCard
          name="Dr Ramakrishnan"
          image="https://randomuser.me/api/portraits/men/1.jpg"
          status="Speaking"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/2.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/3.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/4.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/5.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/6.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/7.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/8.jpg"
        />
        <VideoCard
          name="Dr Anita Sharma"
          image="https://randomuser.me/api/portraits/men/9.jpg"
        />
        <VideoCard name="You" image="/images/you.svg" />

        <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 ">
          <VideoCallActionButtons />
        </div>
      </div>

      {!showTranscript && (
        <button
          className=" absolute right-6 top-6 flex justify-center items-center w-10 h-10 rounded-full border border-stroke-01 bg-white "
          onClick={() => {
            setShowTranscript(true);
          }}
        >
          <ClosedCaption />
        </button>
      )}

      {showTranscript && (
        <div className=" absolute right-0 top-0 h-full ">
          <TranscriptPanel handleClose={() => setShowTranscript(false)} />
        </div>
      )}
    </Chat.Content>
  );
}

export default GroupVideoCall;
