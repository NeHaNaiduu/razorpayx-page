import './App.css'
import Additional from './components/Additional'
import Insights from './components/Insights'
import Sidebar from './components/Sidebar'
import Updates from './components/Updates'

function App() {

  return (
    <div className='flex bg-slate-900'>
      <Sidebar/>
      <div className='ml-64 '>
        <Updates/>
        <Insights/>
      </div>
      <Additional/>
    </div>
  )
}

export default App
