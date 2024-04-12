export type UserType = {
  gender: string;
  location: LocationType;
  name: NameType;
  login: {
    uuid: string;
  };
};

export type LocationType = {
  country: string;
};

export type NameType = {
  first: string;
  last: string;
};

export type UserDataResponseType = {
  results: UserType[];
};
