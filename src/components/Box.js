import {BiCheckSquare}  from 'react-icons/bi'
export default function Box({sortBy,onSortChange}){
  return (
    <div id="box">
      <ul>
        <li
        onClick = {() => onSortChange('petName')}
        >애기이름 <BiCheckSquare /></li>
        <li
        onClick = {() => onSortChange('ownerName')}
        >예약자명 <BiCheckSquare /></li>
        <li
        onClick = {() => onSortChange('aptDate')}
        >날짜 <BiCheckSquare /></li>
      </ul>
    </div>
  )
}

//  cdn reset -> public -> index.html
//  App.css -> App.js 연결