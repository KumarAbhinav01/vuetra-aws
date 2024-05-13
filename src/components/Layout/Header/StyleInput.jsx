import { BiCommand } from "react-icons/bi";

export default function StyledInput({ className }) {
  return (
    <div className="flex items-center px-4 space-x-4 border rounded-md bg-lightbg2 dark:bg-transparent border-darkborder">
      <input
        type="text"
        className={`w-full py-2  text-xs font-semibold outline-none bg-transparent ${className}`}
        placeholder="Type a command or search..."
      />
      <div className="flex items-center justify-center bg-[#8A96A626] px-2 py-1 text-xs rounded-sm text-darktext2">
        <BiCommand size={12} className="text-darktext2" />
        <p>K</p>
      </div>
    </div>
  );
}
