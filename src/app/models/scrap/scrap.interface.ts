import { ScrapPage } from 'src/app/pages/user/scrap/scrap.page';
import { testUserAgent } from '@ionic/core';

export interface Scrap {
    ID?: string;
    Title: string;
    Content: string;
    CreatedAt: Date;
    LastUpdated: Date;
    CreatedByID: string;
    BackgroundColor: string;

    CategoryID?: string;
    BackgroundImage?: string;
    Images?: string[];
    Audios?: File[];
}