function IsVictory(cells) {
    return false;
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.filter(c => c === null).length == 0;
}


const Game = {
    setup: () => ({
        cells: Array(9).fill(null)
    }),
    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] === null) {
                G.cells[id] = ctx.currentPlayer;
            }
        },
    },
    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
    },
};

export default Game;
