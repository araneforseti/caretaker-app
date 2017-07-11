/*
  Makes API calls to fetch announcements.

  However, until there is an API to call, it returns canned data.
*/

import {withSubscribers} from '../../utils/subscribers.js';

const createAnnouncementsGateway = (subscribers) => {
    let allAnnouncements = null;

    return {
        getAll: () => {
            if(allAnnouncements === null) {
                //api call to get roles
                allAnnouncements = [
                    {id: 1, date: '2017-04-30T19:00:00-05:00', title: '1st Treatment Success', description: 'Woo, go us'},
                    {id: 2, date: '2017-05-04T19:00:00-05:00', title: '2nd Treatment Delayed', description: 'Boo'},
                    {id: 3, date: '2017-05-06T19:00:00-05:00', title: 'Need Help', description: 'Send lemons'},
                    {id: 4, date: '2017-05-06T19:00:00-05:00', title: 'I have a need', description: 'It\'s very complicated, and I\'m not sure exactly how to put it into words, but if I had to approximate it, I would probably first request a piping cup of tea and some crackers, as it would take some time and I would be loath to do my description a disservice by unduly interrupting it with breaks for necessaries.\n\nThen, with the implements of storytelling in hand, I would proceed to warm up with an oh-so-brief description of the setting, of that hot summer day on which my conundrum began. It\'s very important for you, or anyone else who listens to my tale, to understand the environment in which these events took place, otherwise true understanding will evade you. I would say that in order to transfer the feelings and emotions that I have built up around these happenings, the listener themselves must prepare to embark on a journey, and thus procure for themselves their own tea.'}
                ]
            }
            return allAnnouncements;
        },

        create: (data) => {
            //api call to create announcement
            const newId = allAnnouncements[allAnnouncements.length - 1].id + 1;
            const result = {id: newId, date: '2017-05-07T19:00:00-05:00', title: 'New Announcement ' + newId, description: 'Send lemons'}
            allAnnouncements.push(result);
            subscribers.notify();
        }
    }
}

export default withSubscribers(createAnnouncementsGateway);
