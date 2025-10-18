import { Quote, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { doctors } from "@/data/doctors";
import { useDoctorCardStore } from "@/store/useDoctorCard";

interface DoctorCardProps {
  onClose: () => void;
}

export default function DoctorCard({ onClose }: DoctorCardProps) {
  const { selectedDoctorId } = useDoctorCardStore();
  console.log("Selected Doctor ID:", selectedDoctorId);
  const selectedDoctor = doctors.find((doc) => doc.id === selectedDoctorId);
  return (
    <div className="relative max-w-[512px] w-full max-h-[768px] h-full bg-white border border-gray-300 rounded-2xl shadow-md px-5 py-4 flex flex-col items-center gap-4 overflow-hidden">
      {/* Background gradient ellipse */}
      <div className="absolute w-[962px] h-[694px] -top-[686px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#5985FF] to-[#4576FF] blur-[200px] z-0" />

      <div className=" flex-1 flex flex-col gap-4 relative z-[1] w-full overflow-auto ">
        <div className="flex justify-between items-center w-full pb-4 ">
          <h2 className="font-semibold text-lg text-[#1C274C]">Info</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Doctor Info */}
        <div className="flex self-stretch items-center gap-4 z-10">
          <div className=" p-1.5 bg-gradient-to-b from-[#717784] to-transparent rounded-full  ">
            <div className="size-[50px] rounded-full bg-gray-100 overflow-hidden">
              <img
                src={selectedDoctor?.image}
                alt={selectedDoctor?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-2xl text-[#16191D]">
              {selectedDoctor?.name}
            </h3>
            <p className="text-gray-400 text-base">
              {selectedDoctor?.specialization}
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="patient_cases"
          className=" flex-1 overflow-auto w-full "
        >
          <TabsList className=" bg-transparent border-none outline-none h-auto w-full overflow-hidden flex gap-3 justify-center ">
            <TabsTrigger
              className="flex justify-center items-center px-4 py-2 bg-primary-tint-02/40 text-gray-600 data-[state=active]:bg-gradient-to-b data-[state=active]:from-blue-700 data-[state=active]:to-blue-300 data-[state=active]:text-white rounded-full border-none font-normal"
              value="patient_cases"
            >
              Patient Cases
            </TabsTrigger>
            <TabsTrigger
              className="flex justify-center items-center px-4 py-2 bg-primary-tint-02/40 text-gray-600 data-[state=active]:bg-gradient-to-b data-[state=active]:from-blue-700 data-[state=active]:to-blue-300 data-[state=active]:text-white rounded-full border-none font-normal"
              value="publications"
            >
              Publications
            </TabsTrigger>
            <TabsTrigger
              className="flex justify-center items-center px-4 py-2 bg-primary-tint-02/40 text-gray-600 data-[state=active]:bg-gradient-to-b data-[state=active]:from-blue-700 data-[state=active]:to-blue-300 data-[state=active]:text-white rounded-full border-none font-normal"
              value="social_media"
            >
              Social Media
            </TabsTrigger>
          </TabsList>
          <TabsContent value="patient_cases" className=" flex-1 overflow-auto">
            <div className="flex flex-col gap-4 ">
              {selectedDoctor?.patientCases.map((exp, idx) => (
                <DoctorQuoteCard key={idx} text={exp} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="publications" className=" flex-1 overflow-auto">
            <div className="flex flex-col gap-4 ">
              {selectedDoctor?.publications.map((item, i) => (
                <DoctorPublicationsCard {...item} key={i} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="social_media" className=" flex-1 overflow-auto">
            <div className="flex flex-col gap-4 ">
              {selectedDoctor?.socialMedias.map((exp, idx) => (
                <DoctorQuoteCard key={idx} text={exp.content} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function DoctorQuoteCard({ text }: { text: String }) {
  return (
    <div className="flex flex-col justify-center items-center p-3 bg-white border-b border-[#EEEEEE] shadow-sm rounded-2xl w-full max-w-[472px] mx-auto">
      <div className="flex flex-row justify-center items-baseline gap-3 w-full">
        <Quote
          size={18}
          className="-scale-x-100 text-stone fill-stone translate-y-1.5 "
        />

        <div className="flex flex-col items-start gap-1 w-full">
          <p className="text-[#53596C] text-sm font-medium leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function DoctorPublicationsCard({
  title,
  subTitle,
  year,
  content,
}: {
  title: string;
  subTitle: string;
  year: string;
  content: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center p-3 sm:p-4 gap-2 bg-white border-b border-[#EEEEEE] shadow-sm rounded-2xl w-full max-w-[472px] mx-auto relative">
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full text-[#53596C] text-sm font-medium">
        <span>{title}</span>
        <span>{year}</span>
      </div>

      {/* Title */}
      <div className="flex justify-center items-start w-full">
        <h3 className="text-[#16191D] text-base font-semibold leading-6 tracking-tight">
          {subTitle}
        </h3>
      </div>

      {/* Description */}
      <div className="flex justify-center items-start w-full">
        <p className="text-[#53596C] text-sm leading-5">{content}</p>
      </div>
    </div>
  );
}
