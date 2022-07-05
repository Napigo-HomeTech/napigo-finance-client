import { Drawer } from "components/module/drawer";
import { motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

const DRAWER_EXPAND_WIDTH = 220;
const DRAWER_COLLAPSE_WIDTH = 85;

export const UserLayout: React.FC = () => {
  const [drawerCollapse, setDrawerCollapse] = useState<boolean>(false);
  return (
    <Fragment>
      <Drawer
        collapse={drawerCollapse}
        onDrawerToggle={setDrawerCollapse}
        expandWidth={DRAWER_EXPAND_WIDTH}
        collapseWidth={DRAWER_COLLAPSE_WIDTH}
      />
      <motion.div
        initial={{
          marginLeft: drawerCollapse ? `${DRAWER_EXPAND_WIDTH}px` : `${DRAWER_COLLAPSE_WIDTH}px`,
        }}
        animate={{
          marginLeft: drawerCollapse ? `${DRAWER_COLLAPSE_WIDTH}px` : `${DRAWER_EXPAND_WIDTH}px`,
        }}
        transition={{ delay: drawerCollapse ? 0.15 : 0 }}
        id="content-panel"
      >
        <Outlet />
      </motion.div>
    </Fragment>
  );
};
