export interface Photo {
  id: string;
  created_at: Date;
  updated_at: Date;
  url: string;
}

export interface PhotosResponse {
  "current_page": number,
  "data": Array<Photo>
  "first_page_url": string,
  "from": number,
  "next_page_url": string|null,
  "path": string,
  "per_page": number|null,
  "prev_page_url": string|null,
  "to": number
  "total": number
}
