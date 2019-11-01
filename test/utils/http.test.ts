import { NHttpStatuses } from '../../src/constants/http';
import {
  getHttpStatusCategory,
  getHttpStatusName,
  HTTP_STATUS_CLIENT_ERROR,
  HTTP_STATUS_INFORMATIONAL,
  HTTP_STATUS_REDIRECTION,
  HTTP_STATUS_SERVER_ERROR,
  HTTP_STATUS_SUCCESS,
} from '../../src/utils/http';

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
    switch (getHttpStatusCategory(httpStatusCode)) {
      case HTTP_STATUS_INFORMATIONAL:
        expect(getHttpStatusName(httpStatusCode)).toEqual(
          NHttpStatuses.EInformational[httpStatusCode]
        );
        break;
      case HTTP_STATUS_SUCCESS:
        expect(getHttpStatusName(httpStatusCode)).toEqual(
          NHttpStatuses.ESuccess[httpStatusCode]
        );
        break;
      case HTTP_STATUS_REDIRECTION:
        expect(getHttpStatusName(httpStatusCode)).toEqual(
          NHttpStatuses.ERedirection[httpStatusCode]
        );
        break;
      case HTTP_STATUS_CLIENT_ERROR:
        expect(getHttpStatusName(httpStatusCode)).toEqual(
          NHttpStatuses.ClientError[httpStatusCode]
        );
        break;
      case HTTP_STATUS_SERVER_ERROR:
        expect(getHttpStatusName(httpStatusCode)).toEqual(
          NHttpStatuses.EServerError[httpStatusCode]
        );
        break;
      default:
        break;
    }
  });
});

describe('getHttpStatusCategory', () => {
  it('should return nothing', () => {
    expect(getHttpStatusCategory(999)).toBeUndefined();
  });

  test.each`
    httpStatusCode | expected
    ${100}         | ${HTTP_STATUS_INFORMATIONAL}
    ${101}         | ${HTTP_STATUS_INFORMATIONAL}
    ${102}         | ${HTTP_STATUS_INFORMATIONAL}
    ${200}         | ${HTTP_STATUS_SUCCESS}
    ${201}         | ${HTTP_STATUS_SUCCESS}
    ${202}         | ${HTTP_STATUS_SUCCESS}
    ${203}         | ${HTTP_STATUS_SUCCESS}
    ${204}         | ${HTTP_STATUS_SUCCESS}
    ${205}         | ${HTTP_STATUS_SUCCESS}
    ${206}         | ${HTTP_STATUS_SUCCESS}
    ${207}         | ${HTTP_STATUS_SUCCESS}
    ${208}         | ${HTTP_STATUS_SUCCESS}
    ${226}         | ${HTTP_STATUS_SUCCESS}
    ${300}         | ${HTTP_STATUS_REDIRECTION}
    ${301}         | ${HTTP_STATUS_REDIRECTION}
    ${302}         | ${HTTP_STATUS_REDIRECTION}
    ${303}         | ${HTTP_STATUS_REDIRECTION}
    ${304}         | ${HTTP_STATUS_REDIRECTION}
    ${305}         | ${HTTP_STATUS_REDIRECTION}
    ${307}         | ${HTTP_STATUS_REDIRECTION}
    ${308}         | ${HTTP_STATUS_REDIRECTION}
    ${400}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${401}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${402}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${405}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${404}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${405}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${406}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${407}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${408}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${409}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${410}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${411}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${412}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${413}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${414}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${415}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${416}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${417}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${418}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${421}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${422}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${423}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${424}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${426}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${428}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${429}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${431}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${444}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${451}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${499}         | ${HTTP_STATUS_CLIENT_ERROR}
    ${500}         | ${HTTP_STATUS_SERVER_ERROR}
    ${501}         | ${HTTP_STATUS_SERVER_ERROR}
    ${502}         | ${HTTP_STATUS_SERVER_ERROR}
    ${503}         | ${HTTP_STATUS_SERVER_ERROR}
    ${504}         | ${HTTP_STATUS_SERVER_ERROR}
    ${505}         | ${HTTP_STATUS_SERVER_ERROR}
    ${506}         | ${HTTP_STATUS_SERVER_ERROR}
    ${507}         | ${HTTP_STATUS_SERVER_ERROR}
    ${508}         | ${HTTP_STATUS_SERVER_ERROR}
    ${510}         | ${HTTP_STATUS_SERVER_ERROR}
    ${511}         | ${HTTP_STATUS_SERVER_ERROR}
    ${599}         | ${HTTP_STATUS_SERVER_ERROR}
  `(
    'returns $expected when httpStatusCode is equal to $httpStatusCode',
    ({ httpStatusCode, expected }) => {
      expect(getHttpStatusCategory(httpStatusCode)).toEqual(expected);
    }
  );
});
