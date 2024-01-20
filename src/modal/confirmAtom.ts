import { atom } from "jotai";

export const initConfirmAtom = {
  isOpen: false,
  isConfirm: false,
  isRed: false,
  title: "",
  content: "",
  func: () => {},
};

export const confirmAtom = atom(initConfirmAtom);
