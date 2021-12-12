import { MouseEventHandler } from "react";

export interface modalContentProps { 
    content: JSX.Element;
    click: MouseEventHandler<HTMLDivElement>;
    type: "blank" | "modal";
}

export interface closeButtonProps {
    click: MouseEventHandler<HTMLDivElement>; 
    type: "blank" | "modal"
}

export interface ModalComponent { 
    component: JSX.Element; 
    content: JSX.Element; 
    type: "blank" | "modal" 
}