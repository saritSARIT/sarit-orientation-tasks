import { useForm, type UseFormReturn } from "react-hook-form";
import type { PostPayload } from "../../types/post";

export const usePostForm = (
  defaultValues: PostPayload,
): UseFormReturn<PostPayload> => useForm<PostPayload>({ defaultValues });
