import { CustomModalProps } from "@components/CustomModal/types";
import { FiltrosDoctor } from "@modules/Doctores/types";

export interface FiltrosModalProps extends CustomModalProps {
  especialidadesOptions: Array<{
    label: string;
    value: string;
  }>,
  filtros: FiltrosDoctor,
  aplicarFiltros: () => void,
  limpiarFiltros: () => void,
  setFiltros: (filtros: FiltrosDoctor) => void,
}
