import { peopleMenuProps, peopleOptionType } from "../../types";
import Popup from "reactjs-popup";
import { MenuItem } from "@mui/material";
import 'reactjs-popup/dist/index.css';

const BasePopper = ({openHandler, menuOptions}: peopleMenuProps) => {
  return (
    <Popup open={openHandler}>
      {
        menuOptions.map((option: peopleOptionType, index:any) => {
          return (
            <MenuItem key={index} onClick={option.onClick}>
              {option.text}
            </MenuItem>
          )
        })
      }
    </Popup>
  )
}

export default BasePopper;