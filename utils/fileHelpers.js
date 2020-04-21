const fs = require('fs');

const readFile = (path) =>
  new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (err, res) => (err ? reject(err) : resolve(res))),
  );

const writeFile = (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => (err ? reject(err) : resolve())),
  );

const appendFile = (path, data) =>
  new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => (err ? reject(err) : resolve())),
  );

const removeFile = (path) =>
  new Promise((resolve, reject) =>
    fs.unlink(path, (err) =>
      err && err.message === 'EENOENT' ? reject(err) : resolve(),
    ),
  );

const readDir = (path) =>
  new Promise((resolve, reject) =>
    fs.readdir(path, (err, files) => (err ? reject(err) : resolve(files))),
  );

module.exports = {
  readDir,
  readFile,
  writeFile,
  appendFile,
  removeFile,
};
