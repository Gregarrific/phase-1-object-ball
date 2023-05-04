function gameObject() {
     obj = { home: {
    teamName: 'Brooklyn Nets',
    colors: ['Black','White'],
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
    let game = gameObject();
    for (let gameKey in game) {
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        let player = teamObj.players;
        for (let key in player) {
            if (teamKey === "players") {
                if (key === name) {
                    let stats = game[gameKey][teamKey][key];
                    return stats;
                }
            }
        }
      }
    }
  }

  function numPointsScored(playerName) {
    let info = playerInfo(playerName);
    for (let key in info) {
        if (key === "points") {
            let points = info[key];
            return points; 
        }
    }
  }

  function shoeSize(playerName) {
    let info = playerInfo(playerName);
    for (let key in info) {
        if (key === "shoe") {
            let shoeSize = info[key];
            return shoeSize; 
        }
    }
  }

  function teamNames() {
    let game = gameObject();
    let name = [];
    for (let key in game) {
        name.push(game[key]['teamName']);
    }
    return name;
  }

  function teamColors(name) {
    let game = gameObject();
    for (let key in game) {
        if (game[key]['teamName'] === name) {
            let colors = game[key]['colors'];
            return colors;
        }
    }
  }

  function playerNumbers(name) {
    let game = gameObject();
    let jerseys = [];
    for (let key in game) {
        if (game[key]['teamName'] === name) {
            let players = game[key]['players'];
            for (let player in players) {
                jerseys.push(players[player]['number']);
            }
            return jerseys;
        }
    }
  }

  function playerStats(name) {
    let info = playerInfo(playerName);
    return info;
  }

  function getShoeSize() {
    let game = gameObject();
    let shoeSizes = {};
    for (let key in game) {
        let players = game[key]['players'];
        console.log(players);
        for (position in players) {
            if (players[position] === 'shoe')
        }
           // for (let player in players) {
                //shoeSizes.push({players.player: players.players.number});
           // }
           // return shoeSizes;
        }
    }