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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087105303";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_41_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWOFBMMFdXL0VQbzNubXZIU0tFYVpJNnRzcnF5dEQyRzM2cFFWdyswRFZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODcxMDUzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzMTg0MEYxNkUzOUMyQjNCNjEzN0M2OEY0REEyMUZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcyMTY2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODcxMDUzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1RDlBNTFENjg2QzhDQkVEMDFEQTk2QjgyNTlDMjAxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcyMTY2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJUm9uOWNMM1RPS0ZqMTNEcDZpTjZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkM2Y3ZTk4LWZiYzAtNDc4Ny04ZTMzLTVlYTcwZDkwN2YxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA2MixcbiAgICAgIDgyLFxuICAgICAgMjQ0LFxuICAgICAgMTQ5LFxuICAgICAgMTE2LFxuICAgICAgMTQ4LFxuICAgICAgMjI5LFxuICAgICAgNjMsXG4gICAgICAxODksXG4gICAgICAxMDAsXG4gICAgICAxODAsXG4gICAgICAyNDMsXG4gICAgICAxNjAsXG4gICAgICA0OSxcbiAgICAgIDE3NCxcbiAgICAgIDE1NSxcbiAgICAgIDEyLFxuICAgICAgNTAsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE0LFxuICAgICAgMTg1LFxuICAgICAgMTQ4LFxuICAgICAgMjIsXG4gICAgICAxMSxcbiAgICAgIDE0NixcbiAgICAgIDE4NSxcbiAgICAgIDEyMSxcbiAgICAgIDEzNSxcbiAgICAgIDY4LFxuICAgICAgMjUwLFxuICAgICAgNzAsXG4gICAgICA0MSxcbiAgICAgIDIxNSxcbiAgICAgIDE2NyxcbiAgICAgIDEzNCxcbiAgICAgIDE3NSxcbiAgICAgIDQyLFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjIxVDJMRDFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3MTA1MzAzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTE2MzMwMjkyNDM4NToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNocmlzIFRpYW5h4p2k77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzdFMmVvQkVQRzR4ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtb1hOUEp2bFNKa01RZzJyUm9JMlF0L0s4WnZBRGwzZXRDb3k3SlpxMzNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdMTGNZZis5YkNqZW11ZE01aVM2SE9UWGROTHJuNG9pMllyeFI1c3dXWFNkQVMyWGVCWElGdS8wNzAvRy8wVU5McmFnM2gxcThGYjVZUkZ6QzhxZ0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRXWkVMdlBCRmFQY2FCbUdwN1g4UFhrOUJmSTljTng5ZDRGWHpnZzdJbElmSkp1Nm9FTmpJNWw1aHl5dVhHZ2JmY0hIM1RoeEE2SVR5M1B6WHZxbGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODcxMDUzMDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcyMTY1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg5MVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDkxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT09XVTVhb0w5c2UvQnhzMVJRVlIvRVlXUmYwTzFKR1RNY2ZnZm93aFd5MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTIyMDA0OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcyMTY1OTIwNFwifSIKfQ=="  // PUT your SESSION_ID 


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
