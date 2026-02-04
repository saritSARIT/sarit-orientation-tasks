import { UseMutateFunction } from "@tanstack/react-query";
import { Post, PostPayload } from "../../types/post";

export type PostFormProps = {
  initialValues?: Partial<Post>;
  onSubmit: UseMutateFunction<Post, any, PostPayload, void>;
  submitText: string;
  error?: string | null;
};
