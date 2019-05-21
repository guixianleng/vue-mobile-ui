// 是否为对象
export function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export function isInDocument (element) {
  return document.body.contains(element)
}

// 安卓
export function isAndroid () {
  return /android/.test(navigator.userAgent.toLowerCase())
}

// IOS
export function isIOS () {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}

/**
 * 格式化时间
 * @param time 标准时间或时间戳
 * @param cFormat 转化格式
 */
export function formatTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
