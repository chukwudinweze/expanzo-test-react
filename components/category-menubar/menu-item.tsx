import { cn } from "@/lib/utils";
import { useCallback } from "react";

interface MenuItemProps {
  id: string;
  label: string;
  selectedMenu: string;
  onSelectMenu: (val: string) => void;
}
const MenuItem = ({ id, label, onSelectMenu, selectedMenu }: MenuItemProps) => {
  // call category updating function
  const handleCategory = useCallback(() => {
    onSelectMenu(id);
  }, [id, onSelectMenu]);

  return (
    <button
      onClick={handleCategory}
      className={cn(
        "p-2 px-6 lg:px-10 font-bold text-black hover:text-brandColor pb-1",
        selectedMenu === id && "text-brandColor border-b-2 border-brandColor"
      )}
    >
      {label}
    </button>
  );
};

export default MenuItem;
