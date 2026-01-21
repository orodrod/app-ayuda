import logo from './logo.svg';
import 'App.css';
import MenuLateral from './componentes/MenuLateral';
import Cuerpo from './componentes/Cuerpo';


function App() {
  return (
    <div className="app">
        <div className='menu-lateral'>
            <MenuLateral/>
        </div>
        <div className='cuerpo'>
            <Cuerpo/>
        </div>
    </div>
  );
}

export default App;
