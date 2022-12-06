import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useSelector } from "react-redux";
import { MdLocationOn } from "react-icons/md";

import language from "../../constants/language";
import widget_constant from "../widget/constants";
import { buttonAnalytics } from "../../utils/analytics";

/**
 *
 * @author Karl-Johan Bailey
 * @created 06/12/2022
 * @desc Permission for location dialog
 * @param { Boolean } open
 * @param { Function } onClose Event on close
 * @param { Function } onDeny Event on deny button
 * @param { Function } onAllow Event on allow button
 *
 */

const RequestLocationPrompt = ({
  open,
  onClose = () => {},
  onDeny = () => {},
  onAllow = () => {},
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

  const handleDeny = () => {
    onDeny();
    buttonAnalytics("Location Permission", {
      description: "Denied",
    });
  };

  const handleAllow = () => {
    onAllow();
    buttonAnalytics("Location Permission", {
      description: "Allowed",
    });
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
        {language[system.language].location.permission_title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText textAlign="center" color="info">
          {
            // Message
          }
          <MdLocationOn size={60} />
          <div />
          {language[system.language].location.permission_message}
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
        <Button {...button_props} onClick={handleDeny}>
          {language[system.language].location.permission_denied}
        </Button>
        <Button {...button_props} onClick={handleAllow}>
          {language[system.language].location.permission_granted}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestLocationPrompt;
