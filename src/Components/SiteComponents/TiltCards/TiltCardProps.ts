export interface TiltCardsProps {
    data: TiltCardProps[]
}

export interface TiltCardProps {
    content: JSX.Element | string;
    image: string
    name: string 
    type: string
}