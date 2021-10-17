export interface SiteSingleCardProps {
    title: string; 
    description: string; 
    image: string; 
    span?: number;
    link?: string;
    link_type?: 'external' | 'local' | string | undefined
    // For Filter Gallery
    type?: string;
}

export interface SiteCardProps  { 
    data: SiteSingleCardProps[] 
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
}