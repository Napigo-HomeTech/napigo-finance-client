import React, { ReactElement } from "react";
import { uniqueId } from "lodash";
import { Menu } from "@headlessui/react";
import { Button } from "../button/Button";

type PopperSize = "xs" | "sm" | "md" | "lg" | "xl";

const PopperSizeClassMap = {
  xs: "w-40",
  sm: "w-44",
  md: "w-48",
  lg: "w-56",
  xl: "w-60",
};

export type ItemComponent = {
  text: string;
  icon: JSX.Element | ReactElement;
  onClick: (e: React.MouseEvent) => void;
};

type MenuPopperProps = {
  renderToggler?: () => ReactElement;
  /** render function for the toggler Component  */
  items: ItemComponent[];
  /** The array of function which render your items to be be display in the menu list */
  popperClassnames?: string;
  /** */
  popperSize?: PopperSize;
};

export const MenuPopper = React.forwardRef((props: MenuPopperProps, ref) => {
  const { renderToggler, items, popperClassnames, popperSize = "md" } = props;

  return (
    <Menu as="div" className={`relative ${popperClassnames}`}>
      <div className="flex w-[inherit]">
        <Menu.Button as="div" className={"w-[inherit]"}>
          {renderToggler ? (
            <>{renderToggler()}</>
          ) : (
            <Button text="Menu Popper" color="primary" outline />
          )}
        </Menu.Button>
      </div>

      <Menu.Items
        className={`absolute z-50 right-0 mt-2 ${PopperSizeClassMap[popperSize]} 
        origin-top-right bg-base-300 rounded shadow-2xl overflow-auto p-2`}
      >
        {items.map((item: ItemComponent) => (
          <Menu.Item key={uniqueId()}>
            {({ active }) => (
              <button
                className={`btn btn-md btn-ghost btn-block ${active ? "bg-base-content/20" : ""} 
                  justify-start gap-2`}
                onClick={item.onClick}
              >
                {item.icon}
                {item.text}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
});
MenuPopper.displayName = "MenuPopper";
