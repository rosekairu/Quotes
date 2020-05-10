export class Quotes {
  public upvotes: number;
  public downvotes: number;

  constructor(
    public author: string,
    public quote: string,
    public publisher: string,
    public entryDate: Date
  ) {
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
