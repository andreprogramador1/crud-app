import React, {useState} from 'react'
import { Tables } from './components/Tables'
import { ModalMain } from './components/ModalMain'

function App() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div className="App">
      <ModalMain toggle={toggle} modal={modal}/>
      <Tables toggle={toggle} />
    </div>
  );
}

export default App;
