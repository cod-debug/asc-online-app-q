const MAINTENANCE_BASE  = "maintenance";
const APPLICATION_BASE  = "application";
const ANNOUNCEMENT_BASE = "announcement";
const ACCOUNT_BASE      = "account";

export const URL_PATHS = {
  LOGIN                                   : "login",

  // Asc
  ASC                                     : "asc",
  DASHBOARD                               : "dashboard",
  ANNOUNCEMENT                            : "announcement",

  // company
  COMPANY                                 : "company",
  LIST_COMPANY                            : "lists",
  ADD_COMPANY                             : "add",
  UPDATE_COMPANY                          : "update",

  // applications
  APPLICATION                             : "application",
  S1_APPLICATION                          : "s1",
  S2_APPLICATION                          : "s2",
  APPLICATION_REASSIGNMENT                : "reassignment",
  LIST_APPLICATION                        : "lists",
  LIST_MULTIPLE_APPLICATION               : "multiple",
  LIST_SPECIAL_APPLICATION                : "special",
  LIST_ASSIGNED_APPLICATION               : "assigned-applications",
  LIST_FOR_RELEASE_APPLICATION            : "for-release",
  RELEASED_APPLICATION                    : "released",
  ADD_APPLICATION                         : "add",
  UPDATE_APPLICATION                      : "update",
  ADD_MULTIPLE                            : "add/multiple",
  SCHEDULE_OF_FEES_SINGLE_APPLICATION     : "single-application",
  SCHEDULE_OF_FEES_MULTIPLE_APPLICATIONS  : "multiple-applications",
  SCHEDULE_OF_FEES_SPECIAL_APPLICATIONS   : "special-applications",
  ACCOUNTS_PAYABLE                        : "accounts-payable",
  ACCOUNTS_RECEIVABLE                     : "accounts-receivable",

  // maintenance
  MAINTENANCE                             : "maintenance",
  BRANDS                                  : "brands",
  TYPE_OF_REASON                          : "type-of-reason",
  TYPE_OF_MEDIUM                          : "type-of-medium",
  AFFILIATION                             : "affiliation",
  PAYMENT_TYPE                            : "payment-type",
  TYPE_OF_DOCUMENT                        : "type-of-document",
  CATEGORY                                : "category",
  PRODUCT                                 : "product",
  TYPE_OF_APPLICATION                     : "type-of-application",
  ASC_RATES                               : "asc-rates",
  ASC_RATES_SPECIAL                       : "asc-rates-special",
  HOLIDAYS                                : "holidays",
  DIALECTS                                : "dialects",
  SCREENER_REVIEWER_PAIRS                 : "screener-reviewer-pairs",
  EMAIL_NOTIFICATION                      : "email-notification",
  TYPE_OF_EXECUTIONS                      : "type-of-executions",
  TYPE_OF_MAIN_DOCUMENTS                  : "type-of-main-documents",
  DOCUMENTS_SIZE                          : "document-size",
  ANNOUNCEMENT_CONTENT                    : "announcement-content",
  S1_S2_EXPIRATION_PERIODS                : "s1-s2-expiration-periods",
  S1_FEES_SETTLEMENT_PERIOD               : "s1-fees-settlement-period",
  S1_INCOMPLETE_DECISION_EXPIRATION_PERIOD: "s1-incomplete-decision-expiration-period",
  PROMISSORY_NOTE_PERIODS                 : "promissory-note-periods",
  QR_AND_BAR_CODE_CHECKER                 : "qr-and-bar-code-checker",
  NUMBER_OF_MULTIPLE_APPLICATION_ALLOWED  : "number-of-multiple-application-allowed",
  BRAND_PENALTIES                         : "brand-penalties",
  COMPANY_PENALTIES                       : "company-penalties",
  TYPE_OF_RATIONAL                        : "type-of-rational",
  USER_ACCOUNT                            : "accounts",
  MEDIUM_EXECUTIONS_CONTROLLER            : "medium-executions-controller",
  LOGIN_IMAGE                             : "login-image",
  WEEKLY_USER_SCHEDULE                    : "weekly-user-schedule",

  // account
  ACCOUNT                                 : "account",
  USER_ROLE                               : "user-role",
  USER_REGISTRATION                       : "user-registration",
  UPDATE_USER                             : "user-update",
  USER_PROFILE                            : "user-profile",
  USER_LIST                               : "user-list",

  // accounting
  ACCOUNTING                              : "accounting",
  LIST_PAYMENT                            : "lists",
  ADD_PAYMENT                             : "add",
  UPDATE_PAYMENT                          : "update",
  UPLOAD_PAYMENT                          : "upload",
  VOUCHER_ENROLLMENT                      : "voucher-enrollment",
  VOUCHER_REPLENISHMENT                   : "voucher-replenishment",
  UPDATE_BRAND_PENALTY                    : "add-brand-penalty/update",
  LIST_BRAND_PENALTY                      : "list-brand-penalty",
  ADD_BRAND_PENALTY                       : "add-brand-penalty",
  VOUCHER_MONITORING                      : "voucher-monitoring",
  OR_PREPARATION                          : "or-preparation",
  ACCOUNTING_ACCOUNTS_RECEIVABLE          : "accounts-receivable",
  PAYMENTS                                : "payments",

  // Penalties
  ADD_PENALTY                             : "add-penalty",
  UPDATE_PENALTY                          : "add-penalty/update",

  // Reports
  REPORTS                                 : "reports",

  // Errors
  ERROR                                   : "result/error",
  SUCCESS                                 : "result/success",
  HOME_PAGE                               : "asc/page/dashboard",
  ACCESS_DENIED                           : "access-denied",
  ACCOUNT_VERIFICATION                    : "account-verification",
  LANDING_PAGE                            : "login",
  PASSWORD_RESET                          : "password-verification/verification-code/:code/:username",

};


export const ENDPOINTS = {

}
