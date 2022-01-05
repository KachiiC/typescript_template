export interface AntdToolTipProps {
    color?: 'pink' | 'red' | 'yellow' | 'orange' | 'cyan' | 'green' | 'blue' 
    | 'purple' | 'geekblue' | 'magenta' | 'volcano' | 'gold' | 'lime' | 'black' | 'white'
    placeholder: string | JSX.Element
    placement?: "bottom" | "bottomLeft" | "bottomRight" | "left" | "leftBottom" | "leftTop" | 
    "top" | "topLeft" | "topRight" | "rightBottom" | "right" | "rightTop" 
    content: string | JSX.Element
}