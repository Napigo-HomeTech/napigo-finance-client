import * as Icons from "components/element/icons";
import React from "react";

export type DrawerNavigationMenuItem = {
  goto: string;
  label: string;
  icon: React.FC;
  index: number;
};
export const DrawerNavigationMenus: DrawerNavigationMenuItem[] = [
  {
    goto: "/budget",
    label: "Budget",
    icon: Icons.BudgetIcon,
    index: 0,
  },
  {
    goto: "/moneycard",
    label: "Money Card",
    icon: Icons.MooneyCardIcon,
    index: 1,
  },
  {
    goto: "/planner",
    label: "Planner",
    icon: Icons.PlannerIcon,
    index: 2,
  },
  {
    goto: "/report",
    label: "Report",
    icon: Icons.ReportIcon,
    index: 3,
  },
  {
    goto: "/setting",
    label: "Setting",
    icon: Icons.SettingIcon,
    index: 4,
  },
];
