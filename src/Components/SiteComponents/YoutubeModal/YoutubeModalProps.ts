import { Dispatch, MouseEventHandler, SetStateAction } from "react"

export interface SingleYoutubeSuggestionProps {
    click: MouseEventHandler<HTMLDivElement> | undefined
    video_thumbnail: string
    video_title: string
}

export interface YoutubeItemProps {
    upload_date: string
    video_description: string
    video_id: string
    video_thumbnail: string
    video_title: string
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
