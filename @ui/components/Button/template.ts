const buttonTemplate = {
  main: "relative overflow-hidden transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none disabled:select-none",
  sizes: {
    xs: "px-4 py-0.5 text-sm font-semibold rounded-md",
    sm: "px-6 py-1 text-sm font-semibold rounded-md;",
    md: "px-8 py-1.5 text-base font-semibold rounded-md",
    lg: "px-10 py-2 text-lg font-semibold rounded-lg",
    xl: "px-12 py-3 text-xl font-semibold rounded-lg",
  },
  colors: {
    primary:
      "bg-primary text-white border border-primary hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2",
    secondary:
      "bg-secondary text-white border border-secondary hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-secondary focus:ring-offset-2",
    success:
      "bg-success text-white border border-success hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-success focus:ring-offset-2",
    error:
      "bg-error text-white border border-error hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-error focus:ring-offset-2",
    warning:
      "bg-warning text-white border border-warning hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-warning focus:ring-offset-2",
    info: "bg-info text-white border border-info hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-info focus:ring-offset-2",
    dark: "bg-dark text-white border border-dark hover:bg-opacity-80 active:bg-opacity-90 focus:ring-2 focus:ring-dark focus:ring-offset-2",
  },
  bordered: {
    main: "border bg-transparent",
    colors: {
      primary:
        "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
      secondary:
        "border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white",
      success:
        "border border-success bg-transparent text-success hover:bg-success hover:text-white",
      error:
        "border border-error bg-transparent text-error hover:bg-error hover:text-white",
      warning:
        "border border-warning bg-transparent text-warning hover:bg-warning hover:text-white",
      info: "border border-info bg-transparent text-info hover:bg-info hover:text-white",
      dark: "border border-dark bg-transparent text-dark hover:bg-dark hover:text-white",
    },
  },
  flat: {
    main: "bg-opacity-20 border-none hover:bg-opacity-40 active:bg-opacity-60",
    colors: {
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      error: "text-error",
      warning: "text-warning",
      info: "text-info",
      dark: "text-dark",
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
