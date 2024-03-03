import { useState } from "react";
import CheckBoxGroup from "./checkbox/group/CheckBoxGroup";
import { ICheck } from "./checkbox/types";
import {IHeader, IRow} from "./table/types";
import Table from "./table/Table";
import {SideNav} from "./side-navigation";
import TextField from "./text-field/TextField";

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

  const [text,setText] = useState("")
  return (
    <div>
      <CheckBoxGroup<{ food: ICheck[] }>
        initOptions={form.food}
        stateType="object"
        stateKey="food"
        setState={setForm}
      />
      <TextField type={"text"} label={"아이디"}
                 placeholder={"아이디를 입력하세요"}
                 name={"id"} value={text} onChange={(name, value) => setText(value) }
                 valid={{
        message:"sdfsdf",
        async validator() {
          return true
        }}}
        initField={() => setText("")}/>
      <SideNav/>
      <Table headers={headers} rows={rows} onSelect={setSelection} />
    </div>
  );
};

export default App;
