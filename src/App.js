import './App.css';
import Header from './component/header/Header';
import Menu from './component/header/menu';
import {Example, Item} from './component/carousel/carousel';
import Claim from './component/claim/claim';

function App() {
  return (
    <main>
      <Header/>
      <Menu/>
      <Example/>
      <Claim/>
    </main>
  );
}

export default App;
