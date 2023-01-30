import AddAppointment from './components/AddAppointment';
import Search from './components/Search';
import AddInfo from './components/AddInfo';
import { BiCalendarCheck } from "react-icons/bi";
import { useCallback, useEffect, useState } from 'react';

function App() {
  //data state
  const [appointList,setAppointList] = useState([]);
    // useCallback(함수,[참조함수]) : 참조함수의 값들이 진짜 바뀌었는지 확인 함

  const fetchData = useCallback(
    ()=>{
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointList(data))
    },[]
  )
  useEffect(fetchData,[fetchData]);

  //  network -> 무한반복 -> sources -> pause  / cf) useMemo(데이터)
  // useEffect(
  //   ()=>{
  //     fetch('./data.json')
  //     .then(response => response.json())
  //     .then(data => setAppointList(data))
  //       },[appointList]
  //     )

  const [query,setQuery] = useState('');
  const [sortBy,setSortBy] = useState('petName')
  
  const filterAppointment =
  appointList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) || 
      item.ownerName.toLowerCase().includes(query.toLowerCase()) || 
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )}
  ).sort(
    (a,b) => {
      return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1)
    }
  )  



  return (
   <article>
    <h3>
      <BiCalendarCheck />
      예약 시스템
    </h3>
    <AddAppointment 
      onSendAppointment = {
        myAppointment => setAppointList([...appointList,myAppointment])
      }
      lastid = {
        appointList.reduce((max,item) =>  Number(item.id) > max ? Number(item.id) : max,0)
      }
    
      /> 
    <Search 
    query = {query}
    onQueryChange = {(myQuery) => setQuery(myQuery)}
    sortBy = {sortBy}
    onSortChange= {(mySortBy) => setSortBy(mySortBy)}/>
    <div id="list">
      <ul>
        {filterAppointment.map((appointment) => 
          <AddInfo 
            key={appointment.id}
            appointment={appointment}
            onDeleteAppoint = {              
              (appointmentId) => setAppointList(appointList.filter(appointment => appointment.id !== appointmentId))
            }            
         />
         )}
      </ul>
    </div>
   </article>
  );
}

export default App;
