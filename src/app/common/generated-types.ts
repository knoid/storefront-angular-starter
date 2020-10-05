// tslint:disable
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddPaymentToOrderResult = Order | OrderPaymentStateError | OrderStateTransitionError | PaymentDeclinedError | PaymentFailedError;

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Country;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  PROMOTION = 'PROMOTION',
  PROMOTION_REFUND = 'PROMOTION_REFUND',
  REFUND = 'REFUND',
  SHIPPING = 'SHIPPING',
  SHIPPING_REFUND = 'SHIPPING_REFUND',
  TAX = 'TAX',
  TAX_REFUND = 'TAX_REFUND'
}

export type Administrator = Node & {
  __typename?: 'Administrator';
  createdAt: Scalars['DateTime'];
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AdministratorList = PaginatedList & {
  __typename?: 'AdministratorList';
  items: Array<Administrator>;
  totalItems: Scalars['Int'];
};

/** Retured when attemting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime'];
  fileSize: Scalars['Int'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  preview: Scalars['String'];
  source: Scalars['String'];
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export type AuthenticationInput = {
  native?: Maybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  strategy: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError;

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type Cancellation = Node & StockMovement & {
  __typename?: 'Cancellation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type Channel = Node & {
  __typename?: 'Channel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID'];
  pricesIncludeTax: Scalars['Boolean'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionCustomFields>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  parent?: Maybe<Collection>;
  position: Scalars['Int'];
  productVariants: ProductVariantList;
  slug: Scalars['String'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};


export type CollectionProductVariantsArgs = {
  options?: Maybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionCustomFields = {
  __typename?: 'CollectionCustomFields';
  extra?: Maybe<Scalars['String']>;
};

export type CollectionFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  description?: Maybe<StringOperators>;
  extra?: Maybe<StringOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  position?: Maybe<NumberOperators>;
  slug?: Maybe<StringOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  filter?: Maybe<CollectionFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<CollectionSortParameter>;
  take?: Maybe<Scalars['Int']>;
};

export type CollectionSortParameter = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  extra?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<CountryTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  limit: Scalars['Int'];
  message: Scalars['String'];
};

export type CreateAddressInput = {
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
};

export type CreateCustomerInput = {
  customFields?: Maybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/**
 * @description
 * ISO 4217 currency code
 * 
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = 'AED',
  /** Afghan afghani */
  AFN = 'AFN',
  /** Albanian lek */
  ALL = 'ALL',
  /** Armenian dram */
  AMD = 'AMD',
  /** Netherlands Antillean guilder */
  ANG = 'ANG',
  /** Angolan kwanza */
  AOA = 'AOA',
  /** Argentine peso */
  ARS = 'ARS',
  /** Australian dollar */
  AUD = 'AUD',
  /** Aruban florin */
  AWG = 'AWG',
  /** Azerbaijani manat */
  AZN = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  BAM = 'BAM',
  /** Barbados dollar */
  BBD = 'BBD',
  /** Bangladeshi taka */
  BDT = 'BDT',
  /** Bulgarian lev */
  BGN = 'BGN',
  /** Bahraini dinar */
  BHD = 'BHD',
  /** Burundian franc */
  BIF = 'BIF',
  /** Bermudian dollar */
  BMD = 'BMD',
  /** Brunei dollar */
  BND = 'BND',
  /** Boliviano */
  BOB = 'BOB',
  /** Brazilian real */
  BRL = 'BRL',
  /** Bahamian dollar */
  BSD = 'BSD',
  /** Bhutanese ngultrum */
  BTN = 'BTN',
  /** Botswana pula */
  BWP = 'BWP',
  /** Belarusian ruble */
  BYN = 'BYN',
  /** Belize dollar */
  BZD = 'BZD',
  /** Canadian dollar */
  CAD = 'CAD',
  /** Congolese franc */
  CDF = 'CDF',
  /** Swiss franc */
  CHF = 'CHF',
  /** Chilean peso */
  CLP = 'CLP',
  /** Renminbi (Chinese) yuan */
  CNY = 'CNY',
  /** Colombian peso */
  COP = 'COP',
  /** Costa Rican colon */
  CRC = 'CRC',
  /** Cuban convertible peso */
  CUC = 'CUC',
  /** Cuban peso */
  CUP = 'CUP',
  /** Cape Verde escudo */
  CVE = 'CVE',
  /** Czech koruna */
  CZK = 'CZK',
  /** Djiboutian franc */
  DJF = 'DJF',
  /** Danish krone */
  DKK = 'DKK',
  /** Dominican peso */
  DOP = 'DOP',
  /** Algerian dinar */
  DZD = 'DZD',
  /** Egyptian pound */
  EGP = 'EGP',
  /** Eritrean nakfa */
  ERN = 'ERN',
  /** Ethiopian birr */
  ETB = 'ETB',
  /** Euro */
  EUR = 'EUR',
  /** Fiji dollar */
  FJD = 'FJD',
  /** Falkland Islands pound */
  FKP = 'FKP',
  /** Pound sterling */
  GBP = 'GBP',
  /** Georgian lari */
  GEL = 'GEL',
  /** Ghanaian cedi */
  GHS = 'GHS',
  /** Gibraltar pound */
  GIP = 'GIP',
  /** Gambian dalasi */
  GMD = 'GMD',
  /** Guinean franc */
  GNF = 'GNF',
  /** Guatemalan quetzal */
  GTQ = 'GTQ',
  /** Guyanese dollar */
  GYD = 'GYD',
  /** Hong Kong dollar */
  HKD = 'HKD',
  /** Honduran lempira */
  HNL = 'HNL',
  /** Croatian kuna */
  HRK = 'HRK',
  /** Haitian gourde */
  HTG = 'HTG',
  /** Hungarian forint */
  HUF = 'HUF',
  /** Indonesian rupiah */
  IDR = 'IDR',
  /** Israeli new shekel */
  ILS = 'ILS',
  /** Indian rupee */
  INR = 'INR',
  /** Iraqi dinar */
  IQD = 'IQD',
  /** Iranian rial */
  IRR = 'IRR',
  /** Icelandic króna */
  ISK = 'ISK',
  /** Jamaican dollar */
  JMD = 'JMD',
  /** Jordanian dinar */
  JOD = 'JOD',
  /** Japanese yen */
  JPY = 'JPY',
  /** Kenyan shilling */
  KES = 'KES',
  /** Kyrgyzstani som */
  KGS = 'KGS',
  /** Cambodian riel */
  KHR = 'KHR',
  /** Comoro franc */
  KMF = 'KMF',
  /** North Korean won */
  KPW = 'KPW',
  /** South Korean won */
  KRW = 'KRW',
  /** Kuwaiti dinar */
  KWD = 'KWD',
  /** Cayman Islands dollar */
  KYD = 'KYD',
  /** Kazakhstani tenge */
  KZT = 'KZT',
  /** Lao kip */
  LAK = 'LAK',
  /** Lebanese pound */
  LBP = 'LBP',
  /** Sri Lankan rupee */
  LKR = 'LKR',
  /** Liberian dollar */
  LRD = 'LRD',
  /** Lesotho loti */
  LSL = 'LSL',
  /** Libyan dinar */
  LYD = 'LYD',
  /** Moroccan dirham */
  MAD = 'MAD',
  /** Moldovan leu */
  MDL = 'MDL',
  /** Malagasy ariary */
  MGA = 'MGA',
  /** Macedonian denar */
  MKD = 'MKD',
  /** Myanmar kyat */
  MMK = 'MMK',
  /** Mongolian tögrög */
  MNT = 'MNT',
  /** Macanese pataca */
  MOP = 'MOP',
  /** Mauritanian ouguiya */
  MRU = 'MRU',
  /** Mauritian rupee */
  MUR = 'MUR',
  /** Maldivian rufiyaa */
  MVR = 'MVR',
  /** Malawian kwacha */
  MWK = 'MWK',
  /** Mexican peso */
  MXN = 'MXN',
  /** Malaysian ringgit */
  MYR = 'MYR',
  /** Mozambican metical */
  MZN = 'MZN',
  /** Namibian dollar */
  NAD = 'NAD',
  /** Nigerian naira */
  NGN = 'NGN',
  /** Nicaraguan córdoba */
  NIO = 'NIO',
  /** Norwegian krone */
  NOK = 'NOK',
  /** Nepalese rupee */
  NPR = 'NPR',
  /** New Zealand dollar */
  NZD = 'NZD',
  /** Omani rial */
  OMR = 'OMR',
  /** Panamanian balboa */
  PAB = 'PAB',
  /** Peruvian sol */
  PEN = 'PEN',
  /** Papua New Guinean kina */
  PGK = 'PGK',
  /** Philippine peso */
  PHP = 'PHP',
  /** Pakistani rupee */
  PKR = 'PKR',
  /** Polish złoty */
  PLN = 'PLN',
  /** Paraguayan guaraní */
  PYG = 'PYG',
  /** Qatari riyal */
  QAR = 'QAR',
  /** Romanian leu */
  RON = 'RON',
  /** Serbian dinar */
  RSD = 'RSD',
  /** Russian ruble */
  RUB = 'RUB',
  /** Rwandan franc */
  RWF = 'RWF',
  /** Saudi riyal */
  SAR = 'SAR',
  /** Solomon Islands dollar */
  SBD = 'SBD',
  /** Seychelles rupee */
  SCR = 'SCR',
  /** Sudanese pound */
  SDG = 'SDG',
  /** Swedish krona/kronor */
  SEK = 'SEK',
  /** Singapore dollar */
  SGD = 'SGD',
  /** Saint Helena pound */
  SHP = 'SHP',
  /** Sierra Leonean leone */
  SLL = 'SLL',
  /** Somali shilling */
  SOS = 'SOS',
  /** Surinamese dollar */
  SRD = 'SRD',
  /** South Sudanese pound */
  SSP = 'SSP',
  /** São Tomé and Príncipe dobra */
  STN = 'STN',
  /** Salvadoran colón */
  SVC = 'SVC',
  /** Syrian pound */
  SYP = 'SYP',
  /** Swazi lilangeni */
  SZL = 'SZL',
  /** Thai baht */
  THB = 'THB',
  /** Tajikistani somoni */
  TJS = 'TJS',
  /** Turkmenistan manat */
  TMT = 'TMT',
  /** Tunisian dinar */
  TND = 'TND',
  /** Tongan paʻanga */
  TOP = 'TOP',
  /** Turkish lira */
  TRY = 'TRY',
  /** Trinidad and Tobago dollar */
  TTD = 'TTD',
  /** New Taiwan dollar */
  TWD = 'TWD',
  /** Tanzanian shilling */
  TZS = 'TZS',
  /** Ukrainian hryvnia */
  UAH = 'UAH',
  /** Ugandan shilling */
  UGX = 'UGX',
  /** United States dollar */
  USD = 'USD',
  /** Uruguayan peso */
  UYU = 'UYU',
  /** Uzbekistan som */
  UZS = 'UZS',
  /** Venezuelan bolívar soberano */
  VES = 'VES',
  /** Vietnamese đồng */
  VND = 'VND',
  /** Vanuatu vatu */
  VUV = 'VUV',
  /** Samoan tala */
  WST = 'WST',
  /** CFA franc BEAC */
  XAF = 'XAF',
  /** East Caribbean dollar */
  XCD = 'XCD',
  /** CFA franc BCEAO */
  XOF = 'XOF',
  /** CFP franc (franc Pacifique) */
  XPF = 'XPF',
  /** Yemeni rial */
  YER = 'YER',
  /** South African rand */
  ZAR = 'ZAR',
  /** Zambian kwacha */
  ZMW = 'ZMW',
  /** Zimbabwean dollar */
  ZWL = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  token: Scalars['String'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
  options?: Maybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  emailAddress?: Maybe<StringOperators>;
  firstName?: Maybe<StringOperators>;
  lastName?: Maybe<StringOperators>;
  phoneNumber?: Maybe<StringOperators>;
  title?: Maybe<StringOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime'];
  customers: CustomerList;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CustomerGroupCustomersArgs = {
  options?: Maybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  filter?: Maybe<CustomerFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<CustomerSortParameter>;
  take?: Maybe<Scalars['Int']>;
};

export type CustomerSortParameter = {
  createdAt?: Maybe<SortOrder>;
  emailAddress?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | StringCustomFieldConfig;

export type CustomFields = {
  __typename?: 'CustomFields';
  Address: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  ShippingMethod: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
};

export type DateOperators = {
  after?: Maybe<Scalars['DateTime']>;
  before?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateRange>;
  eq?: Maybe<Scalars['DateTime']>;
};

export type DateRange = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};


/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = 'NOT_DELETED'
}

/** Retured when attemting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  ALREADY_LOGGED_IN_ERROR = 'ALREADY_LOGGED_IN_ERROR',
  COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
  COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
  COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
  EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  MISSING_PASSWORD_ERROR = 'MISSING_PASSWORD_ERROR',
  NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
  NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
  ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
  ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
  ORDER_PAYMENT_STATE_ERROR = 'ORDER_PAYMENT_STATE_ERROR',
  ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
  PASSWORD_ALREADY_SET_ERROR = 'PASSWORD_ALREADY_SET_ERROR',
  PASSWORD_RESET_TOKEN_EXPIRED_ERROR = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PASSWORD_RESET_TOKEN_INVALID_ERROR = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PAYMENT_DECLINED_ERROR = 'PAYMENT_DECLINED_ERROR',
  PAYMENT_FAILED_ERROR = 'PAYMENT_FAILED_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  VERIFICATION_TOKEN_EXPIRED_ERROR = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VERIFICATION_TOKEN_INVALID_ERROR = 'VERIFICATION_TOKEN_INVALID_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime'];
  values: Array<FacetValue>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  facet: Facet;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime'];
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int'];
  facetValue: FacetValue;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  method: Scalars['String'];
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  availableLanguages: Array<LanguageCode>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  serverConfig: ServerConfig;
  trackInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  administrator?: Maybe<Administrator>;
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  isPublic?: Maybe<BooleanOperators>;
  type?: Maybe<StringOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  filter?: Maybe<HistoryEntryFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<HistoryEntrySortParameter>;
  take?: Maybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum HistoryEntryType {
  CUSTOMER_ADDED_TO_GROUP = 'CUSTOMER_ADDED_TO_GROUP',
  CUSTOMER_ADDRESS_CREATED = 'CUSTOMER_ADDRESS_CREATED',
  CUSTOMER_ADDRESS_DELETED = 'CUSTOMER_ADDRESS_DELETED',
  CUSTOMER_ADDRESS_UPDATED = 'CUSTOMER_ADDRESS_UPDATED',
  CUSTOMER_DETAIL_UPDATED = 'CUSTOMER_DETAIL_UPDATED',
  CUSTOMER_EMAIL_UPDATE_REQUESTED = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CUSTOMER_EMAIL_UPDATE_VERIFIED = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CUSTOMER_NOTE = 'CUSTOMER_NOTE',
  CUSTOMER_PASSWORD_RESET_REQUESTED = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CUSTOMER_PASSWORD_RESET_VERIFIED = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CUSTOMER_PASSWORD_UPDATED = 'CUSTOMER_PASSWORD_UPDATED',
  CUSTOMER_REGISTERED = 'CUSTOMER_REGISTERED',
  CUSTOMER_REMOVED_FROM_GROUP = 'CUSTOMER_REMOVED_FROM_GROUP',
  CUSTOMER_VERIFIED = 'CUSTOMER_VERIFIED',
  ORDER_CANCELLATION = 'ORDER_CANCELLATION',
  ORDER_COUPON_APPLIED = 'ORDER_COUPON_APPLIED',
  ORDER_COUPON_REMOVED = 'ORDER_COUPON_REMOVED',
  ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
  ORDER_FULFILLMENT_TRANSITION = 'ORDER_FULFILLMENT_TRANSITION',
  ORDER_NOTE = 'ORDER_NOTE',
  ORDER_PAYMENT_TRANSITION = 'ORDER_PAYMENT_TRANSITION',
  ORDER_REFUND_TRANSITION = 'ORDER_REFUND_TRANSITION',
  ORDER_STATE_TRANSITION = 'ORDER_STATE_TRANSITION'
}

/**
 * Retured if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ImportInfo = {
  __typename?: 'ImportInfo';
  errors?: Maybe<Array<Scalars['String']>>;
  imported: Scalars['Int'];
  processed: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};


/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 * 
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  af = 'af',
  /** Akan */
  ak = 'ak',
  /** Amharic */
  am = 'am',
  /** Arabic */
  ar = 'ar',
  /** Assamese */
  as = 'as',
  /** Azerbaijani */
  az = 'az',
  /** Belarusian */
  be = 'be',
  /** Bulgarian */
  bg = 'bg',
  /** Bambara */
  bm = 'bm',
  /** Bangla */
  bn = 'bn',
  /** Tibetan */
  bo = 'bo',
  /** Breton */
  br = 'br',
  /** Bosnian */
  bs = 'bs',
  /** Catalan */
  ca = 'ca',
  /** Chechen */
  ce = 'ce',
  /** Corsican */
  co = 'co',
  /** Czech */
  cs = 'cs',
  /** Church Slavic */
  cu = 'cu',
  /** Welsh */
  cy = 'cy',
  /** Danish */
  da = 'da',
  /** German */
  de = 'de',
  /** Austrian German */
  de_AT = 'de_AT',
  /** Swiss High German */
  de_CH = 'de_CH',
  /** Dzongkha */
  dz = 'dz',
  /** Ewe */
  ee = 'ee',
  /** Greek */
  el = 'el',
  /** English */
  en = 'en',
  /** Australian English */
  en_AU = 'en_AU',
  /** Canadian English */
  en_CA = 'en_CA',
  /** British English */
  en_GB = 'en_GB',
  /** American English */
  en_US = 'en_US',
  /** Esperanto */
  eo = 'eo',
  /** Spanish */
  es = 'es',
  /** European Spanish */
  es_ES = 'es_ES',
  /** Mexican Spanish */
  es_MX = 'es_MX',
  /** Estonian */
  et = 'et',
  /** Basque */
  eu = 'eu',
  /** Persian */
  fa = 'fa',
  /** Dari */
  fa_AF = 'fa_AF',
  /** Fulah */
  ff = 'ff',
  /** Finnish */
  fi = 'fi',
  /** Faroese */
  fo = 'fo',
  /** French */
  fr = 'fr',
  /** Canadian French */
  fr_CA = 'fr_CA',
  /** Swiss French */
  fr_CH = 'fr_CH',
  /** Western Frisian */
  fy = 'fy',
  /** Irish */
  ga = 'ga',
  /** Scottish Gaelic */
  gd = 'gd',
  /** Galician */
  gl = 'gl',
  /** Gujarati */
  gu = 'gu',
  /** Manx */
  gv = 'gv',
  /** Hausa */
  ha = 'ha',
  /** Hebrew */
  he = 'he',
  /** Hindi */
  hi = 'hi',
  /** Croatian */
  hr = 'hr',
  /** Haitian Creole */
  ht = 'ht',
  /** Hungarian */
  hu = 'hu',
  /** Armenian */
  hy = 'hy',
  /** Interlingua */
  ia = 'ia',
  /** Indonesian */
  id = 'id',
  /** Igbo */
  ig = 'ig',
  /** Sichuan Yi */
  ii = 'ii',
  /** Icelandic */
  is = 'is',
  /** Italian */
  it = 'it',
  /** Japanese */
  ja = 'ja',
  /** Javanese */
  jv = 'jv',
  /** Georgian */
  ka = 'ka',
  /** Kikuyu */
  ki = 'ki',
  /** Kazakh */
  kk = 'kk',
  /** Kalaallisut */
  kl = 'kl',
  /** Khmer */
  km = 'km',
  /** Kannada */
  kn = 'kn',
  /** Korean */
  ko = 'ko',
  /** Kashmiri */
  ks = 'ks',
  /** Kurdish */
  ku = 'ku',
  /** Cornish */
  kw = 'kw',
  /** Kyrgyz */
  ky = 'ky',
  /** Latin */
  la = 'la',
  /** Luxembourgish */
  lb = 'lb',
  /** Ganda */
  lg = 'lg',
  /** Lingala */
  ln = 'ln',
  /** Lao */
  lo = 'lo',
  /** Lithuanian */
  lt = 'lt',
  /** Luba-Katanga */
  lu = 'lu',
  /** Latvian */
  lv = 'lv',
  /** Malagasy */
  mg = 'mg',
  /** Maori */
  mi = 'mi',
  /** Macedonian */
  mk = 'mk',
  /** Malayalam */
  ml = 'ml',
  /** Mongolian */
  mn = 'mn',
  /** Marathi */
  mr = 'mr',
  /** Malay */
  ms = 'ms',
  /** Maltese */
  mt = 'mt',
  /** Burmese */
  my = 'my',
  /** Norwegian Bokmål */
  nb = 'nb',
  /** North Ndebele */
  nd = 'nd',
  /** Nepali */
  ne = 'ne',
  /** Dutch */
  nl = 'nl',
  /** Flemish */
  nl_BE = 'nl_BE',
  /** Norwegian Nynorsk */
  nn = 'nn',
  /** Nyanja */
  ny = 'ny',
  /** Oromo */
  om = 'om',
  /** Odia */
  or = 'or',
  /** Ossetic */
  os = 'os',
  /** Punjabi */
  pa = 'pa',
  /** Polish */
  pl = 'pl',
  /** Pashto */
  ps = 'ps',
  /** Portuguese */
  pt = 'pt',
  /** Brazilian Portuguese */
  pt_BR = 'pt_BR',
  /** European Portuguese */
  pt_PT = 'pt_PT',
  /** Quechua */
  qu = 'qu',
  /** Romansh */
  rm = 'rm',
  /** Rundi */
  rn = 'rn',
  /** Romanian */
  ro = 'ro',
  /** Moldavian */
  ro_MD = 'ro_MD',
  /** Russian */
  ru = 'ru',
  /** Kinyarwanda */
  rw = 'rw',
  /** Sanskrit */
  sa = 'sa',
  /** Sindhi */
  sd = 'sd',
  /** Northern Sami */
  se = 'se',
  /** Sango */
  sg = 'sg',
  /** Sinhala */
  si = 'si',
  /** Slovak */
  sk = 'sk',
  /** Slovenian */
  sl = 'sl',
  /** Samoan */
  sm = 'sm',
  /** Shona */
  sn = 'sn',
  /** Somali */
  so = 'so',
  /** Albanian */
  sq = 'sq',
  /** Serbian */
  sr = 'sr',
  /** Southern Sotho */
  st = 'st',
  /** Sundanese */
  su = 'su',
  /** Swedish */
  sv = 'sv',
  /** Swahili */
  sw = 'sw',
  /** Congo Swahili */
  sw_CD = 'sw_CD',
  /** Tamil */
  ta = 'ta',
  /** Telugu */
  te = 'te',
  /** Tajik */
  tg = 'tg',
  /** Thai */
  th = 'th',
  /** Tigrinya */
  ti = 'ti',
  /** Turkmen */
  tk = 'tk',
  /** Tongan */
  to = 'to',
  /** Turkish */
  tr = 'tr',
  /** Tatar */
  tt = 'tt',
  /** Uyghur */
  ug = 'ug',
  /** Ukrainian */
  uk = 'uk',
  /** Urdu */
  ur = 'ur',
  /** Uzbek */
  uz = 'uz',
  /** Vietnamese */
  vi = 'vi',
  /** Volapük */
  vo = 'vo',
  /** Wolof */
  wo = 'wo',
  /** Xhosa */
  xh = 'xh',
  /** Yiddish */
  yi = 'yi',
  /** Yoruba */
  yo = 'yo',
  /** Chinese */
  zh = 'zh',
  /** Simplified Chinese */
  zh_Hans = 'zh_Hans',
  /** Traditional Chinese */
  zh_Hant = 'zh_Hant',
  /** Zulu */
  zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR'
}

