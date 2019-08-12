import React from 'react'

const useRenderer = (widgetData: any) => {
  if (!widgetData.data) {
    return null;
  }

  return widgetData.data.map(({ id, avatar, email }: any) => {
    return <li key={id}>
      <img src={avatar} alt="" />
      <span>{email}</span>
    </li>;
  });
}

export default useRenderer
