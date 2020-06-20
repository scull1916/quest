(function(){
    var game = this.colorQuestGame = this.colorQuestGame || {};

    //level data
    var questLevels = [
        [ [5, 6], [3] ],
        [ [6], [1, 2] ],
        [ [5, 6] ],
        [ [3], [1, 2], [4] ],
        [ [1, 2], [3], [4], [5, 6] ],
    ];

    //quest model definition
    /*quest is a type of composition, the difference is that the quest is specifically used
    as the question for the player to provide the answer.*/

    var quest = game.Quest = (function(){
        function Quest(level) {
            var questData = questLevels[level];
            this.data = questData;
        }
        Quest.prototype = newgame.Composition();
        //extends the quest prototype from Composition.
        return Quest;
    })();
})();