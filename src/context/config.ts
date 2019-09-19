export const shared = {}

export const local = {
  ...shared,
  logLevel: 'debug',
  natsServer: 'nats://localhost:4222'
}

export const dev = {
  ...shared,
  logLevel: 'debug',
  natsServer: 'todo: add'
}

export const prod = {
  ...shared,
  logLevel: 'info',
  natsServer: 'todo: add'
}
