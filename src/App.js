import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
        <Route path='/dialogs' render={ () => <DialogsContainer />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/news' render={ () => <News />} />
        <Route path='/music' render={ () => <Music />} />
        <Route path='/settings' render={ () => <Settings />} />
      </div>
    </div>
  );
}

export default App;
