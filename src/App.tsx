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
  ButtonPopper,
} from "components/element";
import { FaCog, FaDoorOpen, FaUser } from "react-icons/fa";

const myOptions = [
  {
    value: "MONTH",
    text: "Month (s)",
  },
  {
    value: "YEAR",
    text: "Year (s)",
  },
  {
    value: "QUARTERLY",
    text: "Quarterly",
  },
];
function App() {
  return (
    <div className="flex flex-col gap-4 w-[500px] mx-auto h-auto items-center justify-center  py-20">
      <Button text="Hello World" variant="block" />
      <AvatarButton ringColor="primary" size="sm" />

      <MenuPopper
        popperClassnames=""
        popperSize="md"
        renderToggler={() => <AvatarButton size="sm" ringColor="primary" />}
        items={[
          {
            text: "profile",
            icon: <FaUser />,
            onClick: (ev: React.MouseEvent) => {},
          },
          {
            text: "Setting",
            icon: <FaCog />,
            onClick: (ev: React.MouseEvent) => {},
          },
          {
            text: "Logout",
            icon: <FaDoorOpen />,
            onClick: (ev: React.MouseEvent) => {},
          },
        ]}
      />

      <ButtonPopper />

      <Avatar withRing={false} size="2xl" />
      <Checkbox label="Please Login" color="accent" />
      <InputSelect
        placeholder="Help me"
        options={myOptions}
        defaultSelected={myOptions[0]}
        name="Amount Select"
        toggleId="id 2"
      />
      <InputSelect
        placeholder="Help me"
        options={myOptions}
        defaultSelected={myOptions[0]}
        name="Saa Select"
        toggleId="id 1"
      />
      <SelectButton defaultText="Hello world" selected={{ value: "", text: "Hanafi" }} />
      <TextField name="ue" type="text" label="Hello Dear" placeholder="Text Me" />
      <CurrencyField name="Amount" label="Total Amount" placeholder="0.00" />
      <Toggle label="Toggle me" color="primary" />
    </div>
  );
}

export default App;
