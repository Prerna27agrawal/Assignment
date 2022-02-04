import React from "react";
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Filter from "./Filter";
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const Holidays = ()=>{
    const [items,setItems] = useState([]);
    var i=1;


    useEffect(()=>{
        const getHolidays = async()=>{
            const res = await fetch(
                `https://www.gov.uk/bank-holidays.json`
            );
            const data = await res.json();
            setItems([...items,...data["england-and-wales"].events,...data["northern-ireland"].events,...data["scotland"].events]);
        }
  getHolidays();
//   console.log("hi");
    },[])
    // console.log(items);


    const handleFilterDate = (startDate,endDate)=>{
        // console.log(startDate);
        // console.log(endDate);
        const filteredData = items.filter((item)=>{
            if(startDate == "" && endDate!=""){
                if(dayjs(item.date).isSameOrBefore(dayjs(endDate))) return item;
            }else if(startDate !="" && endDate==""){
                if(dayjs(item.date).isSameOrAfter(dayjs(startDate))) return item;
            }else if(startDate !="" && endDate!=""){
                if(dayjs(item.date).isSameOrBefore(dayjs(endDate)) && dayjs(item.date).isSameOrAfter(dayjs(startDate))) return item;
            }else{
                return item;
            }
        });
            
        setItems(filteredData);
    }

    return (
        <div> 
            <Filter 
            onDateFilter = {handleFilterDate}
            />
        <div className="container">
            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
      {items.map((item)=>{
          return(
                    <tr id={i}>
                        <td scope="row">{i++}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                    </tr>
          )
      })}
  </tbody>
</table>
        </div>
        </div>
    )
}
export default Holidays;