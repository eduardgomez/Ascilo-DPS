import { Especialidad } from "@models/Especialidad";
import { Doctor } from "../../models/doctor";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenStackList } from "@routes/types";

export type ListScreenNavigation = StackNavigationProp<ScreenStackList, "DoctoresScreen">

export type FormScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorFormScreen">
export type DoctorHorarioFormScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorHorarioFormScreen">

export type DoctorScreenNavigation = StackNavigationProp<ScreenStackList, "DoctorScreen">

export type DoctoresStore = {
  doctores: Doctor[]
  setDoctores: (doctores: Doctor[]) => void
  especialidades: Especialidad[]
  setEspecialidades: (especialidades: Especialidad[]) => void
}

export type FiltrosDoctor = {
  nombre: string
  especialidad: string
  email: string
  disponible: string
}

export type DoctorRouteProps = {
  route: {
    doctorId?: string
  }
}
