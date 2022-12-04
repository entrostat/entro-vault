import {expect, test} from '@oclif/test'

describe('env:upload', () => {
  test
  .stdout()
  .command(['env:upload'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['env:upload', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
