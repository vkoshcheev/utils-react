import { sleep } from "utils-js"

export const scrollToTop = (smooth = true, delay = 0) => {
  sleep(delay).then(() => window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : undefined }))
}