export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  pill?: boolean;
  flat?: boolean;
  noOutline?: boolean;
  validator?: (value: string) => boolean;
  onValidated?: (value: string) => void;
  onValidationEvent?: (result: boolean) => void;
}
