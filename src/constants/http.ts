export namespace NHttpHeaders {
  export enum EHttpHeaders {
    ACCEPT_RANGES = 'Accept-Ranges',
    ACCESS_CONTROL_ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials',
    ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
    ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
    ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
    ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers',
    ACCESS_CONTROL_MAX_AGE = 'Access-Control-Max-Age',
    AGE = 'Age',
    ALLOW = 'Allow',
    ALTERNATE_PROTOCOL = 'Alternate-Protocol',
    CACHE_CONTROL = 'Cache-Control',
    CLIENT_DATE = 'Client-Date',
    CLIENT_PEER = 'Client-Peer',
    CLIENT_RESPONSE_NUM = 'Client-Response-Num',
    CONNECTION = 'Connection',
    CONTENT_DISPOSITION = 'Content-Disposition',
    CONTENT_ENCODING = 'Content-Encoding',
    CONTENT_LANGUAGE = 'Content-Language',
    CONTENT_LENGTH = 'Content-Length',
    CONTENT_LOCATION = 'Content-Location',
    CONTENT_MD5 = 'Content-MD5',
    CONTENT_RANGE = 'Content-Range',
    CONTENT_SECURITY_POLICY = 'X-Content-Security-Policy',
    CONTENT_SECURITY_POLICY_REPORT_ONLY = 'Content-Security-Policy-Report-Only',
    CONTENT_TYPE = 'Content-Type',
    DATE = 'Date',
    ETAG = 'Etag',
    EXPIRES = 'Expires',
    HTTP = 'HTTP',
    KEEP_ALIVE = 'Keep-Alive',
    LAST_MODIFIED = 'Last-Modified',
    LINK = 'Link',
    LOCATION = 'Location',
    P3P = 'P3P',
    PRAGMA = 'Pragma',
    PROXY_AUTHENTICATE = 'Proxy-Authenticate',
    PROXY_CONNECTION = 'Proxy-Connection',
    REFRESH = 'Refresh',
    RETRY_AFTER = 'Retry-After',
    SERVER = 'Server',
    SET_COOKIE = 'Set-Cookie',
    STATUS = 'Status',
    STRICT_TRANSPORT_SECURITY = 'Strict-Transport-Security',
    TIMING_ALLOW_ORIGIN = 'Timing-Allow-Origin',
    TRAILER = 'Trailer',
    TRANSFER_ENCODING = 'Transfer-Encoding',
    UPGRADE = 'Upgrade',
    VARY = 'Vary',
    VIA = 'Via',
    WARNING = 'Warning',
    WWW_AUTHENTICATE = 'WWW-Authenticate',
    X_ASPNET_VERSION = 'X-Aspnet-Version',
    X_CONTENT_TYPE_OPTIONS = 'X-Content-Type-Options',
    X_FRAME_OPTIONS = 'X-Frame-Options',
    X_PERMITTED_CROSS_DOMAIN_POLICIES = 'X-Permitted-Cross-Domain-Policies',
    X_PINGBACK = 'X-Pingback',
    X_POWERED_BY = 'X-Powered-By',
    X_ROBOTS_TAG = 'X-Robots-Tag',
    X_UA_COMPATIBLE = 'X-UA-Compatible',
    X_WEBKIT_CSP = 'Content-Security-Policy, X-Content-Security-Policy, X-Webkit-CSP',
    X_XSS_PROTECTION = 'X-XSS-Protection',
  }
}

export namespace NHttpStatuses {
  export enum EInformational {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
  }

  export enum ESuccess {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,
  }

  export enum ERedirection {
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
  }

  export enum EClientError {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_M_A_TEAPOT = 418,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    CONNECTION_CLOSED_WITHOUT_RESPONSE = 444,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    CLIENT_CLOSED_REQUEST = 499,
  }

  export enum EServerError {
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511,
    NETWORK_CONNECT_TIMEOUT_ERROR = 599,
  }
}
