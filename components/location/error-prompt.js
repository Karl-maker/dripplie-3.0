import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useSelector } from "react-redux";
import { MdLocationOff } from "react-icons/md";

import language from "../../constants/language";
import widget_constant from "../widget/constants";
import { buttonAnalytics } from "../../utils/analytics";

/**
 *
 * @author Karl-Johan Bailey
 * @created 06/12/2022
 * @desc Bring up issue getting location
 * @param { Boolean } open
 * @param { Function } onClose Event on close
 * @param { Function } onClick Event on click button
 *
 */

const ErrorLocationPrompt = ({
  open,
  onClose = () => {},
  onClick = () => {},
}) => {
  const system = useSelector((state) => state.system);
  const button_props = {
    variant: "contained",
    disableElevation: true,
    color: "secondary",
    sx: {
      borderRadius: widget_constant.borderRadius,
    },
  };

  const handleClose = () => {
    onClose();
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { borderRadius: widget_constant.borderRadius },
      }}
    >
      <DialogTitle textAlign="center">
        {
          // Title
        }
        {language[system.language].location.issue_accessing_title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText textAlign="center" color="info">
          {
            // Message
          }
          <MdLocationOff size={60} />
          <div />
          {language[system.language].location.issue_accessing_message}
        </DialogContentText>
      </DialogContent>
      {
        // Actions
      }
      <DialogActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button {...button_props} onClick={handleClick}>
          {language[system.language].general.okay}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorLocationPrompt;
