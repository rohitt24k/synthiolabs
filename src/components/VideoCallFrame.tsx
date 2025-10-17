import { Phone, AudioLines } from "lucide-react";
import Chat from "./Chat";
import VideoCallActionButtons from "./VideoCallActionButtons";

const VideoCallFrame = () => {
  return (
    <>
      <Chat.Content className="flex flex-col justify-center items-center gap-4">
        <div className=" max-w-full aspect-video min-h-[300px] relative border-4 border-[#06C270] rounded-2xl overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Doctor video"
            className=" shrink object-cover aspect-video "
          />
          <div className="absolute left-6 bottom-6 bg-black/30 backdrop-blur-sm text-white px-6 py-1 rounded-full text-[20px] font-medium">
            Jacob Jones
          </div>

          <div className="absolute right-6 top-6 flex justify-center items-center w-12 h-12 rounded-full border border-[#EEEEEE] bg-white shadow-md">
            <AudioLines className="w-5 h-5 text-[#013BDB]" />
          </div>
        </div>

        <div className=" self-end flex justify-end gap-4 ">
          <div className="relative w-[220px] aspect-video rounded-xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Self view"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-2 bottom-2 bg-black/30 backdrop-blur-sm text-white text-sm px-3 py-0.5 rounded-full">
              Me
            </div>
          </div>
        </div>
      </Chat.Content>

      {/* Action buttons */}
      <div className=" absolute bottom-4 ">
        <VideoCallActionButtons />
      </div>
    </>
  );
};

export default VideoCallFrame;
