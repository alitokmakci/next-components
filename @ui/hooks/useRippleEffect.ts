import { uiConfig } from "@ui/ui.config";
import { useEffect } from "react";

export default function useRippleEffect(querySelector: string) {
  const listener = (event: Event) => {
    const ripple = (event.target as HTMLButtonElement).getElementsByClassName(
      "ripple"
    )[0];

    if (ripple) {
      ripple.remove();
    }

    const circle = document.createElement("span");
    const diameter = Math.max(
      (event.target as HTMLButtonElement).clientWidth,
      (event.target as HTMLButtonElement).clientHeight
    );
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      (event as MouseEvent).clientX -
      ((event.target as HTMLButtonElement).offsetLeft + radius)
    }px`;
    circle.style.top = `${
      (event as MouseEvent).clientY -
      ((event.target as HTMLButtonElement).offsetTop + radius)
    }px`;
    circle.classList.add("ripple");

    (event.target as HTMLButtonElement).appendChild(circle);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(querySelector);

    elements.forEach((element) => element.addEventListener("click", listener));

    return () => {
      elements.forEach((element) =>
        element.removeEventListener("click", listener)
      );
    };
  }, [querySelector]);
}
