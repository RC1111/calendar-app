import axios from 'axios'
import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

function Schedule (){

  const localizer = momentLocalizer(moment);
 
  const events = [
    {
      id: 0,
      title: 'Board meeting',
      start: new Date('2022-07-12T13:45:00-05:00'),
      end: new Date('2022-07-12T13:45:00-06:00'),
      resourceId: 1,
    },
    {
      id: 1,
      title: 'MS training',
      allDay: true,
      start: new Date(2022, 0, 29, 14, 0, 0),
      end: new Date(2022, 0, 29, 16, 30, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: 'Team lead meeting',
      start: new Date(2022, 0, 29, 8, 30, 0),
      end: new Date(2022, 0, 29, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2022, 0, 30, 7, 0, 0),
      end: new Date(2022, 0, 30, 10, 30, 0),
      resourceId: 4,
    },
  ]
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(2022, 7, 16),
      views: ['day', 'work_week'],
    }),
    []
  )
    return (
      <>
      <div className="myCustomHeight">
   
      <Calendar
        
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
    
      />
  </div>
      </>
    )
} 



export default Schedule