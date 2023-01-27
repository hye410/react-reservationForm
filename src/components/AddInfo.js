import { BiTrash } from "react-icons/bi";

function AddInfo({appointment,onDeleteAppoint}){
  return(
    <li>
      <dl>
        <dt>{appointment.petName}</dt>
        <dd>
          <dfn>예약자명</dfn>
          {appointment.ownerName} 
          {appointment.aptDate}
        </dd>
        <dd className="desc">
          {appointment.aptNotes}
        </dd>
        <dd className="date">
          날짜 - 시간
        </dd>
      </dl>      
      
      <button 
      onClick={() => onDeleteAppoint(appointment.id)}>
        <BiTrash />
      </button>

    </li>
  )
}

export default AddInfo;



