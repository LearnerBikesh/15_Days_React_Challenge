import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#777");

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4">
          <button className="p-4 rounded bg-red-500" onClick={()=>{setColor('red')}}>Red</button>
          <button className="p-4 rounded bg-green-500" onClick={()=>{setColor('green')}}>Green</button>
          <button className="p-4 rounded bg-blue-500" onClick={()=>{setColor('blue')}}>Blue</button>
          <button className="p-4 rounded bg-olive" onClick={()=>{setColor('olive')}}>Olive</button>
          <button className="p-4 rounded bg-gray-500" onClick={()=>{setColor('gray')}}>Gray</button>
          <button className="p-4 rounded bg-yellow-500" onClick={()=>{setColor('yellow')}}>Yellow</button>
          <button className="p-4 rounded bg-pink-500" onClick={()=>{setColor('pink')}}>Pink</button>
          <button className="p-4 rounded bg-purple-500" onClick={()=>{setColor('purple')}}>Purple</button>
          <button className="p-4 rounded bg-lavender" onClick={()=>{setColor('lavender')}}>lavender</button>
          <button className="p-4 rounded bg-white " onClick={()=>{setColor('white')}}>white</button>
          <button className="p-4 rounded bg-black text-white" onClick={()=>{setColor('black')}}>black</button>
          </div>
          
        
        </div>
      </div>
    
  );
}

export default App;
