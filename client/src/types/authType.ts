export type UserType = {
  id: number;
  name: string;
  role: string;
  email: string;
  img: string;
};

export type UserSignUpType = {
  name: string;
  email: string;
  password: string;
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
