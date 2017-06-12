/*
  Makes API calls to fetch events.

  However, until there is an API to call, it returns canned data.
*/

export default class EventGateway {
  getAll() {
    return [
      {key: 1, date: 'July 1', name: 'Chemotherapy', volunteer: 'Jack', role: 'driver'},
      {key: 2, date: 'July 3rd', name: 'Toxicity Check', volunteer: 'Sarah', role: 'driver'},
      {key: 3, date: 'July 5th', name: 'Checkin', volunteer: 'TBD', role: 'active'},
      {key: 4, date: 'July 7th', name: 'Weekend', volunteer: 'Sarah', role: 'active'},
      {key: 5, date: 'July 9th', name: 'Chemotherapy', volunteer: 'TBD', role: 'driver'}
    ]
  }
}
