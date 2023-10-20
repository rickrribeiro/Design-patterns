import {Radio, TV} from './src/devices'

import { Remote} from './src/controls/remote'

const remoteControl1 = new Remote(new Radio());
const remoteControl2 = new Remote(new TV());

console.log(remoteControl1.getVolume())
remoteControl1.volumeUp()
console.log(remoteControl1.getVolume())


console.log(remoteControl2.getVolume())
remoteControl2.volumeUp()
console.log(remoteControl2.getVolume())