export type DatePickerProps = {
  label: string;
	mode: "outlined" | "flat";
  placeholder?: string;
  minimumDate?: Date
  maximumDate?: Date
  error?: string;
  value?: Date
  onChangeDate?: (date: any) => void
}
