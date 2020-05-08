export class Quotes {
  public upvotes: number;
  public downvotes: number;
  public entryDate: Date;
  constructor(
    public name: string,
    public author: string,
    public quote: string
  ) {
    this.upvotes = 0;
    this.downvotes = 0;
    this.entryDate = new Date();
  }
}
