import React from "react";
import { useEffect, useState } from 'react';
// import 'react-dates/initialize';
// import { DateRangePicker} from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';


// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'
const Holidays = ()=>{
    const [englandItems,setEnglandItems] = useState([]);
    const [northernItems,setNorthernItems] = useState([]);
    const [scotlandItems,setScotlandItems] = useState([]);
    const [items,setItems] = useState([]);
    // const [startDate,setStartDate] = useState("");
    // const [endDate,setEndDate]= useState("");
    // const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

    var i=1;

    useEffect(()=>{
        const getHolidays = async()=>{
            const res = await fetch(
                `https://www.gov.uk/bank-holidays.json`
            );
            // console.log(res);
            const data = await res.json();
            // console.log(data);
            // console.log(data["england-and-wales"].events);
            setEnglandItems(data["england-and-wales"].events);
            setNorthernItems(data["northern-ireland"].events);
            setScotlandItems(data["scotland"].events);
  setItems([...englandItems, ...northernItems, ...scotlandItems]);   
            // console.log(`data.+${england-and-wales}`);

        }
  getHolidays();
//   console.log(items);
//   console.log(englandItems);
//   console.log(scotlandItems);
//   console.log(northernItems);
    },[])
    return (
        <div>
            {/* <DateRangePicker
  startDate={startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => {
      setStartDate(startDate);
      setEndDate(endDate);
    //   setState({ startDate, endDate })
    }} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/> */}
        {/* <DatePicker 
         selectsRange={true}
         startDate={startDate}
         endDate={endDate}
         dateFormat='dd/MM/yyyy'
         isClearable={true}
         onChange={() => {
            setDateRange([startDate, endDate]);
            }}
        /> */}
        <div className="container">
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
      {/* {i=1} */}
  <tbody>
      {items.map((item)=>{
          return(
                    <tr>
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







import React from "react";
import { useEffect, useState } from 'react';
const Holidays = ()=>{
    const [englandItems,setEnglandItems] = useState([]);
    const [northernItems,setNorthernItems] = useState([]);
    const [scotlandItems,setScotlandItems] = useState([]);
    const [items,setItems] = useState([]);
    var i=1;

    useEffect(()=>{
        const getHolidays = async()=>{
            const res = await fetch(
                `https://www.gov.uk/bank-holidays.json`
            );
            const data = await res.json();
            setEnglandItems(data["england-and-wales"].events);
            setNorthernItems(data["northern-ireland"].events);
            setScotlandItems(data["scotland"].events);
            setItems([...englandItems, ...northernItems, ...scotlandItems]);   
        }
  getHolidays();

    },[])
    return (
        <div> 
        <div className="container">
            <table class="table table-hover">
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
                    <tr>
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
// if((startDate=="" && endDate!="") || dayjs(newItem.date).isSameOrAfter(dayjs(startDate))){
            //     console.log("hi1");
            //     return newItem;
            // }
        // }).filter((item)=>{
        //     if(endDate=="" || dayjs(item.date).isSameOrBefore(dayjs(endDate))){
        //         console.log("hi-late");
        //         return item;
        //     }
        // })\
          // if(startDate == "" && endDate !="")
        // {
        //     const filteredData = items.filter((item)=>{
        //             if(dayjs(item.date).isSameOrBefore(dayjs(endDate))){
        //                 console.log("hi-late");
        //                 return item;
        //             }
        //         });
        //         setItems(filteredData);
        // }
        //     if(startDate != "" && endDate =="")
        //     {
        //     const filteredData = items.filter((item)=>{
        //         if(dayjs(item.date).isSameOrAfter(dayjs(startDate))){
        //                 console.log("hi1");
        //                 return item;
        //             }
        //         });
        //         setItems(filteredData);
        //     }

        //     if(startDate != "" && endDate !=""){
        //         const filteredData = items.filter((item)=>{
        //             if(dayjs(item.date).isSameOrAfter(dayjs(startDate) && dayjs(item.date).isSameOrBefore(dayjs(endDate)) )){
        //                     console.log("hi");
        //                     return item;
        //                 }
        //             });
        //             setItems(filteredData);
        //     }
        // // console.log(date);
        // const filteredData = items.filter((item)=>{
        //     if(field === "startDate" && dayjs(item.date).isSameOrAfter(dayjs(date))){
        //         console.log("hi");
        //         return item;
        //     }
        //     if(field === "endDate" && dayjs(item.date).isSameOrBefore(dayjs(date))){
        //         console.log("hi-late");
        //         return item;
        //     }
        // });
        // setItems(filteredData);
    