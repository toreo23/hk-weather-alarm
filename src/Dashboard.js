import { useState, useEffect, useRef } from 'react'
import YouTube from 'react-youtube';
import Alarm from './Alarm'
import Warnings from './Warnings'
import CreateAlarm from './CreateAlarm'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import moment from 'moment'

const alarmsetting = []
const testNewAlarm = {
    isActive: true,
    alarmTime: '02:37',
    isExclude8910: true,
    isExcludePre8: true,
    youtubeId: 'xXhEz3hqlQE'
}

const testTC8 = [
    {
        "contents": [
            "Thunderstorm Warning issued at 1:28 p.m. on 13 Oct 2021 has been extended until 6:00 p.m. today. Squally thunderstorms are expected to occur over Hong Kong.",
            "Members of the public are advised to take the following precautions when thunderstorms occur:",
            "1. Stay indoors. Seek shelter in buildings if you are engaging in outdoor activities.",
            "2. Do not stand on high grounds. Keep away from highly conductive objects, trees or masts."
        ],
        "warningStatementCode": "WTS",
        "updateTime": "2021-10-13T15:45:00+08:00"
    },
    {
        "contents": [
            "Amber Rainstorm Warning Signal Special Announcement issued by the Hong Kong Observatory at 2:02 p.m.",
            "The Rainstorm Warning Signal is now Amber. This means that heavy rain has fallen or is expected to fall generally over Hong Kong, exceeding 30 millimetres in an hour, and is likely to continue.",
            "There will be flooding in some low-lying and poorly drained areas. People who are likely to be affected should take necessary precautions to reduce their exposure to risk posed by the heavy rain and flooding.",
            "Heavy rain may bring about flash floods. People should stay away from watercourses. People who are likely to be affected by flooding should take necessary precautions to avoid losses.",
            "Please listen to radio or watch television for traffic conditions and further announcements on the rainstorm."
        ],
        "subtype": "WRAINA",
        "warningStatementCode": "WRAIN",
        "updateTime": "2021-10-13T14:02:00+08:00"
    },
    {
        "contents": [
            "Tropical Cyclone Warning Bulletin",
            "Here is the latest Tropical Cyclone Warning Bulletin issued by the Hong Kong Observatory.",
            "The No. 8 Northeast Gale or Storm Signal is in force.",
            "This means that winds with mean speeds of 63 kilometres per hour or more are expected from the northeast quarter.",
            "Typhoon Kompasu has already made landfall on Hainan Island.",
            "At 4 p.m., Typhoon Kompasu was centred about 520 kilometres southwest of Hong Kong (near 19.1 degrees north 110.5 degrees east) and is forecast to move west at about 22 kilometres per hour across Hainan Island.",
            "As Kompasu departs from Hong Kong and has made landfall over Hainan Island, local winds are subsiding further. The Observatory will issue the Strong Wind Signal, No. 3 to replace the Gale or Storm Signal, No. 8 shortly.",
            "Outer rainbands of Kompasu continue to affect the coast of Guangdong. The associated rainfall may lead to flooding in low-lying areas. Members of the public should continue to take precautions against flooding. Seas will be rough with swells. Members of the public should stay away from the shoreline and not engage in water sports.",
            "In the past hour, the maximum sustained winds recorded at Waglan Island and Cheung Chau were 72 and 67 kilometres per hour with maximum gusts 89 and 81 kilometres per hour respectively.",
            "(Precautionary Announcements with No. 8 Signal)",
            "1. Do not stand near windows on the exposed side of your home. Make sure you have a safe place to shelter, should windows be broken.",
            "2. Owners of neon signs should switch off the electricity supply to the signs.",
            "3. Although the tropical cyclone is moving away from Hong Kong, gales are expected to persist for some time. Please continue to stay indoors until winds moderate. Do not touch electric cables that have been blown loose.",
            "4. Please listen to radio or watch TV for the latest weather information broadcast. You can also browse the Hong Kong Observatory's website and mobile app for the information."
        ],
        "subtype": "TC8NE",
        "warningStatementCode": "WTCSGNL",
        "updateTime": "2021-10-13T15:45:00+08:00"
    }
]



