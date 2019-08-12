import { useEffect, useState } from 'react'
import { IAutomotiveConfig, IAutomotiveWidget } from './interface/Default';
import axios from 'axios';

const useAutomotiveWidget: IAutomotiveWidget = ({ name, page }) => {
  const [widgetData, setWidgetData]: any = useState({});
  const [widgetState, addListener]: IAutomotiveConfig = useState({ name, page })
  
  const setListener = (type: string, value: any) => {
    return new Promise((res) => {
      res(addListener({...widgetState, [type]: value}));
    });
  }

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${ widgetState.page }`)
      .then(res => setWidgetData(res.data));
  }, [widgetState.page]);

  
  return [widgetData, setListener];
}

export default useAutomotiveWidget;
