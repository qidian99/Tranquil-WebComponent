import PropTypes from 'prop-types';
import { useEffect } from 'preact/hooks'
import './CustomModal.less';
import Modal from 'react-modal'
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    marginRight: 50,
    padding: theme.spacing(4),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(4),
  },
}))(MuiDialogActions);

export const CustomDialog = ({
  children,
  title,
  showModal,
  onModalClose,
  footerText = "Save changes",
  showFooter,
  buttons = (
    <Button onClick={onModalClose} color="primary">
      {footerText}
    </Button>
  ),
  disableEnforceFocus = true,
  disablePortal = true
}) => {
  // const [open, setOpen] = useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog
        onClose={onModalClose}
        aria-labelledby="customized-dialog-title"
        open={showModal}
        disableEnforceFocus={disableEnforceFocus}
        disablePortal={disablePortal}
      >
        <DialogTitle id="customized-dialog-title" onClose={onModalClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        {showFooter && <DialogActions>{buttons}</DialogActions>}
      </Dialog>
    </div>
  );
};


export const CustomModal = ({
  tagName,
  showModal,
  customStyles,
  onModalClose,
  children,
}) => {

  useEffect(() => {
    Modal.setAppElement('body');
    const modalOverlays = document.getElementsByClassName(tagName + "-modal-portal");
    for (let i = 0; i < modalOverlays.length; i++) {
      const modalOverlay = modalOverlays[i];
      modalOverlay.parentElement.removeChild(modalOverlay);
      document.getElementsByTagName("body")[0].appendChild(modalOverlay);
    }
  }, [tagName])

  return (
    <Modal
      portalClassName={tagName + "-modal-portal"}
      isOpen={showModal}
      contentLabel="Custom Modal Dialog"
      style={customStyles}
      ariaHideApp={true}
    >
      <div className="custom-dialog">
        <CloseIcon
          style={{
            width: '1.5em',
            height: '1.5em',
            stroke: 'black',
            'stroke-width': 2,
            color: 'transparent',
            cursor: 'pointer',
          }}
          className="close-button"
          onClick={onModalClose} />
        {children}
      </div>
    </Modal>
  );
}

CustomModal.propTypes = {
  tagName: PropTypes.string,
  showModal: PropTypes.bool,
  customStyles: PropTypes.object,
  onModalClose: PropTypes.func,
  children: PropTypes.node,
}

CustomModal.defaultProps = {
  tagName: 'custom-modal',
  showModal: true,
  customStyles: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-5%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      borderRadius: '16px',
      backgroundColor: '#f4f4f4',
      'min-width': '400px',
      'max-width': '600px',
      padding: 0,
    }
  },
  onModalClose: () => { },
  children: null,
}
