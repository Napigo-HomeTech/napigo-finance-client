import React from "react";
import { motion } from "framer-motion";
import {
  LogoContainer,
  FinanceLogo30,
  FinanceLogoBase30 as LogoBase,
} from "components/element/logo";
import { Button, ButtonPopper } from "components/element";
import { UserMenuDropdown } from "./UserMenuDropdown";
import { FaCaretDown } from "react-icons/fa";

type LogoSectionProps = {
  collapse?: boolean;
};
export const LogoSection: React.FC<LogoSectionProps> = (props) => {
  const { collapse } = props;

  return (
    <div
      className="flex  
      flex-row 
      items-center 
      justify-center
      h-[70px] 
      border-b-[0.5px] 
      border-base-content/20
      mb-2"
    >
      {!collapse && (
        <motion.div
          className="flex flex-row items-center justify-between w-full px-[10px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LogoContainer type="static">
            <FinanceLogo30 />
          </LogoContainer>

          <ButtonPopper
            popperPosition="left"
            renderToggler={() => (
              <Button renderIcon={() => <FaCaretDown />} size="md" variant="square" color="ghost" />
            )}
          >
            <UserMenuDropdown />
          </ButtonPopper>
        </motion.div>
      )}
      {collapse && (
        <motion.div
          initial={{ opacity: 0, rotate: "180deg" }}
          animate={{ opacity: 1, rotate: "360deg" }}
          transition={{
            rotate: {
              delay: 0.2,
            },
          }}
        >
          <ButtonPopper
            popperPosition="left"
            renderToggler={() => (
              <LogoContainer type="button">
                <LogoBase />
              </LogoContainer>
            )}
          >
            <UserMenuDropdown />
          </ButtonPopper>
        </motion.div>
      )}
    </div>
  );
};
