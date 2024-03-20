import { GameAi } from "./game-ai";

export class NpcAi extends GameAi {
    protected takeTurn(): void {
        console.log('Npm is talking!');
    }
}