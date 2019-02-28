export class Registration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    this.firstName = firstname;
    this.email = email;
    this.lastName = lastname;
    this.password = password;
  }
}
