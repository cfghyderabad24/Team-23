
// import './App.css'
// // import Document from './components/ngoForm'
// import VolForm from './components/volunteerForm'
// // import VolDisplay from './components/volDisplay'
// import CourseCards from './components/CourseCards'
// import Footer from './components/Footer'
// import Body from './components/Body'
// import NavBar from './components/NavBar'
// import Courses from './components/Courses'
// import Registeration from './components/Registeration'
// import Document from './components/volform'

// // import VolDisplay from './components/VolHome'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import VolDisplay from './components/VolHome'
// import NGOForm from './components/ngoForm'

// function App() {


//   return (
//     <>
//       {/* <Document /> */}
//       {/* <VolForm /> */}
//       {/* <VolDisplay /> */}
//       {/* <VolDisplay /> */}

//       {/* <CourseCards /> */}
//       {/* <Footer /> */}
//       {/* <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Body />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/registeration" element={<Registeration />} />

//         </Routes>
//         <Footer />

//       </BrowserRouter> */}
//       <BrowserRouter>
//         <Routes >
//           <Route path="/student/:studentid" element={<Document />}></Route>
//           <Route path="/ngo" element={<NGOForm />}></Route>
//           <Route path="/" element={<VolDisplay />}>


//           </Route>
//         </Routes>
//       </BrowserRouter>

//     </>
//   )
// }

// export default App


import Header from "./components/main/Header";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
// import Signin from "./components/main/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VolDisplay from "./components/VolHome";
import NGOForm from "./components/ngoForm";
// import NGOSubmission from "./pages/NGOsubmission";

export default function App() {
  return <BrowserRouter>
    <Header path="/home" />
    <Routes>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/sign-in" element={<Signin />}></Route>
      <Route path="/volunteer" element={<VolDisplay />}></Route>
      <Route path="/ngo" element={< NGOForm />}></Route>

      {/* <Route path="/form1" element={<NGOSubmission />}></Route>  */}
    </Routes>
  </BrowserRouter>
}