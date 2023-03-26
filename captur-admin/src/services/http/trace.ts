import Cookies from 'js-cookie'
import http from '@/services/http'
import { traceState, genTraceParent } from '@/utils/trace'

/** 抽样概率接口的 groupCode */
const groupCode = 'shopline'
/** 抽样概率接口的 appkey */
const appKey = import.meta.env.VITE_TRACE_APP_KEY

/** 非生产环境、默认概率 0, */
let chance = Cookies.get('trace_chance') || '0'
const host = import.meta.env.VITE_TRACE_GET_CHANGE_HOST
/**
 * trace上报
 * header中增加 traceParent 和 traceState
 * 配置中记录traceInfo response拦截上报数据使用
 */
export function setTraceInfo(options: any) {
  const hit = Math.random() < Number(chance)
  const traceFlag = hit ? '01' : '00'
  const traceParent = `${genTraceParent()}-${traceFlag}`
  options.traceInfo = {
    traceStart: Date.now(),
    traceParent,
    traceHit: hit,
  }

  options.headers = Object.assign(options.headers, { traceparent: traceParent, tracestate: traceState })
}

// 调用接口获取抽样概率 https://aurogon.yuque.com/docs/share/2fd947cd-4062-45b8-be7b-60b5c14e00dd?#
export async function getProbabilistic(uid: string) {
  if (import.meta.env.VITE_APP_ENV === 'product') {
    const url = `//${host}/config/${groupCode}`
    const res = await http.post<any>(url, {
      appkey: appKey,
      data: {
        uid,
      },
    })

    if (res?.data?.data?.configData) {
      chance = res.data.data.configData['trace.sampling.probabilistic']
      Cookies.set('trace_chance', chance, { expires: 1 })
    }
  }
}
