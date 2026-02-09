import { useForm } from "react-hook-form";
import { PostPayload } from "../types/post";

export const usePostForm = (defaultValues:PostPayload) => {
  return useForm<PostPayload>({defaultValues});
};
