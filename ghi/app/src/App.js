import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import AttendeeList from './AttendeesList';
import LocationForm from './LocationForm';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
    <Nav />
    <div className="container">
      <LocationForm />
      {/* <AttendeeList attendees={props.attendees} /> */}

    </div>
    </>
  );
}

export default App;
