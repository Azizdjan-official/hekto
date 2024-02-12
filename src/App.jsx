
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/homepage/home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
