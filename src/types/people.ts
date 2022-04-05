import { ReactElement } from "react"

export type peopleType = {
  name: string,
  preferredLocation: string,
  phoneNumber: string,
  preferredRooms: string,
  preferredBathrooms: string,
  preferredSize: string
}

export type peopleOptionType = {
  text: string,
  onClick: () => void
}

export type peopleMenuProps = {
  openHandler: boolean,
  anchorEl?: any,
  menuOptions?: any,
}