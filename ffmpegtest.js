const ffmpeg = require('ffmpeg-static');
const { spawn, exec } = require('child_process');
const process = require('process');
const path = require('path');

// console.log(path.dirname(ffmpeg.path));
// console.log(ffmpeg.path);

const recorder = spawn(ffmpeg.path, ['-f', 'gdigrab', '-framerate', '30', '-i', 'desktop', './test.avi'], {
  // const recorder = spawn('dir', {
  //shell: true,
  // cwd: path.dirname(ffmpeg.path),
  stdio: [process.stdin, process.stdout, process.stderr]
});

console.log('after');
setTimeout(function() {
  recorder.kill();
},5000)
