const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Black_Castro,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GHOST_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Black_Castro = Black_Castro({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (MacOs)", "Safari (Ubuntu)", "Chrome (Linux)"]
             });
             if(!Pair_Code_By_Black_Castro.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Black_Castro.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Black_Castro.ev.on('creds.update', saveCreds)
            Pair_Code_By_Black_Castro.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Black_Castro.sendMessage(Pair_Code_By_Black_Castro.user.id, { text: '' + b64data });

               let GHOST_MD_TEXT = `
__________________________________________
       𝐀𝐋𝐎𝐍𝐄-𝐌𝐃
____________________________
╔════◇
║『』
║ You've Completed pairing.
╚════════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐎𝐰𝐧𝐞𝐫: https://wa.me/254737991043
║❒ 𝐑𝐞𝐩𝐨: https://github.com/Hammytec/ALONE-MD
║❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: https://whatsapp.com/channel/0029Vagq4pN9hXEy6SpCDi0X
║ 
╚════════════════╝
Fork and Give Star To My Repo`
 await Pair_Code_By_HAMMY.sendMessage(Pair_Code_By_Black_Castro.user.id,{text:GHOST_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Black_Castro.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GHOST_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service Restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await GHOST_MD_PAIR_CODE()
});
module.exports = router
