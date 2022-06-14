import logo from './logo.svg';
import './App.css';
import Member from './components/Member';
import MemberInfo from './components/MemberInfo';
import Counter from './components/Counter';
import Event from './components/Event';
import Form from './components/Form';
import LoginControl from './components/LoginControl';
import Login from './components/Login';
import Map from './components/Map';
import MapState from './components/MapState';
import Home from './components/Home';

function App() {

  const member = {
    name: 'Hoàng An',
    age: 30
  }

  return (
    <div className='counter'>
        {/* <Member name={member.name} age={member.age} /> */}
        {/* <MemberInfo name={member.name} age={member.age} /> */}
        {/* <Counter /> */}
        {/* <Event /> */}
        {/* <Form /> */}
        {/* <LoginControl /> */}
        {/* <Login /> */}
        {/* <Map /> */}
        {/* <MapState /> */}
        <Home />
    </div>
  );
}

export default App;
