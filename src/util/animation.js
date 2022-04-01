export const pageAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const enlarge = {
  hidden: {
    scale: 0.7,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    scale: 0.7,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const cardAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const cardsStaggerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.09,
    },
  },
};

export const welcomeAnimation = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    opacity: 0,
    scale: 0.5,
    transition: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
  },
};
