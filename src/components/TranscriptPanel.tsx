import { X } from "lucide-react";

const messages = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Smith",
    content: "Hello! How are you feeling today?",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "Hi doctor, I’ve been having headaches for the past few days.",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Smith",
    content:
      "I see. Are you experiencing any nausea or dizziness along with it?",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "No dizziness, just the headaches and some fatigue.",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Smith",
    content:
      "Thanks for letting me know. I recommend getting some rest and staying hydrated. We may also schedule a check-up if it continues.",
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "Got it, thank you doctor!",
  },
  {
    id: 7,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "Hi doctor, I’ve been having headaches for the past few days.",
  },
  {
    id: 8,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Smith",
    content:
      "I see. Are you experiencing any nausea or dizziness along with it?",
  },
  {
    id: 9,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "No dizziness, just the headaches and some fatigue.",
  },
  {
    id: 10,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Smith",
    content:
      "Thanks for letting me know. I recommend getting some rest and staying hydrated. We may also schedule a check-up if it continues.",
  },
  {
    id: 11,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Patient",
    content: "Got it, thank you doctor!",
  },
];

function TranscriptPanel({ handleClose }: { handleClose: () => void }) {
  return (
    <div className=" max-w-[520px] w-full max-h-[713px] h-full flex flex-col items-center px-5 py-4 gap-6 bg-white border border-stroke-01 shadow-md rounded-[16px] rounded-tr-none ">
      <div className="flex justify-between items-center w-full bg-white">
        <h2 className=" font-semibold text-[18px] leading-6 text-[#1C274C]">
          Transcription
        </h2>
        <button
          className="w-5 h-5 text-[#1C274C] cursor-pointer"
          onClick={handleClose}
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex flex-col w-full h-[617px] overflow-y-auto gap-2 relative">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-row items-start gap-4 w-full">
            {/* Avatar */}
            <div className="w-6 h-6 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
              <img
                src={msg.avatar}
                alt={msg.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Message content */}
            <div className="flex flex-col w-full gap-1">
              <span className="text-[#16191D] font-geist text-[14px] leading-5">
                {msg.name}
              </span>
              <p className="text-[#93A1B8] font-geist text-[14px] leading-5">
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </div>
    </div>
  );
}

export default TranscriptPanel;
