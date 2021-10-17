import { SectionExampleProps } from "./DataProps";

export interface ComponentTabProps { 
    component?: JSX.Element; 
    introduction: string; 
    sections: SectionExampleProps[]
}

export interface MyComponentsDataProps {
    title: string;
    introduction: string;
    sections: SectionExampleProps[];
    component?: JSX.Element;
    content?: JSX.Element;
}

export interface componentSectionProps {
    title: string
    image: string
    description: string
}

// YOUTUBE PROPS

export interface YoutubeProps {
    id: string;
    width?: string;
    height?: string;
}

