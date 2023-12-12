"use client";

import MenuItem from "./menu-item";
import { useCallback, useState } from "react";

type menuItemtype = {
  label: string;
  id: string;
};

interface MenuProps {
  initialState: string;
  children: (selectedMenu: string) => React.ReactNode;
  menuItems: menuItemtype[];
}

const Menu = ({ initialState, menuItems, children }: MenuProps) => {
  const [selectedMenu, setSelectedMenu] = useState<string>(initialState);

  // scategory updating function
  const handleCategoryChange = useCallback(
    (menu: string) => {
      setSelectedMenu(menu);
    },
    [setSelectedMenu]
  );
  return (
    <section className="w-full flex flex-col justify-center items-center mt-10">
      <div className="flex space-x-4 lg:space-x-10">
        {menuItems?.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            label={menuItem.label}
            id={menuItem.id}
            selectedMenu={selectedMenu}
            onSelectMenu={handleCategoryChange}
          />
        ))}
      </div>
      <div className="mt-5">{children(selectedMenu)}</div>
    </section>
  );
};

export default Menu;
