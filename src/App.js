import React from "react";

import PaintingList from "./components/PaintingList/PaintingList";
import Logo from "./components/logo/Logo";
import Panel from "./components/Panel/Panel";
import paintings from "./paintings.json";

const App = () => {
  return (
    <div>
      <Logo text="Главный компонент приложения!!!" />

      {/* {[<div>1</div>,<div>2</div>, <div>3</div>, <div>4</div>, <div>5</div>]} */}

      <Panel >
        <p>
          Проверка типов получаемых пропсов позволит отловить много ошибок. Это
          экономит время на дебаг, помогает при невнимательности и спасает при
          росте приложения. В будущем будет необходимо выделить время и
          познакомиться с Flow или TypeScript, а для старта хватит небольшой
          библиотеки. Пакет prop-types предоставляет ряд валидаторов для
          проверки корректности полученных типов данных во время исполнения
          кода, уведомляя о несоответствиях в консоли. Все что необходимо
          сделать это описать типы пропсов получаемых компонентом в специальном
          статическом свойстве propTypes. Проверка пропов с помощью prop-types
          происходит только во время разработки, в продакшене в ней нет
          необходимости.
        </p>
      </Panel>
{/* 
      <Panel>
        <article>jfvbjhdjkfbfnh</article>
      </Panel> */}

      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
