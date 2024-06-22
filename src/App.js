import { Outlet, createBrowserRouter } from 'react-router-dom';
import Body from './componets/Body';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Login from './componets/Login';
import Registeration from './componets/Registeration';
import Courses from './componets/Courses';

function App() {
  return (
    <div >
      <Header/>
      <Outlet/>
    </div>
  );
}

const appRouter=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Body/>,
        },
        {
          path:'/login',
          element:<Login/>,
        },
        {
          path:'/registration',
          element:<Registeration/>,
        },
        {
          path:'/courses',
          element:<Courses/>
        }
      ]
    }
  ]
)
export default appRouter;
