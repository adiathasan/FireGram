import React, { useState } from 'react';
import Nav from './components/nav';
import Header from './components/header';
import ImageUpload from './components/ImageUpload';
import ImageGrid from './components/imageGrid';
import PopUp from './components/popUp';


function App() {
  const [pop, setPop] = useState(null)
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <ImageUpload/>
      <ImageGrid setPop={setPop}/>
      {pop && <PopUp pop={pop} setPop={setPop}/>}
    </div>
  );
}

export default App;
