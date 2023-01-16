import "./App.css"; //style sheet imported
import Dropdown from "./Dropdown"; //to import the Dropdwon component

function App() {
  //title of dropdown and menu list variables
  let title = "Select mode of your work";
  let menuList = ["Hybdrid", "Onsite", "Inoffice"];

  return (
    <div className="App">
      {/* //title of dropdown and menu list sent as props to Dropdwon component */}
      <Dropdown dropdownTitle={title} menuList={menuList}></Dropdown>
    </div>
  );
}

export default App;
