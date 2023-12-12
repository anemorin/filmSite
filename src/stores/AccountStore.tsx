import { makeAutoObservable } from "mobx";
import { user, users } from "../assets/data/users.data"
import { regexp } from "../enums";

class AccountStore {
  userMail?: string
  userPassword?: string
  registrationSecondPassword?: string;
  currentUser?: user;

  constructor() {
    makeAutoObservable(this);
    this.currentUser = undefined;
  }

  public setUserMail(mail : string) {
    this.userMail = mail;
  }

  public setCurrentUser() {
    this.currentUser = users.filter((user) => user.mail === this.userMail)[0];
  }

  public setUserPassword(password : string) {
    this.userPassword = password;
  }

  public setRegistrationSecondPassword(password : string) {
    this.registrationSecondPassword = password;
  }

  public validateMail() {
    return this.userMail ? regexp.mail.test(this.userMail) : false
  }

  // Я понимаю, что писать так авторизацию нельзя и что на фронте авторизацию не пишут.
  // Но в текущих условиях у меня нет другого выбора
  public get canLogIn() {
    return this.validateMail()
    && this.userPassword
    && users.find((user) => user.mail === this.userMail && user.password === this.userPassword);
  }

  public canRegister() {
    if (this.validateMail() === false) {
      return 'Неверный формат электронной почты'
    } else {
      if (this.userPassword !== this.registrationSecondPassword) {
        return 'Пароли не совпадают'
      } else if (users.find((user) => user.mail === this.userMail)) {
        return 'Пользователь с такой почтой уже существует'
      } else {
        // На костылях и с божьей помощью
        return undefined;
      }
    }
  }

  public registration() {
    users.push({
      mail: this.userMail ?? '',
      password: this.userPassword ?? '',
    })
    this.setCurrentUser()
  }
}

export default AccountStore;