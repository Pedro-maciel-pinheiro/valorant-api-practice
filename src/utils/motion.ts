import { Variants } from "framer-motion";

export const smoothTransition = {
  hidden: {
    opacity: 0.5,
    transition: {
      delay: 0,
      duration: 1,
      type: "spring",
      stiffness: 30,
      damping: 20,
      mass: 0.5,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 0.5,
    },
  },
};

export const letterVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: (delay: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  }),
};

export function underlineVariant(duration: number) {
  return {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: duration,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
}
export function underlineHeight(duration: number) {
  return {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        delay: 0.5,
        duration: duration,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
}

export function getTransitionProps(delay: number) {
  return {
    transition: {
      delay: delay,
      duration: 0.2, // Increase duration for a smoother transition
      type: "spring",
      stiffness: 60, // Lower stiffness for a smoother, less rigid spring
      damping: 15, // Increase damping to reduce oscillation
      mass: 0.2, // Adjust mass to control the inertia of the spring
    },
  };
}

export function slideInFromLeft(delay: number): Variants {
  return {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}
export function slideInFromRight(delay: number) {
  return {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}

export function slideInFromTop(delay: number) {
  return {
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export const fadeInSlider = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: (index: number ) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 40,
      damping: 15,
      mass: 0.5,
    },
  }),
};

export function scrollYHidden() {
  return {
    hidden: {
      y: -50,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
  };
}

export function fadeIn(delay: number) {
  return {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}
