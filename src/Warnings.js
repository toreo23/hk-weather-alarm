import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Warnings(props) {
  let {currentDetail} = props
  //currentDetail = []
  // currentDetail = [
  //      {
  //         "contents":[
  //            "Thunderstorm Warning issued at 1:28 p.m. on 13 Oct 2021 has been extended until 6:00 p.m. today. Squally thunderstorms are expected to occur over Hong Kong.",
  //            "Members of the public are advised to take the following precautions when thunderstorms occur:",
  //            "1. Stay indoors. Seek shelter in buildings if you are engaging in outdoor activities.",
  //            "2. Do not stand on high grounds. Keep away from highly conductive objects, trees or masts."
  //         ],
  //         "warningStatementCode":"WTS",
  //         "updateTime":"2021-10-13T15:45:00+08:00"
  //      },
  //      {
  //         "contents":[
  //            "Amber Rainstorm Warning Signal Special Announcement issued by the Hong Kong Observatory at 2:02 p.m.",
  //            "The Rainstorm Warning Signal is now Amber. This means that heavy rain has fallen or is expected to fall generally over Hong Kong, exceeding 30 millimetres in an hour, and is likely to continue.",
  //            "There will be flooding in some low-lying and poorly drained areas. People who are likely to be affected should take necessary precautions to reduce their exposure to risk posed by the heavy rain and flooding.",
  //            "Heavy rain may bring about flash floods. People should stay away from watercourses. People who are likely to be affected by flooding should take necessary precautions to avoid losses.",
  //            "Please listen to radio or watch television for traffic conditions and further announcements on the rainstorm."
  //         ],
  //         "subtype":"WRAINA",
  //         "warningStatementCode":"WRAIN",
  //         "updateTime":"2021-10-13T14:02:00+08:00"
  //      },
  //      {
  //         "contents":[
  //            "Tropical Cyclone Warning Bulletin",
  //            "Here is the latest Tropical Cyclone Warning Bulletin issued by the Hong Kong Observatory.",
  //            "The No. 8 Northeast Gale or Storm Signal is in force.",
  //            "This means that winds with mean speeds of 63 kilometres per hour or more are expected from the northeast quarter.",
  //            "Typhoon Kompasu has already made landfall on Hainan Island.",
  //            "At 4 p.m., Typhoon Kompasu was centred about 520 kilometres southwest of Hong Kong (near 19.1 degrees north 110.5 degrees east) and is forecast to move west at about 22 kilometres per hour across Hainan Island.",
  //            "As Kompasu departs from Hong Kong and has made landfall over Hainan Island, local winds are subsiding further. The Observatory will issue the Strong Wind Signal, No. 3 to replace the Gale or Storm Signal, No. 8 shortly.",
  //            "Outer rainbands of Kompasu continue to affect the coast of Guangdong. The associated rainfall may lead to flooding in low-lying areas. Members of the public should continue to take precautions against flooding. Seas will be rough with swells. Members of the public should stay away from the shoreline and not engage in water sports.",
  //            "In the past hour, the maximum sustained winds recorded at Waglan Island and Cheung Chau were 72 and 67 kilometres per hour with maximum gusts 89 and 81 kilometres per hour respectively.",
  //            "(Precautionary Announcements with No. 8 Signal)",
  //            "1. Do not stand near windows on the exposed side of your home. Make sure you have a safe place to shelter, should windows be broken.",
  //            "2. Owners of neon signs should switch off the electricity supply to the signs.",
  //            "3. Although the tropical cyclone is moving away from Hong Kong, gales are expected to persist for some time. Please continue to stay indoors until winds moderate. Do not touch electric cables that have been blown loose.",
  //            "4. Please listen to radio or watch TV for the latest weather information broadcast. You can also browse the Hong Kong Observatory's website and mobile app for the information."
  //         ],
  //         "subtype":"TC8NE",
  //         "warningStatementCode":"WTCSGNL",
  //         "updateTime":"2021-10-13T15:45:00+08:00"
  //      }
  //   ]

    const warningsChi = 
      [
        {
          "warning_code": "WFIRE",
          "name_tc": "火災危險警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WFROST",
          "name_tc": "霜凍警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WHOT",
          "name_tc": "酷熱天氣警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WCOLD",
          "name_tc": "寒冷天氣警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WMSGNL",
          "name_tc": "強烈季候風信號",
          "isSubtype": "n"
        },
        {
          "warning_code": "WTCPRE8",
          "name_tc": "預警八號熱帶氣旋警告信號之特別報告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WRAIN",
          "name_tc": "暴雨警告信號",
          "isSubtype": "n"
        },
        {
          "warning_code": "WFNTSA",
          "name_tc": "新界北部水浸特別報告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WL",
          "name_tc": "山泥傾瀉警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WTCSGNL",
          "name_tc": "熱帶氣旋警告信號",
          "isSubtype": "n"
        },
        {
          "warning_code": "WTMW",
          "name_tc": "海嘯警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WTS",
          "name_tc": "雷暴警告",
          "isSubtype": "n"
        },
        {
          "warning_code": "WFIREY",
          "name_tc": "黃色火災危險警告",
          "isSubtype": "y"
        },
        {
          "warning_code": "WFIRER",
          "name_tc": "紅色火災危險警告",
          "isSubtype": "y"
        },
        {
          "warning_code": "WRAINA",
          "name_tc": "黃色暴雨警告信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "WRAINR",
          "name_tc": "紅色暴雨警告信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "WRAINB",
          "name_tc": "黑色暴雨警告信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC1",
          "name_tc": "一號戒備信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC3",
          "name_tc": "三號強風信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC8NE",
          "name_tc": "八號東北烈風或暴風信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC8SE",
          "name_tc": "八號東南烈風或暴風信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC8SW",
          "name_tc": "八號西南烈風或暴風信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC8NW",
          "name_tc": "八號西北烈風或暴風信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC9",
          "name_tc": "九號烈風或暴風風力增強信號",
          "isSubtype": "y"
        },
        {
          "warning_code": "TC10",
          "name_tc": "十號颶風信號",
          "isSubtype": "y"
        }
      ]
    

    const renderWarningtitle = (code) =>{
      const getWarning = warningsChi.filter(warning=>(warning.warning_code === code))
      return code && getWarning[0].name_tc
    }


  return (
    <div>
     
    {currentDetail.length > 0 &&
    <>
      {currentDetail.map((detail, id)=>(
        
        <Accordion>
           
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         
          <Typography>{renderWarningtitle(detail.warningStatementCode)} {detail.subtype ? ' - ':''} {renderWarningtitle(detail.subtype)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {detail.contents.map((content)=>(
            <Typography align='left'>
            {content}
          </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      ))}
    </>}
      {currentDetail.length === 0 && <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>No Weather Warning</Typography>
        </AccordionSummary>
      </Accordion>}
      
    </div>
  );
}