export interface Content {
    id?: number;
    title: string;
    description: string,
    content: string,
    thumbnail_image_id: number,
    meta_title: string,
    meta_description: string,
    video_link: string,
    external_link: string,
    type: string,
    alias: string,
    is_active: number,
    is_main_page: number,
    position: number,
    date: Date,
    created_at: Date,
    updated_at: Date,
}