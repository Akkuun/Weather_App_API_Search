export class Ghostup {
  title: string;
  description: string;
  createdDate: Date;
  ghost: number;
  imageUrl: string;

  constructor(title: string, description: string, imageUrl: string, createdDate: Date, Ghost: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.ghost=Ghost;
  }
}
