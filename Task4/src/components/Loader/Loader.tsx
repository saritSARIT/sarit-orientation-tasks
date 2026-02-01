

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

