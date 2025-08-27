
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import BlogPost from "./Components/BlogPost";
import SinglePost from "./Components/SinglePost";


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}>
    <Route index element={<Home1/>} />
    <Route path="/BlogPost" element={<BlogPost/>}></Route>
    <Route path="/SinglePost" element={<SinglePost/>}></Route>
    <Route path="/SinglePost/:id" element={<SinglePost/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
