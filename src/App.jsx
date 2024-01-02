import "./App.css";
import data from "./assets/data.json";

import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
      <h1>Netlfix</h1>
      {data.map((type, index) => {
        return (
          <Section key={index} category={type.category} images={type.images} />
        );
      })}
    </div>
  );
}

export default App;
