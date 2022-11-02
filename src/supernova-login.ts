import {DesignSystemVersion, Supernova} from '@supernovaio/supernova-sdk'

const getData = async (
  key: string,
  dsid: string,
  vid: string
): Promise<DesignSystemVersion | null> => {
  const supernova = new Supernova(key, null, null)
  supernova.designSystemVersion(dsid, vid)
  return supernova.designSystemVersion(dsid, vid)
}

export {getData}
