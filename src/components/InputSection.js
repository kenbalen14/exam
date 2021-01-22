import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';
import inputActions from '../redux/actions/inputActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

  const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const name = useSelector(state => state.inputs.name);
  const email = useSelector(state => state.inputs.email);
  const body = useSelector(state => state.inputs.body);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addUser = () => {
    if(name && email && body) {
      dispatch(userActions.addUser({
        name,
        email,
        body
      }))
      dispatch(inputActions.resetInputs())
      setOpen(false);
    }
  }

  const updateUser = () => {
    if(name && email && body) {
      dispatch(userActions.updateUser(id, {
        name, email, body
      }))
      dispatch(inputActions.resetInputs())
      setOpen(false);
    }
  }

  const deleteUser = () => {
    dispatch(userActions.deleteUser(id))
    dispatch(inputActions.resetInputs())
    setOpen(false);
  }

  const resetText = () => {
    dispatch(inputActions.resetInputs())
  }

  const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: "30px",
  },
  dialogContent: {
    height: "188px",
  },
  dialogActionHolder: {
    padding: '24px',
  },
  }));

  const classes = useStyles();
  return (
    <div >
     <Button
       variant="contained"
       color="primary"
       className={classes.button}
       endIcon={<AddIcon/>}
       onClick={handleClickOpen}
     >
       Add User Profile
     </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{id === -1 ? "Please add your profile details here" : "Update Profile"}</DialogTitle>
        <DialogContent className={classes.dialogContent}>

        <Grid container spacing={3}>
            <Grid item xs={6}>
            <TextField
                label="Full Name"
                type="text"
                variant="outlined"
                value={name}
                onChange={e =>
                  dispatch(inputActions.setInputName(e.target.value))
                }
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                label="Email"
                type="text"
                variant="outlined"
                value={email}
                onChange={e =>
                  dispatch(inputActions.setInputEmail(e.target.value))
                }
            />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField fullWidth
                label="Details"
                type="text"
                variant="outlined"
                multiline
                rows={4}
                value={body}
                onChange={e =>
                  dispatch(inputActions.setInputBody(e.target.value))
                }
            />
            </Grid>
        </Grid>

        </DialogContent>
        <DialogActions className={classes.dialogActionHolder}>
          <Button variant="outlined" color="primary" onClick={id === -1 ? addUser : updateUser}>
              {id === -1 ? "Save" : "Update"}
          </Button>
          {id !== -1
          ? <Button variant="outlined" color="secondary" onClick={deleteUser}>
            Delete
            </Button>

          : <Button variant="outlined" onClick={resetText}>
            Clear
          </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputSection;
