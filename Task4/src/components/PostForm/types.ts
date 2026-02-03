import { Post, PostPayload } from "../../types/post";

export type PostFormProps = {
  initialValues?: Partial<Post>;
  onSubmit: (data: PostPayload) => Promise<void>;
  submitText: string;
  loading: boolean;
  error?: string | null;
};
