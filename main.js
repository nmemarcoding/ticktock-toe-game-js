let list = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let player1turn = true;
let player2turn = false;
let player1choice = "x";
let player2choice = "o";

player(player1turn, player2turn);

function player(play1, play2) {
    if (play1 === true) {
        document.getElementById("player").innerHTML = "x";

    } else if (play2 === true) {
        document.getElementById("player").innerHTML = "o";
    }
};

// play 00
document.getElementById("row0-0").addEventListener("click", function() {
    if (player1turn === true && list[0][0] === "") {
        list[0][0] = player1choice;
        document.getElementById("row0-0").innerHTML = list[0][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[0][0] === "") {
        list[0][0] = player2choice;
        document.getElementById("row0-0").innerHTML = list[0][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// 01
document.getElementById("row0-1").addEventListener("click", function() {
    if (player1turn === true && list[0][1] === "") {
        list[0][1] = player1choice;
        document.getElementById("row0-1").innerHTML = list[0][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[0][1] === "") {
        list[0][1] = player2choice;
        document.getElementById("row0-1").innerHTML = list[0][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);

    }
});
// 02
document.getElementById("row0-2").addEventListener("click", function() {
    if (player1turn === true && list[0][2] === "") {
        list[0][2] = player1choice;
        document.getElementById("row0-2").innerHTML = list[0][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[0][2] === "") {
        list[0][2] = player2choice;
        document.getElementById("row0-2").innerHTML = list[0][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// play 10
document.getElementById("row1-0").addEventListener("click", function() {
    if (player1turn === true && list[1][0] === "") {
        list[1][0] = player1choice;
        document.getElementById("row1-0").innerHTML = list[1][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[1][0] === "") {
        list[1][0] = player2choice;
        document.getElementById("row1-0").innerHTML = list[1][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// 11
document.getElementById("row1-1").addEventListener("click", function() {
    if (player1turn === true && list[1][1] === "") {
        list[1][1] = player1choice;
        document.getElementById("row1-1").innerHTML = list[1][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[1][1] === "") {
        list[1][1] = player2choice;
        document.getElementById("row1-1").innerHTML = list[1][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// 12
document.getElementById("row1-2").addEventListener("click", function() {
    if (player1turn === true && list[1][2] === "") {
        list[1][2] = player1choice;
        document.getElementById("row1-2").innerHTML = list[1][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[1][2] === "") {
        list[1][2] = player2choice;
        document.getElementById("row1-2").innerHTML = list[1][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// play 20
document.getElementById("row2-0").addEventListener("click", function() {
    if (player1turn === true && list[2][0] === "") {
        list[2][0] = player1choice;
        document.getElementById("row2-0").innerHTML = list[2][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[2][0] === "") {
        list[2][0] = player2choice;
        document.getElementById("row2-0").innerHTML = list[2][0];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// 21
document.getElementById("row2-1").addEventListener("click", function() {
    if (player1turn === true && list[2][1] === "") {
        list[2][1] = player1choice;
        document.getElementById("row2-1").innerHTML = list[2][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[2][1] === "") {
        list[1][1] = player2choice;
        document.getElementById("row2-1").innerHTML = list[2][1];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);
    }
});
// 22
document.getElementById("row2-2").addEventListener("click", function() {
    if (player1turn === true && list[2][2] === "") {
        list[2][2] = player1choice;
        document.getElementById("row2-2").innerHTML = list[2][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = false;
        player2turn = true;
        player(player1turn, player2turn);
    } else if (player2turn === true && list[2][2] === "") {
        list[2][2] = player2choice;
        document.getElementById("row2-2").innerHTML = list[2][2];
        document.getElementById("winner").innerHTML = winner(list);
        player1turn = true;
        player2turn = false;
        player(player1turn, player2turn);

    }
})

document.getElementById("winner").addEventListener("click", function() {
    document.getElementById("winner").innerHTML = winner(list);
});

//again
document.getElementById("again").addEventListener("click", function() {
    let empty = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    list = empty;

    let row = 0;
    let col = 0;

    for (row = 0; row < 3; row++) {
        for (col = 0; col < 3; col++) {
            let id = "row" + row + "-" + col;
            document.getElementById(id).innerHTML = list[row][col];
        }

    }
    document.getElementById("winner").innerHTML = "Who is winner";

});

// winner function
function winner(list) {
    //     \
    if (list[0][0] != "" && list[1][1] != "" && list[2][2] != "" && list[2][2] === list[1][1] && list[2][2] === list[0][0]) {
        return list[0][0] + " is winner";
        //   /
    } else if (list[0][2] != "" && list[1][1] != "" && list[2][0] != "" && list[1][1] === list[0][2] && list[1][1] === list[2][0]) {
        return list[0][2] + " is winner";
    }
    // 1-
    else if (list[0][0] != "" && list[0][1] != "" && list[0][2] != "" && list[0][0] === list[0][1] && list[0][1] === list[0][2]) {
        return list[0][2] + " is winner";
    }
    // 2-
    else if (list[1][0] != "" && list[1][1] != "" && list[1][2] != "" && list[1][0] === list[1][1] && list[1][1] === list[1][2]) {
        return list[1][2] + " is winner";
    }
    // 3-
    else if (list[2][0] != "" && list[2][1] != "" && list[2][2] != "" && list[2][0] === list[2][1] && list[2][1] === list[2][2]) {
        return list[2][2] + " is winner";
    }
    // 1 |
    else if (list[0][0] != "" && list[1][0] != "" && list[2][0] != "" && list[1][0] === list[0][0] && list[1][0] === list[2][0]) {
        return list[2][0] + " is winner";
    }
    // 2|
    else if (list[0][1] != "" && list[1][1] != "" && list[2][1] != "" && list[1][1] === list[0][1] && list[1][1] === list[2][1]) {
        return list[2][1] + " is winner";
    }
    // 3|
    else if (list[0][2] != "" && list[1][2] != "" && list[2][2] != "" && list[1][2] === list[0][2] && list[1][2] === list[2][2]) {
        return list[2][2] + " is winner";
    } else {
        return "no winner"
    }
}