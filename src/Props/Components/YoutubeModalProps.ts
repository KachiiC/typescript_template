import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface YoutubeItemProps {
    video_title: string;
    video_id: string;
    video_description: string;
    video_thumbnail: string;
    upload_date: string;
}

export interface SingleYoutubeSuggestionProps {
    video_thumbnail: string;
    video_title: string;
    click: MouseEventHandler<HTMLDivElement> | undefined; 
}
export interface YoutubeSuggestionProps {
    data: YoutubeItemProps[]
    setFunction: Dispatch<SetStateAction<YoutubeItemProps>>;
}

export interface YoutubeModalProps { 
    component?: JSX.Element; 
    current: YoutubeItemProps; 
    data: YoutubeItemProps[];
}