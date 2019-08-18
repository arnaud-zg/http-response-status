import * as httpStatus from '../src'

describe('httpStatus', () => {
  it('should make a package snapshot', () => {
    expect(httpStatus).toMatchSnapshot()
  })
})