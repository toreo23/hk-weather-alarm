import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import moment from 'moment'

function Alarm(props){
    const theme = useTheme();
    const {setting, index, onUpdateAlarm} = props
    return(
        <>
        <Card sx={{ display: 'flex', minWidth: '15vw', justifyContent:'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {setting.isGoWorkAlarm ?<Typography align={'left'} component="div" variant="h3">
            8 -> 3
          </Typography>:
          <Typography align={'left'} component="div" variant="h3">
            {moment(setting.alarmTime).format('HH:mm')}
          </Typography>}
          {setting.isExclude8910 && 
          <Typography align={'left'} variant="subtitle1" color="text.secondary" component="div">
            Not ring when No. 8/9/10 is hoisted
          </Typography>}

          {setting.isExcludePre8 && 
          <Typography align={'left'} variant="subtitle1" color="text.secondary" component="div">
            Not ring when Pre 8 is hoisted
          </Typography>}
          <Typography align={'left'} variant="subtitle1" color="text.secondary" component="div">
            {setting.youtubeId}
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           <Switch
      checked={setting.isActive}
      onClick={()=>onUpdateAlarm(index, {
        ...setting,
        isActive:!setting.isActive,
    },)}
    /></Box>
     
    </Card>

        </>
    )
}

export default Alarm