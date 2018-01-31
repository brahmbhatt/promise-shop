function parseJSON(jsonObj) {
  // const json = process.argv[2];
  const obj = JSON.parse(jsonObj);
  return obj;
}

function parsePromise(json, callback) {
  // const json = process.argv[2];
  const promise = new Promise((resolve, reject) => {
    try {
      resolve(parseJSON(json));
    } catch (err) {
      reject(err);
    }
  });
  return promise
    .then(callback, callback);
}

module.exports = parsePromise;
