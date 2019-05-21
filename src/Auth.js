/* eslint no-restricted-globals: 0*/
import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = "/profile";
const LOGIN_FAILURE_PAGE = "/"

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'sdgwills.auth0.com',
      audience: 'https://sdgwills.auth0.com/userinfo',
      clientID: 'cI0I38t3WL62fhZ2237tclgOBySRVdux',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setSession = this.setSession.bind(this);
  }

  getProfile() {
    console.log(this.profile);
    return this.profile;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        if (!authResult || !authResult.idToken) {
          // location.pathname = LOGIN_FAILURE_PAGE;
          return reject(err);
        }
        this.setSession(authResult);
        let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        localStorage.setItem('profile', authResult.idTokenPayload.sub);
        location.hash = "";
        // location.pathname = LOGIN_SUCCESS_PAGE;
        resolve();
      });
    })
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // clear id token and expiration
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem('profile');
    location.pathname = LOGIN_FAILURE_PAGE;
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 * 60 * 60 * 24 + new Date().getTime();
  }
}