import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import moment from 'moment'
const defaultAlarm = {
  isActive:true,
  isExclude8910: false,
  isExcludePre8: false,
  alarmTime: new Date(),
  youtubeId:"",
  isGoWorkAlarm:false
}

export default function CreateAlarm(props) {
  //const [value, setValue] = React.useState(new Date());
  //const [open, setOpen] = React.useState(false)
  const {onCreateNewAlarm, open, isEdit, onCreateNewAlarmClose} = props
  const [state, setState] = React.useState(defaultAlarm);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeText = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleGoWorkAlarmChange = () =>{
    setState({
      ...state,
      isExclude8910: false,
      isExcludePre8: false,
      isGoWorkAlarm: !state.isGoWorkAlarm
    })
  }

  const onSubmit = () =>{
    console.log(state)
    console.log(moment(state.time).hour())
    onCreateNewAlarm(state)
    //setState(defaultAlarm)

  }

  return (
    <>
    <Dialog
    open={open}
    //onClose={()=>setState(defaultAlarm)}
    
    //sx={{ padding: 20 }}
    >
        <Box
        sx={{ p: 2}}
        display="flex"
  justifyContent="center"
  alignItems="center"
  flexDirection="column"
  flexWrap="wrap"
        >
         <FormControlLabel
          control={
            <Switch checked={state.isGoWorkAlarm} onChange={handleGoWorkAlarmChange} name="isGoWorkAlarm" />
          }
          label="Go Work Alarm"
        />

        {!state.isGoWorkAlarm &&
        <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        //displayStaticWrapperAs="mobile"
        //orientation="landscape"
        value={state.alarmTime}
        onChange={(newValue) => {
          setState({...state,
            alarmTime : newValue});
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Ring Conditions</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.isExclude8910} onChange={handleChange} name="isExclude8910" />
          }
          label="Not ring when No. 8/9/10 is hoisted"
        />
        <FormControlLabel
          control={
            <Switch checked={state.isExcludePre8} onChange={handleChange} name="isExcludePre8" />
          }
          label="Not ring when Pre 8 is hoisted"
        />
        <TextField name="youtubeId" id="youtubeId" label="YouTube ID (optional)" variant="standard" value={state.youtubeId} onChange={handleChangeText}/>
      </FormGroup>
      {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      </>}
      {state.isGoWorkAlarm && <Typography>Will ring when No.8 is cancelled/replaced</Typography>}
      <Box sx={{display: 'flex', justifyContent:'space-between'}}>
      <Button onClick={onCreateNewAlarmClose} >CANCEL</Button>
      <Button onClick={onSubmit}>SAVE</Button>
      </Box>
    
    
    </Box>
    </Dialog>
   </>

    
  );
}