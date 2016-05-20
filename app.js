(function () {

    var HORIZONTAL = 0;
    var VERTICAL = 1;

    var Ship = function (name, length, color) {
        this.name = name;
        this.length = length;
        this.color = color;
        this.sunk = false;
        this.hits = 0;
    };

    Ship.prototype.hit = function () {
        if (this.sunk) {
            return {
                hit: false,
                sunk: true,
                message: "This Ship is already sunk!!"
            }
        } else {
            this.hits++;

            if (this.hits === this.length) {
                this.sunk = true;
                return {
                    hit: true,
                    sunk: true,
                    message: "You sunk my: " + this.name + "!"
                };
            } else {
                return {
                    hit: true,
                    sunk: false,
                    message: "That\'s a hit!"
                }
            }
        }
    };

    var Player = function () {
        this.ships = [
            new Ship("carrier", 5, '#0000FF'),
            new Ship("battleship", 4, '#00FF00'),
            new Ship("cruise", 3, '#FF0000'),
            new Ship("submarine", 3, '#0000FF'),
            new Ship('patrol', 2, '#00FF00')
        ];

        this.grid = [];

        for (var i = 0; i < 10; i++) {
            this.grid.push([null, null, null, null, null, null, null, null, null, null])
        }
    };

    Player.prototype.placeShips = function () {
        for (var i = 0; i < this.ships.length; i++) {

            var ship = this.ships[i]
            var isPlaced = false;

            do {


                var orientation = Math.floor(Math.random() * 2);
                var startX = Math.floor(Math.random() * 10);
                var startY = Math.floor(Math.random() * 10);

                if (orientation === HORIZONTAL) {
                    //edge detect
                    if (startX + ship.length > 9) continue;
                    //cel contents detect
                    for (x = startX; x < startX + ship.length; x++) {
                        if (this.grid[startY][x]) continue;
                    }
                    for (x = startX; x < startX + ship.length; x++) {
                        this.grid[startY][x] = ship.hit.bind(ship);
                    }

                    isPlaced = true;
                } else {
                        //edge detect
                        if (startY + ship.length > 9) continue;
                        //cel contents detect
                        for (y = startY; y < startY + ship.length; y++) {
                            if (this.grid[y][StartX]) continue;
                        }
                        for (y = startY; y < startY + ship.length; y++) {
                            this.grid[y][startX] = ship.hit.bind(ship);
                        }

                        isPlaced = true;
                    }
                }
                while (!isPlaced)
        }
        
        for (var y = 0; y < 10; y++){
            for(var x = 0; x < 10; x++){
                if(!this.grid[y][x]){
                    this.grid[y][x] = function (){
                        return {
                            hit: false,
                            sunk: false,
                            message: "Miss!"
                        }
                    };
                }
            }
        }
        
    };

        windows.BattleshipAI = BattleshipAI;

    })();