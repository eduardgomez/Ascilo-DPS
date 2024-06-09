import { KeyboardTypeOptions } from "react-native";

export type SelectTextInputProps = {
  label: string;
	mode: "outlined" | "flat";
  options: Array<{ label: string, value: string }>;
  value?: string;
  onChange?: (value: any) => void;
  error?: string;
  onBlur?: any;
}