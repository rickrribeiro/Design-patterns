import { Btn } from "./src/components/btn";
import { Iterator1} from "./src/iterators/iterator1";
import { Iterator2 } from "./src/iterators/iterator2";

const iterator1 = new Iterator1()
const iterator2 = new Iterator2()

const btn = new Btn(iterator1);
const btn2 = new Btn(iterator2)

for(let i = 0; i<7; i++){
    btn.click()
}

for(let i = 0; i<7; i++){
    btn2.click()
}

