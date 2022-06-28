import React, { useCallback, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Button } from "../button/Button";
import { ArrowNavManager, ClickAwayListener } from "../../common";

type Option = {
  value: string;
  text: string;
};

interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  defaultSelected: Option;
  onSelectChange?: (value: Option) => void;
  label?: string;
  name: string;
  toggleId: string;
  editable?: boolean;
}
/**
 * TODO: To add key board navigation on the dropdown
 * @param props
 * @returns
 */
export const InputSelect: React.FC<InputSelectProps> = (props) => {
  const {
    options,
    defaultSelected,
    onSelectChange,
    label,
    editable = true,
    name,
    toggleId,
    ...inputProps
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option>(defaultSelected);

  useCallback(() => {
    onSelectChange?.(selected);
  }, [onSelectChange, selected]);

  const onItemClick = (ev: React.MouseEvent, item: Option) => {
    if (open) {
      const el = document.getElementById(toggleId ?? "");
      el?.focus();
      setSelected(item);
      setOpen(false);
    }
  };

  const onToggle = (ev: React.MouseEvent) => {
    setOpen(!open);
  };

  return (
    <div className={`w-full ${editable ? "" : "pointer-events-none"}`}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div className="relative w-[inherit]">
          <div className="form-control">
            {label && (
              <label className="label" htmlFor={name}>
                <span className="label-text">{label}</span>
              </label>
            )}

            <div className="input-group flex flex-row">
              <input
                {...inputProps}
                id={name}
                type="text"
                onFocus={() => setOpen(false)}
                className="input bg-base-200 flex flex-1 min-w-[50px]"
              />
              <Button
                onClick={onToggle}
                size="md"
                id={toggleId}
                color="primary"
                text={selected.text}
                tabIndex={0}
                role="menubar"
                renderIcon={() => (editable ? <FaCaretDown /> : <></>)}
                iconPosition="right"
              />
            </div>
          </div>

          <div
            className={`absolute ${
              open ? "inline-flex" : "hidden"
            } w-[170px] h-auto bg-base-300 shadow mt-[5px] right-0 z-20 rounded
          p-2`}
          >
            <ul className="list-none m-0 p-0" role="menu">
              <ArrowNavManager active={open} id={name}>
                {options.map((item: Option) => {
                  return (
                    <li
                      data-name="input-select-item"
                      tabIndex={0}
                      id={item.value}
                      key={item.value}
                      role="button"
                      onClick={(ev: React.MouseEvent) => onItemClick(ev, item)}
                      className={`btn btn-block btn-ghost active:bg-primary focus:bg-base-content/20 focus:outline-none`}
                    >
                      {item.text}
                    </li>
                  );
                })}
              </ArrowNavManager>
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
