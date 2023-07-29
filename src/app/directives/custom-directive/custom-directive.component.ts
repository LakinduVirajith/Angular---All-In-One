import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent {

}

/* NEED TO BE DECLARATION IN APP MODULE */

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {
  @Input() validationType!: string;
  private errorMessage!: string;
  private errorElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('blur')
  onBlur() {
    this.validateInput();
  }

  private validateInput() {
    this.el.nativeElement.classList.remove('invalid');

    switch (this.validationType) {
      case 'email':
        if (!this.isValidEmail(this.el.nativeElement.value)) {
          this.setErrorMessage('Invalid email address');
        }else {
          this.removeErrorMessage();
        }
        break;
      case 'minLength':
        const minLength = parseInt(this.el.nativeElement.getAttribute('minLength'), 10);
        if (this.el.nativeElement.value.length < minLength) {
          this.setErrorMessage(`Minimum length should be ${minLength}`);
        }else {
          this.removeErrorMessage();
        }
        break;
      default:
        break;
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private setErrorMessage(message: string) {
    this.errorMessage = message;
    this.el.nativeElement.classList.add('invalid');
    this.showErrorMessage();
  }

  private showErrorMessage() {
    if (!this.errorElement) {
      this.errorElement = this.renderer.createElement('div');
      this.errorElement.classList.add('error-message');
    }

    this.errorElement.textContent = this.errorMessage;

    const parentElement = this.el.nativeElement.parentElement;
    this.renderer.appendChild(parentElement, this.errorElement);
  }

  private removeErrorMessage() {
    if (this.errorElement) {
      const parentElement = this.el.nativeElement.parentElement;
      this.renderer.removeChild(parentElement, this.errorElement);
      this.errorElement.textContent = null;
    }
  }
}

/* NEED TO BE DECLARATION IN APP MODULE */

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('lightsalmon', 'white');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(backgroundColor: string | null, color: string | null) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }
}
