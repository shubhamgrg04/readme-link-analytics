const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const octokit = github.getOctokit(process.env.GITHUB_TOKEN);
    print(github.context.repo)
    context = github.context
    owner = github.context.repo.owner
    repo = github.context.repo.repo
    file_sha = core.getInput("README.md")
    readme = await octokit.rest.git.getBlob({
      owner,
      repo,
      file_sha
    });
    print(readme)
    
  } catch (e) {
    console.error("Failed: ", e)
    core.setFailed("Failed: ", e.message)
  }
})()