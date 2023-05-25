// import React from 'react'

// const Setting = () => {
//   return (
//     <div className= "bg-slate-500 fixed w-screen h-screen flex justify-center items-center">
//         <div className= "w-96 h-5/6 rounded-xl bg-white flex flex-col p-6 items-center">
//             <div>
//                 <h1>Some setting require your attention</h1>
//                 <p>Let's go ahead and set it up</p>
//             </div>
//             <button>Start</button>
//         </div>
//     </div>
//   )
// }

// export default Setting
import React from 'react'

const Setting = () => {
  return (
    <div className="bg-slate-400 fixed w-screen h-screen flex justify-center items-center">
        <div className= "w-4/5 h-2/6 rounded-xl bg-white flex flex-col p-6 items-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Some settings require your attention</h1>
                <p>Let's go ahead and set it up</p>
            </div>
            <button className="m-auto bg-cyan-500 py-2 px-10 rounded-md">Start</button>
        </div>
    </div>
  )
}

export default Setting