export interface SiteCardProps  { 
    data: SiteSingleCardProps[] 
    card_size?: "xs" | "small" | "medium" | "large" | "xl"
}
export interface SiteSingleCardProps {
    description: string 
    image: string 
    link?: string
    link_type?: "external" | "local" | string | undefined
    span?: number
    title: string 
    // For Filter Gallery
    type?: string
}
