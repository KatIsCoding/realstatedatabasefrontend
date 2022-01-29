import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";


// TODO: Yo fix this shit, wtf is your problem?
function DialogComponent({}) {
  const {isOpen} = useSelector((state: RootState) => state.dialogHandler);
  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
        <Avatar>
          <img src={icon} alt="" />
        </Avatar>
      
    </Dialog>
  );

}