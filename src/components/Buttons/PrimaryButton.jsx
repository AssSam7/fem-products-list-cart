export const PrimaryButton = ({ handleClick, children }) => {
  return (
    <button
      className="cursor-pointer rounded-full bg-[#D6452A] px-6 py-4 text-white hover:bg-[#d62a2a]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
