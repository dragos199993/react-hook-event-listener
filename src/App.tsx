import React, { useState, FunctionComponent } from 'react';
import useAutomotiveWidget from './hooks/useWidget';

const App: FunctionComponent = () => {
  const [widgetData, setListener, widgetRender]: any = useAutomotiveWidget({ name: 'users', page: 1, deleted: false });
  const [page, setPage] = useState(1);

  // Example with combined listeners
  const combineListener = async () => {

    // Use data from the promise or either from the global state widgetData
    let data: any = await setListener('page', page);
    console.log(data);
    console.log(widgetData);
    await setPage(page + 1);
  }

  if (!widgetData.data) {
    return null;
  }

  // console.log(pxWidget.data.data);
  return (
    <div className="App">
      <button onClick={() => combineListener()}>
        Next page
      </button>

      <button onClick={() => setListener('name', 'employee')}>
        Change type
      </button>

      <button onClick={() => setListener('deleted', true)}>
        Change type
      </button>
      Widget preview:
      { widgetRender }
    </div>
  );
}

export default App;
