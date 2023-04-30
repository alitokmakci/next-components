import { useEffect } from "react";

type ClickOutsideHandler = () => void;

export default function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: ClickOutsideHandler
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
