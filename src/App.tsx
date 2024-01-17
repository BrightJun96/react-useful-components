import { useState } from "react";
import CheckBoxGroup from "./checkbox/group/CheckBoxGroup";
import { ICheck } from "./checkbox/types";

const App = () => {
  const foodOptions: ICheck[] = [
    { label: "치킨", value: "chicken", checked: false },
    { label: "피자", value: "pizza", checked: false },
    { label: "밥", value: "rice", checked: false },
  ];

  const [form, setForm] = useState({
    food: foodOptions,
  });
  return (
    <div>
      <CheckBoxGroup<{ food: ICheck[] }>
        initOptions={form.food}
        stateType="object"
        stateKey="food"
        setState={setForm}
      />
    </div>
  );
};

export default App;
