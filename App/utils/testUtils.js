import renderer from 'react-test-renderer';
import Path from 'path';
import Pact from 'pact';

export const promiseComponent = (component, promise) => async () => {
  const renderedComponent = renderer.create(component);
  await promise;
  return renderedComponent;
};

export const promiseValue = (value) => Promise.resolve(value);

const testApi = {
  host: 'localhost',
  port: 9999
};

export const mockApiConfig = {
  getApiUrl: () => `http://${testApi.host}:${testApi.port}`
};

export const createProvider = (consumerName, providerName) => enhance(
  Pact({
    host: testApi.host,
    port: testApi.port,
    log: Path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: Path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: consumerName,
    provider: providerName
  })
);

// adds a method to the provider which
//  1. sets up the pact server in the initial step
//  2. adds an arbitrary number of interactions to the server's expectations
const enhance = (provider) => Object.assign(provider, {
    setupWithInteractions(interactions) {
      const initialStep = this.setup();
      const setupSteps = interactions.map(i => () => this.addInteraction(i));
      return setupSteps
        .reduce((step, nextStep) => step.then(nextStep), initialStep)
        .catch(e => console.error(e))
    }
  }
);
