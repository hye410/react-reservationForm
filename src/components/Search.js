import { useState } from "react";
import { BiChevronDown,BiSearch,BiCheckboxChecked } from "react-icons/bi";
function DropDown({toggleSort,sortBy,onSortChange}){
  if(!toggleSort){
    return null;
  }

  return(
    <ul>
      <li
      onClick={() => onSortChange('petName')}>
        애기명 
        {(sortBy) === ('petName') && <BiCheckboxChecked />}
      </li>
      <li
      onClick={() => onSortChange('ownerName')}>
      예약자명
      {(sortBy) === ('ownerName') && <BiCheckboxChecked />}
      </li>
      <li
      onClick={() => onSortChange('aptDate')}>
        날짜
      {(sortBy) === ('aptDate') && <BiCheckboxChecked />}</li>
    </ul>
  )
}


function Search({query,onQueryChange,sortBy,onSortChange}){
  const[toggleSort,setToggleSort] = useState(false);


  return(
    <div id="search">
      <div>
        <BiSearch />
        <input 
        type="text" 
        placeholder="search" 
        value={query}
        onChange = {(event) => {onQueryChange(event.target.value)}}/>
        <button 
          type="button"
          onClick={ () => setToggleSort(!toggleSort)}
        >
          <BiChevronDown />
        </button>
        <DropDown
        toggleSort = {toggleSort}
        sortBy = {sortBy}
        onSortChange = {mySort => onSortChange(mySort)}/>
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