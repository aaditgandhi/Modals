import React from 'react'

const AllSet = () => {
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
        <div className="w-3/5 h-4/9 rounded-xl bg-white flex flex-col p-6 items-center">
            <div className="text-center">
                <h1 className="font-bold text-2xl">All Set!</h1>
                <p className="text-sm">Visit the dappnode docs for more info</p>
            </div>
            <button className="bg-cyan-400 rounded-md py-2 px-4 mt-8">Finish</button>
            <div className='w-full'>
            <button className="justify-around text-sm bg-slate-100 rounded-md border-gray-700 border-solid border-2 py-1 px-4">Back</button>
            </div>
        </div>
    </div>
  )
}

export default AllSet