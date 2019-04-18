const process = require('process');

const ffmpeg = require('ffmpeg-static');
const { spawn } = require('child_process');
const I = actor();

let recorder = undefined;

async function startRecording() {
    recorder = spawn(ffmpeg.path, ['-y', '-f', 'gdigrab', '-framerate', '30', '-i', 'desktop', 'recording.avi'], {
        detached: false,
        shell: false,
        windowsHide: true,
        stdio: [process.stdin, process.stdout, process.stderr]
    });
}

async function stopRecording() {
    recorder.kill();
}

// in this file you can append custom step methods to 'I' object

const cmd = ffmpeg.path+' -y -f gdigrab -framerate 30 -show_region 1 -i desktop output/recording.avi';

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    async startRecording() {
      recorder = await this.runCommand(cmd, { detached: true, windowsHide: true } );
    },

    async stopRecording() {
      this.stopCommand(cmd);
    }

  });
}
