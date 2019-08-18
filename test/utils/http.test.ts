import { getHttpStatusName, getHttpStatusCatgory } from '../../src/utils/http';

describe('getHttpStatusName', () => {
  it('should return nothing', () => {
    expect(getHttpStatusName(999)).toBeUndefined();
  });

  test.each([
    [100],
    [101],
    [102],
    [200],
    [201],
    [202],
    [203],
    [204],
    [205],
    [206],
    [207],
    [208],
    [226],
    [300],
    [301],
    [302],
    [303],
    [304],
    [305],
    [307],
    [308],
    [400],
    [401],
    [402],
    [405],
    [404],
    [405],
    [406],
    [407],
    [408],
    [409],
    [410],
    [411],
    [412],
    [413],
    [414],
    [415],
    [416],
    [417],
    [418],
    [421],
    [422],
    [423],
    [424],
    [426],
    [428],
    [429],
    [431],
    [444],
    [451],
    [499],
    [500],
    [501],
    [502],
    [503],
    [504],
    [505],
    [506],
    [507],
    [508],
    [510],
    [511],
    [599],
  ])('get name when httpStatusCode is equal to %i', httpStatusCode => {
    expect(getHttpStatusName(httpStatusCode)).toMatchSnapshot();
  });
});

describe('getHttpStatusCatgory', () => {
  it('should return nothing', () => {
    expect(getHttpStatusCatgory(999)).toBeUndefined();
  });

  test.each`
    httpStatusCode | expected
    ${100}         | ${'Informational'}
    ${101}         | ${'Informational'}
    ${102}         | ${'Informational'}
    ${200}         | ${'Success'}
    ${201}         | ${'Success'}
    ${202}         | ${'Success'}
    ${203}         | ${'Success'}
    ${204}         | ${'Success'}
    ${205}         | ${'Success'}
    ${206}         | ${'Success'}
    ${207}         | ${'Success'}
    ${208}         | ${'Success'}
    ${226}         | ${'Success'}
    ${300}         | ${'Redirection'}
    ${301}         | ${'Redirection'}
    ${302}         | ${'Redirection'}
    ${303}         | ${'Redirection'}
    ${304}         | ${'Redirection'}
    ${305}         | ${'Redirection'}
    ${307}         | ${'Redirection'}
    ${308}         | ${'Redirection'}
    ${400}         | ${'ClientError'}
    ${401}         | ${'ClientError'}
    ${402}         | ${'ClientError'}
    ${405}         | ${'ClientError'}
    ${404}         | ${'ClientError'}
    ${405}         | ${'ClientError'}
    ${406}         | ${'ClientError'}
    ${407}         | ${'ClientError'}
    ${408}         | ${'ClientError'}
    ${409}         | ${'ClientError'}
    ${410}         | ${'ClientError'}
    ${411}         | ${'ClientError'}
    ${412}         | ${'ClientError'}
    ${413}         | ${'ClientError'}
    ${414}         | ${'ClientError'}
    ${415}         | ${'ClientError'}
    ${416}         | ${'ClientError'}
    ${417}         | ${'ClientError'}
    ${418}         | ${'ClientError'}
    ${421}         | ${'ClientError'}
    ${422}         | ${'ClientError'}
    ${423}         | ${'ClientError'}
    ${424}         | ${'ClientError'}
    ${426}         | ${'ClientError'}
    ${428}         | ${'ClientError'}
    ${429}         | ${'ClientError'}
    ${431}         | ${'ClientError'}
    ${444}         | ${'ClientError'}
    ${451}         | ${'ClientError'}
    ${499}         | ${'ClientError'}
    ${500}         | ${'ServerError'}
    ${501}         | ${'ServerError'}
    ${502}         | ${'ServerError'}
    ${503}         | ${'ServerError'}
    ${504}         | ${'ServerError'}
    ${505}         | ${'ServerError'}
    ${506}         | ${'ServerError'}
    ${507}         | ${'ServerError'}
    ${508}         | ${'ServerError'}
    ${510}         | ${'ServerError'}
    ${511}         | ${'ServerError'}
    ${599}         | ${'ServerError'}
  `(
    'returns $expected when httpStatusCode is equal to $httpStatusCode',
    ({ httpStatusCode, expected }) => {
      expect(getHttpStatusCatgory(httpStatusCode)).toEqual(expected);
    }
  );
});
