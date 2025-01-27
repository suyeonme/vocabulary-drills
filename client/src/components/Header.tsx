import { LibraryBig } from "lucide-react";

const Header = () => {
  return (
    <nav className="border-b border-gray-400 p-3 flex items-center gap-1">
      <LibraryBig size={16} />
      <p className="text-sm font-bold cursor-pointer">Vocabulary Drills</p>
    </nav>
  );
};

export default Header;