function Dashboard() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [currentWarning, setCurrentWarning] = useState([])
    const [alarms, setAlarms] = useState(alarmsetting)
    const [currentDetail, setCurrentDetail] = useState([])
    const [openDialog, setOpenDialog] = useState(false)

    const alarmsRef = useRef(null)


    const onUpdateAlarm = (alarmId, newAlarm) => {
        setAlarms(alarms.map((alarm, id) => id === alarmId ? newAlarm : alarm))
        console.log(alarms)
    }

    const onCreateNewAlarm = (newAlarm) => {
        setOpenDialog(false)
        console.log('onCreateNewAlarm alarms', alarms)
        setAlarms([...alarms, newAlarm])
        
        console.log('after new alarm alarms', alarms)
    }

    const OnCreateNewAlarmClose = () => {
        setOpenDialog(false)
    }

    const onOpenCreateNewAlarm = () => {

        setOpenDialog(true)
    }

    //Youtube
    const [playAlarm, setPlayAlarm] = useState(false)
    const videoIdA = 'xXhEz3hqlQE'
    const videoIdB = 'U15GCtASDPU'
    const [videoId, setVideoId] = useState('xXhEz3hqlQE');
    const [player, setPlayer] = useState(null);

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //autoplay: 1,
        },
    };


    const onReady = (event) => {
        // eslint-disable-next-line
        console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);
        setPlayer(event.target);
        event.target.playVideo()
        event.target.unMute()
        event.target.setVolume(50)


    };

    const onPlayVideo = () => {
        player.playVideo();
    };

    const onPauseVideo = () => {
        player.pauseVideo();
    };

    const onChangeVideo = () => {
        setVideoId(videoId === videoIdA ? videoIdB : videoIdA);
    };

    const onAlarmPlay = (newVideoID) => {
        
        setPlayAlarm(false)
        if(!newVideoID=="") setVideoId(newVideoID)
        else{ setVideoId("xXhEz3hqlQE")}
        setPlayAlarm(true)
        // player.playVideo();
        
        // player.unMute()
        // player.setVolume(100);
    }

    const getWxWarning = (alarms) => {
        console.log('start getwxwarning')
        console.log(alarms)
        fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang=tc')
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                let arrayNewCurrentWarning = []
                if (response.details) {
                    // arrayNewCurrentWarning = response.details.map(detail => detail.subtype)
                    // setCurrentDetail(response.details)

                    // arrayNewCurrentWarning = testTC8.map(detail => detail.subtype)
                    // arrayNewCurrentWarning = [...arrayNewCurrentWarning, ...testTC8.map(detail => detail.warningStatementCode)]

                    arrayNewCurrentWarning = response.details.map(detail => detail.subtype)
                    arrayNewCurrentWarning = [...arrayNewCurrentWarning, ...response.details.map(detail => detail.warningStatementCode)]
                    arrayNewCurrentWarning = arrayNewCurrentWarning.filter(warning => warning !== undefined)
                    console.log('arrayNewCurrentWarning', arrayNewCurrentWarning)
                    //setCurrentDetail(testTC8)
                    setCurrentDetail(response.details)
                }

                console.log('alarms 167', alarms)

                alarms.forEach((alarm, index) => {
                    if (alarm.isActive) {
                        //checking
                        const alarmtime = moment(alarm.alarmTime)
                        // console.log('alarmtime', alarmtime)
                        // console.log('alarmtime.min', alarmtime.minute())
                        // console.log('alarmtime.hour', alarmtime.hour())
                        // console.log('moment().minute()', moment().minute())
                        // console.log('moment().hour()', moment().hour())
                        if (!alarm.isGoWorkAlarm && alarmtime.minute() === moment().minute() && alarmtime.hour() === moment().hour()) {
                            console.log('time match')

                            if ((alarm.isExclude8910 && arrayNewCurrentWarning.includes('TC8NE', 'TC8SE', 'TC8NW', 'TC8SW', 'TC9', 'TC10')) ||
                            (alarm.isExcludePre8 && arrayNewCurrentWarning.includes('WTCPRE8'))) {
                                return
                            }
                            onAlarmPlay(alarm.youtubeId)
                        }
                        if (alarm.isGoWorkAlarm && currentWarning.includes('TC8NE', 'TC8SE', 'TC8NW', 'TC8SW', 'TC9', 'TC10') && arrayNewCurrentWarning.includes('TC3', 'TC1')) {
                            //fire the alarm
                            //setPlayAlarm(true)
                            onAlarmPlay(alarm.youtubeId)
                        }
                        setCurrentWarning(arrayNewCurrentWarning)
                    }
                })



            })
            .catch((err) => {
                console.log(err)
            })
    }

    //UseEffect
    useEffect(() => {
        const time = setInterval(() => { setCurrentTime(new Date()) }, 1000)
        //const getWx = setInterval(() => { getWxWarning() }, 60000)
        //getWxWarning()
    }, []);

    useEffect(() => {
        alarmsRef.current = alarms;
    })

    useEffect(() => {
        getWxWarning(alarmsRef.current);
        const timer = setInterval(() => {
            getWxWarning(alarmsRef.current);
        }, 60000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    

    return (
        <>
            <h1>{currentTime.toLocaleString()}</h1>
            {/* <Button onClick={() => { onAlarmPlay() }}>Click to Play</Button>
            <Button onClick={() => { getWxWarning() }}>getWxWarning</Button> */}
            <Button onClick={() => { onOpenCreateNewAlarm() }}>add New Alarm</Button>

            <Box
                //sx={{ p: 2}}
                display="flex"
                justifyContent="center"
                //alignItems="center"
                flexDirection="row"
                flexWrap="wrap"
            ><Box
                sx={{ p: 2 }}>
                    {alarms.map((alarm, index) => (
                        <><Alarm
                            setting={alarm}
                            index={index}
                            onUpdateAlarm={onUpdateAlarm}
                        /> </>

                    ))}
                </Box>
                <Box sx={{ p: 2, maxWidth: 'md' }}>
                    <Warnings currentDetail={currentDetail} />

                </Box>
                {playAlarm && <Box sx={{ maxWidth: '80%' }}><YouTube videoId={videoId} opts={opts} onReady={onReady} containerClassName={"youtubeContainer"} /></Box>}
            </Box>

            <CreateAlarm
                open={openDialog}
                onCreateNewAlarm={onCreateNewAlarm}
                onCreateNewAlarmClose={OnCreateNewAlarmClose} />


        </>
    )

}

export default Dashboard