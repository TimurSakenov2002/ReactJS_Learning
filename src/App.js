import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
        <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
        <Route path="/profile" render={ () => <Profile /> }/>
        <Route path="/music" component={Music}/>
        <Route path="/news" component={News}/>
        <Route path="/settings" component={Settings}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
