import renderer from 'react-test-renderer';

export const promiseComponent = (component, promise) => async () => {
  const renderedComponent = renderer.create(component);
  await promise;
  return renderedComponent;
};

export const promiseValue = (value) => new Promise(resolve => resolve(value));