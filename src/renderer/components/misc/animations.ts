const hover = {
    scale: 1.1,
  };
  const onclick = {
    scale: 0.9,
    rotate: [0, 270, 270,270]
  };
  const fadein = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      
      x: "-100vh",
      opacity: 0,
      transition: { duration: 0.5 }
    },
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
}

  export {hover,onclick,fadein,spring}