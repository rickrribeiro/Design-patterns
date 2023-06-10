import { Model1 } from "../models"


export interface IBuilder{
    setOptionalConfig1(config:string): IBuilder
    setOptionalConfig2(config:string): IBuilder
    build(): Model1
}