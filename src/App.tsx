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
  NapigoLogo,
  FinanceLogo,
  CalendarLogo,
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
      <NapigoLogo scale={5} />
      <FinanceLogo scale={5} />
      <CalendarLogo scale={5} />
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

      <ButtonPopper renderToggler={() => <Button text="Button popper" variant="normal" />}>
        <div className="w-[400px] h-[auto] overflow-auto">
          <ul className="list-none p-0">
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
            <li className="p-2 px-0  border-b-[1px] border-base-content/10">
              <Button text="Hello" variant="block" color="ghost" className="py-10 items-center" />
            </li>
          </ul>
        </div>
      </ButtonPopper>

      <Avatar withRing={false} size="2xl" />
      <Checkbox label="Please Login" color="accent" />
      <InputSelect
        label="Username"
        placeholder="example@example.com"
        options={myOptions}
        defaultSelected={myOptions[0]}
        name="Amount Select"
        toggleId="id 2"
      />
      <InputSelect
        label="Password"
        placeholder="Enter Password"
        options={myOptions}
        defaultSelected={myOptions[0]}
        name="Saa Select"
        toggleId="id 1"
      />
      <SelectButton
        label="Select"
        defaultText="Hello world"
        selected={{ value: "", text: "Hanafi" }}
      />
      <TextField name="ue" type="text" label="Description" placeholder="I owe My Mother..." />
      <CurrencyField name="Amount" label="Total Amount" placeholder="0.00" />
      <Toggle label="Toggle me" color="primary" />
    </div>
  );
}

export default App;
