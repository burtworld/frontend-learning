export type Role = "guest" | "admin";

/** user's device */
export type DeviceList = "MOBILE" | "DESKTOP";

export interface LoginResult {
  /** auth token */
  token: string;
  username: string;
  role: Role;
}

export interface User {
  username: string;

  /** menu list for init tagsView */
  menuList: Object[];

  /** login status */
  logged: boolean;

  role: Role;

  /** user's device */
  device: DeviceList;

  /** menu collapsed status */
  collapsed: boolean;

  /** notification count */
  noticeCount: number;

  /** user's language */
  // locale: Locale;

  /** Is first time to view the site ? */
  newUser: boolean;
}
