import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import { uniqueId } from "lodash";

type Option = {
  value: string | number;
  text: string;
};
type SelectProps = {
  options: Option[];
  label?: string;
  name: string;
};
export const Select: React.FC<SelectProps> = (props) => {
  const { options, label, name } = props;

  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-full">
        <div className="form-control">
          {label && (
            <label className="label" htmlFor={name}>
              <span className="label-text">{label}</span>
            </label>
          )}

          <Listbox.Button
            id={name}
            className={`input px-4 py-4 bg-base-200 w-full flex flex-row
          justify-between items-center
          focus:bg-base-200 hover:bg-base-200`}
          >
            <span className="font-bold">
              {selected === null ? "Please Select" : selected?.text}
            </span>

            <span className="pointer-events-none inset-y-0 right-0 flex items-center">
              <FaCaretDown />
            </span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={
              "absolute border-[0.5px] border-base-content/20 z-50 bg-base-300 w-full mt-2 rounded p-2 focus:outline-none shadow-xl"
            }
          >
            {options.map((item: Option, index) => {
              return (
                <Listbox.Option
                  value={item}
                  key={uniqueId()}
                  className={({ active, selected }) =>
                    `px-2 py-3 rounded btn-block btn-ghost justify-start ${
                      active ? "bg-base-content/20" : ""
                    }`
                  }
                >
                  <div>{item.text}</div>
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
