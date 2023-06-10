import IButton from "../../components/interfaces/IButton"
import ICheckBox from "../../components/interfaces/ICheckBox"

export default interface IGUIFactory{
    createButton(): IButton
    createCheckBox(): ICheckBox
}