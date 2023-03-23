import { loadThridLibrary } from '@/utils/load'
import { useEffect } from 'react'

export function useLoadPlayer() {
  useEffect(() => {
    loadThridLibrary({
      url: 'https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js',
      name: 'rrweb-player',
    })
    loadThridLibrary({
      url: 'https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css',
      name: 'rrweb-player-css',
      type: 'link',
    })
  }, [])
}
