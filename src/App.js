import logo from './logo.svg';
import categories from './categories-component/categories.json';
import Categories from './categories-component/categories.component';

const App = ()=> {


  return (
    <Categories categories={categories}/>
  );
}


export default App;
