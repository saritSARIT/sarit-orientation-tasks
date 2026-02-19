import type { PostPayload } from "../../types/post";
import type { Function1 } from "lodash";

export type PostFormProps = {
  submit: Function1<PostPayload, void | Promise<void>>;
  submitButtonText: string;
  error?: string;
  defaultValues?: Partial<PostPayload>;
};
