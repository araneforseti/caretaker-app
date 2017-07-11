export const createSubscribers = () => {
    const subscribers = [];

    return {
        add: (callback) => {
            subscribers.push(callback);
        },
        remove: (callback) => {
            const index = subscribers.indexOf(callback);
            if(index != -1) {
            	subscribers.splice(index, 1);
            }
        },
        notify: () => {
            subscribers.forEach((subscriber) => subscriber());
        }
    };
}

export const withSubscribers = (factory) => {
    const subscribers = createSubscribers();
    const target = factory(subscribers);

    return Object.assign(target, {
        subscribe: (callback) => {
            subscribers.add(callback);
        },
        unsubscribe: (callback) => {
            subscribers.remove(callback);
        }
    });
}
