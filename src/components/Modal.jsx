export const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative h-[600px] w-[520px] overflow-auto rounded-lg bg-white p-10 shadow-lg">
        {children}
      </div>
    </div>
  );
};
