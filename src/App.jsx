import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import {Navbar, Footer, Header, Sidebar, ThemeSettings} from './Components';
import {Ecommerce,
  Orders,
  Stacked,
  Pyramid,
  Customers,
  Employees,
  Kanban,
  Area, 
  Bar, 
  Pie, 
  Financial, 
  ColorPicker, 
  ColorMapping, 
  Calendar,
  Editor,
  Line} 
    from './pages';
  import { useStateContext } from './Contexts/ContextProvider';  
    
  function App() {
    const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button type='button' 
            className='text-3xl p-3
            hover:drop-shadow-xl
            hover:bg-light-gray text-white' 
            style={{background:'blue',
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
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
        ${ activeMenu? 'md:ml-72' : 'flex-2'}`
        }>
          <div className='fixed md:static bg-main-bg dark:main-bg-bg navbar w-full'>
            <Navbar/>
          </div>
          <div>
            <Routes>
            {/* Dashboard  */}
              <Route element={<Ecommerce/>} path='/'/>
              <Route element={<Ecommerce/>} path='/ecommerce'/>
            {/* Pages */}
              <Route element={<Orders/>} path='/orders'/>
              <Route element={<Employees/>} path='/employees'/>
              <Route element={<Customers/>} path='/customers'/>
            {/* Apps */}
              <Route element={<Kanban/>} path='/kanban'/>
              <Route element={<Editor/>} path='/editor'/>
              <Route element={<Calendar/>} path='/calendar'/>
              <Route element={<ColorPicker/>} path='/color-picker'/>
            {/* Charts */}
              <Route element={<Line/>} path='/Line'/>
              <Route element={<Area/>} path='/Area'/>
              <Route element={<Bar/>} path='/Bar'/>
              <Route element={<Pie/>} path='/Pie'/>
              <Route element={<Financial/>} path='/Financial'/>
              <Route element={<ColorMapping/>} path='/color-mapping'/>
              <Route element={<Pyramid/>} path='/pyramid'/>
              <Route element={<Stacked/>} path='/Stacked'/>
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
