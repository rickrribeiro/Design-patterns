export abstract class GameAi {
    public play(): void {
        this.start();
        this.takeTurn();
        this.end();
    }

    protected start(): void {
        console.log('Game started!');
    }

    protected abstract takeTurn();

    protected end(): void {
        console.log('Game ended!');
    }
}