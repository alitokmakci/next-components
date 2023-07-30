const avatarTemplate = {
  main: "inline-flex items-center justify-center font-semibold tracking-wide relative",
  radius: {
    default: "rounded-md",
    circle: "rounded-full",
    square: "rounded-none",
  },
  sizes: {
    xs: "w-8 h-8 text-base",
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-14 h-14 text-xl",
    xl: "w-16 h-16 text-2xl",
  },
  default: {
    main: "",
    colors: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      success: "bg-success text-white",
      error: "bg-error text-white",
      warning: "bg-warning text-white",
      info: "bg-info text-white",
      dark: "bg-dark text-white",
      white: "bg-white text-text",
    },
  },
  flat: {
    main: "bg-opacity-20",
    colors: {
      primary: "bg-primary text-primary",
      secondary: "bg-secondary text-secondary",
      success: "bg-success text-success",
      error: "bg-error text-error",
      warning: "bg-warning text-warning",
      info: "bg-info text-info",
      dark: "bg-dark text-dark",
      white: "bg-white text-text",
    },
  },
  image: "w-full h-full object-cover rounded-[inherit]",
  dot: {
    main: "absolute flex items-center justify-center min-w-[1rem] min-h-[1rem] text-[0.7rem] leading-[0.9rem] rounded-full border-2 border-white px-1",
    position: {
      "top-left": "-top-2 -left-2",
      "top-right": "-top-2 -right-2",
      "bottom-left": "-bottom-2 -left-2",
      "bottom-right": "-bottom-2 -right-2",
    },
  },
};

export default avatarTemplate;
