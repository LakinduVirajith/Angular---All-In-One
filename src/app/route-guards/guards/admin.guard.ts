import { CanMatchFn } from '@angular/router';
import { CommonVariables } from 'src/app/common/CommonVariables';

export const adminGuard: CanMatchFn = (route, segments) => {
  if (CommonVariables.userType == 'admin') {
    return true;
  } else {
    return false;
  }
};
