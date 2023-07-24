import { Server } from '@/@types'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env'

require('dotenv').config({ path: `./${envFile}` })

const today = new Date()
const recordTimeHourStr = process.env?.RECORD_HOUR
const recordTimeHourRaw = Number(typeof recordTimeHourStr === "string" && recordTimeHourStr.trim().length !== 0 ? recordTimeHourStr : NaN)
const recordTimeHour = isFinite(recordTimeHourRaw) ? recordTimeHourRaw : 3
const recordTimeSECStr = process.env?.RECORD_MINUTE
const recordTimeSECRaw = Number(typeof recordTimeSECStr === "string" && recordTimeSECStr.trim().length !== 0 ? recordTimeSECStr : NaN)
const recordTimeSEC = isFinite(recordTimeSECRaw) ? recordTimeSECRaw : 34
export const recordTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), recordTimeHour, recordTimeSEC, 0, 0)

export const postTitle = process.env?.POST_TITLE || `Today's 334 Top 10`
export const remindPostText = process.env?.REMINED_POST_TEXT || `334観測中`
export const userName = process.env?.USER_NAME || "334_t"

export const matcher = process.env.MATCHER || /(33-?4|:hanshin:)/
const DATABASE_URL = process.env.DATABASE_URL

export const server:Server = {
  origin: process.env?.SERVER_ORIGIN || "https://misskey.io",
  credential: process.env.SERVER_TOKEN || ''
}

export const isDbEnabled = ():boolean => !!DATABASE_URL

export default {recordTime, postTitle, remindPostText, matcher, userName, server, isDbEnabled}