export type CustomButtonProps = {
  onPress?: ((e: GestureResponderEvent) => void) | undefined
  text: string
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal"
}