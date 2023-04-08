import logo from './logo.svg';
import './App.css';
import {Route, Routes,} from "react-router-dom";
import Form from './Components/Form';
import ShowData from './Components/ShowData';
import EditData from './Components/EditData';
// import Form from './Components/Form';

function App() {
  return (
    <>

      {/* <Route path='/' exact element={<Form />} />
      <Route path='/show' element={<ShowData />} /> */}

      <Routes>
      <Route path='/' exact element={<Form />} />
      <Route path='/show' element={<ShowData />} />
      <Route path='/edit' element={<EditData />} />
      </Routes>




    </>
  );
}

export default App;
