import { NHttpStatuses } from '../constants/http';

export type THttpStatusCodeCatagory = ReturnType<typeof getHttpStatusCatgory>;

export type THttpStatusName = ReturnType<typeof getHttpStatusName>;

export const getHttpStatusName = (httpStatusCode: number) =>
  NHttpStatuses.EInformational[httpStatusCode] ||
  NHttpStatuses.ESuccess[httpStatusCode] ||
  NHttpStatuses.ERedirection[httpStatusCode] ||
  NHttpStatuses.ClientError[httpStatusCode] ||
  NHttpStatuses.EServerError[httpStatusCode];

export const getHttpStatusCatgory = (httpStatusCode: number) => {
  if (
    Object.values(NHttpStatuses.EInformational).indexOf(httpStatusCode) !== -1
  ) {
    return 'Informational';
  } else if (
    Object.values(NHttpStatuses.ESuccess).indexOf(httpStatusCode) !== -1
  ) {
    return 'Success';
  } else if (
    Object.values(NHttpStatuses.ERedirection).indexOf(httpStatusCode) !== -1
  ) {
    return 'Redirection';
  } else if (
    Object.values(NHttpStatuses.ClientError).indexOf(httpStatusCode) !== -1
  ) {
    return 'ClientError';
  } else if (
    Object.values(NHttpStatuses.EServerError).indexOf(httpStatusCode) !== -1
  ) {
    return 'ServerError';
  }

  return undefined;
};
