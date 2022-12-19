import "./App.css";
import Button from "./components/Button";

function App() {
  function alertFunction() {
    alert("Button is Clicked");
  }

  function customFunction(param) {
    console.log(param);
  }

  // const nav = ["Home", "About", "Contact"];
  const nav = [
    {
      value: "Home",
      id: 1
    },
    {
      value: "About",
      id: 2
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {nav
              .filter((item) => item.value === "Home")
              .map((li, index) => {
                return <li key={li.id}>{li.value}</li>;
              })}
          </ul>
        </nav>
        <Button type="button" onClick={alertFunction} text="Default" />
        <Button
          type="submit"
          customFunction={customFunction}
          customClass="alert"
          text="Alert"
        />
        <Button type="reset" customClass="warning" text="Warning" />
        <Button />
      </header>
    </div>
  );
}

export default App;
