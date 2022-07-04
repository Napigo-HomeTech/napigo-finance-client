import { DrawerNavigationMenuItem, DrawerNavigationMenus } from "constants/drawer-menu";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const _setMenuItemActiveClassMap = (currentPath: string, itemPath: string) => {
  return currentPath.includes(itemPath) ? "bg-primary text-base-content" : "";
};

type DrawerMenuProps = {
  collapse: boolean;
};
export const DrawerMenu: React.FC<DrawerMenuProps> = ({ collapse }) => {
  const location = useLocation();

  const handleItemClick = (ev: React.MouseEvent<HTMLLIElement>, goto: string) => {
    const drawerMenu = document.getElementById("draewr-menu");
    const items = drawerMenu?.querySelectorAll("li[role=menuitem]");

    items!.forEach((item: Element) => {
      item.classList.remove("active");
    });
    ev.currentTarget.classList.add("active");
  };
  return (
    <ul
      id="drawer-menu"
      role="menu"
      className="
      list-none
      flex flex-col
      gap-2
      px-[10px]
      m-0 overflow-scroll"
    >
      {DrawerNavigationMenus.map((item: DrawerNavigationMenuItem) => {
        const { icon: Icon, label, goto, index } = item;
        return (
          <Link key={index} to={goto}>
            <li
              role="menuitem"
              onClick={(e) => handleItemClick(e, goto)}
              className={`
              btn
              btn-outline
              text-base-content
              hover:bg-primary
              hover:border-primary
              hover:text-primary-content
              pl-[20px] 
              min-w-[200px]
              border-transparent 
              flex 
              flex-row 
              items-center 
              justify-start 
              normal-case
              font-normal
              ${_setMenuItemActiveClassMap(location.pathname, goto)}
            `}
            >
              <Icon />
              <AnimatePresence initial={false}>
                {!collapse && (
                  <motion.span
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    className="ml-3"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
