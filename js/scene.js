(function() {
    var game = this.colorQuestGame = this.colorQuestGame || {};
    //put some common scene logic into 'scene' object
    var scene = { node:
        document.querySelector('.scene'),
            show: function() {
                this.node.classList.remove('out');
                this.node.classList.add('in');
            },
            hide: function() {
                this.node.classList.remove('in');
                this.node.classList.add('out');
            }
        };

        var gameScene = game.gameScene =
            Object.create(scene);
            gameScene.node = 
                document.getElementById('game-scene');
                gameScene.handleInput = function() {
                    document.getElementById('finish-btn').onclick = function() {
                        game.flow.finishLevel();
                    };
                    document.getElementById('gameover-btn').onclick = function() {
                        game.flow.gameOver();
                    };
                };
}
//scene instances code to go here
) ();