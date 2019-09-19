import * as context from './context'

const main = async () => {
  const ctx = await context.create()
  ctx.log.info({ env: ctx.env }, 'started vm manager')
}

main()
