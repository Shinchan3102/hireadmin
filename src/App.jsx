import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import TopBar from './components/TopBar/TopBar';
import { Toaster } from 'react-hot-toast';

function App() {



  return (
    <BrowserRouter>
      <div className={`bg-gray-100`}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <div className='flex w-screen h-screen gap-4 p-2'>
          <Sidebar />
          <div className='flex flex-col gap-4 flex-1 overflow-hidden'>
            <TopBar />
            <Routes>
              <Route path="/" element={<Navigate to={'/users'} />} />
              <Route path='/dashboard' element={<Home />} />
              <Route path='/users' element={<Users />} />
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;