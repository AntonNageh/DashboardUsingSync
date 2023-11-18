import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {
useUser,
} from "@clerk/clerk-react";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import {Navbar, Sidebar, ThemeSettings} from './Components';
import {Ecommerce,
  Orders,
  Customers,
  Employees,
  Kanban,
  ColorPicker, 
  Calendar,
  Editor,
  Line,
  Welcome} 
  from './pages';
  import { useStateContext } from './Contexts/ContextProvider';  


 
 function App() {
  const User = useUser()
  if(!User.isSignedIn)
   return ( 
     <Welcome/>
   )
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark'? 'dark' : '' }>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button type='button' 
            onClick={()=>{setThemeSettings(true)}}
            className='text-3xl p-3
            hover:drop-shadow-xl
            hover:bg-light-gray text-white' 
            style={{ background:currentColor,
            borderRadius:'50%'}}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>
          {
            activeMenu?
            (<div className='w-72 fixed sidebar
            dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
             ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )}
        <div 
        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
        ${ activeMenu? 
          'md:ml-72' 
          : 
          'flex-2'}`
        }>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar/>
          </div>
          <div>
          {themeSettings && <ThemeSettings/> }


            <Routes>
            {/* Dashboard  */}
              <Route element={<Ecommerce/>} path='/'/>
              <Route element={<Ecommerce/>} path='/Ecommerce'/>
            {/* Pages */}
              <Route element={<Orders/>} path='/Orders'/>
              <Route element={<Employees/>} path='/Employees'/>
              <Route element={<Customers/>} path='/Customers'/>
            {/* Apps */}
              <Route element={<Kanban/>} path='/Kanban'/>
              <Route element={<Editor/>} path='/Editor'/>
              <Route element={<Calendar/>} path='/Calendar'/>
              <Route element={<ColorPicker/>} path='/Color-picker'/>
            {/* Charts */}
              <Route element={<Line/>} path='/Line'/>
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
