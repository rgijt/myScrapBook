export interface File {
    ID?: string;
    Type: string;
    Title: string;
    Description: string;
    FileLocation: string;
    CreatedAt: Date;
    LastUpdated: Date;
    CreatedByID: string;
    ScrapID: string;
}