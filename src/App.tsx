import {ChangeEvent,useState,FC} from 'react';
import styled from "styled-components";

export const App: FC=()=>{
  const [text,setText]=useState<string>("");
  const[memos,setMemos]=useState<string[]>([]);
  const OnchangeText=(e:ChangeEvent<HTMLInputElement>)=>setText(e.target.value);
  const onClickAdd=()=>{
    const newMemos=[...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete=(index:number)=>{
    const newMemos=[...memos];
    newMemos.splice(index,1);
    setMemos(newMemos);
  };

  return(
    <div>
      <h1>メモ記入欄</h1>
      <input type="text" value={text} onChange={OnchangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <Scontainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo,index)=>(
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={()=> onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </Scontainer>
    </div>
  );
};

const SButton=styled.button`
  margin-left: 16px;
  `;
const Scontainer=styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
  `;
const SMemoWrapper=styled.div`
  display: flex;
  align-items: center;
  `;

/* import ReactDOM from 'react-dom'
import { defaultMethod } from 'react-router-dom/dist/dom';
import './index.css'
import { RouterConfig } from "./RouterConfig";

ReactDOM.render(
  <React.StrictMode>
   <RouterConfig />
  </React.StrictMode>,
  document.getElementById('root')
) */
export default App;