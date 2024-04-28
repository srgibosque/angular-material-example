export class Image {
  author: string;
  download_url: string;
  height: number;
  id: number;
  url: string;
  width: number;

  constructor(author: string, download_url: string, height: number, id: number, url: string, width: number) {
    this.author = author;
    this.download_url = download_url;
    this.height = height;
    this.id = id;
    this.url = url;
    this.width = width;
  }
}