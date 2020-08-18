const core = require("@actions/core");
const tree = require('tree-directory')


async function run() {
  try {
    tree(__dirname + '/src', '**/*.js').then(function (res) {
		console.log(res)
	})
	

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
