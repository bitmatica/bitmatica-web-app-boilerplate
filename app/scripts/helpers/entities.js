// Is the given object an Ampersand State/Model?
export function isModel(obj) {
  return obj && obj.isState;
}

// Is the given object an Ampersand Collection?
export function isCollection(obj) {
  return obj && obj.isCollection;
}

// Is the given object an Ampersand State/Model or Collection?
export function isEntity(obj) {
  return isModel(obj) || isCollection(obj);
}
