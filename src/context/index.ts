import pino from 'pino'
import * as nats from 'ts-nats'

import * as config from './config'

type Environment = 'local' | 'local' | 'prod'

export const create = async () => {
  // todo: resolve environment (method dependant on cloud)
  const env = 'local' as Environment
  const envConfig = config[env]
  const natsClient = await nats.connect(envConfig.natsServer)
  const log = pino({ level: envConfig.logLevel }).child({ env })
  return { env, log, nats: natsClient }
}
