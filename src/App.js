import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import MainCont from './Components/mainCont';
import { ProfileProvider } from './Components/ProfileProvider';
function App() {
  return (
    <ProfileProvider> 
      {/* Wrap the components that need access to the profile context */}
      {/* Optionally, include other components here */}
      <SideBar /> 
      <MainCont /> {/* Render MainCont or other components */}
    </ProfileProvider>
  );
}

export default App;
