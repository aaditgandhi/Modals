// import logo from './logo.svg';

// import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)
  return(
    <div className="w-screen h-screen p-5 flex flex-col items-center">
      <h1>Click</h1>
      <button 
        className='w-50 h-10 p-5 border-none rounded-md bg-blue-400 text-white cursor-pointer'
        onClick={() => {setOpenModal(true)}}>
          Open
      </button>
      {
        openModal && <Modal />
      }
    </div>
  )
}

export default App;
