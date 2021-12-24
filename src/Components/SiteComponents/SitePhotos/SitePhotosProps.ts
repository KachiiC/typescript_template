export interface SinglePhotoProps {
    description?: string
    image: string
    text_color?: string
    title: string
}

export interface SitePhotoProps {
    data: SinglePhotoProps[]
}