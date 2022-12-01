export interface Video {
  id: string;
  created_at: Date;
  updated_at: Date;
  url: string;
}

export interface VideosResponse {
  "current_page": number,
  "data": Array<Video>
  "first_page_url": string,
  "from": number,
  "next_page_url": string|null,
  "path": string,
  "per_page": number|null,
  "prev_page_url": string|null,
  "to": number
  "total": number
}
