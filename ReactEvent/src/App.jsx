import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import FoodList from "./Components/FoodList";

function App() {
  const list=["dal","vagetable","Roti","Salad","Milk","Ghee"]
  return (
   <>
    <AppName />
    <FoodList listItems={list}/>
   </>
  );
}

export default App;
