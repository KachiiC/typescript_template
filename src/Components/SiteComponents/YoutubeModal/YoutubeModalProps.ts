import { Dispatch, MouseEventHandler, SetStateAction } from "react"

export interface SingleYoutubeSuggestionProps {
    video_thumbnail: string
    video_title: string
    click: MouseEventHandler<HTMLDivElement> | undefined
}

export interface YoutubeItemProps {
    video_description: string
    video_id: string
    video_thumbnail: string
    video_title: string
    upload_date: string
}

export interface YoutubeModalProps { 
    component?: JSX.Element
    current: YoutubeItemProps
    data: YoutubeItemProps[]
}

export interface YoutubeSuggestionProps {
    data: YoutubeItemProps[]
    setFunction: Dispatch<SetStateAction<YoutubeItemProps>>
}
