
import categories from './categories-component/categories.json';
import Categories from './categories-component/categories.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/sign-in/sign-in.component';


const Shop = ()=>{
  return(
    <h2>I am a shop!</h2>
  )
}


const App = ()=> {
  return (
    <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Signin />} />
         </Route>
    </Routes>
    
    )
}


export default App;
