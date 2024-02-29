
import ClockHeading from './Companent/ClockHeading'
import ClockSlogan from './Companent/ClockSlogan'
import CurrentTime from './Companent/CurrentTime'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  return (
    <>
    <center className=" container w-75">
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </center>

    </>
  )
}

export default App
