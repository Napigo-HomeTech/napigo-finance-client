import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "components/element";
import { LogoSection } from "./LogoSection";
import { DrawerMenu } from "./DrawerMenu";

type DrawerProps = {
  /** Width when drawer on expanded layout - format in px */
  expandWidth?: number;
  /** Width when drawer on collapse layout - format in px */
  collapseWidth?: number;
  collapse: boolean;
  onDrawerToggle: (collapse: boolean) => void;
};
export const Drawer: React.FC<DrawerProps> = (props) => {
  const { collapse, onDrawerToggle, expandWidth = 260, collapseWidth = 85 } = props;

  const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onDrawerToggle(!ev.target.checked);
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? `${expandWidth}px` : `${collapseWidth}px` }}
        animate={{ width: collapse ? `${collapseWidth}px` : `${expandWidth}px` }}
        transition={{ delay: collapse ? 0.15 : 0 }}
        className={`border-r-[0.5px]
        border-base-content/20 
        w-[260px]
        bg-base-200 fixed
        top-0 
        
        h-screen
        flex 
        flex-col 
        justify-between
        transition
      `}
      >
        <div className="w-full">
          <LogoSection collapse={collapse} />
          <DrawerMenu collapse={collapse} />
        </div>

        <div className="flex w-full flex-col h-auto p-4 items-start justify-center">
          <Toggle defaultChecked onChange={onToggle} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
