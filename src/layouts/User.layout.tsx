import { Drawer } from "components/module/drawer";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

export const UserLayout: React.FC = () => {
  const [drawerCollapse, setDrawerCollapse] = useState<boolean>(false);
  return (
    <Fragment>
      <Drawer collapse={drawerCollapse} onDrawerToggle={setDrawerCollapse} />
      <div id="content-panel" className="ml-[300px]">
        <Outlet />
      </div>
    </Fragment>
  );
};
