import Addinfo from "./components/AddInfo";
import Box from "./components/Box";
import './App.css';
// import Data from './data.json';
import { useCallback, useEffect, useState } from "react";
//  console.log(Data)

function App() {
  const [list, setList] = useState([]);
  const [sortBy, setSortBy] = useState('petName');

  const fetchData = useCallback(() =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setList(data))
  } ,[])

  useEffect(fetchData,[fetchData])

  const filterList = list.sort((a,b) => {
    return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1)
  })
  
  return (
    <>
    <Box
      sortBy = {sortBy}
      onSortChange = {(mySort) => setSortBy(mySort)} />
    <div id="list">
      <ul>
       { filterList.map((item)  => (
       <Addinfo 
       key={item.id} 
       info={item}
      //  onDelete={함수} function 함수(매개변수){}
       onDelete={
        (myId) => setList(list.filter(item => item.id !== myId))
       }
       />))}
      </ul>
    </div>
    </>
  );
}

export default App;

