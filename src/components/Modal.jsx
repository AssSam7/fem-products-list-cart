export const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-30 fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};
