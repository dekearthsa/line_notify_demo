"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerLine = void 0;
const axios = require('axios');
const qs = require('qs');
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });
const lineUrl = process.env.LINE_NOTIFY_URL;
const lineToken = process.env.LINE_NOTIFY_TOKEN;
const controllerLine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { msg } = req.body;
    // console.log("test lineUrl => ", lineUrl);
    // console.log("test lineUrl => ", lineToken);
    // // only image send // //
    const testmsg = {
        message: `: ${msg}.`
    };
    // // sticker send // //
    const testmsg2 = {
        // message:{
        message: `: ${msg}`,
        stickerPackageId: "6359",
        stickerId: "11069849"
        // }
    };
    // // send image // // 
    const testmsg3 = {
        message: `: ${msg}`,
        imageThumbnail: "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=700&dpr=2&s=none",
        imageFullsize: "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=700&dpr=2&s=none"
    };
    const headerConfig = {
        headers: {
            Authorization: `Bearer ${lineToken}`,
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
    };
    try {
        yield axios.post(lineUrl, 
        // qs.stringify(testmsg2),
        testmsg3, headerConfig);
        // console.log("notifyRequest => ",notifyRequest)
        res.status(200).json({ status: 'ok' });
    }
    catch (err) {
        console.log(err);
        const testmsg = {
            message: "error"
        };
        // await axios.post(
        //     lineUrl,
        //     qs.stringify(testmsg),
        //     headerConfig
        // )
        // console.log("error notifyRequest => ",notifyRequest)
        res.status(200).json({ status: 'error' });
    }
});
exports.controllerLine = controllerLine;
