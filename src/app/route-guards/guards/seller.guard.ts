import { CanMatchFn } from '@angular/router';
import { CommonVariables } from 'src/app/common/CommonVariables';

export const sellerGuard: CanMatchFn = (route, segments) => {
  if (CommonVariables.userType == 'seller') {
    return true;
  } else {
    return false;
  }
};
