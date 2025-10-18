import { X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { doctors } from "@/data/doctors";
import type { DoctorInfo } from "@/types/input";
import { useChatStore } from "@/store/useChatStore";

function NewChatheader() {
  const [recipients, setRecipients] = useState<DoctorInfo[]>([]);
  const [addDoctorInput, setAddDoctorInput] = useState("");
  const [showDoctorsSuggestions, setShowDoctorsSuggestions] = useState(false);
  const { setCurrentRecipients } = useChatStore();

  const addDoctorInputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestion = useMemo(() => {
    if (!addDoctorInput.trim())
      return doctors.filter(
        (doctor) => !recipients.some((r) => r.id === doctor.id)
      );

    const inputLower = addDoctorInput.toLowerCase();

    return doctors.filter(
      (doctor) =>
        !recipients.some((r) => r.id === doctor.id) && // not already added
        doctor.name.toLowerCase().includes(inputLower) // matches input
    );
  }, [recipients, addDoctorInput]);

  const onRemoveRecipient = (id: string) => {
    const updatedRecipients = recipients.filter((r) => r.id !== id);
    setRecipients(updatedRecipients);
    setCurrentRecipients(updatedRecipients);
  };

  const handleAddDoctorRecipient = (recipient: DoctorInfo) => {
    const updatedRecipients = [...recipients, recipient];
    setRecipients(updatedRecipients);
    setAddDoctorInput("");
    setShowDoctorsSuggestions(false);
    setCurrentRecipients(updatedRecipients);
  };

  return (
    <div className="w-full flex justify-center items-center p-4 bg-white border-b border-stroke-01 rounded-t-[20px] z-0">
      <div className="flex flex-row items-center justify-between w-full gap-3">
        <div className="flex-1 flex flex-col gap-2">
          <h2
            className="text-[#16191D] text-[18px] font-semibold leading-[24px] tracking-[-0.02em] outline-none "
            contentEditable
          >
            New Message
          </h2>
          <div
            className="flex items-center flex-wrap gap-1"
            onClick={() => addDoctorInputRef.current?.focus()}
          >
            <span className="text-[#93A1B8] text-[14px] leading-[20px]">
              To:
            </span>

            <>
              {recipients.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center gap-2 px-2 py-1 bg-[#EBF0FF] shadow-[0_4px_24px_rgba(0,0,0,0.05)] rounded-full select-none"
                >
                  <div
                    className="w-5 h-5 rounded-full bg-[#EBF0FF] bg-center bg-cover"
                    style={{
                      backgroundImage: r.image
                        ? `url(${r.image})`
                        : "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
                    }}
                  />
                  <span className="text-[#16191D] text-[12px] leading-[14px]">
                    {r.name}
                  </span>
                  <button
                    onClick={() => onRemoveRecipient(r.id)}
                    className="w-3 h-3 flex items-center justify-center cursor-pointer"
                    title="Remove"
                  >
                    <X className="w-3 h-3 text-[#343330]" strokeWidth={2} />
                  </button>
                </div>
              ))}
              <div className=" w-0 flex items-center ">
                <Popover
                  open={showDoctorsSuggestions}
                  onOpenChange={setShowDoctorsSuggestions}
                >
                  <PopoverTrigger asChild>
                    <input
                      type="text"
                      className=" shrink-0 w-40  outline-none "
                      value={addDoctorInput}
                      onChange={(e) => setAddDoctorInput(e.target.value)}
                      ref={addDoctorInputRef}
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    align="center"
                    //   sideOffset={4}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className=" w-auto px-3 py-2 rounded-xl border border-stroke-01 shadow-[0_4px_24px_0_rgba] [&>div]:border-t [&>div:first-child]:border-t-0 "
                  >
                    {filteredSuggestion.length > 0 ? (
                      filteredSuggestion.map((doctor) => (
                        <div
                          key={doctor.id}
                          className={`w-[300px] flex items-center gap-2 px-2 py-3 hover:rounded-[12px] [&:hover]:border-t-transparent [&:hover+div]:border-t-transparent hover:bg-[#EBF0FF] cursor-pointer `}
                          onClick={() => handleAddDoctorRecipient(doctor)}
                        >
                          <div
                            className="w-8 h-8 rounded-full bg-[#EBF0FF] bg-center bg-cover"
                            style={{
                              backgroundImage: doctor.image
                                ? `url(${doctor.image})`
                                : "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #EBF0FF",
                            }}
                          />
                          <div className="flex flex-col items-start gap-[2px] w-[266px]">
                            <span className="text-[#1C274C] text-[12px] font-medium leading-[14px]">
                              {doctor.name}
                            </span>
                            <span className="text-[#93A1B8] text-[12px] font-normal leading-[14px]">
                              {doctor.specialization}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-[12px] text-gray-500 px-2 py-1">
                        No matching doctors
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewChatheader;
