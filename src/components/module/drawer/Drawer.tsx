import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "components/element";
import { LogoSection } from "./LogoSection";
import { DrawerMenu } from "./DrawerMenu";

const DRAWER_EXPAND_WIDTH = "260px";
const DRAWER_COLLAPSE_WIDTH = "85px";

type DrawerProps = {
  collapse: boolean;
  onDrawerToggle: (collapse: boolean) => void;
};
export const Drawer: React.FC<DrawerProps> = (props) => {
  const { collapse, onDrawerToggle } = props;

  const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onDrawerToggle(!ev.target.checked);
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? DRAWER_EXPAND_WIDTH : DRAWER_COLLAPSE_WIDTH }}
        animate={{ width: collapse ? DRAWER_COLLAPSE_WIDTH : DRAWER_EXPAND_WIDTH }}
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
