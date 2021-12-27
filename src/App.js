import React from "react";

import Painting from "./components/Painting/Painting";
import paintings from "./paintings.json";

console.log(paintings);


const App = () => {
  return (
    <div>
      <h1>Главный компонент приложения!!!</h1>
      <Painting
        link={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        link={paintings[2].url}
        title={paintings[2].title}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />
    </div>
  );
};

export default App;
