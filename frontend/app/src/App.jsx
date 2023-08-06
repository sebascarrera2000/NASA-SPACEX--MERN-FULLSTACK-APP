import React from 'react';
import Mainpage from './components/mainpage/mainpage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Homepage } from './components/homepage/homepage';
import {Spacex} from './components/spacex/spacex';
import { Missionpage } from './components/myapimision/myappmision';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>
  },
  {
  path: "home",
  element: <Homepage/>
  },
  {
    path: "spacex",
    element: <Spacex/>
  },
  {
    path: "misionapi",
    element: <Missionpage/>
  }
]);

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
