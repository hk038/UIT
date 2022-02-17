import React,{useState} from "react"; 
import logo from './logo.svg';
import './App.css';

function List() {
  
  const [list, setlist] = useState(["123","asd","sdfsd","sdvxcv","sfdsf"]);
   const [list1, setlist1] = useState([
     "ffaffasf",
     "232323",
     "4345",
     "234123",
   "zxszxds",
   ]);
  
  
  
  
  
  
  return (
    <div className="List">
      <ul>
        {list.map((content, inex) =>(
          <li key={'list-1-${index}'}>{content}</li>

        )) }
         <hr />
        {list1.map((content,index) => {

           console.log(content);
           return <li key={'list-2-${index}'}>{content}</li>;

        
        })} 
        </ul>
    </div>
  );
}

export default List;