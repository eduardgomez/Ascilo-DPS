export interface CustomModalProps {
  visible: boolean;
  hideModal: () => void;
  children?: React.ReactNode;
  title?: string;
}
