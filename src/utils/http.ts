import { NHttpStatuses } from '../constants/http';

export const HTTP_STATUS_CLIENT_ERROR = 'ClientError';
export const HTTP_STATUS_INFORMATIONAL = 'Informational';
export const HTTP_STATUS_REDIRECTION = 'Redirection';
export const HTTP_STATUS_SERVER_ERROR = 'ServerError';
export const HTTP_STATUS_SUCCESS = 'Success';

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
    return HTTP_STATUS_INFORMATIONAL;
  } else if (
    Object.values(NHttpStatuses.ESuccess).indexOf(httpStatusCode) !== -1
  ) {
    return HTTP_STATUS_SUCCESS;
  } else if (
    Object.values(NHttpStatuses.ERedirection).indexOf(httpStatusCode) !== -1
  ) {
    return HTTP_STATUS_REDIRECTION;
  } else if (
    Object.values(NHttpStatuses.ClientError).indexOf(httpStatusCode) !== -1
  ) {
    return HTTP_STATUS_CLIENT_ERROR;
  } else if (
    Object.values(NHttpStatuses.EServerError).indexOf(httpStatusCode) !== -1
  ) {
    return HTTP_STATUS_SERVER_ERROR;
  }

  return undefined;
};
