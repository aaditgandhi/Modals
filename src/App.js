// import logo from './logo.svg';

// import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';
import Setting from './Components/Setting';
import SystemAutoUpdate from './Components/SystemAutoUpdate';
import AllSet from './Components/AllSet';
import LogIn from './Components/logIn';
import RepositorySource from './Components/RepositorySource';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [settings, setSettings] = useState(false)
  const [systemUpdate, setSystemUpdate] = useState(false)
  const [allSet, setAllSet] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [repositorySource, setRepositorySource] = useState(false)
  return(
  
    // <div>
    //   <div className="w-screen h-screen p-5 flex flex-col items-center">
    //     <h1>Click</h1>
    //     <button 
    //       className='w-50 h-10 p-5 border-none rounded-md bg-blue-400 text-white cursor-pointer'
    //       onClick={() => {setOpenModal(true)}}>
    //         Open
    //     </button>
    //     {
    //       openModal && <Modal />
    //     }
    //   </div>
      
      // <div className="w-screen h-screen p-5 flex flex-col items-center">
      //   <h1>Click</h1>
      //   <button 
      //     className='w-50 h-10 p-5 border-none rounded-md bg-orange-600 text-white cursor-pointer'
      //     onClick={() => {setSettings(true)}}>
      //       Open
      //   </button>
      //   {
      //     settings && <Setting />
      //   }
      // </div>

      // <div className="w-screen h-screen p-5 flex flex-col items-center">
      //   <h1>Click</h1>
      //   <button 
      //     className='w-50 h-10 p-auto border-none rounded-md bg-orange-600 text-white cursor-pointer'
      //     onClick={() => {setSystemUpdate(true)}}>
      //       Open
      //   </button>
      //   {
      //     systemUpdate && <SystemAutoUpdate />
      //   }
      // </div>

      // <div className="w-screen h-screen p-5 flex flex-col items-center">
      //   <h1>Click</h1>
      //   <button 
      //     className='w-50 h-10 p-auto border-none rounded-md bg-orange-600 text-white cursor-pointer'
      //     onClick={() => {setAllSet(true)}}>
      //       Open
      //   </button>
      //   {
      //     allSet && <AllSet />
      //   }
      // </div>

    //   <div className="w-screen h-screen p-5 flex flex-col items-center">
    //   <h1>Click</h1>
    //   <button 
    //     className='w-50 h-10 p-auto border-none rounded-md bg-orange-600 text-white cursor-pointer'
    //     onClick={() => {setLogIn(true)}}>
    //       Open
    //   </button>
    //   {
    //     logIn && <LogIn />
    //   }
    // </div>

     <div className="w-screen h-screen p-5 flex flex-col items-center">
      <h1>Click</h1>
      <button 
        className='w-50 h-10 p-auto border-none rounded-md bg-orange-600 text-white cursor-pointer'
        onClick={() => {setRepositorySource(true)}}>
          Open
      </button>
      {
        repositorySource && <RepositorySource />
      }
    </div>

      
    //</div>
  )
}

export default App;
