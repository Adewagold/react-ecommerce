import categories from '../../categories.json';
import Categories from '../../components/categories-component/categories.component.jsx';
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
