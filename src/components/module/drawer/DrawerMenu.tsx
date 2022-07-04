import { DrawerNavigationMenuItem, DrawerNavigationMenus } from "constants/drawer-menu";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type DrawerMenuProps = {
  collapse: boolean;
};
export const DrawerMenu: React.FC<DrawerMenuProps> = ({ collapse }) => {
  const location = useLocation();

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
              className={`
              btn
              btn-outline
              text-base-content
              ${location.pathname.includes(goto) ? "hover:bg-primary" : "hover:bg-base-content/20"} 
              hover:border-transparent
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
              ${location.pathname.includes(goto) ? "bg-primary" : ""}
            
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
