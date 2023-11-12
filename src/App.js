import { Route, Routes, BrowserRouter } from 'react-router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<AppLayout/>} />
        <Route path='fact' element= {<Fact/>} />
        <Route path='activity' element= {<Activity/>} />
        <Route path='dog' element= {<DogPic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
