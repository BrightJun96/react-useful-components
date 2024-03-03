import { Dispatch, SetStateAction, useEffect, useState } from "react";
import T from './styles';
import { IHeader, IRow } from './types';

interface Props{
    headers: IHeader[];
    rows: IRow[];
    onSelect: Dispatch<SetStateAction<IRow[]>>
}
const Table = (p:Props) => {
    const { headers, rows,onSelect } = p

      if (!headers || !headers.length) {
            throw new Error('<DataTable /> headers is required.')
        }

    const headerKey = headers.map((h) => h.value)


    const [selection, setSelection] = useState<IRow[]>([]);
    const onChangeSelect = (value: IRow) => {
        
        const observeEle = selection.find((s) => s.id === value.id)?.id??null
        
        if (observeEle) {
            
            setSelection((p) => p.filter((i) => i.id!==observeEle))
        }
        else {
            setSelection((p) => [...p,value])
        }

    };

  const onChangeSelectAll : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {

    
        setSelection(rows);
        onSelect(rows)
    } else {
        setSelection([]);
        onSelect([])
    }
  };
    
    useEffect(() => {
        onSelect(selection)
     }, [
        selection
    ])
    

    
    return (
        <T.Container height='80vh'>
        <T.Table>
            <T.THead>
                <tr>
                    {headers.map((h, i) =>
                        <T.THeadCell key={i}>
                            {h.selectable ? <input type='checkbox' checked={ selection.length===rows.length} onChange={onChangeSelectAll}/> :h.text}
                        </T.THeadCell>)}
                </tr>
            </T.THead>
            <tbody>
                {rows.length !== 0 ?
                    rows.map((row, index) =>
                        <tr key={index}>
                            {headerKey.map((key) => 
                                <T.TRowCell key={key+index}>
                                    {key === "checked" ?
                                    <input
                                    type="checkbox"
                                    checked={[...selection].map((s) => s.id).includes(row.id)}
                                    onChange={() => onChangeSelect(row)}   
                                    /> : row[key]}
                                </T.TRowCell>
                            )}
                        </tr>)
                   :null}
            </tbody>
        </T.Table>
        </T.Container>
    );
};

export default Table;