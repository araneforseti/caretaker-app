# caretaker-app
[![Build Status](https://travis-ci.org/araneforseti/caretaker-app.svg?branch=master)](https://travis-ci.org/araneforseti/caretaker-app)

Home of the caretaker app! WIP

## Development

Check out the Trello board for the plans: https://trello.com/caretakerapp

Repo for eventual server: https://github.com/araneforseti/caretaker-community-server

To setup for development:
1) Prepare git for the standard [fork & PR workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
2) Install dependencies: `npm install`
3) Configure your simulator or device: [react native docs](https://facebook.github.io/react-native/docs/getting-started.html)
    - Select "Building Projects with Native Code" to see guides specific to your development platform and device

#### Mountebank
[Mountebank](mbtest.org) is installed as part of the dev dependencies. It is used to provide canned data in the absence of a real api.
* `npm run cmb`: Configure mountebank to return the test data specific to each endpoint
* `npm run mb`: Run mountebank. Also configures it as in the previous point
* `npm run android`: Run & configure mountebank, and run the android app in developer mode