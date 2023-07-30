import YAMAG from '@/utils/misskey'
import { remindPostText, remindTime } from '@/utils/config'

let now = new Date()
const getTimeDiff = ():number => remindTime.getTime() - new Date().getTime();

const MAX_RETRY_COUNT = 3

async function main() {
  console.log("Remind Post Script Launched")
  let currentDiff = getTimeDiff()
  if (20 * 1000 <= currentDiff && currentDiff < 5 * 60 * 1000) {
    while (getTimeDiff() > 58.5 * 1000) {
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    console.log(new Date())
    for (let i = 0; i < MAX_RETRY_COUNT; i++) {
      try {
        await YAMAG.Misskey.postNote(`${remindPostText}(${now.toLocaleDateString('ja-JP')})`)
        break
      }
      catch (err) {
        console.log("Post error. post after 3s")
        console.debug(err)
        await new Promise(r => setTimeout(r, 3000))
      }
    }
  }
  else {
    console.log("No Post.", currentDiff);
  }
}

main()