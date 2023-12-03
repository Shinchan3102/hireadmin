import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import Users from './pages/Users';
import TopBar from './components/TopBar/TopBar';
import { Toaster } from 'react-hot-toast';
import MobileSidebar from './components/Sidebar/MobileSidebar';

function App() {



  return (
    <BrowserRouter>
      <div className={`bg-gray-100`}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <div className='flex w-screen h-screen md:gap-4 p-2'>
          <div className='md:hidden'>
            <MobileSidebar
            />
          </div>
          <div className='hidden md:flex'>
            <Sidebar />
          </div>
          <div className='flex flex-col gap-4 flex-1 overflow-hidden'>
            <div className='h-8 md:h-16'>
              <div className='hidden md:flex'>
                <TopBar />
              </div>
            </div>
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