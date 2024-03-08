export type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
  img: string;
};

export type UserSignUpType = {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
};

export type UserSignInType = {
  email: string;
  password: string;
};

export type UserStateType =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'logged' } & UserType);

export type AuthStateType = {
  accessToken: string;
  user: UserStateType;
  authModal: boolean;
};
