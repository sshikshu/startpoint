import * as context from './'

const environemnts = ['local', 'dev', 'prod']

describe('context', () => {
  test('create', async () => {
    const ctx = await context.create()
    expect(environemnts.indexOf(ctx.env)).not.toBe(-1)
    expect(ctx.nats).toBeTruthy()
    expect(ctx.log.error).toBeTruthy()
    ctx.nats.close()
  })
})
