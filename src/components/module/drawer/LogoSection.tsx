import React from "react";
import { motion } from "framer-motion";
import { FinanceLogo30 } from "components/element/logo";
import { FinanceLogoBase30 as LogoBase } from "components/element/logo";

type LogoSectionProps = {
  collapse?: boolean;
};
export const LogoSection: React.FC<LogoSectionProps> = (props) => {
  const { collapse } = props;

  return (
    <div
      className="flex  flex-row 
      items-center 
      justify-center
      h-[70px]"
    >
      {!collapse && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <FinanceLogo30 />
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
          <LogoBase />
        </motion.div>
      )}
    </div>
  );
};