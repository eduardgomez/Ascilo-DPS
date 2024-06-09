import { Doctor } from "@models/doctor";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types"

export type DoctorCardProps = {
  navigation: StackNavigationProp<ScreenStackList, "DoctoresScreen">,
  doctor: Doctor
}