import React, { useState, useEffect } from 'react';
import AppointmentTable from './AppointmentTable';
import {Get} from './HTTP';

export default function NewAppointment  () {
    const [doctorsList, setDoctorsList] = useState([]);
    const [doctor, setDoctor] = useState(null);


    useEffect(() => {

        Get('http://localhost:3000/')
          .then(todosArr => {
            setDoctorsList(todosArr);
          })
      }, []);

    
    function ViewDoctorSce(e){
        setDoctor(e.target.value)

    }
    return(
        <div>
    <select value={doctor} name="" id="" onChange={(e) => ViewDoctorSce(e)}   >
    {doctorsList.map(item => {
        return (<><option  value={item}>{item}</option>
       </>)
      })}
    <option value="Performance">Performance</option>
    <option value="serial">serial</option>
    <option value="random">random</option>
    <option value="Alphabetical">Alphabetical</option>
 
    {/* {doctorsList.map(item => {
        return (<><br /><input type="checkbox"
          checked={item.completed} /><label>{item.title}</label><label>{item.id}</label></>)
      })} */}
  </select>
  <AppointmentTable doctor = {doctor}/></div>)

}

