import React, { useState } from 'react';
import calendar from '../../components/asset/calendar2.svg';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './status.css';


const Status = () => {
  const preselectedDays = [
    {
      year: 2017,
      month: 3,
      day: 2,
      className:"color"
    },
    {
      year: 2017,
      month: 3,
      day: 12,
    },
    {
      year: 2017,
      month: 3,
      day: 23,
    },
  ]



  const [selectedDayRange, setSelectedDayRange] = useState(
    preselectedDays
  );


        return (
            <div className="status" >
                <div className="tanggal">
                    <div className="notifikasi">
                        <img className="logoCalendar" src={calendar} alt="calendar"/>

                    </div>
                    <div className="cuaca">
                        <h3>Calendar</h3>
                        <p>02 March</p>
                    </div>
                </div>

                <div className="colCalendar">
                  <Calendar
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    calendarClassName="responsive-calendar"
                    colorPrimary="#82bdff"
                  />
                </div>

                <div className="colKet">
                  <font color="lavender">ACCOUNTS</font>
                  <br/>
                  <p className="dotBlue"><txt style={{ margin:"1vw" }}>adrian.maclocs@gmail.com</txt></p>
                  <p className="dotRed"><txt style={{ margin:"1vw" }}>ama@emwelt.dk</txt></p>
                  <button className="btnAdd">+ Add Account</button>
                </div>


          </div>
        );

}


export default Status;
