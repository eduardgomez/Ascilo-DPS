import { KeyboardTypeOptions } from "react-native";

export type CustomTextInputProps = {
  label: string;
	mode: "outlined" | "flat";
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: any;
  disabled?: boolean;
}