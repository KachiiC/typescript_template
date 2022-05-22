export interface AntdTabsProps {
    data: SingleTabProps[]
    position?: "left" | "top"
    size?: "large" | "small"
}

export interface SingleTabProps {
    content: string | JSX.Element
    title: React.Key | null
}