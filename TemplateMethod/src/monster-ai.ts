import { GameAi } from "./game-ai";

export class MonsterAi extends GameAi {
    protected takeTurn(): void {
        console.log('Monster is attacking!');
    }
}