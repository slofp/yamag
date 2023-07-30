import { Server } from '@/@types'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env'

require('dotenv').config({ path: `./${envFile}` })

const parseIntWithDefalult = (v:any, def:number):number => Number.isFinite(parseInt(v)) ? parseInt(v) : def;

const today = new Date()
const recordTimeHour = parseIntWithDefalult(process.env.RECORD_HOUR, 3)
const recordTimeMinute = parseIntWithDefalult(process.env.RECORD_MINUTE, 34)
export const recordTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), recordTimeHour, recordTimeMinute, 0, 0)
export const remindTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, recordTimeHour, recordTimeMinute, 0, 0)

export const postTitle = process.env?.POST_TITLE || `Today's 334 Top 10`
export const remindPostText = process.env?.REMINED_POST_TEXT || `334観測中`
export const userName = process.env?.USER_NAME || "334_t"

export const matcher = process.env.MATCHER || /(33-?4|:hanshin:)/
const DATABASE_URL = process.env.DATABASE_URL

export const mention = {
  disable_around_time: process.env?.DISABLE_MENTION_AROUND_TIME === 'TRUE',
  disable_sec_before: parseInt(process.env.DISABLE_MENTION_SEC_BEFORE || '') || 60000,
  disable_sec_after: parseInt(process.env.DISABLE_MENTION_SEC_AFTER || '') || 60000
}

export const server:Server = {
  origin: process.env?.SERVER_ORIGIN || "https://misskey.io",
  credential: process.env.SERVER_TOKEN || ''
}

export const isDbEnabled = ():boolean => !!DATABASE_URL

export default {recordTime, postTitle, remindPostText, matcher, userName, server, isDbEnabled, mention}