// Not not my code. Just trying to learn. 
const fs = require('fs')
const data = fs.readFileSync('../inputs/day2.txt', 'utf8').split('\r\n');

// Part one
/*const lines = fs
  .readFileSync("../inputs/day2.txt", { "encoding": "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => {
    const [direction, n] = x.split(" ");
    return {
      direction,
      "x": parseInt(n),
    };
  });

let submarine = {
  "position": 0,
  "depth": 0,
};

for (const line of lines) {
  switch (line.direction) {
    case "forward":
      submarine.position += line.x;
      break;
    case "down":
      submarine.depth += line.x;
      break;
    case "up":
      submarine.depth -= line.x;
      break;
  }
}

console.log(submarine.position * submarine.depth);*/

// Part 2
const player = {
    x: 0,
    y: 0,
    aim: 0,
}

const movePlayer = (command, value) => {
    switch(command) {
        case'forward':
            player.x +=value
            player.y += player.aim * value
            break
        case 'down': 
            player.aim += value
            break
        case 'up': 
            player.aim -= value
            break
    }
}


data.forEach(cmd => {
    const [_,command, value] = cmd.match(/(\w+) (\d+)/)
    movePlayer(command, +value)
})

console.log(player.x * player.y)