export interface SinglePhotoProps {
    image: string
    title: string
    description?: string
    text_color?: string
}

export interface SitePhotoProps {
    data: SinglePhotoProps[]
}