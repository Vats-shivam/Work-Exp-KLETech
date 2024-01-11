export default function Dashboard(props){
  return (
    <div className="flex justify-evenly h-3/5 items-center w-screen mx-0 text-center">
      <div className="bg-slate-500 rounded-lg w-1/4 h-3/5 flex flex-col justify-evenly items-center">
        <h1 className=' font-bold text-xl'>Teaching</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatibus.</p>
        <button className='bg-blue-200 rounded-md w-1/2' onClick={()=>(props.setCategory("Teaching"))}>Add Details</button>
      </div>
      <div className="bg-slate-500 rounded-lg w-1/4 h-3/5 flex flex-col justify-evenly items-center">
        <h1 className=' font-bold text-xl'>Industry</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, distinctio!</p>
        <button className='bg-blue-200 rounded-md w-1/2' onClick={()=>(props.setCategory("Industry"))}>Add Details</button>
      </div>
      <div className="bg-slate-500 rounded-lg w-1/4 h-3/5 flex flex-col justify-evenly items-center">
        <h1 className=' font-bold text-xl'>Research</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.</p>
        <button className='bg-blue-200 rounded-md w-1/2' onClick={()=>(props.setCategory("Research"))}>Add Details</button>
      </div>
    </div>
  )
}