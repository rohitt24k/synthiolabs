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
  senderId: string;
  message: IInputItem;
  liked: boolean;
  disliked: boolean;
}

export interface DoctorInfo {
  id: string;
  name: string;
  specialization: string;
  image: string;
  patientCases: String[];
  publications: {
    title: string;
    year: string;
    subTitle: string;
    content: string;
  }[];
  socialMedias: { content: string; platform: string }[];
}
