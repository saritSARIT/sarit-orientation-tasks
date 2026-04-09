export const throwError = (message: string): never => {
  //For use in backend only
  // eslint-disable-next-line functional/no-throw-statements
  throw new Error(message);
};