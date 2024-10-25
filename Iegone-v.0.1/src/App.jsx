import React from "react";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <header className="h-16 absolute top-0 gap-4 left-0 bg-slate-600 w-full flex items-center p-5 text-white">
        <a className="text-white" href="/new-job">form</a>
        <a className="text-white" href="/">home</a>
      </header>
      <Outlet />
    </>
  );
}

export default App;
