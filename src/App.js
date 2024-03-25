
import './App.css';

function App() {
  return (
    <div className="App">
        <header className='cabecalho'>
          <img src='bars-solid.svg' className='toolbarHeader'></img>
            <img className='logohub' src='github-mark-white.png' ></img>
            <div className='nomeHeader'>
              joseaugustorosa
            </div>
          
           <div className='paipersonalHeader'>
           <img className='prheader' src='pr.svg'></img>
            <img  className = 'personalHeader' src='https://avatars.githubusercontent.com/u/101712645?v=4'></img>
            </div>
        </header>
        <nav className='navBar'>
              <ul >
                <li className='itemNavbar'>
         Overview
                </li>
                <li className='itemNavbar'>
                  Repositories <span className='itemNavBarcOUNTER'>32</span>
                  </li>
                  <li className='itemNavbar'>
                    Projects
                  </li>
                  <li className='itemNavbar'>
                  Packages
                  </li>
                  <li className='itemNavbar'>
                 Stars
                  </li>
              </ul>
        </nav>
        <div className='main'>

        </div>
    </div>
  );
}

export default App;
