// 체크 밗스 옵션 타입입니다.
export interface ICheck {
  label: string;
  value: string;
  checked: boolean;
}

// setState를 prop로 넘겨주는 경우가 많기 때문에 특정 타입으로 지정합니다.
export type CommonSetState<T> = React.Dispatch<React.SetStateAction<T>>;

// 그룹 체크박스에서 공통되어 사용되는 속성값들입니다.
export interface ICommonProperty<T> {
  stateType: "object" | "single";
  stateKey: string;
  setState: CommonSetState<T>;
}

// CheckBoxGrop Props Type
export interface IPropsCheckGroup<T> extends ICommonProperty<T> {
  initOptions: ICheck[];
}

// useGroupCheckParentState 인자 타입입니다.
export interface IUseGroupCheckParentStateParams<T> extends ICommonProperty<T> {
  options: ICheck[];
}

// 전체 체크 옵션 컴포넌트 Props
export interface IEntireCheckProps {
  options: ICheck[];
  setOptions: React.Dispatch<React.SetStateAction<ICheck[]>>;
}
