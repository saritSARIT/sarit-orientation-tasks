
export const PostCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};