export interface AntdTimelineDataProps { 
    content: string
    color?: string
    event: string
    year: number
}

export interface AntdTimelineProps {
    data: AntdTimelineDataProps[]
    title: string
}