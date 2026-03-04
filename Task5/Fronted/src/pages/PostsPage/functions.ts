import { isNil } from "lodash";
import type { Post } from "src/types/post";

export const getYouTubeId = (url: string): string => {
  const regExp =
    /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)(?<id>[^#&?]{11}).*/u;
  const match = regExp.exec(url);
  return match?.groups?.id ?? "";
};

export const isYouTubeMedia = (post: Post): post is Required<Post> =>
  !isNil(post.media) &&
  (post.media.includes("youtube.com") || post.media.includes("youtu.be"));
