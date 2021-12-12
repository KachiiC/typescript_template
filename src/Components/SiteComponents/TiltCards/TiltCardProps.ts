export interface TiltCardProps {
    name: string 
    type: string
    image: string
    content: JSX.Element | string;
}

export interface TiltCardsProps {
    data: TiltCardProps[]
}