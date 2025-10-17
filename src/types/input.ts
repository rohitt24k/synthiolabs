export interface IInputItem {
  id: string;
  type: "text" | "file";
  content?: string;
  files?: IUploadedFile[];
}

export interface IUploadedFile {
  id: string;
  url: string;
  mimeType: string;
  name: string;
}

export interface IChatMessage {
  id: string;
  role: "user" | "assistant";
  message: IInputItem;
  liked: boolean;
  disliked: boolean;
}
