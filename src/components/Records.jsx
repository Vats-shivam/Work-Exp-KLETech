import { number } from "prop-types";
import DB from "../assets/Data";
import { useState,useEffect } from "react";
export default function Records(props){
  const [filters,setFilters]=useState({});
  const [work, setWork] = useState(
    props.category === 'Teaching' ? DB.Teaching : props.category === 'Industry' ? DB.Industry : props.category === 'Research' ? DB.Research : []
  );
  const [inputRecord,setInputRecord]=useState({})
  useEffect(() => {
    setWork(
      props.category === 'Teaching' ? DB.Teaching : props.category === 'Industry' ? DB.Industry : props.category === 'Research' ? DB.Research : []
    );
  }, [props.category])
  const handleFilter = (event) => {
    event.preventDefault();
  
    // Filtering the work array based on the filter data
    const filteredData = work.filter((data) => {
      // Applying filters only if they are provided (not empty)
      const industryFilter = filters.industry
        ? data.NameofIndustry.toLowerCase().includes(filters.industry.toLowerCase())
        : true;
  
      const designationFilter = filters.designation
        ? data.Designation.toLowerCase().includes(filters.designation.toLowerCase())
        : true;
  
      const yoeFilter = filters.yoe
        ? parseInt(data.To)-parseInt(data.From) >= parseInt(filters.yoe, 10)
        : true;
  
      // Combine the filters using AND logic
      return industryFilter && designationFilter && yoeFilter;
    });
  
    // Handle the filtered data as needed (e.g., update state, display, etc.)
    console.log(filteredData);
    setWork(filteredData)
    setFilters({
      industry: '',
      designation: '',
      yoe: ''
    });
  };
  const handleInputRecord=(event)=>{
    event.preventDefault();
    setWork((prev)=>([inputRecord,...prev]));
    console.log(work);
    setInputRecord({
      From: '',
      To: '',
      NameofIndustry: '',
      Designation: '',
    });
  }
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">{props.category} Experience Records</h2>
      <div className="flex justify-between">
      <form className="py-5 flex flex-col w-1/4" action="__blank" onSubmit={handleFilter}>
        <h3 className="text-2xl mb-4">Search</h3>
        <label htmlFor="industry">Name of the Industry</label>
        <input className="border border-black px-5 mx-2" value={filters.industry} onChange={(event)=>{setFilters({...filters,industry:event.target.value})}}id="industry" type="text" />
        <label htmlFor="designation">Designation</label>
        <input className="border border-black px-5 mx-2" value={filters.designation} onChange={(event)=>{setFilters({...filters,designation:event.target.value})}}id="designation" type="text"/>
        <label htmlFor="experience">Minimum Years of Experience</label>
        <input className="border border-black px-5 mx-2" value={filters.yoe} onChange={(event)=>{setFilters({...filters,yoe:event.target.value})}}id="experience" type="number"/>
        <button type="submit" className="border border-black rounded-md w-[12rem] bg-green-400 my-8">Filter</button>
      </form>
      <form className="py-5 flex flex-col w-1/4" action="__blank" onSubmit={handleInputRecord}>
        <h3 className="text-2xl mb-4">Add Record</h3>
        <label htmlFor="fromInput">From</label>
        <input className="border border-black px-5 mx-2" value={inputRecord.From} onChange={(event)=>{setInputRecord({...inputRecord,From:event.target.value})}} id="fromInput" type="text" />
        <label htmlFor="toInput">To</label>
        <input className="border border-black px-5 mx-2" value={inputRecord.To} onChange={(event)=>{setInputRecord({...inputRecord,To:event.target.value})}} id="toInput" type="text"/>
        <label htmlFor="industryInput">Name of Industry</label>
        <input className="border border-black px-5 mx-2" value={inputRecord.NameofIndustry} onChange={(event)=>{setInputRecord({...inputRecord,NameofIndustry:event.target.value})}} id="industryInput" type="text"/>
        <label htmlFor="designationInput">Designation</label>
        <input className="border border-black px-5 mx-2" value={inputRecord.Designation} onChange={(event)=>{setInputRecord({...inputRecord,Designation:event.target.value})}}id="designationInput" type="text"/>
        <button type="submit" className="border border-black rounded-md w-[12rem] bg-green-400 my-8">Submit</button>
      </form>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">From</th>
            <th className="py-2 px-4 border-b">To</th>
            <th className="py-2 px-4 border-b">Name of Industry</th>
            <th className="py-2 px-4 border-b">Designation</th>
            <th className="py-2 px-4 border-b">Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {work.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{data.From}</td>
              <td className="py-2 px-4 border-b">{data.To}</td>
              <td className="py-2 px-4 border-b">{data.NameofIndustry}</td>
              <td className="py-2 px-4 border-b">{data.Designation}</td>
              <td className="py-2 px-4 border-b">{parseInt(data.To)-parseInt(data.From)}</td>
            </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>
  );
};