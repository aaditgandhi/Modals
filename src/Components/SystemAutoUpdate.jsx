import React, { useState } from 'react'
import classNames from 'classnames'

const SystemAutoUpdate = () => {
    const [isSelected, setIsSelected] = useState(false)
  return (
    <div className=" bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
        <div className="w-3/5 h-4/9 rounded-xl bg-white flex flex-col p-6 items-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">System auto updates</h1>
                <p className="text-sm">Enable system auto-updates for DAppNode to install automatically the latest versions.</p>
                <p className="text-sm">For major breaking updates, your approval will always be required</p>
            </div>
            <div className="m-1">
                {/* <label f='check' className="bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500"></span>
                </label> */}
                <div onClick={() => setIsSelected(!isSelected)} className= {classNames("flex w-20 h-10 bg-gray-600 m-10 mb-0 rounded-full", {
                    'bg-green-500': isSelected
                })}>
                    <span className={classNames('h-10 w-10 bg-white rounded-full', {
                        'ml-10': isSelected
                    })} ></span>
                </div>
                <p className="text-xs">Enable system auto-updates</p>
            </div>
            <div className="justify-start">
                <button className="bg-cyan-500 py-2 px-4 rounded-md">Back</button>
                <button className="bg-cyan-500 rounded-md px-4 py-2">Next</button>
            </div>
        </div>
    </div>
  )
}

export default SystemAutoUpdate