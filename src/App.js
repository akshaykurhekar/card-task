
import { useState } from 'react';
import './App.css';
import Modal from './elements/Modal';

function App() {

    // const itemList = [{name:"akshay",age:22},{name:"akshay",age:22},{name:"akshay",age:22},{name:"akshay",age:22}];

    // sessionStorage.setItem("list",JSON.stringify(itemList) );

    // let bb = useState( JSON.parse( sessionStorage.getItem("list")));
    
    // console.log(bb[0]);

    // let aa = bb[0];


    // console.log(aa)


    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [column, setColumn] = useState();
  
    const [cardList, setCardList] = useState([{
        title:"title",
        desc: "desc",
        column: '2'
    },
    {
        title:"title",
        desc: "desc",
        column: '1'
    },
    {
        title:"title",
        desc: "desc",
        column: '3'
    } ]);

  const modalCancelHandler = () => {
    setShowModal(false);
  };

  const modalSaveHandler = () => {
    
    const obj = {
        title:title,
        desc: desc,
        column: column
    }
    
    setCardList([
        ...cardList,
        obj
     ] );
    setShowModal(false);
        
  };

    return (
    <div>
     
        <h1 className="text-gray-700 font-bold text-4xl text-center p-3" >IIT Bombay Task</h1>
        <hr/>
    <div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg ml-10 mt-6" onClick={ () => setShowModal(true)} >Add Card</button>
    </div>    
    
    <div className="grid grid-cols-3 gap-x-3 m-6 text-gray-800">
        <div className="bg-blue-50 h-screen" >
            <div className="font-semibold text-gray-700 text-lg p-3 text-center">Column 1</div>
            <hr/>
        { cardList.map((item,id) => { 
                if( item.column === '1'){
                    return <div key={id} className="shadow-md rounded-lg bg-white m-4" >
                            <div className="font-semibold text-gray-600 px-3 py-2">{item.title}</div>
                            <div className="text-sm text-gray-700 p-2">{item.desc}</div>
                          </div>
                }else{ return null }
            } ) }
        </div>
        <div>
        <div className="bg-green-50 h-screen" >
            <div className="font-semibold text-gray-700 text-lg p-3 text-center">Column 2</div>
            <hr/>
        { cardList.map((item,id) => { 
                if( item.column === '2'){
                    return <div key={id} className="shadow-md rounded-lg bg-white m-4" >
                            <div className="font-semibold text-gray-600 px-3 py-2">{item.title}</div>
                            <div className="text-sm text-gray-700 p-2">{item.desc}</div>
                          </div>
                }else{ return null }
            } ) }
        </div>
        </div>
        <div>
        <div className="bg-indigo-50 h-screen" >
            <div className="font-semibold text-gray-700 text-lg p-3 text-center">Column 3</div>
            <hr/>
        { cardList.map((item,id) => { 
                if( item.column === '3'){
                    return <div key={id} className="shadow-md rounded-lg bg-white m-4" >
                            <div className="font-semibold text-gray-600 px-3 py-2">{item.title}</div>
                            <div className="text-sm text-gray-700 p-2">{item.desc}</div>
                          </div>
                }else{ return null }
            } ) }
        </div>
        </div>
    </div>
    
    <Modal
        cancel={modalCancelHandler}
        show={showModal}
        save={modalSaveHandler}
        title="Add New User"
      >
        <div className="flex-col space-y-4 text-gray-700">
          <div className="flex space-x-2">
            <div className="lg:w-99 sm:w-auto">
              <span className="py-2 font-semibold text-lg"> Title </span>
              <input className="bg-gray-100 ml-2 border-2 text-gray-900 border-gray-600 rounded-sm focus:bg-white" onChange={ (e) => setTitle(e.target.value) } />
            </div>
            <div>
              <span className="py-2 font-semibold text-lg">Select Column</span>
              <select className="ml-2 bg-gray-100 border-2 text-gray-900 border-gray-600 rounded-sm focus:bg-white" onChange={ (e) => setColumn(e.target.value) } >
                  <option value={1} >Column 1</option>
                  <option value={2} >Column 2</option>
                  <option value={3} >Column 3</option>
              </select>
            </div> 
                        
          </div>
          <div>
              <p className="py-2 font-semibold text-lg"> Description </p>
              <textarea type="text" rows="5" cols="55" onChange={ (e) => setDesc(e.target.value) } className="bg-gray-100 ml-6 border-2 text-gray-900 border-gray-600 rounded-sm focus:bg-white"/>
            </div>
                  </div>
      </Modal>
    </div>
  );
}

export default App;
