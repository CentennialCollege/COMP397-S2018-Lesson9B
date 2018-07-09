module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._playLabel = new objects.Label("Play!", "60px", "Consolas", "#000000", 320, 240, true);
            this._nextButton = new objects.Button("NextButton", 320, 360, true);

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            this.addChild(this._playLabel);
            this.addChild(this._nextButton);

            this._nextButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.END;
            }, this);
        }
    }
}