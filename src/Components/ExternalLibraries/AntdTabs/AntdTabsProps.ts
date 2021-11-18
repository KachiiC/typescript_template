export interface SingleTabProps {
    content?: string | JSX.Element | undefined
    description?: string
    title?: React.Key | null | undefined
    link?: string
}

export interface AntdTabsProps {
    data: SingleTabProps[]
    size?: "large" | "small"
    position?: "left" | "top"
}