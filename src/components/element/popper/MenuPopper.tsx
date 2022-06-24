import React from "react";
import { Menu } from "@headlessui/react";
import { Button } from "../button/Button";
import { FaBed, FaSalesforce } from "react-icons/fa";

type MenuPopperProps = {};
export const MenuPopper: React.FC<MenuPopperProps> = (props) => {
  return (
    <Menu as="div" className={"relative"}>
      <div>
        <Menu.Button>
          <Button id="menu popper" role={"menubar"} text="Menu Popper" color="primary" outline />
        </Menu.Button>
      </div>

      <Menu.Items
        className={
          "absolute right-0 mt-2 w-56 origin-top-right bg-base-300 rounded shadow-2xl overflow-auto p-2"
        }
      >
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${active ? "bg-primary" : ""} rounded min-h-[20px] flex items-center p-0`}
            >
              <Button
                size="md"
                color="ghost"
                variant="block"
                text="Hello Item"
                contentAlignment="left"
                renderIcon={() => <FaBed />}
              />
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${active ? "bg-primary" : ""} rounded min-h-[20px] flex items-center p-0`}
            >
              <Button
                size="md"
                color="ghost"
                variant="block"
                text="Hello Item"
                contentAlignment="left"
                renderIcon={() => <FaSalesforce />}
              />
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
