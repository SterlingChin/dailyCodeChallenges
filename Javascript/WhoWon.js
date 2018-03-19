// In an election, the person with the majority of the votes is the winner. Sometimes, there are no winners.

// Write a program that determines the winner of a vote, or shows that there are no winners due to a lack of majority.

const whoWon = (totalVotes, votesCandidateOne, votesCandidateTwo) => {
  let candidateOne = votesCandidateOne/totalVotes;
  let candidateTwo = votesCandidateTwo/totalVotes;
  let winner = {};
  let leader = {};

  if (candidateOne > .5) {
    winner.name = 'Candidate One';
    winner.votes = votesCandidateOne
    winner.percent = (candidateOne * 100).toFixed(0)
  } else if (candidateTwo > .5) {
    winner.name = 'Candidate Two';
    winner.votes = votesCandidateTwo
    winner.percent = (candidateTwo * 100).toFixed(0)
  } else {
      leader.name = (candidateOne > candidateTwo) ? 'Candidate One' : 'Candidate Two';
      leader.votes = (candidateOne > candidateTwo) ? votesCandidateOne : votesCandidateTwo;
      leader.percent = (candidateOne > candidateTwo) ? (candidateOne * 100).toFixed(0) : (candidateTwo * 100).toFixed(0)
      return leader.name + ' is currently leading with ' + leader.percent + '% of the vote and ' + leader.votes + ' total votes.'
  }
  return winner.name + ' is your winner with ' + winner.percent + '% of the vote and ' + winner.votes + ' total votes.'
}

whoWon(150000, 86000, 40000)

// See the code in action here: https://repl.it/@SterlingChin/GrandInexperiencedFeeds

