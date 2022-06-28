import React, { Fragment, ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Button } from "../button/Button";

type ButtonPopperProps = {
  renderToggler?: () => ReactElement;
  children: React.ReactNode;
};
export const ButtonPopper: React.FC<ButtonPopperProps> = (props) => {
  const { renderToggler, children } = props;

  return (
    <Menu as="div" className={"relative"}>
      <div className="flex w-[inherit]">
        <Menu.Button as="div" className={"w-[inherit]"}>
          {renderToggler ? (
            <>{renderToggler()}</>
          ) : (
            <Button text="Menu Popper" color="primary" outline />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`absolute z-50 right-0 mt-2 
        origin-top-right bg-base-300 rounded shadow overflow-auto p-2
        focus:outline-none`}
        >
          {children}
        </div>
      </Transition>
    </Menu>
  );
};
