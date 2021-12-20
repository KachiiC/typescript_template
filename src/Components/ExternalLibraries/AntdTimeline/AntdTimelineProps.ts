export interface AntdTimelineDataProps { 
    content: string
    year: number
    event: string
    color?: string | undefined
}

export interface AntdTimelineProps {
    data: AntdTimelineDataProps[]
    title: string;
}