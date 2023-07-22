import { podcastsServiceMockFalse, podcastsServiceMockTrue } from '../__mocks__/podcast.service.mock'
import { getPodcastsFromAPI } from '../podcast.service'

describe('Service: getPodcasts', () => {
  it('should get podcasts from api (mock true)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockTrue } })
    })
    const podcasts = await getPodcastsFromAPI()
    expect(podcasts).toEqual(podcastsServiceMockTrue)
  })

  it('should not get podcasts from api (mock false)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockFalse } })
    })
    const podcasts = await getPodcastsFromAPI()
    expect(podcasts).not.toEqual(podcastsServiceMockTrue)
  })
})
