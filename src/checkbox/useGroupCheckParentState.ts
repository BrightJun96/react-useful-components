import { useEffect, useMemo } from "react";
import { IUseGroupCheckParentStateParams } from "./types";

/**
 * @description
 * 상위에서 내려준 state값과 상호작용하기 위한 훅입니다.
 * 상위 컴포넌트의 state와 setState를 받아 상위 컴포넌트의 state값에 체크박스 options 값으로 동기화해줍니다.
 */
const useGroupCheckParentState = <T>({
  stateType,
  stateKey,
  setState,
  options,
}: IUseGroupCheckParentStateParams<T>) => {
  // 체크된 값들의 value값만 추출합니다.
  const checkedValues = useMemo(
    () =>
      options.reduce(
        (acc, option) => (option.checked ? [...acc, option.value] : acc),
        [] as unknown[]
      ),
    [options]
  );

  useEffect(() => {
    switch (stateType) {
      case "object":
        setState((p) => ({ ...p, [stateKey]: checkedValues }));
        break;
      case "single":
        setState(checkedValues as T);
        break;
      default:
    }
  }, [checkedValues, stateType]);
};

export default useGroupCheckParentState;
