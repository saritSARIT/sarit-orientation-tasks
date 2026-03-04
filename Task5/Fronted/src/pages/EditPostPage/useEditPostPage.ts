import { useState } from "react";
import { getPosts, updatePost } from "@api/posts";
import type { PostPayload, Post } from "../../types/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  pickBy,
  isEmpty,
  map,
  find,
  matchesProperty,
  partial,
} from "lodash/fp";
import { toast } from "react-toastify";
import { queryKeys } from "@api/queryKeys";

//You don't write a return type in situations like this.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const useEditPostPage = () => {
  const queryClient = useQueryClient();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.EDIT_POST" });

  const {
    data: posts = [],
    isLoading,
    error: queryError,
  } = useQuery({
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });

  const selectedPost = find(matchesProperty("_id", selectedPostId), posts);

  const { mutate: editPostMutate, error: editPostError } = useMutation<
    Post,
    Error,
    Partial<PostPayload>
  >({
    mutationKey: queryKeys.posts.update,
    // SelectedPostId is guranteed to exist
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    mutationFn: partial(updatePost, [selectedPostId!]),
    onSuccess: (updatedPost) => {
      toast.success(t("TOAST_SUCCESS1"));
      queryClient.setQueryData<Post[]>(
        queryKeys.posts.all,
        map((post) => (post._id === updatedPost._id ? updatedPost : post)),
      );
    },
  });

  const submit = (data: Partial<PostPayload>): void => {
    const updatedData = pickBy(
      // Lodash types' fault
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-type-assertion
      (value, key) => value !== (selectedPost![key as keyof PostPayload] ?? ""),
      data,
    );

    isEmpty(updatedData)
      ? toast.success(t("TOAST_SUCCESS2"))
      : editPostMutate(updatedData);
  };

  return {
    posts,
    isLoading,
    selectedPost,
    setSelectedPostId,
    submit,
    queryError,
    editPostError,
  };
};
