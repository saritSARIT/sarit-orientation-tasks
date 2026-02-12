import type { PostPayload } from "../../types/post";

export type PostFormProperties = {
  submit: (data: PostPayload) => void | Promise<void>;
  submitButtonText: string;
  error?: string;
};
