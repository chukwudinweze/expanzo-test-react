"use client";

import Category from "@/components/category-menubar/category";
import Logo from "@/components/logo";
import Menu from "@/components/category-menubar/menu";
import React from "react";

const menuItems = [
  { label: "All", id: "all" },
  { label: "Companies", id: "companies" },
  { label: "Phones", id: "phones" },
];

const DashBoard = () => {
  return (
    <section>
      <div className="w-full flex justify-center mt-8">
        <Logo variant="dark" />
      </div>
      <Menu menuItems={menuItems} initialState={menuItems[0].id}>
        {(selectedMenu: string) => (
          <>
            {/* Render child component based on category state */}
            <Category category={selectedMenu} />
          </>
        )}
      </Menu>
    </section>
  );
};

export default DashBoard;
