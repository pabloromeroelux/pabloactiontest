import {Supernova, Workspace} from '@supernovaio/supernova-sdk'

const getData = async (key: string): Promise<Workspace[]> => {
  const supernova = new Supernova(key, null, null)
  const workspaces = await supernova.workspaces()
  return workspaces
}

export {getData}
