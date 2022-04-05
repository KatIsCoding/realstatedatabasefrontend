import { peopleOptionType, peopleMenuProps } from "../../types"
import BasePopper from "./basePopup"


const peopleOptions: peopleOptionType[] = [
  {
    text: "Editar",
    onClick: () => {console.log("Editar")}
  },
  {
    text: "Eliminar",
    onClick: () => {console.log("Eliminar")}
  }
]



export const PeopleMenu = ({openHandler, anchorEl}: peopleMenuProps) => {
  return (
    <BasePopper openHandler={openHandler} menuOptions={peopleOptions} />
  )
}