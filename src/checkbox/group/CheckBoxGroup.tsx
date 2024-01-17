import { IPropsCheckGroup } from "../types";
import useGroupCheckOption from "../useGroupCheckOption";
import useGroupCheckParentState from "../useGroupCheckParentState";
import EntireCheck from "./EntireCheck";

const mockInitOptions = [
  { label: "치킨", value: "chicken", checked: false },
  { label: "피자", value: "pizza", checked: false },
  { label: "밥", value: "rice", checked: false },
];
/**
 * @description
 * 여러개 체크박스를 관리하는 컴포넌트입니다.
 * @param initOptions 초기 옵션입니다.
 */
const CheckBoxGroup = <T,>({
  initOptions = mockInitOptions,
  stateKey,
  setState,
  stateType,
}: IPropsCheckGroup<T>) => {
  const { options, setOptions, onCheckHandler } =
    useGroupCheckOption(initOptions);

  // console.log("options :", options);

  useGroupCheckParentState<T>({
    stateKey,
    stateType,
    setState,
    options,
  });
  return (
    <div>
      <EntireCheck options={options} setOptions={setOptions} />
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option.value}
            onChange={() => onCheckHandler(option)}
            checked={option.checked}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxGroup;
