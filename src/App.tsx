import React from "react";
import {
  Button,
  AvatarButton,
  Avatar,
  Checkbox,
  InputSelect,
  SelectButton,
  TextField,
  CurrencyField,
  Toggle,
  MenuPopper,
} from "components/element";
import { FaAdjust, FaBed, FaCog, FaDoorOpen } from "react-icons/fa";

const myOptions = [
  {
    value: "MONTH",
    text: "Month (s)",
  },
  {
    value: "YEAR",
    text: "Year (s)",
  },
];
function App() {
  return (
    <div className="flex flex-col gap-4 w-[400px] mx-auto h-screen items-center justify-center border p-3">
      <Button text="Hello World" variant="block" />
      <AvatarButton ringColor="primary" size="sm" />

      <MenuPopper
        popperClassnames=""
        renderToggler={() => (
          <Button
            size="md"
            color="primary"
            variant="normal"
            text="Hello"
            renderIcon={() => <FaAdjust />}
          />
        )}
        renderItems={[
          (active: boolean) => (
            <Button
              size="md"
              color="ghost"
              className={`${active ? "bg-base-content/20" : ""}`}
              variant="block"
              text="Profile"
              textUpperCase={false}
              contentAlignment="left"
              renderIcon={() => <FaBed />}
            />
          ),
          (active: boolean) => (
            <Button
              size="md"
              color="ghost"
              className={`${active ? "bg-base-content/20" : ""}`}
              variant="block"
              text="Setting"
              textUpperCase={false}
              contentAlignment="left"
              renderIcon={() => <FaCog />}
            />
          ),
          (active: boolean) => (
            <Button
              size="md"
              color="ghost"
              className={`${active ? "bg-base-content/20" : ""}`}
              variant="block"
              text="Logout"
              textUpperCase={false}
              contentAlignment="left"
              renderIcon={() => <FaDoorOpen />}
            />
          ),
        ]}
      />

      <Avatar withRing={false} size="2xl" />
      <Checkbox label="Please Login" color="accent" />
      <InputSelect placeholder="Help me" options={myOptions} defaultSelected={myOptions[0]} />
      <SelectButton defaultText="Hello world" selected={{ value: "", text: "Hanafi" }} />
      <TextField name="ue" label="Hello Dear" placeholder="Text Me" />
      <CurrencyField name="Amount" label="Total Amount" placeholder="0.00" />
      <Toggle label="Toggle me" color="primary" />
    </div>
  );
}

export default App;
