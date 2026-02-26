export type User ={
  //I had to use that name.
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  username: string;
  displayedName: string;
}

export type UserPayload = Omit<User, "_id" >;
