import { useAtomValue } from "jotai";
import { confirmAtom } from "./confirmAtom";
import useConfirm from "./useConfirm";

/**
 * @description
 * 확인,취소 전용 모달입니다.
 */
const ConfirmModal = () => {
  const { isOpen, isConfirm, isRed, title, content, func } =
    useAtomValue(confirmAtom);

  const { closeAlert } = useConfirm();

  const handleEvent = () => {
    if (func) func();
    closeAlert();
  };

  if (!isOpen) return null;

  return <div></div>;
};

export default ConfirmModal;
