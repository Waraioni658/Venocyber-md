//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347045845726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0duVzdVMjNOM1hpYTR1SEVLSktWZSt1ZGxSZkF6NzNyRzlGVm5LWjhHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDdHZE5tWkQ2bS90NjZpUVlOeWdFclBmU0h0NElaNVVydVlKTjg5NlUzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTnlZSWpOZjVLMXJOeDZ4dWtrZTFzWFdWWWQ3ckQrZHU3WlpFd1VtalhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnS1I0Qzd6WjlQQnRsT2g5QUZ2aXhyOGVuclZaSWdtYmR5WjN6M3RUNndFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGK0NkNGk0UmhoUjZlQkUvNEdmYlB4OWdYakoyTjdmUi9xdlpFcVVrRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVoazIybVArNVNsaUtFR0pDeTBkZzlWQ0JmQUlKakRzaENJSTIzdWpvUkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NCcExVbnZEZnk3VE0waHRPTTZLdEI5QWNwVzVJcXNDa21RL0tOSXZsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhyaGFFRCtRQjdPcGs5VjVybklOQ29uMVhkR0xoNERBQjFGbzRUOEFTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvdnk0TFQ2dHNYVCtYUG4yRHdxMytSMjRoK1NRSGRKNmxOY2VpOGVRM2Q2TDQxWFc2OFJEQjlXSjJEdENtQ0ZHU3JWbzczYkQ4VWFOdFFlZ004TWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6ImU4RVdoQm9iMTR3blUxWGlOQ1I2bEZIVm1YSTFiTVA2a3MvS1Bwb0o0RWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InF5dDUwUWpFUzVDVWZqR2lqUl9ZR3ciLCJwaG9uZUlkIjoiYzdlZWJjY2QtYmRmNC00YzkxLWI5Y2EtZjIyMGFmZDI3YTc2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpYUE93TThxUEJlZHRCQ0RIVlF4SEx4eVJhcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3eklMTmVVVjVYT0R2aVRJcE1DcEI2QmFUQ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlhMUEI1SDEiLCJtZSI6eyJpZCI6IjIzNDcwNDU4NDU3MjY6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiw5fNnMOX4oKmxYLigrXJhuKCssmEyY40NTbDl82cw5cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMb25rb1E2YXJPdEFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9pUVZvMHRhN0FqYktCOUFybTZXOVJsU21sa2hTWjdJT2RJbE1WS0Z4akk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitPWXNHVFVBdGZaRm5YNGZKSUI2S2dNZ25MQmpIVHMwTllaekNRYzJuc3ZqaVFnSGM1alVlRWZMRkN5VnRvOVZFOVJ2OTZDZTBJR0NrR2plRS9NaUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYa3NxczRGR0dmUVdNemhLK0U5ZnZSRDI1VnhQZGVUeTRidWZkdmpjMUdwNmd2bzA5WTg3RHVCdHQ4RExDZms1amtNUmtkYVRYVkxDbS9uYnVFUnJpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU4NDU3MjY6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVG9rRmFOTFd1d0kyeWdmUUs1dWx2VVpVcHBaSVVtZXlEblNKVEZTaGNZeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk0ODA4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKem0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "hey",
  author: process.env.PACK_AUTHER || "×͜×",
  packname: process.env.PACK_NAME || "×͜×",
  botname: process.env.BOT_NAME || "×͜×-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
