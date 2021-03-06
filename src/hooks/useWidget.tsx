import { useEffect, useState } from 'react'
import { IAutomotiveConfig, IAutomotiveWidget } from '../interface/Default';
import axios from 'axios';
import useRenderer from './useRenderer';

const useAutomotiveWidget: IAutomotiveWidget = ({ name, page, deleted }) => {
  const [widgetData, setWidgetData]: any = useState({});
  const [widgetState, addListener]: IAutomotiveConfig = useState({ name, page, deleted })

  const setListener = (type: string, value: any) => {
    return new Promise((res) => {
      addListener({ ...widgetState, [type]: value })
      res(widgetData);
    });
  }

  useEffect(() => {
    // Delete data
    setWidgetData({});
  }, [widgetState.deleted]);

  useEffect(() => {
    // Fetch data
    axios.get(`https://reqres.in/api/users?page=${widgetState.page}`)
      .then(res => setWidgetData(res.data));
  }, [widgetState.page]);

  useEffect(() => {
    // Change data
    console.log(widgetState.name);
  }, [widgetState.name]);


  // Use all processed data to render a template
  const renderWidget = useRenderer(widgetData);

  return [widgetData, setListener, renderWidget];
}

export default useAutomotiveWidget;
