const buttonTemplate = {
  main: "relative focus:ring-2 focus:ring-offset-2 overflow-hidden transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none disabled:select-none",
  sizes: {
    xs: "px-4 py-0.5 text-sm font-semibold rounded-md",
    sm: "px-6 py-1 text-sm font-semibold rounded-md;",
    md: "px-8 py-1.5 text-base font-semibold rounded-md",
    lg: "px-10 py-2 text-lg font-semibold rounded-lg",
    xl: "px-12 py-3 text-xl font-semibold rounded-lg",
  },
  default: {
    main: "text-white border hover:bg-opacity-80 active:bg-opacity-90",
    colors: {
      primary: "bg-primary border-primary focus:ring-primary",
      secondary: "bg-secondary border-secondary focus:ring-secondary",
      success: "bg-success border-success focus:ring-success",
      error: "bg-error border-error focus:ring-error",
      warning: "bg-warning border-warning focus:ring-warning",
      info: "bg-info border-info focus:ring-info",
      dark: "bg-dark border-dark focus:ring-dark",
    },
  },
  bordered: {
    main: "border bg-transparent hover:text-white",
    colors: {
      primary:
        "border-primary text-primary hover:bg-primary focus:ring-primary",
      secondary:
        "border-secondary text-secondary hover:bg-secondary focus:ring-secondary",
      success:
        "border-success text-success hover:bg-success focus:ring-success",
      error: "border-error text-error hover:bg-error focus:ring-error",
      warning:
        "border-warning text-warning hover:bg-warning focus:ring-warning",
      info: "border-info text-info hover:bg-info focus:ring-info",
      dark: "border-dark text-dark hover:bg-dark focus:ring-dark",
    },
  },
  flat: {
    main: "bg-opacity-20 border-none hover:bg-opacity-40 active:bg-opacity-60",
    colors: {
      primary: "bg-primary focus:ring-primary text-primary",
      secondary: "bg-secondary focus:ring-secondary text-secondary",
      success: "bg-success focus:ring-success text-success",
      error: "bg-error focus:ring-error text-error",
      warning: "bg-warning focus:ring-warning text-warning",
      info: "bg-info focus:ring-info text-info",
      dark: "bg-dark focus:ring-dark text-dark",
    },
  },
  square: "rounded-none",
  pill: "rounded-full",
  block: "block w-full",
  loading: "pointer-events-none cursor-pointer",
  group: {
    main: "inline-flex items-center",
    children: {
      main: "focus:z-[2]",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none",
    },
  },
};

export default buttonTemplate;
