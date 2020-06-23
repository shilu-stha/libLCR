export const requestFieldData = (fields, bridge, eventEmitter) => {
  bridge.requestFieldData(fields);
  return new Promise((resolve, reject) => {
      const listener = eventEmitter.addListener('requestFieldData', (response) => {
        resolve(response);
        listener.remove();
      });
      // Could add a listener for errors here too
    });
}

export const removeFieldData = (fields, bridge, eventEmitter) => {
  bridge.requestFieldData(fields);
  return new Promise((resolve, reject) => {
      const listener = eventEmitter.addListener('removeFieldRequestData', (response) => {
        resolve(response);
        listener.remove();
      });
      // Could add a listener for errors here too
    });
}

export const grossQty = (eventEmitter) => eventEmitter.addListener('GROSS_QTY', (response) => {
  resolve(response);
});

export const flowRate = (eventEmitter) => eventEmitter.addListener('FLOW_RATE', (response) => {
  resolve(response);
});