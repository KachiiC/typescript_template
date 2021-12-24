export interface AntdTabsProps {
    data: SingleTabProps[]
    position?: "bottom" | "left" | "right" | "top"
    size?: "large" | "small"
    width?: number | string
}

export interface SingleTabProps {
    content: string | JSX.Element
    title: string
}