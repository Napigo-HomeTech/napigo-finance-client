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

      <Transition as={Fragment}>
        <div
          className={`absolute border-[0.5px] border-base-content/20 z-50 right-0 mt-2 
        origin-top-right bg-base-300 rounded shadow overflow-auto p-2
        focus:outline-none`}
        >
          {children}
        </div>
      </Transition>
    </Menu>
  );
};
