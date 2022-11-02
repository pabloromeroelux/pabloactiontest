import * as core from '@actions/core'
import {getData} from './supernova-login'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    core.debug(`Waiting ...`)
    const workspaces = await getData(key)
    const workspace = workspaces[0]
    const designSystems = await workspace.designSystems()
    const designSystem = designSystems[0]
    const versions = await designSystem.versions()
    const version = versions[0]
    core.debug(`All good`)
    core.setOutput(
      'response',
      `DS: ${designSystem.name} with id ${designSystem.id}, Version: ${version.name} widh id ${version.id}`
    )
  } catch (error) {
    core.setOutput('response', 'NO')
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
