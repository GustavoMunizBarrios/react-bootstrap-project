//To create a component in React with TypeScript, you can use the 
//FC type from the react package and use it after the component name as follow:
//more info: https://www.freecodecamp.org/news/use-typescript-with-react/#prerequisites

import { FC } from 'react';

type AppProps = { //We declare the props ("title") type using "type" keyword.
  title: string;
};

const App: FC<AppProps> = ({title}) => {
  return( 
  <div>
    <h1>{title}</h1>
    <button className="btn btn-danger">Danger button</button>
  </div>
  )
};

export default App;