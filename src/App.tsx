import React from 'react';
import useAutomotiveWidget from './framework/Base';

const App: React.FC = () => {
  const [widgetData, setListener]: any = useAutomotiveWidget({ name: 'px-widget', page: 1 });

  // Example with combine
  const combineListener = async () => {
    await setListener('name', 'px-test');
    await setListener('page', 2);
  }

  if (!widgetData.data) {
    return null;
  }
  // console.log(pxWidget.data.data);
  return (
    <div className="App">
      <button onClick={() => combineListener()}>
        Custom
      </button>
      Widget preview:
      {
        widgetData.data.map(({ id, avatar, email }: any) => {
          return <li key={ id }>
            <img src={avatar} alt="" />
            <span>{email}</span>
          </li>;
        })
      }
    </div>
  );
}

export default App;
