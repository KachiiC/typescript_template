export interface AntdTabsProps {
    data: SingleTabProps[]
    position?: "left" | "top"
    size?: "large" | "small"
}

export interface SingleTabProps {
    content?: string | JSX.Element | undefined
    description?: string
    link?: string
    title?: React.Key | null | undefined
}