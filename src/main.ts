import * as core from '@actions/core'
import {getData} from './supernova-login'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    const dsid: string = core.getInput('dsid')
    const vid: string = core.getInput('vid')
    core.debug(`Waiting ...`)
    const version = await getData(key, dsid, vid)
    core.debug(`All good`)
    if (version) {
      core.setOutput(
        'response',
        `DS: ${version.designSystem.name} with id ${version.designSystem.id}, Version: ${version.name} widh id ${version.id}!!!`
      )
    } else {
      core.setOutput('response', 'NO')
    }
  } catch (error) {
    core.setOutput('response', 'NO')
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
