import { useState } from "react";

const Filter = ({onDateFilter})=>{
    const [rangeDates,setRangeDates] = useState({
        startDate:"",
        endDate:""
    });

    const handleInput = (field)=> (event)=>{
        const {value} = event.target;
        setRangeDates ({
            ...rangeDates,
            [field]:value,
        });
        switch(field){
            case "startDate":
                onDateFilter(value,rangeDates.endDate);
                break;
            case "endDate":
                onDateFilter(rangeDates.startDate,value);
                // onDateFilter(value, "endDate");
                break;
            default:
                break;
        }
    }
    // onDateFilter(rangeDates.startDate,rangeDates.endDate);
    // console.log(rangeDates.startDate);
    // console.log(rangeDates.endDate);


    return (
        <div className="container">
            <div className="col-sm-12 my-12">
                <label htmlFor="startDate">From: </label>
                <input
                 type="date"
                 className="form-control"
                 id="startDate"
                 onChange={handleInput("startDate")}
                />
            </div>
            <div className="col-sm-12 my-12">
                <label htmlFor="endDate">To: </label>
                <input
                 type="date"
                 className="form-control"
                 id="endDate"
                 onChange={handleInput("endDate")}
                />
            </div>
        </div>
    )

}
export default Filter;