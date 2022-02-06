export class VoteComponent {

  totalVotes = 0;

  upVotes() {
    this.totalVotes++;
  };

  downVotes() {
    this.totalVotes--;
  }
}
