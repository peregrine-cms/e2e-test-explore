
const process = require('process');
const ffmpeg = require('ffmpeg-static');

const { spawn } = require('child_process');

const cmd = ffmpeg.path + ' -y -f gdigrab -framerate 30 -show_region 1 -i desktop output/recording.avi';

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



class RecorderHelper extends Helper {

  // before/after hooks
  _before() {

  }

  _after() {
    // remove if not used
  }

  async startRecording() {
    //recorder = await this.runCommand(cmd, { detached: true, windowsHide: true } );
    recorder = spawn(ffmpeg.path, ['-y', '-f', 'gdigrab', '-framerate', '30', '-i', 'desktop', 'recording.avi'], {
      detached: false,
      shell: false,
      windowsHide: true,
      stdio: [process.stdin, process.stdout, process.stderr]
    });

    console.log("start");
    console.log(recorder);
  }

  async stopRecording() {
    //this.stopCommand(cmd);
    console.log("STOPPP HERE");
    recorder.kill();
  }

}

module.exports = RecorderHelper;
