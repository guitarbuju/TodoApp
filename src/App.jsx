
import Trigger from './Components/Main Trigger/Trigger'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Completed from './Components/MainList/Completed'
import InProgress from './Components/MainList/InProgress'
import AllTasks from './Components/MainList/AllTasks'


function App() {
  

  return (
    <div>
  
    
   

      <Routes>
        <Route path='/' element={<Trigger /> }/>
        <Route path='/completed' element={<Completed /> }/>
        <Route path='/inProgress' element={<InProgress /> }/>
        <Route path='/allTasks' element={<AllTasks /> }/>
      </Routes>
     
    </div>
  )
}

export default App
