import React, { Fragment, ReactElement } from "react";
import { uniqueId } from "lodash";
import { Menu } from "@headlessui/react";
import { Button } from "../button/Button";

export type ItemComponent = (active: boolean) => ReactElement;

type MenuPopperProps = {
  renderToggler?: () => ReactElement;
  renderItems: ItemComponent[];
  popperClassnames?: string;
};
export const MenuPopper: React.FC<MenuPopperProps> = (props) => {
  const { renderToggler, renderItems, popperClassnames } = props;
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
        className={
          "absolute z-50 right-0 mt-2 w-56 origin-top-right bg-base-300 rounded shadow-2xl overflow-auto p-2"
        }
      >
        {renderItems.map((item: ItemComponent) => (
          <Menu.Item key={uniqueId()}>
            {({ active }) => <Fragment>{item(active)}</Fragment>}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
