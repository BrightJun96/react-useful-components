import { useEffect, useState } from "react";
import { IEntireCheckProps } from "../types";

/**
 * @description
 * 전체 체크박스 옵션 관련한 컴포넌트입니다.
 * @returns
 */
const EntireCheck = ({ options, setOptions }: IEntireCheckProps) => {
  const [entireValue, setEntireValue] = useState(false);

  // 전체 체크박스 핸들러
  function onEntireCheckHandler() {
    setEntireValue(!entireValue);
  }

  // 전체 체크 여부에 따라 모든 옵션의 체크 여부를 결정합니다.
  useEffect(() => {
    setOptions(options.map((o) => ({ ...o, checked: entireValue })));
  }, [entireValue]);

  return (
    <label>
      <input
        type="checkbox"
        value={"전체"}
        onChange={onEntireCheckHandler}
        checked={entireValue}
      />
      전체
    </label>
  );
};

export default EntireCheck;