/** Retured when attemting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Adds an item to the order. If custom fields are defined on the OrderLine
   * entity, a third argument 'customFields' will be available.
   */
  addItemToOrder: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder?: Maybe<AddPaymentToOrderResult>;
  /**
   * Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a
   * third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available.
   */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  /**
   * Authenticates the user using the native authentication strategy. This mutation
   * is an alias for `authenticate({ native: { ... }})`
   */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /**
   * Regenerate and send a verification token for a new Customer registration. Only
   * applicable if `authOptions.requireVerification` is set to true.
   */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   * 
   * _If `authOptions.requireVerification` is set to `true`:_
   * 
   * 1. **The Customer is registered _with_ a password**. A verificationToken will
   * be created (and typically emailed to the Customer). That
   * verificationToken would then be passed to the `verifyCustomerAccount`
   * mutation _without_ a password. The Customer is then
   * verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken
   * will be created (and typically emailed to the Customer). That
   * verificationToken would then be passed to the `verifyCustomerAccount`
   * mutation _with_ the chosed password of the Customer. The Customer is then
   * verified and authenticated in one step.
   * 
   * _If `authOptions.requireVerification` is set to `false`:_
   * 
   * 3. The Customer _must_ be registered _with_ a password. No further action is
   * needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder?: Maybe<SetCustomerForOrderResult>;
  /** Sets the billing address for this order */
  setOrderBillingAddress?: Maybe<Order>;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields?: Maybe<Order>;
  /** Sets the shipping address for this order */
  setOrderShippingAddress?: Maybe<Order>;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /**
   * Verify a Customer email address with the token sent to that address. Only
   * applicable if `authOptions.requireVerification` is set to true.
   * 
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the a password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationVerifyCustomerAccountArgs = {
  password?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError;

export type NativeAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Retured when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Retured when attemting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type NumberOperators = {
  between?: Maybe<NumberRange>;
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
};

export type NumberRange = {
  end: Scalars['Float'];
  start: Scalars['Float'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  /** Order-level adjustments to the order total, such as discounts from promotions */
  adjustments: Array<Adjustment>;
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String'];
  couponCodes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  customer?: Maybe<Customer>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lines: Array<OrderLine>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Int'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingWithTax: Scalars['Int'];
  state: Scalars['String'];
  /** The subTotal is the total of the OrderLines, before order-level promotions and shipping has been applied. */
  subTotal: Scalars['Int'];
  subTotalBeforeTax: Scalars['Int'];
  total: Scalars['Int'];
  totalBeforeTax: Scalars['Int'];
  totalQuantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type OrderHistoryArgs = {
  options?: Maybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
  active?: Maybe<BooleanOperators>;
  code?: Maybe<StringOperators>;
  createdAt?: Maybe<DateOperators>;
  currencyCode?: Maybe<StringOperators>;
  shipping?: Maybe<NumberOperators>;
  shippingWithTax?: Maybe<NumberOperators>;
  state?: Maybe<StringOperators>;
  subTotal?: Maybe<NumberOperators>;
  subTotalBeforeTax?: Maybe<NumberOperators>;
  total?: Maybe<NumberOperators>;
  totalBeforeTax?: Maybe<NumberOperators>;
  totalQuantity?: Maybe<NumberOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  adjustments: Array<Adjustment>;
  cancelled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  fulfillment?: Maybe<Fulfillment>;
  id: Scalars['ID'];
  refundId?: Maybe<Scalars['ID']>;
  taxRate: Scalars['Float'];
  unitPrice: Scalars['Int'];
  unitPriceIncludesTax: Scalars['Boolean'];
  unitPriceWithTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

/** Retured when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int'];
  message: Scalars['String'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  adjustments: Array<Adjustment>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  items: Array<OrderItem>;
  order: Order;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  totalPrice: Scalars['Int'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  filter?: Maybe<OrderFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<OrderSortParameter>;
  take?: Maybe<Scalars['Int']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderProcessState = {
  __typename?: 'OrderProcessState';
  name: Scalars['String'];
  to: Array<Scalars['String']>;
};

export type OrderSortParameter = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  shipping?: Maybe<SortOrder>;
  shippingWithTax?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  subTotal?: Maybe<SortOrder>;
  subTotalBeforeTax?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
  totalBeforeTax?: Maybe<SortOrder>;
  totalQuantity?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

/** Retured when attemting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
  /** This field should correspond to the `code` property of a PaymentMethodHandler. */
  method: Scalars['String'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  code: Scalars['String'];
  configArgs: Array<ConfigArg>;
  createdAt: Scalars['DateTime'];
  definition: ConfigurableOperationDefinition;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

/**
 * "
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 * 
 * @docsCategory common
 */
export enum Permission {
  /**  The Authenticated role means simply that the user is logged in  */
  Authenticated = 'Authenticated',
  CreateAdministrator = 'CreateAdministrator',
  CreateCatalog = 'CreateCatalog',
  CreateCustomer = 'CreateCustomer',
  CreateOrder = 'CreateOrder',
  CreatePromotion = 'CreatePromotion',
  CreateSettings = 'CreateSettings',
  DeleteAdministrator = 'DeleteAdministrator',
  DeleteCatalog = 'DeleteCatalog',
  DeleteCustomer = 'DeleteCustomer',
  DeleteOrder = 'DeleteOrder',
  DeletePromotion = 'DeletePromotion',
  DeleteSettings = 'DeleteSettings',
  /**  Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /**  Public means any unauthenticated user may perform the operation  */
  Public = 'Public',
  ReadAdministrator = 'ReadAdministrator',
  ReadCatalog = 'ReadCatalog',
  ReadCustomer = 'ReadCustomer',
  ReadOrder = 'ReadOrder',
  ReadPromotion = 'ReadPromotion',
  ReadSettings = 'ReadSettings',
  /**  SuperAdmin can perform the most sensitive tasks */
  SuperAdmin = 'SuperAdmin',
  UpdateAdministrator = 'UpdateAdministrator',
  UpdateCatalog = 'UpdateCatalog',
  UpdateCustomer = 'UpdateCustomer',
  UpdateOrder = 'UpdateOrder',
  UpdatePromotion = 'UpdatePromotion',
  UpdateSettings = 'UpdateSettings'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  variants: Array<ProductVariant>;
};

export type ProductFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  description?: Maybe<StringOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  filter?: Maybe<ProductFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortParameter>;
  take?: Maybe<Scalars['Int']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSortParameter = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  price: Scalars['Int'];
  priceIncludesTax: Scalars['Boolean'];
  priceWithTax: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  currencyCode?: Maybe<StringOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  price?: Maybe<NumberOperators>;
  priceIncludesTax?: Maybe<BooleanOperators>;
  priceWithTax?: Maybe<NumberOperators>;
  sku?: Maybe<StringOperators>;
  updatedAt?: Maybe<DateOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  filter?: Maybe<ProductVariantFilterParameter>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductVariantSortParameter>;
  take?: Maybe<Scalars['Int']>;
};

export type ProductVariantSortParameter = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  priceWithTax?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentApproved` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
  product?: Maybe<Product>;
  /** Get a list of Products */
  products: ProductList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  options?: Maybe<CollectionListOptions>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  options?: Maybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Scalars['Int'];
  metadata?: Maybe<Scalars['JSON']>;
  method?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  shipping: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RegisterCustomerAccountResult = MissingPasswordError | NativeAuthStrategyError | Success;

export type RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult = EmailAddressConflictError | InvalidCredentialsError | NativeAuthStrategyError | Success;

export type ResetPasswordResult = CurrentUser | NativeAuthStrategyError | PasswordResetTokenExpiredError | PasswordResetTokenInvalidError;

export type Return = Node & StockMovement & {
  __typename?: 'Return';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderItem: OrderItem;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type Sale = Node & StockMovement & {
  __typename?: 'Sale';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type SearchInput = {
  collectionId?: Maybe<Scalars['ID']>;
  collectionSlug?: Maybe<Scalars['String']>;
  facetValueIds?: Maybe<Array<Scalars['ID']>>;
  facetValueOperator?: Maybe<LogicalOperator>;
  groupByProduct?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SearchResultSortParameter>;
  take?: Maybe<Scalars['Int']>;
  term?: Maybe<Scalars['String']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID'];
  productName: Scalars['String'];
  /** @deprecated Use `productAsset.preview` instead */
  productPreview: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** @deprecated Use `productVariantAsset.preview` instead */
  productVariantPreview: Scalars['String'];
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID'];
  preview: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type ServerConfig = {
  __typename?: 'ServerConfig';
  customFieldConfig: CustomFields;
  orderProcess: Array<OrderProcessState>;
  permittedAssetTypes: Array<Scalars['String']>;
};

export type SetCustomerForOrderResult = AlreadyLoggedInError | EmailAddressConflictError | Order;

export type SetOrderShippingMethodResult = Order | OrderModificationError;

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  description: Scalars['String'];
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StockAdjustment = Node & StockMovement & {
  __typename?: 'StockAdjustment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type StockMovement = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type StockMovementItem = Cancellation | Return | Sale | StockAdjustment;

export type StockMovementList = {
  __typename?: 'StockMovementList';
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int'];
};

export enum StockMovementType {
  ADJUSTMENT = 'ADJUSTMENT',
  CANCELLATION = 'CANCELLATION',
  RETURN = 'RETURN',
  SALE = 'SALE'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String'];
};

export type StringOperators = {
  contains?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime'];
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  zone: Zone;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressInput = {
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};

export type UpdateCustomerEmailAddressResult = IdentifierChangeTokenExpiredError | IdentifierChangeTokenInvalidError | NativeAuthStrategyError | Success;

export type UpdateCustomerInput = {
  customFields?: Maybe<Scalars['JSON']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCustomerPasswordResult = InvalidCredentialsError | NativeAuthStrategyError | Success;

export type UpdateOrderInput = {
  customFields?: Maybe<Scalars['JSON']>;
};

export type UpdateOrderItemsResult = NegativeQuantityError | Order | OrderLimitError | OrderModificationError;


export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerifyCustomerAccountResult = CurrentUser | MissingPasswordError | NativeAuthStrategyError | PasswordAlreadySetError | VerificationTokenExpiredError | VerificationTokenInvalidError;

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  members: Array<Country>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

type DiscriminateUnion<T, U> = T extends U ? T : never;

type RequireField<T, TNames extends string> = T & { [P in TNames]: (T & { [name: string]: never })[P] };

export namespace UpdateAddress {
  export type Variables = UpdateAddressMutationVariables;
  export type Mutation = UpdateAddressMutation;
  export type UpdateCustomerAddress = UpdateAddressMutation['updateCustomerAddress'];
}

export namespace ChangePassword {
  export type Variables = ChangePasswordMutationVariables;
  export type Mutation = ChangePasswordMutation;
  export type UpdateCustomerPassword = ChangePasswordMutation['updateCustomerPassword'];
  export type SuccessInlineFragment = (DiscriminateUnion<RequireField<ChangePasswordMutation['updateCustomerPassword'], '__typename'>, { __typename: 'Success' }>);
}

export namespace ChangeEmailAddress {
  export type Variables = ChangeEmailAddressMutationVariables;
  export type Mutation = ChangeEmailAddressMutation;
  export type RequestUpdateCustomerEmailAddress = ChangeEmailAddressMutation['requestUpdateCustomerEmailAddress'];
  export type SuccessInlineFragment = (DiscriminateUnion<RequireField<ChangeEmailAddressMutation['requestUpdateCustomerEmailAddress'], '__typename'>, { __typename: 'Success' }>);
}

export namespace UpdateCustomerDetails {
  export type Variables = UpdateCustomerDetailsMutationVariables;
  export type Mutation = UpdateCustomerDetailsMutation;
  export type UpdateCustomer = UpdateCustomerDetailsMutation['updateCustomer'];
}

export namespace GetAccountOverview {
  export type Variables = GetAccountOverviewQueryVariables;
  export type Query = GetAccountOverviewQuery;
  export type ActiveCustomer = (NonNullable<GetAccountOverviewQuery['activeCustomer']>);
}

export namespace GetOrder {
  export type Variables = GetOrderQueryVariables;
  export type Query = GetOrderQuery;
  export type OrderByCode = (NonNullable<GetOrderQuery['orderByCode']>);
  export type ShippingAddress = (NonNullable<(NonNullable<GetOrderQuery['orderByCode']>)['shippingAddress']>);
  export type BillingAddress = (NonNullable<(NonNullable<GetOrderQuery['orderByCode']>)['billingAddress']>);
}

export namespace GetOrderList {
  export type Variables = GetOrderListQueryVariables;
  export type Query = GetOrderListQuery;
  export type ActiveCustomer = (NonNullable<GetOrderListQuery['activeCustomer']>);
  export type Orders = (NonNullable<GetOrderListQuery['activeCustomer']>)['orders'];
  export type Items = (NonNullable<(NonNullable<GetOrderListQuery['activeCustomer']>)['orders']['items'][0]>);
}

export namespace SignOut {
  export type Variables = SignOutMutationVariables;
  export type Mutation = SignOutMutation;
  export type Logout = SignOutMutation['logout'];
}

export namespace VerifyChangeEmailAddress {
  export type Variables = VerifyChangeEmailAddressMutationVariables;
  export type Mutation = VerifyChangeEmailAddressMutation;
  export type UpdateCustomerEmailAddress = VerifyChangeEmailAddressMutation['updateCustomerEmailAddress'];
  export type SuccessInlineFragment = (DiscriminateUnion<RequireField<VerifyChangeEmailAddressMutation['updateCustomerEmailAddress'], '__typename'>, { __typename: 'Success' }>);
}

export namespace RequestPasswordReset {
  export type Variables = RequestPasswordResetMutationVariables;
  export type Mutation = RequestPasswordResetMutation;
  export type RequestPasswordReset = (NonNullable<RequestPasswordResetMutation['requestPasswordReset']>);
  export type SuccessInlineFragment = (DiscriminateUnion<RequireField<(NonNullable<RequestPasswordResetMutation['requestPasswordReset']>), '__typename'>, { __typename: 'Success' }>);
}

export namespace Register {
  export type Variables = RegisterMutationVariables;
  export type Mutation = RegisterMutation;
  export type RegisterCustomerAccount = RegisterMutation['registerCustomerAccount'];
  export type SuccessInlineFragment = (DiscriminateUnion<RequireField<RegisterMutation['registerCustomerAccount'], '__typename'>, { __typename: 'Success' }>);
}

export namespace ResetPassword {
  export type Variables = ResetPasswordMutationVariables;
  export type Mutation = ResetPasswordMutation;
  export type ResetPassword = ResetPasswordMutation['resetPassword'];
  export type CurrentUserInlineFragment = (DiscriminateUnion<RequireField<ResetPasswordMutation['resetPassword'], '__typename'>, { __typename: 'CurrentUser' }>);
}

export namespace Verify {
  export type Variables = VerifyMutationVariables;
  export type Mutation = VerifyMutation;
  export type VerifyCustomerAccount = VerifyMutation['verifyCustomerAccount'];
  export type CurrentUserInlineFragment = (DiscriminateUnion<RequireField<VerifyMutation['verifyCustomerAccount'], '__typename'>, { __typename: 'CurrentUser' }>);
}

export namespace GetOrderByCode {
  export type Variables = GetOrderByCodeQueryVariables;
  export type Query = GetOrderByCodeQuery;
  export type OrderByCode = (NonNullable<GetOrderByCodeQuery['orderByCode']>);
  export type Customer = (NonNullable<(NonNullable<GetOrderByCodeQuery['orderByCode']>)['customer']>);
  export type User = (NonNullable<(NonNullable<(NonNullable<GetOrderByCodeQuery['orderByCode']>)['customer']>)['user']>);
}

export namespace AddPayment {
  export type Variables = AddPaymentMutationVariables;
  export type Mutation = AddPaymentMutation;
  export type AddPaymentToOrder = (NonNullable<AddPaymentMutation['addPaymentToOrder']>);
}

export namespace GetNextOrderStates {
  export type Variables = GetNextOrderStatesQueryVariables;
  export type Query = GetNextOrderStatesQuery;
}

export namespace TransitionToAddingItems {
  export type Variables = TransitionToAddingItemsMutationVariables;
  export type Mutation = TransitionToAddingItemsMutation;
  export type TransitionOrderToState = (NonNullable<TransitionToAddingItemsMutation['transitionOrderToState']>);
}

export namespace GetShippingAddress {
  export type Variables = GetShippingAddressQueryVariables;
  export type Query = GetShippingAddressQuery;
  export type ActiveOrder = (NonNullable<GetShippingAddressQuery['activeOrder']>);
  export type ShippingAddress = (NonNullable<(NonNullable<GetShippingAddressQuery['activeOrder']>)['shippingAddress']>);
}

export namespace SetShippingAddress {
  export type Variables = SetShippingAddressMutationVariables;
  export type Mutation = SetShippingAddressMutation;
  export type SetOrderShippingAddress = (NonNullable<SetShippingAddressMutation['setOrderShippingAddress']>);
  export type ShippingAddress = (NonNullable<(NonNullable<SetShippingAddressMutation['setOrderShippingAddress']>)['shippingAddress']>);
}

export namespace GetEligibleShippingMethods {
  export type Variables = GetEligibleShippingMethodsQueryVariables;
  export type Query = GetEligibleShippingMethodsQuery;
  export type EligibleShippingMethods = (NonNullable<GetEligibleShippingMethodsQuery['eligibleShippingMethods'][0]>);
}

export namespace SetShippingMethod {
  export type Variables = SetShippingMethodMutationVariables;
  export type Mutation = SetShippingMethodMutation;
  export type SetOrderShippingMethod = SetShippingMethodMutation['setOrderShippingMethod'];
}

export namespace SetCustomerForOrder {
  export type Variables = SetCustomerForOrderMutationVariables;
  export type Mutation = SetCustomerForOrderMutation;
  export type SetCustomerForOrder = (NonNullable<SetCustomerForOrderMutation['setCustomerForOrder']>);
  export type OrderInlineFragment = (DiscriminateUnion<RequireField<(NonNullable<SetCustomerForOrderMutation['setCustomerForOrder']>), '__typename'>, { __typename: 'Order' }>);
  export type Customer = (NonNullable<(DiscriminateUnion<RequireField<(NonNullable<SetCustomerForOrderMutation['setCustomerForOrder']>), '__typename'>, { __typename: 'Order' }>)['customer']>);
}

export namespace TransitionToArrangingPayment {
  export type Variables = TransitionToArrangingPaymentMutationVariables;
  export type Mutation = TransitionToArrangingPaymentMutation;
  export type TransitionOrderToState = (NonNullable<TransitionToArrangingPaymentMutation['transitionOrderToState']>);
}

export namespace GetOrderForCheckout {
  export type Variables = GetOrderForCheckoutQueryVariables;
  export type Query = GetOrderForCheckoutQuery;
  export type ActiveOrder = (NonNullable<GetOrderForCheckoutQuery['activeOrder']>);
  export type ShippingAddress = (NonNullable<(NonNullable<GetOrderForCheckoutQuery['activeOrder']>)['shippingAddress']>);
}

export namespace GetCustomerAddresses {
  export type Variables = GetCustomerAddressesQueryVariables;
  export type Query = GetCustomerAddressesQuery;
  export type ActiveCustomer = (NonNullable<GetCustomerAddressesQuery['activeCustomer']>);
  export type Addresses = (NonNullable<(NonNullable<(NonNullable<GetCustomerAddressesQuery['activeCustomer']>)['addresses']>)[0]>);
}

export namespace GetAvailableCountries {
  export type Variables = GetAvailableCountriesQueryVariables;
  export type Query = GetAvailableCountriesQuery;
  export type AvailableCountries = (NonNullable<GetAvailableCountriesQuery['availableCountries'][0]>);
}

export namespace GetActiveCustomer {
  export type Variables = GetActiveCustomerQueryVariables;
  export type Query = GetActiveCustomerQuery;
  export type ActiveCustomer = (NonNullable<GetActiveCustomerQuery['activeCustomer']>);
}

export namespace GetCollections {
  export type Variables = GetCollectionsQueryVariables;
  export type Query = GetCollectionsQuery;
  export type Collections = GetCollectionsQuery['collections'];
  export type Items = (NonNullable<GetCollectionsQuery['collections']['items'][0]>);
  export type Parent = (NonNullable<(NonNullable<GetCollectionsQuery['collections']['items'][0]>)['parent']>);
  export type FeaturedAsset = (NonNullable<(NonNullable<GetCollectionsQuery['collections']['items'][0]>)['featuredAsset']>);
}

export namespace Asset {
  export type Fragment = AssetFragment;
  export type FocalPoint = (NonNullable<AssetFragment['focalPoint']>);
}

export namespace Cart {
  export type Fragment = CartFragment;
  export type Lines = (NonNullable<CartFragment['lines'][0]>);
  export type FeaturedAsset = (NonNullable<(NonNullable<CartFragment['lines'][0]>)['featuredAsset']>);
  export type ProductVariant = (NonNullable<CartFragment['lines'][0]>)['productVariant'];
  export type Adjustments = (NonNullable<(NonNullable<CartFragment['lines'][0]>)['adjustments'][0]>);
  export type ShippingMethod = (NonNullable<CartFragment['shippingMethod']>);
  export type _Adjustments = (NonNullable<CartFragment['adjustments'][0]>);
}

export namespace Country {
  export type Fragment = CountryFragment;
}

export namespace OrderAddress {
  export type Fragment = OrderAddressFragment;
}

export namespace Address {
  export type Fragment = AddressFragment;
  export type Country = AddressFragment['country'];
}

export namespace ErrorResult {
  export type Fragment = ErrorResultFragment;
}

export namespace GetActiveOrder {
  export type Variables = GetActiveOrderQueryVariables;
  export type Query = GetActiveOrderQuery;
  export type ActiveOrder = (NonNullable<GetActiveOrderQuery['activeOrder']>);
}

export namespace AdjustItemQuantity {
  export type Variables = AdjustItemQuantityMutationVariables;
  export type Mutation = AdjustItemQuantityMutation;
  export type AdjustOrderLine = AdjustItemQuantityMutation['adjustOrderLine'];
}

export namespace RemoveItemFromCart {
  export type Variables = RemoveItemFromCartMutationVariables;
  export type Mutation = RemoveItemFromCartMutation;
  export type RemoveOrderLine = RemoveItemFromCartMutation['removeOrderLine'];
}

export namespace GetCartTotals {
  export type Variables = GetCartTotalsQueryVariables;
  export type Query = GetCartTotalsQuery;
  export type ActiveOrder = (NonNullable<GetCartTotalsQuery['activeOrder']>);
  export type Lines = (NonNullable<(NonNullable<GetCartTotalsQuery['activeOrder']>)['lines'][0]>);
}

export namespace GetProductDetail {
  export type Variables = GetProductDetailQueryVariables;
  export type Query = GetProductDetailQuery;
  export type Product = (NonNullable<GetProductDetailQuery['product']>);
  export type Variants = (NonNullable<(NonNullable<GetProductDetailQuery['product']>)['variants'][0]>);
  export type Options = (NonNullable<(NonNullable<(NonNullable<GetProductDetailQuery['product']>)['variants'][0]>)['options'][0]>);
  export type FeaturedAsset = (NonNullable<(NonNullable<GetProductDetailQuery['product']>)['featuredAsset']>);
  export type Assets = (NonNullable<(NonNullable<GetProductDetailQuery['product']>)['assets'][0]>);
  export type Collections = (NonNullable<(NonNullable<GetProductDetailQuery['product']>)['collections'][0]>);
  export type Breadcrumbs = (NonNullable<(NonNullable<(NonNullable<GetProductDetailQuery['product']>)['collections'][0]>)['breadcrumbs'][0]>);
}

export namespace AddToCart {
  export type Variables = AddToCartMutationVariables;
  export type Mutation = AddToCartMutation;
  export type AddItemToOrder = AddToCartMutation['addItemToOrder'];
}

export namespace SearchProducts {
  export type Variables = SearchProductsQueryVariables;
  export type Query = SearchProductsQuery;
  export type Search = SearchProductsQuery['search'];
  export type Items = (NonNullable<SearchProductsQuery['search']['items'][0]>);
  export type PriceWithTax = (NonNullable<SearchProductsQuery['search']['items'][0]>)['priceWithTax'];
  export type PriceRangeInlineFragment = (DiscriminateUnion<RequireField<(NonNullable<SearchProductsQuery['search']['items'][0]>)['priceWithTax'], '__typename'>, { __typename: 'PriceRange' }>);
  export type ProductAsset = (NonNullable<(NonNullable<SearchProductsQuery['search']['items'][0]>)['productAsset']>);
  export type FocalPoint = (NonNullable<(NonNullable<(NonNullable<SearchProductsQuery['search']['items'][0]>)['productAsset']>)['focalPoint']>);
  export type FacetValues = (NonNullable<SearchProductsQuery['search']['facetValues'][0]>);
  export type FacetValue = (NonNullable<SearchProductsQuery['search']['facetValues'][0]>)['facetValue'];
  export type Facet = (NonNullable<SearchProductsQuery['search']['facetValues'][0]>)['facetValue']['facet'];
}

export namespace GetCollection {
  export type Variables = GetCollectionQueryVariables;
  export type Query = GetCollectionQuery;
  export type Collection = (NonNullable<GetCollectionQuery['collection']>);
  export type FeaturedAsset = (NonNullable<(NonNullable<GetCollectionQuery['collection']>)['featuredAsset']>);
  export type Breadcrumbs = (NonNullable<(NonNullable<GetCollectionQuery['collection']>)['breadcrumbs'][0]>);
  export type Children = (NonNullable<(NonNullable<(NonNullable<GetCollectionQuery['collection']>)['children']>)[0]>);
  export type _FeaturedAsset = (NonNullable<(NonNullable<(NonNullable<(NonNullable<GetCollectionQuery['collection']>)['children']>)[0]>)['featuredAsset']>);
}

export namespace CreateAddress {
  export type Variables = CreateAddressMutationVariables;
  export type Mutation = CreateAddressMutation;
  export type CreateCustomerAddress = CreateAddressMutation['createCustomerAddress'];
}

export namespace SignIn {
  export type Variables = SignInMutationVariables;
  export type Mutation = SignInMutation;
  export type Login = SignInMutation['login'];
  export type CurrentUserInlineFragment = (DiscriminateUnion<RequireField<SignInMutation['login'], '__typename'>, { __typename: 'CurrentUser' }>);
}

export namespace GetActiveChannel {
  export type Variables = GetActiveChannelQueryVariables;
  export type Query = GetActiveChannelQuery;
  export type ActiveChannel = GetActiveChannelQuery['activeChannel'];
}

export type UpdateAddressMutationVariables = Exact<{
  input: UpdateAddressInput;
}>;


export type UpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomerAddress: (
    { __typename?: 'Address' }
    & AddressFragment
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  old: Scalars['String'];
  new: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomerPassword: (
    { __typename?: 'InvalidCredentialsError' }
    & ErrorResult_InvalidCredentialsError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type ChangeEmailAddressMutationVariables = Exact<{
  password: Scalars['String'];
  emailAddress: Scalars['String'];
}>;


export type ChangeEmailAddressMutation = (
  { __typename?: 'Mutation' }
  & { requestUpdateCustomerEmailAddress: (
    { __typename?: 'EmailAddressConflictError' }
    & ErrorResult_EmailAddressConflictError_Fragment
  ) | (
    { __typename?: 'InvalidCredentialsError' }
    & ErrorResult_InvalidCredentialsError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type UpdateCustomerDetailsMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerDetailsMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomer: (
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'firstName' | 'lastName' | 'emailAddress' | 'phoneNumber'>
  ) }
);

export type GetAccountOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountOverviewQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'title' | 'firstName' | 'lastName' | 'emailAddress'>
  )> }
);

export type GetOrderQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { orderByCode?: Maybe<(
    { __typename?: 'Order' }
    & { shippingAddress?: Maybe<(
      { __typename?: 'OrderAddress' }
      & OrderAddressFragment
    )>, billingAddress?: Maybe<(
      { __typename?: 'OrderAddress' }
      & OrderAddressFragment
    )> }
    & CartFragment
  )> }
);

export type GetOrderListQueryVariables = Exact<{
  options?: Maybe<OrderListOptions>;
}>;


export type GetOrderListQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id'>
    & { orders: (
      { __typename?: 'OrderList' }
      & Pick<OrderList, 'totalItems'>
      & { items: Array<(
        { __typename?: 'Order' }
        & Pick<Order, 'id' | 'updatedAt' | 'code' | 'state' | 'currencyCode' | 'total'>
      )> }
    ) }
  )> }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type VerifyChangeEmailAddressMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyChangeEmailAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomerEmailAddress: (
    { __typename?: 'IdentifierChangeTokenExpiredError' }
    & ErrorResult_IdentifierChangeTokenExpiredError_Fragment
  ) | (
    { __typename?: 'IdentifierChangeTokenInvalidError' }
    & ErrorResult_IdentifierChangeTokenInvalidError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type RequestPasswordResetMutationVariables = Exact<{
  emailAddress: Scalars['String'];
}>;


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { requestPasswordReset?: Maybe<(
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterCustomerInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registerCustomerAccount: (
    { __typename?: 'MissingPasswordError' }
    & ErrorResult_MissingPasswordError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'identifier'>
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'PasswordResetTokenExpiredError' }
    & ErrorResult_PasswordResetTokenExpiredError_Fragment
  ) | (
    { __typename?: 'PasswordResetTokenInvalidError' }
    & ErrorResult_PasswordResetTokenInvalidError_Fragment
  ) }
);

export type VerifyMutationVariables = Exact<{
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type VerifyMutation = (
  { __typename?: 'Mutation' }
  & { verifyCustomerAccount: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'identifier'>
  ) | (
    { __typename?: 'MissingPasswordError' }
    & ErrorResult_MissingPasswordError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) | (
    { __typename?: 'PasswordAlreadySetError' }
    & ErrorResult_PasswordAlreadySetError_Fragment
  ) | (
    { __typename?: 'VerificationTokenExpiredError' }
    & ErrorResult_VerificationTokenExpiredError_Fragment
  ) | (
    { __typename?: 'VerificationTokenInvalidError' }
    & ErrorResult_VerificationTokenInvalidError_Fragment
  ) }
);

export type GetOrderByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetOrderByCodeQuery = (
  { __typename?: 'Query' }
  & { orderByCode?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'updatedAt'>
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'emailAddress' | 'firstName' | 'lastName'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'identifier' | 'verified'>
      )> }
    )> }
    & CartFragment
  )> }
);

export type AddPaymentMutationVariables = Exact<{
  input: PaymentInput;
}>;


export type AddPaymentMutation = (
  { __typename?: 'Mutation' }
  & { addPaymentToOrder?: Maybe<(
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderPaymentStateError' }
    & ErrorResult_OrderPaymentStateError_Fragment
  ) | (
    { __typename?: 'OrderStateTransitionError' }
    & ErrorResult_OrderStateTransitionError_Fragment
  ) | (
    { __typename?: 'PaymentDeclinedError' }
    & ErrorResult_PaymentDeclinedError_Fragment
  ) | (
    { __typename?: 'PaymentFailedError' }
    & ErrorResult_PaymentFailedError_Fragment
  )> }
);

export type GetNextOrderStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNextOrderStatesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'nextOrderStates'>
);

export type TransitionToAddingItemsMutationVariables = Exact<{ [key: string]: never; }>;


export type TransitionToAddingItemsMutation = (
  { __typename?: 'Mutation' }
  & { transitionOrderToState?: Maybe<(
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderStateTransitionError' }
    & ErrorResult_OrderStateTransitionError_Fragment
  )> }
);

export type GetShippingAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShippingAddressQuery = (
  { __typename?: 'Query' }
  & { activeOrder?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
    & { shippingAddress?: Maybe<(
      { __typename?: 'OrderAddress' }
      & OrderAddressFragment
    )> }
  )> }
);

export type SetShippingAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type SetShippingAddressMutation = (
  { __typename?: 'Mutation' }
  & { setOrderShippingAddress?: Maybe<(
    { __typename?: 'Order' }
    & { shippingAddress?: Maybe<(
      { __typename?: 'OrderAddress' }
      & OrderAddressFragment
    )> }
    & CartFragment
  )> }
);

export type GetEligibleShippingMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEligibleShippingMethodsQuery = (
  { __typename?: 'Query' }
  & { eligibleShippingMethods: Array<(
    { __typename?: 'ShippingMethodQuote' }
    & Pick<ShippingMethodQuote, 'id' | 'description' | 'price' | 'metadata'>
  )> }
);

export type SetShippingMethodMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SetShippingMethodMutation = (
  { __typename?: 'Mutation' }
  & { setOrderShippingMethod: (
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & ErrorResult_OrderModificationError_Fragment
  ) }
);

export type SetCustomerForOrderMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type SetCustomerForOrderMutation = (
  { __typename?: 'Mutation' }
  & { setCustomerForOrder?: Maybe<(
    { __typename?: 'AlreadyLoggedInError' }
    & ErrorResult_AlreadyLoggedInError_Fragment
  ) | (
    { __typename?: 'EmailAddressConflictError' }
    & ErrorResult_EmailAddressConflictError_Fragment
  ) | (
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'emailAddress' | 'firstName' | 'lastName'>
    )> }
  )> }
);

export type TransitionToArrangingPaymentMutationVariables = Exact<{ [key: string]: never; }>;


export type TransitionToArrangingPaymentMutation = (
  { __typename?: 'Mutation' }
  & { transitionOrderToState?: Maybe<(
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderStateTransitionError' }
    & ErrorResult_OrderStateTransitionError_Fragment
  )> }
);

export type GetOrderForCheckoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrderForCheckoutQuery = (
  { __typename?: 'Query' }
  & { activeOrder?: Maybe<(
    { __typename?: 'Order' }
    & { shippingAddress?: Maybe<(
      { __typename?: 'OrderAddress' }
      & OrderAddressFragment
    )> }
    & CartFragment
  )> }
);

export type GetCustomerAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerAddressesQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id'>
    & { addresses?: Maybe<Array<(
      { __typename?: 'Address' }
      & AddressFragment
    )>> }
  )> }
);

export type GetAvailableCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableCountriesQuery = (
  { __typename?: 'Query' }
  & { availableCountries: Array<(
    { __typename?: 'Country' }
    & CountryFragment
  )> }
);

export type GetActiveCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveCustomerQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'firstName' | 'lastName' | 'emailAddress' | 'phoneNumber'>
  )> }
);

export type GetCollectionsQueryVariables = Exact<{
  options?: Maybe<CollectionListOptions>;
}>;


export type GetCollectionsQuery = (
  { __typename?: 'Query' }
  & { collections: (
    { __typename?: 'CollectionList' }
    & { items: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'slug'>
      & { parent?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name' | 'slug'>
      )>, featuredAsset?: Maybe<(
        { __typename?: 'Asset' }
        & AssetFragment
      )> }
    )> }
  ) }
);

export type AssetFragment = (
  { __typename?: 'Asset' }
  & Pick<Asset, 'id' | 'width' | 'height' | 'name' | 'preview'>
  & { focalPoint?: Maybe<(
    { __typename?: 'Coordinate' }
    & Pick<Coordinate, 'x' | 'y'>
  )> }
);

export type CartFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'code' | 'state' | 'active' | 'subTotal' | 'subTotalBeforeTax' | 'totalBeforeTax' | 'shipping' | 'total'>
  & { lines: Array<(
    { __typename?: 'OrderLine' }
    & Pick<OrderLine, 'id' | 'unitPrice' | 'unitPriceWithTax' | 'quantity' | 'totalPrice'>
    & { featuredAsset?: Maybe<(
      { __typename?: 'Asset' }
      & AssetFragment
    )>, productVariant: (
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name'>
    ), adjustments: Array<(
      { __typename?: 'Adjustment' }
      & Pick<Adjustment, 'amount' | 'description' | 'adjustmentSource' | 'type'>
    )> }
  )>, shippingMethod?: Maybe<(
    { __typename?: 'ShippingMethod' }
    & Pick<ShippingMethod, 'id' | 'code' | 'description'>
  )>, adjustments: Array<(
    { __typename?: 'Adjustment' }
    & Pick<Adjustment, 'amount' | 'description' | 'adjustmentSource' | 'type'>
  )> }
);

export type CountryFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>
);

export type OrderAddressFragment = (
  { __typename?: 'OrderAddress' }
  & Pick<OrderAddress, 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'country' | 'phoneNumber'>
);

export type AddressFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'phoneNumber' | 'defaultShippingAddress' | 'defaultBillingAddress'>
  & { country: (
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'code' | 'name'>
  ) }
);

type ErrorResult_NegativeQuantityError_Fragment = (
  { __typename?: 'NegativeQuantityError' }
  & Pick<NegativeQuantityError, 'errorCode' | 'message'>
);

type ErrorResult_OrderLimitError_Fragment = (
  { __typename?: 'OrderLimitError' }
  & Pick<OrderLimitError, 'errorCode' | 'message'>
);

type ErrorResult_OrderModificationError_Fragment = (
  { __typename?: 'OrderModificationError' }
  & Pick<OrderModificationError, 'errorCode' | 'message'>
);

type ErrorResult_OrderPaymentStateError_Fragment = (
  { __typename?: 'OrderPaymentStateError' }
  & Pick<OrderPaymentStateError, 'errorCode' | 'message'>
);

type ErrorResult_OrderStateTransitionError_Fragment = (
  { __typename?: 'OrderStateTransitionError' }
  & Pick<OrderStateTransitionError, 'errorCode' | 'message'>
);

type ErrorResult_PaymentDeclinedError_Fragment = (
  { __typename?: 'PaymentDeclinedError' }
  & Pick<PaymentDeclinedError, 'errorCode' | 'message'>
);

type ErrorResult_PaymentFailedError_Fragment = (
  { __typename?: 'PaymentFailedError' }
  & Pick<PaymentFailedError, 'errorCode' | 'message'>
);

type ErrorResult_CouponCodeExpiredError_Fragment = (
  { __typename?: 'CouponCodeExpiredError' }
  & Pick<CouponCodeExpiredError, 'errorCode' | 'message'>
);

type ErrorResult_CouponCodeInvalidError_Fragment = (
  { __typename?: 'CouponCodeInvalidError' }
  & Pick<CouponCodeInvalidError, 'errorCode' | 'message'>
);

type ErrorResult_CouponCodeLimitError_Fragment = (
  { __typename?: 'CouponCodeLimitError' }
  & Pick<CouponCodeLimitError, 'errorCode' | 'message'>
);

type ErrorResult_InvalidCredentialsError_Fragment = (
  { __typename?: 'InvalidCredentialsError' }
  & Pick<InvalidCredentialsError, 'errorCode' | 'message'>
);

type ErrorResult_NativeAuthStrategyError_Fragment = (
  { __typename?: 'NativeAuthStrategyError' }
  & Pick<NativeAuthStrategyError, 'errorCode' | 'message'>
);

type ErrorResult_MissingPasswordError_Fragment = (
  { __typename?: 'MissingPasswordError' }
  & Pick<MissingPasswordError, 'errorCode' | 'message'>
);

type ErrorResult_EmailAddressConflictError_Fragment = (
  { __typename?: 'EmailAddressConflictError' }
  & Pick<EmailAddressConflictError, 'errorCode' | 'message'>
);

type ErrorResult_PasswordResetTokenExpiredError_Fragment = (
  { __typename?: 'PasswordResetTokenExpiredError' }
  & Pick<PasswordResetTokenExpiredError, 'errorCode' | 'message'>
);

type ErrorResult_PasswordResetTokenInvalidError_Fragment = (
  { __typename?: 'PasswordResetTokenInvalidError' }
  & Pick<PasswordResetTokenInvalidError, 'errorCode' | 'message'>
);

type ErrorResult_AlreadyLoggedInError_Fragment = (
  { __typename?: 'AlreadyLoggedInError' }
  & Pick<AlreadyLoggedInError, 'errorCode' | 'message'>
);

type ErrorResult_IdentifierChangeTokenExpiredError_Fragment = (
  { __typename?: 'IdentifierChangeTokenExpiredError' }
  & Pick<IdentifierChangeTokenExpiredError, 'errorCode' | 'message'>
);

type ErrorResult_IdentifierChangeTokenInvalidError_Fragment = (
  { __typename?: 'IdentifierChangeTokenInvalidError' }
  & Pick<IdentifierChangeTokenInvalidError, 'errorCode' | 'message'>
);

type ErrorResult_PasswordAlreadySetError_Fragment = (
  { __typename?: 'PasswordAlreadySetError' }
  & Pick<PasswordAlreadySetError, 'errorCode' | 'message'>
);

type ErrorResult_VerificationTokenExpiredError_Fragment = (
  { __typename?: 'VerificationTokenExpiredError' }
  & Pick<VerificationTokenExpiredError, 'errorCode' | 'message'>
);

type ErrorResult_VerificationTokenInvalidError_Fragment = (
  { __typename?: 'VerificationTokenInvalidError' }
  & Pick<VerificationTokenInvalidError, 'errorCode' | 'message'>
);

export type ErrorResultFragment = ErrorResult_NegativeQuantityError_Fragment | ErrorResult_OrderLimitError_Fragment | ErrorResult_OrderModificationError_Fragment | ErrorResult_OrderPaymentStateError_Fragment | ErrorResult_OrderStateTransitionError_Fragment | ErrorResult_PaymentDeclinedError_Fragment | ErrorResult_PaymentFailedError_Fragment | ErrorResult_CouponCodeExpiredError_Fragment | ErrorResult_CouponCodeInvalidError_Fragment | ErrorResult_CouponCodeLimitError_Fragment | ErrorResult_InvalidCredentialsError_Fragment | ErrorResult_NativeAuthStrategyError_Fragment | ErrorResult_MissingPasswordError_Fragment | ErrorResult_EmailAddressConflictError_Fragment | ErrorResult_PasswordResetTokenExpiredError_Fragment | ErrorResult_PasswordResetTokenInvalidError_Fragment | ErrorResult_AlreadyLoggedInError_Fragment | ErrorResult_IdentifierChangeTokenExpiredError_Fragment | ErrorResult_IdentifierChangeTokenInvalidError_Fragment | ErrorResult_PasswordAlreadySetError_Fragment | ErrorResult_VerificationTokenExpiredError_Fragment | ErrorResult_VerificationTokenInvalidError_Fragment;

export type GetActiveOrderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveOrderQuery = (
  { __typename?: 'Query' }
  & { activeOrder?: Maybe<(
    { __typename?: 'Order' }
    & CartFragment
  )> }
);

export type AdjustItemQuantityMutationVariables = Exact<{
  id: Scalars['ID'];
  qty: Scalars['Int'];
}>;


export type AdjustItemQuantityMutation = (
  { __typename?: 'Mutation' }
  & { adjustOrderLine: (
    { __typename?: 'NegativeQuantityError' }
    & ErrorResult_NegativeQuantityError_Fragment
  ) | (
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderLimitError' }
    & ErrorResult_OrderLimitError_Fragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & ErrorResult_OrderModificationError_Fragment
  ) }
);

export type RemoveItemFromCartMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveItemFromCartMutation = (
  { __typename?: 'Mutation' }
  & { removeOrderLine: (
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & ErrorResult_OrderModificationError_Fragment
  ) }
);

export type GetCartTotalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartTotalsQuery = (
  { __typename?: 'Query' }
  & { activeOrder?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'active' | 'total'>
    & { lines: Array<(
      { __typename?: 'OrderLine' }
      & Pick<OrderLine, 'id' | 'quantity'>
    )> }
  )> }
);

export type GetProductDetailQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProductDetailQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description'>
    & { variants: Array<(
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name' | 'price' | 'priceWithTax' | 'sku'>
      & { options: Array<(
        { __typename?: 'ProductOption' }
        & Pick<ProductOption, 'code' | 'name'>
      )> }
    )>, featuredAsset?: Maybe<(
      { __typename?: 'Asset' }
      & AssetFragment
    )>, assets: Array<(
      { __typename?: 'Asset' }
      & AssetFragment
    )>, collections: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'slug'>
      & { breadcrumbs: Array<(
        { __typename?: 'CollectionBreadcrumb' }
        & Pick<CollectionBreadcrumb, 'id' | 'name' | 'slug'>
      )> }
    )> }
  )> }
);

export type AddToCartMutationVariables = Exact<{
  variantId: Scalars['ID'];
  qty: Scalars['Int'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addItemToOrder: (
    { __typename?: 'NegativeQuantityError' }
    & ErrorResult_NegativeQuantityError_Fragment
  ) | (
    { __typename?: 'Order' }
    & CartFragment
  ) | (
    { __typename?: 'OrderLimitError' }
    & ErrorResult_OrderLimitError_Fragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & ErrorResult_OrderModificationError_Fragment
  ) }
);

export type SearchProductsQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchProductsQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResponse' }
    & Pick<SearchResponse, 'totalItems'>
    & { items: Array<(
      { __typename?: 'SearchResult' }
      & Pick<SearchResult, 'productId' | 'slug' | 'productName' | 'description'>
      & { priceWithTax: (
        { __typename?: 'PriceRange' }
        & Pick<PriceRange, 'min' | 'max'>
      ) | { __typename?: 'SinglePrice' }, productAsset?: Maybe<(
        { __typename?: 'SearchResultAsset' }
        & Pick<SearchResultAsset, 'id' | 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )> }
    )>, facetValues: Array<(
      { __typename?: 'FacetValueResult' }
      & Pick<FacetValueResult, 'count'>
      & { facetValue: (
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'name'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'name'>
        ) }
      ) }
    )> }
  ) }
);

export type GetCollectionQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type GetCollectionQuery = (
  { __typename?: 'Query' }
  & { collection?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name' | 'slug' | 'description'>
    & { featuredAsset?: Maybe<(
      { __typename?: 'Asset' }
      & AssetFragment
    )>, breadcrumbs: Array<(
      { __typename?: 'CollectionBreadcrumb' }
      & Pick<CollectionBreadcrumb, 'id' | 'slug' | 'name'>
    )>, children?: Maybe<Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'slug' | 'name'>
      & { featuredAsset?: Maybe<(
        { __typename?: 'Asset' }
        & AssetFragment
      )> }
    )>> }
  )> }
);

export type CreateAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { createCustomerAddress: (
    { __typename?: 'Address' }
    & AddressFragment
  ) }
);

export type SignInMutationVariables = Exact<{
  emailAddress: Scalars['String'];
  password: Scalars['String'];
  rememberMe: Scalars['Boolean'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id'>
  ) | (
    { __typename?: 'InvalidCredentialsError' }
    & ErrorResult_InvalidCredentialsError_Fragment
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & ErrorResult_NativeAuthStrategyError_Fragment
  ) }
);

export type GetActiveChannelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveChannelQuery = (
  { __typename?: 'Query' }
  & { activeChannel: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'code' | 'currencyCode' | 'defaultLanguageCode'>
  ) }
);
