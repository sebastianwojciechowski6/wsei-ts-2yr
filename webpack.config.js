module.exports = {
    mode: 'development',
    entry: {
        initializer: './src/script/initializer.ts',
        board: '.src/script/board.ts',
        game: '.src/script/game.ts',
        player: '.src/script/player.ts',
        ship: '.src/script/ship.ts',
        cell: '.src/script/cell.ts',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'script.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
};
