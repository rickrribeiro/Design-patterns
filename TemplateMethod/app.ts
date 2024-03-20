import { MonsterAi } from "./src/monster-ai";
import { NpcAi } from "./src/npc-ai";

const monster = new MonsterAi();
const npc = new NpcAi();
monster.play()
npc.play()