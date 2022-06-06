import logo from './logo.svg';
import './App.css';
import Member from './components/Member';
import MemberInfo from './components/MemberInfo';

function App() {

  const member = {
    name: 'Hoàng An',
    age: 30
  }

  return (
    <div>
        {/* <Member name={member.name} age={member.age} /> */}
        <MemberInfo name={member.name} age={member.age} />
    </div>
  );
}

export default App;
