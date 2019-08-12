import { useEffect, useState } from 'react'
import { IAutomotiveConfig, IAutomotiveWidget } from './interface/Default';
import axios from 'axios';

const useAutomotiveWidget: IAutomotiveWidget = ({ name, page, deleted }) => {
  const [widgetData, setWidgetData]: any = useState({});
  const [widgetState, addListener]: IAutomotiveConfig = useState({ name, page, deleted })

  const setListener = (type: string, value: any) => {
    return new Promise((res) => {
      res(addListener({ ...widgetState, [type]: value }));
    });
  }

  useEffect(() => {
    // Delete data
    setWidgetData({});
  }, [widgetState.deleted]);

  useEffect(() => {
    // Fetch data
    axios.get(`https://reqres.in/api/${widgetState.name}?page=${widgetState.page}`)
      .then(res => setWidgetData(res.data));
  }, [widgetState.page]);

  useEffect(() => {
    // Change data
    console.log(widgetData);
  }, [widgetState.name]);


  return [widgetData, setListener];
}

export default useAutomotiveWidget;
