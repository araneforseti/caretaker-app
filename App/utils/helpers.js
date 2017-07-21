/**
  renderIf(isHelper, () => <Button />);
*/
export function renderIf(condition, componentCallback) {
  return condition ? componentCallback() : null;
}

export function fieldPresent(field) {
  return field !== undefined && field !== null;
}
