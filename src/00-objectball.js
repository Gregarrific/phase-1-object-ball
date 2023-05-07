function gameObject() {
  obj = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    }, away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
  return obj;
}

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

function playerInfo(name) {
  for (let gameKey in gameObject()) {
    for (let teamKey in gameObject()[gameKey]) {
      for (let key in gameObject()[gameKey].players) {
        if (teamKey === "players") {
          if (key === name) {
            let stats = gameObject()[gameKey][teamKey][key];
            return stats;
          }
        }
      }
    }
  }
}

function numPointsScored(playerName) {
  for (let key in playerInfo(playerName)) {
    if (key === "points") {
      return playerInfo(playerName)[key];
    }
  }
}

function shoeSize(playerName) {
  for (let key in playerInfo(playerName)) {
    if (key === "shoe") {
      return playerInfo(playerName)[key];
    }
  }
}

function teamNames() {
  let name = [];
  for (let key in gameObject()) {
    name.push(gameObject()[key]['teamName']);
  }
  return name;
}

function teamColors(name) {
  for (let team in gameObject()) {
    if (gameObject()[team]['teamName'] === name) {
      return gameObject()[team]['colors'];
    }
  }
}

function playerNumbers(teamsName) {
  let jerseys = [];
  for (const team in gameObject()) {
    if (gameObject()[team].teamName === teamsName) {
      for (let player in gameObject()[team].players) {
        jerseys.push(gameObject()[team].players[player].number);
      }
      return jerseys;
    }
  }
}

function bigShoeRebounds() {
  let maxShoeSize = 0;
  let playerWithMaxShoeSize = {};
  for (const team in gameObject()) {
    for (const player in gameObject()[team].players) {
      if (gameObject()[team].players[player].shoe > maxShoeSize) {
        maxShoeSize = gameObject()[team].players[player].shoe;
        playerWithMaxShoeSize = {
          name: player,
          rebounds: gameObject()[team].players[player].rebounds
        };
      }
    }
  }
  return playerWithMaxShoeSize;
}

function mostPointsScored() {
  let maxPoints = 0;
  let playerMostPoints = {};
  for (const team in gameObject()) {
    for (const player in gameObject()[team].players) {
      if (gameObject()[team].players[player].points > maxPoints) {
        maxPoints = gameObject()[team].players[player].points;
        playerMostPoints = {
          name: player,
          points: gameObject()[team].players[player].points
        };
      }
    }
  }
  return playerMostPoints;
}

function winningTeam() {
  let totalPoints = [];
  let points = 0;
  let message
  
  function returnPoints(team, player) {
    return gameObject()[team].players[player].points;
  }
  
  for (const team in gameObject()) {
    points = 0;
    totalPoints.push(gameObject()[team].teamName);
    for (const player in gameObject()[team].players) {
      points = points + returnPoints(team, player)
    }
    totalPoints.push(points);
  }
  
  if (totalPoints[1] > totalPoints[3]) {
    message = `The ${totalPoints[0]} are the winner with ${totalPoints[1]} points.`;
  } else if (totalPoints[1] === totalPoints[3]) {
    message = `The game is a tie.  Both teams had ${totalPoints[1]} points.`
  } else {
    message = `The ${totalPoints[2]} are the winner with ${totalPoints[3]} points.`
  }
  return message;
}