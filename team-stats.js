const team = {
  _players: [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Smith', age: 30},
    {firstName: 'Alice', lastName: 'Johnson', age: 28}
    ],
  _games: [
    {opponent: 'Bulls', teamPoints: 50, opponentPoints: 90},
    {opponent: 'Cows', teamPoints: 75, opponentPoints: 45},
    {opponent: 'Goats', teamPoints: 20, opponentPoints: 75},

  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
      };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('Titans', 100, 98);
console.log(team._players);

console.log(team._games);