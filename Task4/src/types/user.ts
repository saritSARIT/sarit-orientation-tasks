export type User ={
  _id: string;
  username: string;
  displayedName: string;
}

export type UserPayload = Omit<User, "_id" >;
