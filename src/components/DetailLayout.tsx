import { Outlet, useParams } from 'react-router-dom'
import usePodcasts from '../hooks/usePodcasts'
import { findPodcast } from '../utils/findPodcast.utils'
import Sidebar from './Sidebar'

export default function DetailLayout() {
  const { podcasts } = usePodcasts()
  const { podcastId } = useParams<{ podcastId: string }>()

  if (!podcastId) return <h2>Podcast not found</h2>

  const podcast = findPodcast({ podcasts, podcastId })

  return (
    <>
      {podcast ? (
        <section className='flex gap-x-20 mt-10 px-4 w-full'>
          <div className='w-1/4'>
            <Sidebar
              artist={podcast?.artist}
              description={podcast.summary}
              img={podcast?.image}
              title={podcast?.title}
              podcastId={podcastId}
            />
          </div>
          <div className='w-3/4'>
            <Outlet />
          </div>
        </section>
      ) : (
        <h2>Podcast not found</h2>
      )}
    </>
  )
}
