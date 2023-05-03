export interface ModalProps {
  children?: React.ReactNode;
  active: boolean;
  onHide: () => void;
  fullScreen?: boolean;
  blockBackdropClick?: boolean;
  hideClose?: boolean;
}
