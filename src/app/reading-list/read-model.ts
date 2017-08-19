export class ReadModel {
  public title: string;
  public author: string;
  public genre: string[];
  public details: string;
  public tagline: string;
  public img: URL;
  public url: URL;

  constructor(object: {}) {
    Object.assign(this, object);
  }
}
