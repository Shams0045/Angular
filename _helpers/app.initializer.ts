import {AuthenticationService} from "../_services";

export function appInitializer(authenticationService: AuthenticationService) {
  if (authenticationService.userTokens) {
    return () => new Promise(resolve => {
      authenticationService.refreshToken()
        .subscribe()
        .add(resolve);
    });
  } else {
    return () => new Promise((resolve) => resolve(true));
  }
}






