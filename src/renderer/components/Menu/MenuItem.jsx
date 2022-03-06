import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const gotoPage = (path, navigate) => {
  navigate(path);
};
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const pages = ["Dashboard", "Customers","Invoices", "Quotes", "Settings"];
const icons = ["fa-brands fa-elementor","fa-solid fa-users","fa-solid fa-receipt","fa-solid fa-file-invoice","fa-solid fa-cog"];

export const MenuItem = ({ i, toggle }) => {
  const navigate = useNavigate();
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>{ 
        gotoPage(`/${pages[i]}`, navigate)
      }
    }
    >
      <div className="icon-placeholder" ><i className={icons[i]}></i></div>
      <div className="text-placeholder" ><span className="text">{pages[i]}</span></div>
    </motion.li>
  );
};
