  //BRANDON
const team = {
  _players: [
    {
      firstName: "Wilma",
      lastName: "Flintstone",
      age: 19,
    },
    {
      firstName: "Barney",
      lastName: "Rubble",
      age: 22,
    },
    {
      firstName: "Fred",
      lastName: "Flintstone",
      age: 23,
    },
  ],
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Hawks",
      teamPoints: 38,
      opponentPoints: 32,
    },
    {
      opponent: "Eagles",
      teamPoints: 28,
      opponentPoints: 35,
    },
  ],
  get games() {
    return this._games;
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("USA", 50, 10);
team.addGame("FR", 25, 30);
team.addGame("IT", 15, 5);

console.log(team.players);
console.log(team.games);