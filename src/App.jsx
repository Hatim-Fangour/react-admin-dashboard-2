import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

const  App =()=> {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content/>
      </div>
    </>
  )
}

export default App
