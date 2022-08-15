import { Routes } from 'react-router-dom';
import categories from '../../categories-component/categories.json';
import Categories from '../../categories-component/categories.component.jsx';
import { Outlet } from 'react-router-dom';

const Home = ()=> {


  return (
      <div>
        <Outlet />
        <Categories categories={categories}/>
      </div>
    
  );
}


export default Home;
