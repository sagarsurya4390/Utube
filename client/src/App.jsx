import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
