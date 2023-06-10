import { Director } from "./src/Director";
import { BuilderModel1 } from "./src/builders";

const director = new Director();
const abcModel = director.createModel1WithConfigABCConfigs();
const defModel = director.createModel1WithConfigDEFConfigs();
const customModel = new BuilderModel1('ghi', 'ghi')
.setOptionalConfig1('ghi')
.setOptionalConfig2('ghi')
.build()
console.log(abcModel.getConfiguration());
console.log(defModel.getConfiguration());
console.log(customModel.getConfiguration());
