import { NHttpStatuses } from '../../src/constants/http';

describe('NHttpStatuses', () => {
  it('should make a package of NHttpStatuses', () => {
    expect(NHttpStatuses).toMatchSnapshot();
  });
});
