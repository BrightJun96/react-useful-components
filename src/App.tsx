import { useState } from "react";
import CheckBoxGroup from "./checkbox/group/CheckBoxGroup";
import { ICheck } from "./checkbox/types";
import {IHeader, IRow} from "./table/types";
import Table from "./table/Table";

const App = () => {
  const foodOptions: ICheck[] = [
    { label: "치킨", value: "chicken", checked: true },
    { label: "피자", value: "pizza", checked: true },
    { label: "밥", value: "rice", checked: false },
  ];

  const [form, setForm] = useState({
    food: foodOptions,
  });


  const headers: IHeader[] = [
    {
      text: '',
      value: 'checked',
      selectable: true,
    },
    {
      text: 'NO',
      value: 'order',
    },
    {
      text: '이름',
      value: 'name',
    },
    {
      text: '나이',
      value: 'age',
    },
  ];

  const rows: IRow[] = [
    {
      name: '철준',
      age: 26,
      id: 1,
      order: 1,
    },
    {
      name: '성진',
      age: 30,
      id: 2,
      order: 2,
    },
    {
      name: '철준',
      age: 26,
      id: 3,
      order: 3,
    },
  ];

  const [selection, setSelection] = useState<IRow[]>([]);

  return (
    <div>
      <CheckBoxGroup<{ food: ICheck[] }>
        initOptions={form.food}
        stateType="object"
        stateKey="food"
        setState={setForm}
      />
      <Table headers={headers} rows={rows} onSelect={setSelection} />
    </div>
  );
};

export default App;
