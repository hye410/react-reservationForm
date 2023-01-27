import { useState } from "react";
import { BiChevronDown,BiSearch,BiCheckboxChecked } from "react-icons/bi";
function DropDown({toggleSort}){
  if(!toggleSort){
    return null;
  }

  return(
    <ul>
      <li>애기명 <BiCheckboxChecked /></li>
      <li>예약자명 <BiCheckboxChecked /></li>
      <li>날짜 <BiCheckboxChecked /></li>
    </ul>
  )
}


function Search(){
  const[toggleSort,setToggleSort] = useState(false);


  return(
    <div id="search">
      <div>
        <BiSearch />
        <input type="text" placeholder="search" />
        <button 
          type="button"
          onClick={ () => setToggleSort(!toggleSort)}
        >
          <BiChevronDown />
        </button>
        <DropDown
        toggleSort = {toggleSort} />
        {/* <ul>
          <li>애기명 <BiCheckboxChecked /></li>
          <li>예약자명 <BiCheckboxChecked /></li>
          <li>날짜 <BiCheckboxChecked /></li>
        </ul> */}
      </div>
    </div>
  )
}

export default Search;