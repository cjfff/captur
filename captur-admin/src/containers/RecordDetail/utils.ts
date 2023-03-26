import { useEffect } from 'react'
import { dynamicLoadCss, dynamicLoadJs } from '@/utils/dymaicLoad'

const urls = [
  {
    id: 'console-replay',
    url: 'https://cdn.jsdelivr.net/npm/rrweb@1.1.3/dist/plugins/console-replay.min.js',
    type: 'js',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js',
    type: 'js',
    id: 'rrweb-player',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css',
    type: 'style',
    id: 'rrweb-player-style',
  },
]

const loadePromise = () =>
  Promise.all(
    urls.map((item) => {
      if (item.type === 'js') return dynamicLoadJs(item.url, item.id)
      if (item.type === 'style') return dynamicLoadCss(item.url, item.id)
      return Promise.resolve()
    })
  )

const prefix = 'https://cdn.oneship.io/'

export function useLoadReplay(data: any) {
  useEffect(() => {
    const run = async () => {
      try {
        const url = `${prefix}${data.replay_url}`

        const [events] = await Promise.all([fetch(url).then((res) => res.json()), loadePromise()])

        // eslint-disable-next-line no-new
        new (window as any).rrwebPlayer({
          target: document.querySelector('#feedback'),
          props: {
            events,
            width: 768,
            // height: 460,
            autoPlay: false,
            showController: true,
            plugins: [(window as any).rrwebConsoleReplay.getReplayConsolePlugin()],
          },
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, 'error')
      }
    }

    if (data?.replay_url) {
      run()
    }
  }, [data])
}
