import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  it('should increment the totalVotes when upVoted', () => {
    // Arrange
    let component = new VoteComponent();

    // Act
    component.upVotes();

    // Assert
    expect(component.totalVotes).toBe(1);
  })
})
