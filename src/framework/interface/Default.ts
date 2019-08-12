import { Dispatch } from "react";

export type IAutomotiveWidget = (props: IAutomotiveWidgetProps) => any;

export interface IAutomotiveWidgetProps {
  name: string;
  page: number;
  deleted: boolean;
}

export interface IAutomotiveStateWidget {
  apiWasCalled: boolean;
  availableVehicles: string[];
}

export type IAutomotiveAcionWidget = (widgetState: IAutomotiveStateWidget) => IAutomotiveStateWidget;

export type IAutomotiveConfig = [IAutomotiveWidgetProps, Dispatch<any>];
