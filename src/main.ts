import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    core.debug(`Waiting ...`)
    if (key.length) {
      core.setOutput('response', 'YES')
    } else {
      core.setOutput('response', 'NO')
    }
  } catch (error) {
    core.setOutput('response', 'NO')
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
