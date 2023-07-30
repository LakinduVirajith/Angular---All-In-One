import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { CommonVariables } from 'src/app/common/CommonVariables';

export const workStatusGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const router = inject(Router);

  if(CommonVariables.hasUnsavedChanges){
    const confirmed = window.confirm('Are you sure you want to exit without saving?');
      if (confirmed) {
        return true;
      } else {
        return false;
      }
  }else{
    return true;
  }
    
};
