import { useEffect, useMemo, useState } from "react";
import { IEntireCheckProps } from "../types";

/**
 * @description
 * 전체 체크박스 옵션 관련한 컴포넌트입니다.
 */
const EntireCheck = ({ options, setOptions }: IEntireCheckProps) => {
  const [entireCheck, setEntireCheck] = useState(false);

  // 전체 체크박스 핸들러입니다.
  function onEntireCheckHandler() {
    setEntireCheck(!entireCheck);
    setOptions(options.map((o) => ({ ...o, checked: !entireCheck })));
  }

  // 모든 체크박스 옵션이 체크되어있는지에 대한 여부
  const isAllChecked = useMemo(
    () => options.every((option) => option.checked),
    [options]
  );
  // 기존 옵션 중 모두 체크되어있다면 전체 옵션도 체크되도록하고 아니라면 전체 체크도 해제되게 합니다.
  useEffect(() => {
    if (isAllChecked) {
      setEntireCheck(true);
    } else {
      setEntireCheck(false);
    }
  }, [isAllChecked]);

  return (
    <label>
      <input
        type="checkbox"
        value={"전체"}
        onChange={onEntireCheckHandler}
        checked={entireCheck}
      />
      전체
    </label>
  );
};

export default EntireCheck;
