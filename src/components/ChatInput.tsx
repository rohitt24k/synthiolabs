import { useCallback, useRef, useState, useEffect } from "react";
import { Paperclip, ArrowUp, X } from "lucide-react";
import type { IUploadedFile } from "@/types/input";
import type React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

function ChatInput({ onSend }: { onSend?: (text: string) => void }) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<IUploadedFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = useCallback(() => {
    const el = textAreaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 240)}px`;
  }, []);

  useEffect(() => {
    autoResize();
  }, [message, autoResize]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      const newFiles: IUploadedFile[] = Array.from(selectedFiles).map(
        (file) => {
          const url = URL.createObjectURL(file);
          const id =
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

          return {
            id,
            file,
            url,
            mimeType: file.type || "application/octet-stream",
            name: file.name,
          };
        }
      );

      setFiles((prev) => [...prev, ...newFiles]);

      // reset the input so the same file can be selected again
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    []
  );

  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  }, []);

  const handleFileUploadClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleSend = () => {
    if (message.trim() === "") return;
    onSend?.(message.trim());
    setMessage("");
  };

  return (
    <div className=" max-w-full w-full box-border flex flex-col justify-center items-start p-4 gap-4 bg-white shadow-[-1px_1px_20px_rgba(0,0,0,0.1)] rounded-[16px]">
      {files.length > 0 && (
        <ScrollArea className=" w-full ">
          <div className=" flex gap-4 w-full select-none ">
            {files.map((file) => (
              <div className=" flex shrink-0 mt-2 ">
                {file.mimeType === "application/pdf" ? (
                  <div
                    className=" size-[60px] grid place-items-center bg-[#ED676A]/20 rounded overflow-hidden "
                    title={file.name}
                  >
                    <img src="/images/pdf-icon.svg" />
                  </div>
                ) : file.mimeType.startsWith("image") ? (
                  <div
                    className=" h-[60px] rounded overflow-hidden "
                    title={file.name}
                  >
                    <img
                      src={file.url}
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ) : null}
                <div
                  className=" size-6 grid place-items-center -ml-2 -mt-2 bg-primary-tint-02 rounded-full self-start cursor-pointer "
                  onClick={() => {
                    handleRemoveFile(file.id);
                  }}
                >
                  <X className=" text-[#53596C] size-5 " />
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
      {/* Text Input */}
      <textarea
        ref={textAreaRef}
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onInput={autoResize}
        placeholder="Ask anything..."
        className="w-full text-[#16191D] text-[16px] leading-[24px] outline-none bg-transparent placeholder:text-[#A1A1A1] resize-none overflow-auto"
      />

      {/* Bottom Row */}
      <div className="flex w-full justify-between items-center">
        {/* Left: Paperclip */}
        <button
          className="flex justify-center items-center w-10 h-10 border border-[#EEEEEE] rounded-full bg-white hover:bg-[#F8F8F8] transition-colors"
          title="Attach"
          onClick={handleFileUploadClick}
        >
          <Paperclip className="w-4 h-4 text-[#16191D]" />
        </button>

        {/* Right: Send */}
        <button
          onClick={handleSend}
          className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-b from-[#013BDB] to-[#2C62F7] shadow-[-1px_1px_3px_rgba(1,59,219,0.4),_-2px_2px_3px_rgba(1,32,60,0.34),_inset_0px_1px_9px_2px_rgba(210,234,255,0.3)] hover:scale-105 cursor-pointer transition-transform disabled:opacity-50 "
          style={{
            background:
              "url('/images/background-dirt.png') center/300px 300px no-repeat, linear-gradient(180deg, #013BDB 0%, #2C62F7 100%)",
          }}
          title="Send"
          disabled={!message}
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      </div>
      <input
        type="file"
        className=" sr-only  "
        ref={inputRef}
        onChange={handleFileUpload}
        multiple
      />
    </div>
  );
}

export default ChatInput;
