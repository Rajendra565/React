import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Component/Container";
import AppName from "./Component/AppName";
import ListGroup from "./Component/ListGroup";

function App() {
  const items = [
    "Apples",
    "Avocados",
    "Bananas",
    "Blueberries",
    "Oranges",
    "Strawberries",
  ];

  return (
    <>
      <Container>
        <AppName></AppName>
        <Container>
          <ListGroup key={items} items={items}></ListGroup>
        </Container>
      </Container>
    </>
  );
}

export default App;
