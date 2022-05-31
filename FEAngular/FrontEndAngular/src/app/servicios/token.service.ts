import { Injectable } from '@angular/core';

const TOKEN_KEY='AuthToken';
const USERNAME_KEY='AuthUserName';
const AUTHTORITIES_KEY='AuthAutorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<String> = [];
  constructor() { }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName:string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,userName);
  }

  public getUserName() {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuththorities(auththorities:string[]):void{
    window.sessionStorage.removeItem(AUTHTORITIES_KEY);
    window.sessionStorage.setItem(AUTHTORITIES_KEY,JSON.stringify(auththorities));
  }

  public getAuththorities(): string[]{
    this.roles=[];
    if (sessionStorage.getItem(AUTHTORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHTORITIES_KEY)).foreach(authority =>{
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut():void{
    window.sessionStorage.clear();
  }

}
