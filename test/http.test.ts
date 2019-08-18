import {  NHttpStatuses } from '../src/http'

describe('NHttpStatuses', () => {
  it('should make a package of NHttpStatuses', () => {
    expect(NHttpStatuses).toMatchSnapshot()
  })
})