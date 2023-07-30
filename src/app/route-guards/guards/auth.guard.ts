import { CanActivateFn } from '@angular/router';
import { CommonVariables } from 'src/app/common/CommonVariables';

export const authGuard: CanActivateFn = (route, state) => {

  if (CommonVariables.isAuthenticated) {
    return true;
  } else {
    window.alert('Access Denied!');
    return false;
  }
};
