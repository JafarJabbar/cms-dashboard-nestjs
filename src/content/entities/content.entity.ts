import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {BeforeUpdate} from "typeorm";
import {Media} from "../../media/entities/media.entity";

@Entity('content')
export class Content {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    content: string;
    @Column()
    meta_title: string;
    @Column()
    meta_description: string;
    @Column()
    video_link: string;
    @Column()
    external_link: string;
    @Column()
    type: string;
    @Column({unique: true})
    alias: string;
    @OneToOne(type => Media)
    thumbnail_image_id: Media;
    @Column()
    is_active: number;
    @Column()
    is_main_page: number;
    @Column()
    position: number;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    date: Date;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;
    @Column()
    updated_at: Date;

    @BeforeUpdate()
    updateTimestamp() {
        this.updated_at = new Date;
    }

}