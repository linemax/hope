import {Photo} from "./Photo";
import {Video} from "./Video";

export interface Article {
  id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  author: string;
  published_at: Date;
  photo: Photo;
  video: Video;
  description: string;
}

export interface ArticleResponse {
  "current_page": number,
  "data": Array<Article>
  "first_page_url": string,
  "from": number,
  "next_page_url": string|null,
  "path": string,
  "per_page": number|null,
  "prev_page_url": string|null,
  "to": number
  "total": number
}
