const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."




global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_11_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU3QXVIWDJmMTJXZ0NIeG5zOVRHK0JJY1ZjRE05VWVoWmF0OEczUnRlZ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1ITDFCbmFRUWdPUHNuSlBnMWRpUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGM2ZjgzZGItZTlhNC00YTMwLWFmYWItNjg5NzQ5NmFjZWU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDExOSxcbiAgICAgIDExNSxcbiAgICAgIDE0MCxcbiAgICAgIDEyNyxcbiAgICAgIDE0MSxcbiAgICAgIDI5LFxuICAgICAgMjMwLFxuICAgICAgMjAzLFxuICAgICAgMTkzLFxuICAgICAgMjA3LFxuICAgICAgNTMsXG4gICAgICAyNDcsXG4gICAgICAxODgsXG4gICAgICAxNjUsXG4gICAgICA4LFxuICAgICAgMCxcbiAgICAgIDk5LFxuICAgICAgMTMzLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDE4MCxcbiAgICAgIDExLFxuICAgICAgOTcsXG4gICAgICA4NCxcbiAgICAgIDE1NyxcbiAgICAgIDIyNSxcbiAgICAgIDE0LFxuICAgICAgMjEzLFxuICAgICAgNjksXG4gICAgICAyMTYsXG4gICAgICAxNDUsXG4gICAgICAxMDgsXG4gICAgICAxMjcsXG4gICAgICAxODgsXG4gICAgICAxNjksXG4gICAgICAzNCxcbiAgICAgIDEwMyxcbiAgICAgIDY0LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9NbHk4UXVzdjl0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpM1JzSFNremltaHlFL2trNHVRdWRXRWluMTV1SHVlUkZUNHN2OWRTaDB3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM5aWJncFF4d3pWdGpnRUdhZnczMlVQSkJwSVFVeFFjTk5zNlBSanJ4UE44VXRDY2YzZlc5ejZQdTdUYXE1M2M2Z0l2WXFzU0sxeFJmNGFwQ2hoS0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZVTEhkc0V5QnBnSzJoTXg5S2xEYUlpVExjQ2JxUmdmWjZvc0piWXJxSnFvbVdyUGpXZVVZT045Y0VralBuWm5MWVBTcVVVTEd0NEtHa3B6bWlpRURRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzODI5ODYyNjo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbfwnZaG8J2Wm/Cdlo7wnZaY8J2WjVwiLFxuICAgIFwibGlkXCI6IFwiMjc2MzEyNzI4MDUxOTQ5OjUyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzODI5ODYyNjo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcyMjMwMlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
