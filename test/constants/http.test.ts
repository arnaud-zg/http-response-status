import { NHttpHeaders, NHttpStatuses } from '../../src/constants/http';

describe('NHttpHeaders', () => {
  it('should make a snapshot of NHttpHeaders', () => {
    expect(NHttpHeaders).toMatchSnapshot();
  });
});

describe('NHttpStatuses', () => {
  it('should make a snapshot of NHttpStatuses', () => {
    expect(NHttpStatuses).toMatchSnapshot();
  });
});
