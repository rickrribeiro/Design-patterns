// A Director class is optional in a Builder pattern

import { BuilderModel1 } from "./builders";


export class Director{

    createModel1WithConfigABCConfigs(){
        return new BuilderModel1('abcR1', 'abcR2')
                    .setOptionalConfig1('abcO1')
                    .setOptionalConfig2('abcO2')
                    .build();
    }
    createModel1WithConfigDEFConfigs(){
        return new BuilderModel1('defR1', 'defR2')
                    .setOptionalConfig1('defO1')
                    .setOptionalConfig2('defO2')
                    .build();
    }

}