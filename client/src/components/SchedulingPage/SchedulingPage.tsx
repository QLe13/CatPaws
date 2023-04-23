import React from 'react'
import ScheduleTable from './ScheduleTable'

type SchedulingPageProps = {
  classes: Class[]
}

const SchedulingPage = ({ classes }: SchedulingPageProps) =>{
  return (
    <div>
      <ScheduleTable classes = {classes}/>
    </div>
  )
};


export default SchedulingPage
