import { useEffect, useState } from "react";
import { ICheck } from "./types";

/**
 * @description
 * 그룹 체크박스 옵션 관련 훅입니다.
 * @returns options 옵션 상태값을 반환해줍니다.
 * @returns onCheckHandler 체크 박스 핸들러입니다.
 */
const useGroupCheckOption = (initOptions: ICheck[]) => {
  const [options, setOptions] = useState<ICheck[]>([]);

  // 체크박스를 클릭할 시, 작동할 핸들러입니다.
  function onCheckHandler(option: ICheck) {
    const newOptions = options.map((opt) =>
      opt.value === option.value ? { ...opt, checked: !opt.checked } : opt
    );
    setOptions(newOptions);
  }

  useEffect(() => {
    setOptions(initOptions);
  }, []);
  return { options, setOptions, onCheckHandler };
};

export default useGroupCheckOption;
