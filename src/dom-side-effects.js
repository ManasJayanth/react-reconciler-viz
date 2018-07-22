export function init() {
  return {
    effects: []
  }
}

export function queue(handle, effect) {
  handle.effects.push(effect)
  return handle;
}

export function newEffect(name, payload) {
  return { name, payload }
}

export function retrieveQueue(handle) {
  return handle.effects.slice();
}
