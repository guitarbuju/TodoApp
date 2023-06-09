
import Trigger from './Components/Main Trigger/Trigger'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Completed from './Components/MainList/Completed'
import InProgress from './Components/MainList/InProgress'
import AllTasks from './Components/MainList/AllTasks'
import LoginForm from './Components/LoginForm/LoginForm'
import MainForm from './Components/SignIn/MainForm'
import Header from './Components/Header/Header'


function App() {
  

  return (
    <div>
    <Header />
    


      <Routes>
        <Route path='/' element={<LoginForm /> }/>
        <Route path='/signin' element={<MainForm /> }/>
        <Route path='/today' element={<Trigger/> }/>
        <Route path='/completed' element={<Completed /> }/>
        <Route path='/inProgress' element={<InProgress /> }/>
        <Route path='/allTasks' element={<AllTasks /> }/>
      </Routes>
     
    </div>
  )
}

export default App
