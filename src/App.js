import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DevDetails from './component/DevDetails';
import DevList from './component/DevList';

function App() {
  return (
    <div className="p-4 bg-slate-900">
      <BrowserRouter>
          <Routes>
            <Route path='/Developers-Details' exact element={< DevList/>}/>
            <Route path='/:id' element={< DevDetails />} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
