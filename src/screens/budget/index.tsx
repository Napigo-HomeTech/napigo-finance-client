import { Button, ButtonPopper, MenuPopper } from "components/element";
import React from "react";
import { FaUser } from "react-icons/fa";

const BudgetScreen: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[500px] w-full">
      <p className="font-bold text-2xl">Hello Budget</p>

      <ButtonPopper renderToggler={() => <Button text="test" />}>
        <div>Hello There</div>
      </ButtonPopper>
      <MenuPopper
        renderToggler={() => <Button text="test" />}
        items={[
          { text: "Item One", icon: <FaUser />, onClick: () => {} },
          { text: "Item One", icon: <FaUser />, onClick: () => {} },
          { text: "Item One", icon: <FaUser />, onClick: () => {} },
        ]}
      />
    </div>
  );
};

export default BudgetScreen;
