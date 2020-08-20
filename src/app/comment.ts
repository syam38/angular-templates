export interface Comment {
  id: string;
  text: string;
  user: User;
  createdOn: string,
  children: Comment[]
}

interface User {
  id: string;
  firstName: string;
  lastName: string
}