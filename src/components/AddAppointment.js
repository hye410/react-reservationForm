import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
function AddWrite({toggleForm,formData,formPublish,setFormData}){
  // true일땐 null을 출력 -> 아무것도 출력 안됨, false일땐 밑에 return값을 출력
  
  if(!toggleForm){
    return(
      null
    )
  }

  return(
    <>
      <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input type="text" id="userName" 
                 onChange={(event) => {
                  setFormData({...formData,ownerName:event.target.value})
                 }}/>
        </li>
        <li>
          <label htmlFor="userChildren">애기명</label>
          <input type="text" id="userChildren"
                 onChange={(event) => {
                  setFormData({...formData,petName:event.target.value})
                 }}          />
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date" id="userDate"
                 onChange={(event) => {
                  setFormData({...formData,aptDate:event.target.value})
                 }}           />
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime"
                 onChange={(event) => {
                  setFormData({...formData,aptTime:event.target.value})
                 }}           />
        </li>
        <li>
          <label htmlFor="userData">기타 설명</label>
          <textarea id="userData"
                    onChange={(event) => {
                            setFormData({...formData,aptNotes:event.target.value})
                           }} ></textarea>
        </li>
      </ul>
      <p>
        <button type="submit"
        onClick={formPublish}>예약하기</button>
      </p>
    </>
  )
}
function AddAppointment({onSendAppointment,lastid}){
    //비어있는 객체 -> RESET
    const clearData = {
      "id": "",
      "petName": "",
      "ownerName": "",
      "aptNotes": "",
      "aptDate": ""
    }
    
  const[toggleForm,setToggleForm] = useState(false);
  const[formData,setFormData] = useState('객체이름');
  function formPublish(){
    //합본객체
    const appointmentInfo = {
      id: lastid + 1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate + '-' + formData.aptTime
    }

    //데이터보내기

    onSendAppointment(appointmentInfo);

    //reset
    setToggleForm(!toggleForm);
    setFormData(clearData);
  }

  return(
    <div id="appoint">
      <h4 onClick = {() => setToggleForm(!toggleForm)}>
        <BiCalendarPlus />
        예약하기
      </h4>
      <AddWrite 
      toggleForm = {toggleForm}
      formData = {formData}
      formPublish = {formPublish}
      setFormData = {setFormData}
      />
      {/* <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input type="text" id="userName"/>
        </li>
        <li>
          <label htmlFor="userChildren">애기명</label>
          <input type="text" id="userChildren"/>
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date" id="userDate"/>
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime"/>
        </li>
        <li>
          <label htmlFor="userData">기타 설명</label>
          <textarea id="userData"></textarea>
        </li>
      </ul>
      <p>
        <button type="submit">예약하기</button>
      </p> */}

    </div>
  )
}

export default AddAppointment;