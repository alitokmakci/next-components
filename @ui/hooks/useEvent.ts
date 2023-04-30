import { useEffect } from "react";

type useEventHandlerFunction = (e: Event) => void;

type useEventRef<T extends HTMLElement> = React.RefObject<T>;

export default function useEvent<T extends HTMLElement>(
  ref: useEventRef<T> | string,
  event: keyof HTMLElementEventMap,
  handler: useEventHandlerFunction,
  options?: AddEventListenerOptions
) {
  useEffect(() => {
    let element: T | null | undefined | Element;

    if (typeof ref === "string") {
      element = document.querySelector(ref);
    } else {
      element = ref.current;
    }

    if (!element) {
      return () => null;
    }

    element.addEventListener(event, handler, options);

    return () => {
      element?.removeEventListener(event, handler);
    };
  }, [handler, options, ref, event]);
}
