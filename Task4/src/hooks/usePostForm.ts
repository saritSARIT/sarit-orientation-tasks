import { useForm } from "react-hook-form";
import { PostPayload } from "../types/post";

export const usePostForm = () => {
  const form = useForm<PostPayload>({
    defaultValues: {
      postName: "",
      text: "",
      likes: 0,
      userId: "",
      media: "",
    },
  });

  return form;
};
