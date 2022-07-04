import React from "react";
import { motion } from "framer-motion";
import { NapigoLogo30 as LogoFull } from "components/element/logo";

type LogoSectionProps = {
  collapse?: boolean;
};
export const LogoSection: React.FC<LogoSectionProps> = (props) => {
  const { collapse } = props;

  return (
    <div
      className=" flex  flex-row 
  items-center 
  justify-center
  h-[70px]"
    >
      {!collapse && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LogoFull />
        </motion.div>
      )}
    </div>
  );
};
