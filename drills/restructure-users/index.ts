/**
 * Restructure Users
 * 
 * Convert an array of user objects into an ID → user lookup table (object).
 * Each user object should have an 'id' property.
 * Use spread operators to create the lookup table.
 */

export interface User {
  id: number;
  name: string;
  email: string;
  [key: string]: any;
}

export function restructureUsers(users: User[]): Record<number, User> {
  // TODO: Implement this function using spread operators
  return {};
}

