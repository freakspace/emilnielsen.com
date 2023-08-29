const Pill = ({ text }: { text: string }) => {
  return (
    <span className="text-xs bg-blue-400 py-1 px-4 rounded-full text-white font-bold mr-2 mb-2">
      {text}
    </span>
  );
};

export default Pill;
