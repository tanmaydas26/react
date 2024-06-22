import { useState } from "react";

function App() {
  const [bgcolor, setBgColor] = useState("green");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgcolor }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center shadow-lg gap-3 px-4 py-2 rounded-lg">
          <button className="px-2 py-1 bg-red-700 rounded-full text-white" onClick={()=>setBgColor("red")}>Red</button>
          <button className="px-2 py-1 bg-green-700 rounded-full text-white" onClick={()=>setBgColor("green")}>Green</button>
          <button className="px-2 py-1 bg-blue-700 rounded-full text-white" onClick={()=>setBgColor("blue")}>Blue</button>
          <button className="px-2 py-1 bg-yellow-700 rounded-full text-white" onClick={()=>setBgColor("yellow")}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
