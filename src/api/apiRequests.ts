import flatsData from './entitles.json'

export const apiRequests = {
  getFlats() {
    return { status: 200, data: flatsData }
  }
}
