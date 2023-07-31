import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.scss']
})
export class LifecycleHooksChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() parentMessage!: string;
  index: number = 0;

  messageArray: string[] = [];
  message: string = '';

  ngOnInit(): void {
    this.logMessage('ngOnInit');
  }

  ngOnChanges(): void {
    this.logMessage('ngOnChanges');
  }

  ngDoCheck(): void {
    this.logMessage('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logMessage('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logMessage('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logMessage('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logMessage('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    window.alert('Hook Triggered: ngOnDestroy')
    this.logMessage('ngOnDestroy');
  }

  private logMessage(hookName: string): void {
    this.message = `Hook Triggered: ${hookName}`;
    this.messageArray.push(this.message);
  }

  chageParentMessage(){
    this.index++;
    this.parentMessage = `Changed from Child Component ${this.index}`;
  }
}
