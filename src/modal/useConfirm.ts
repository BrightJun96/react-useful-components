import { useSetAtom } from "jotai";
import { confirmAtom, initConfirmAtom } from "./confirmAtom";
import { ICommonFunParams } from "./types";

const useConfirm = () => {
  const setAlert = useSetAtom(confirmAtom);

  const simpleAlert = (title: string) => {
    setAlert({ ...initConfirmAtom, isOpen: true, isConfirm: false, title });
  };

  const showAlert = ({ title, content, func }: ICommonFunParams) => {
    setAlert({
      ...initConfirmAtom,
      isOpen: true,
      isConfirm: false,
      title,
      content,
      func,
    });
  };

  const simpleConfirm = (title: string, func: () => void) => {
    setAlert({
      ...initConfirmAtom,
      isOpen: true,
      isConfirm: true,
      title,
      func,
    });
  };

  const showConfirm = ({ title, content, func }: ICommonFunParams) => {
    setAlert({
      ...initConfirmAtom,
      isOpen: true,
      isConfirm: true,
      title,
      content,
      func,
    });
  };

  const redAlert = (title: string, func: () => void) => {
    setAlert({
      ...initConfirmAtom,
      isOpen: true,
      isConfirm: true,
      isRed: true,
      title,
      func,
    });
  };

  const closeAlert = () => {
    setAlert(initConfirmAtom);
  };

  return {
    simpleAlert,
    showAlert,
    simpleConfirm,
    showConfirm,
    redAlert,
    closeAlert,
  };
};

export default useConfirm;
