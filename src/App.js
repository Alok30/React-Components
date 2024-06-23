import React,{lazy} from 'react'
import { UserPost } from './Components/UserPost';
import TicTocTia from './Components/TicTocTia';
import { ProgressBar } from './Components/ProgressBar';
import { useState, useEffect } from 'react';
import  Pagination  from './Components/Pagination';
// import Todo from './Components/Todo';
import { AutoSearch } from './Components/AutoSearch';
import { FormComponent } from './Components/FormComponent';
import StarRating from './Components/StarRating';
import TicTosTia from './Components/TicTosTia';
import Temperatureconverter from './Components/TemperatureConverter';
import { Progessbarcontroller } from './UI_Components/Progessbarcontroller';
import TextBox from './Components/ClassComponent'
import { Breadcrumb } from './Components/Breadcrumb';
import Modal from './Components/Modal';
import './App.css';
import ImageSlider from './Components/ImageSlider';
const Todo = lazy(()=>import('./Components/Todo'));
const images = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
];
function App() {
  // const data = [...Array(100)].keys().map((_, index) => `item ${index + 1}`);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [showModal ,setShowModal] = useState(false);

  // const onPageChange = (page) => {
  //   console.log(page)
  //   setCurrentPage(page);
  // }
  // const onClose = () => {
  //  setShowModal(false);
  // }
  return (
    <div className='App'>
      {/* <UserPost /> */}
      {/* <TicTocTia /> */}
      {/* <ProgressBar value={25} />
      <ProgressBar value={30} />
      <ProgressBar value={45} />
      <ProgressBar value={93} /> */}



      {/* <Pagination
         pageSize={10}
         totalRecords={500}
         currentPage={currentPage}
         onPageChange={(val) => onPageChange(val)}
      /> */}
      <Todo/>
      {/* <AutoSearch/> */}
      {/* <FormComponent/> */}
      {/* <StarRating star={3}/> */}
      {/* <TicTosTia/> */}
      {/* <ProgressBar value={100} /> */}
      {/* <Progessbarcontroller/> */}
      {/* <Temperatureconverter/> */}
      {/* <TextBox name={'alok'}/> */}
      {/* <Breadcrumb/> */}
      {/* <button onClick={()=>{setShowModal(true)}}>Show</button>
      <Modal show={showModal} onClose={onClose}>
        <div>
          <h1>Modal Header</h1>
           <p>Heyyyyyy Alok Dubey</p>
        </div>
        </Modal> */}
        <ImageSlider 
            images={images}
        />

    </div>
  );
}

export default App;
