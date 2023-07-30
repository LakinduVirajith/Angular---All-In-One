# Angular---All-In-One

[Angular CLI and Project Setup](#angular-cli-and-project-setup)

[Routing and Navigation](#routing-and-navigation)

[Lazy Loading](#lazy-loading)

[Decorators](#decorators)

[Data Binding](#data-binding)

[Directives](#directives)

[Pipes](#pipes)

[Form](#form)

[Services and Dependency Injection](#services-and-dependency-injection)

[Route Guards](#route-guards)

## Components

A "component" in the context of Angular is a building block of the user interface (UI). It is a reusable and self-contained piece of code responsible for defining the structure, behavior, and appearance of a part of the user interface. Components allow you to divide your application into smaller, manageable pieces, making it easier to maintain and understand.

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  template: `
    <h2>Item List</h2>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class ItemListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
```

CLI Command: ng generate component `component-name`

## Modules

In Angular, modules are used to organize and bundle related components, services, directives, and other artifacts. Each Angular application has at least one module called the root module, and it can have multiple feature modules.

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule],
  exports: [DashboardComponent], // Export the component to be used outside the module if needed
})
export class SharedNodule {}

```

CLI Command: ng generate module  `module-name`

## Template

In Angular, templates are used to define the user interface (UI) of a component. A template is an HTML file that describes how the component should be rendered and what data should be displayed. It allows you to define the structure of the view and use Angular's template syntax to bind data and logic to the UI.

```
<!-- app.component.html -->

<div>
  <h1>{{ title }}</h1>
  <p>Welcome to {{ appName }}!</p>

  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>

  <button (click)="onButtonClick()">Click Me</button>
</div>
```
## Routing and Navigation

Angular Routing and Navigation are key features that enable the creation of single-page applications (SPAs) with multiple views and user-friendly navigation. It allows users to move between different components and views without causing a full page reload.

#### 1. Routing Configuration

Angular's routing configuration is defined in a routing module. You create a separate module (e.g., AppRoutingModule) to manage your application's routes. In this module, you import the necessary modules and define the routes using the RouterModule.forRoot() method.

```
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route, navigates to HomeComponent
  { path: 'about', component: AboutComponent },
  // More routes can be added here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### 2 .Router Outlet

In your app's main template (e.g., app.component.html), you use the `<router-outlet>` tag to specify where the routed components will be displayed.

```
<!-- app.component.html -->
<header>
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
  </nav>
</header>
<router-outlet></router-outlet>
```

The `<router-outlet>` serves as a placeholder for the component that corresponds to the current route.

#### 3. Navigation

You can navigate between different views either imperatively in the component class or declaratively in the template.

* Imperative Navigation (Component Class)

```
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <button (click)="goToAboutPage()">Go to About</button>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAboutPage() {
    this.router.navigate(['/about']); // Imperatively navigate to /about
  }
}
```

* Declarative Navigation (Template)

```
<!-- home.component.html -->
<button routerLink="/about">Go to About</button> <!-- Declaratively navigate to /about -->
```

#### 4. Route Parameters

You can pass data to a route using route parameters. Route parameters are defined using : followed by the parameter name in the route path.

```
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
];
```

In the component, you can access the route parameters using the ActivatedRoute service.

#### 5. Redirects and Wildcard Routes

* Redirects
  
Redirects are used to automatically navigate users from one route to another. This can be helpful for providing default routes or for handling legacy routes. In Angular, you can use the redirectTo property within a route configuration to specify a redirect route.

```
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirects to '/home' by default
  { path: 'old-route', redirectTo: '/new-route' }, // Redirects from '/old-route' to '/new-route'
];
```

* Wildcard Routes

Wildcard routes are used to handle unknown routes or display a "Page Not Found" component when no other routes match. The wildcard route is represented by the path '**'.

```
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for handling unknown routes
];
```

## Lazy Loading

Lazy Loading is a technique in Angular that allows you to load specific parts of your application only when they are needed, rather than loading the entire application upfront. This can significantly improve the initial loading time and overall performance of your application, especially in large-scale projects with multiple modules and complex components.

`Benefits of Lazy Loading`

* Faster Initial Load: Users see the core part of the application quickly, improving the user experience.

* Reduced Data Usage: Users only download the modules they need, saving bandwidth and reducing data usage.

* Improved Performance: Smaller module sizes mean faster loading times and better performance.

* Modular Development: Developers can work on different modules independently, making code maintenance and collaboration more manageable.

`To implement Lazy Loading in Angular, you need to`

* Organize your application into feature modules.

* Configure routes to use the loadChildren property instead of component in the route configuration.

* Provide the path to the module file that you want to load lazily.

```
const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  // Other routes...
];
```

## Decorators

In Angular, decorators are a powerful feature of TypeScript that allow you to modify and enhance classes, properties, methods, and other declarations. Decorators are represented by the `@ symbol` followed by the decorator function name and are used to annotate and extend the behavior of various elements in an Angular application.

Decorators are extensively used in Angular to enable features like component metadata, dependency injection, routing configuration, and more. They play a crucial role in defining and configuring various aspects of an Angular application.

* @Component: Defines an Angular component with a template and styles.

* @Directive: Defines an attribute directive.

* @Injectable: a decorator in Angular that marks a class as injectable. It means that the class can be used as a dependency that can be injected into other classes or components. .

* @Input: a decorator in Angular used to bind properties from a parent component to a child component..

* @Output: a decorator in Angular used to emit events from a child component to its parent component.

* @ViewChild: a decorator in Angular used to obtain a reference to a child component, directive, or element in the parent component. It allows you to access and interact with properties and methods of the child component or element directly from the parent component. 

* @HostListener: a decorator that allows you to listen to events on the host element (the element to which a directive or component is applied) and respond to those events by calling a method in your directive or component.

* @HostBinding: decorator that allows you to bind a class property to a host element property or attribute. It is often used in custom directives and components to manipulate the behavior or appearance of the host element.

## Data Binding

Data binding is a fundamental concept in Angular that allows you to connect and synchronize data between the component class (the business logic) and the component template (the user interface). It enables you to display dynamic data, handle user input, and respond to changes in the data seamlessly.

`One-Way Binding`

One-way binding means data flows in only one direction, from the component class to the template. It allows you to display data from the component in the template and handle events in the template that trigger actions in the component. But any changes to the data in the template do not affect the component.

* Interpolation

* Property Binding

* Class Binding

* Style Binding

* Template Variable

* Event Binding

`Two-Way Binding`

Two-way binding means data flows in both directions, between the component class and the template. It allows you to not only display data from the component in the template but also automatically keep the data in the component in sync with changes made in the template.

## Directives

In the context of Angular, directives are an essential part of the framework that allows you to extend and modify the behavior of HTML elements and components. They provide a way to attach certain behaviors, styles, or functionality to elements in your Angular application. There are two types of directives: built-in directives and custom directives.

#### 1. Built-in Directives

* ngIf: This directive is used to conditionally add or remove an element from the DOM based on a certain expression's truthiness

* ngFor: This directive is used for looping over a collection and generating multiple elements based on the data.

* ngSwitch: This directive is used for conditionally rendering elements based on multiple cases.

* ngStyle: This directive is used to apply inline styles to an element based on an expression.

* ngClass: This directive is used to conditionally apply CSS classes to an element based on an expression.

#### 2. Custom Directives

Custom directives allow you to create your own reusable directives tailored to specific requirements. To define a custom directive, you use the `@Directive` decorator provided by Angular. A custom directive is essentially a TypeScript class with a selector that allows you to attach it to HTML elements in your templates.

## Pipes

Angular pipes are a powerful feature that allows you to transform and format data within templates. They are used to apply transformations to data before displaying it in the view. Pipes can be used for various purposes, such as formatting dates, numbers, strings, or applying custom transformations. Angular provides several built-in pipes, and you can also create custom pipes to suit your application's specific needs.


* UpperCasePipe: Transforms text to uppercase.

* LowerCasePipe: Transforms text to lowercase.

* TitleCasePipe: Transforms text to title case.

* DecimalPipe: Formats numbers as decimals.

* CurrencyPipe: Formats numbers as currency values.

* DatePipe: Formats dates into various formats.

* PercentPipe: Formats numbers as percentages.

* JsonPipe: Converts an object into a JSON string.

* SlicePipe: Extracts a portion of an array or string.

* KeyValuePipe: Transforms an object or a Map into an array of key-value pairs.

* AsyncPipe: Handles asynchronous data streams (Observables, Promises) and subscribes to them automatically.

* I18nPluralPipe: Displays strings based on numeric values and language plural rules.

* I18nSelectPipe: Displays strings based on a key-value map.

* Custom Pipes:
You can create your own custom pipes to perform specific data transformations. To create a custom pipe, you need to implement the PipeTransform interface and define the transform() method. Custom pipes are useful when you have repetitive data transformations in your application that you want to encapsulate and reuse.

`Chaining Pipes`

You can chain multiple pipes together to perform multiple transformations on the same data.

Example: {{ date | date : 'dd/MM/yyyy' | uppercase }}

In this example, the date is first formatted using the date pipe and then transformed to uppercase using the uppercase pipe.

## Form

In Angular, forms are a critical part of building interactive and data-driven web applications. Angular provides two types of forms: Template-driven forms and Reactive (Model-driven) forms. Both types allow you to capture and validate user input, but they differ in their approach and complexity.

#### 1. Template-driven forms

Template-driven forms are easier to set up and are ideal for simple forms with basic validation requirements. They are defined within the template (HTML) itself using Angular's built-in directives.

`Key characteristics`

* Directives: Template-driven forms use directives such as ngForm, ngModel, and ngSubmit.

* Form data: Form data is automatically bound to the model in the component.

* Validation: Angular provides built-in validation directives like required, minlength, maxlength, etc., for form fields.

* Two-way binding: Changes to the form fields automatically update the model and vice versa.

#### 2. Reactive (Model-driven) forms

Reactive forms are more flexible and scalable, making them suitable for complex forms and applications with advanced validation requirements. They are built programmatically using TypeScript.

`Key characteristics`

* FormGroup, FormControl, and FormArray: Reactive forms are based on classes like FormGroup, FormControl, and FormArray to represent the form structure.

* Explicit form control creation: Each form control is explicitly created and managed in the component class.
Immutable data model: Reactive forms use a more structured and immutable data model.

* Validation: Reactive forms provide extensive validation capabilities with custom validators and asynchronous validation.

* Observable-based approach: Reactive forms rely on Observables to listen for form changes, making it easy to react to changes.

#### 3. To use forms in your Angular application:

Import the required modules:
For template-driven forms: Import FormsModule in your app.module.ts.
For reactive forms: Import ReactiveFormsModule in your app.module.ts.

Create the form in your component:
For template-driven forms: Use the ngForm and ngModel directives to create the form in your template and bind form data to the component.
For reactive forms: Create form controls programmatically in the component class using FormGroup, FormControl, and FormArray.

Perform form validation:
Both types of forms support built-in and custom validation. You can use Angular's validation directives for template-driven forms and validators provided by Validators class for reactive forms.

Handle form submissions:
For template-driven forms: Use the (ngSubmit) event to handle form submissions.
For reactive forms: Attach a listener to the FormGroup and handle form submissions programmatically.


## Services and Dependency Injection

Angular Services and Dependency Injection are key concepts in Angular that work together to facilitate the organization, reusability, and decoupling of application logic.

#### 1. Services

Angular Services are classes that are designed to provide specific functionality and data to various parts of an application. Services encapsulate the business logic, data access, and other functionalities that are not directly related to the presentation layer (components). They act as singletons, meaning there is only one instance of a service throughout the application.

`Key characteristics of Angular Services`

* Singleton Instances: Angular maintains a single instance of a service, and this instance is shared across all the components and other services that inject it. This ensures that data is shared consistently across different parts of the application.

* Separation of Concerns: Services help separate the presentation logic (in components) from the business logic and data manipulation, promoting a more maintainable and organized codebase.

* Reusability: By encapsulating logic in services, you can easily reuse the same functionality across multiple components or other services.

* Dependency Injection: Services are used with Angular's Dependency Injection mechanism to make them available to other parts of the application.

#### 2. Dependency Injection (DI)

Dependency Injection is a design pattern used in Angular to provide instances of dependencies to classes that require them. With DI, a class (a component or service) declares its dependencies instead of creating them directly. Angular's DI system is responsible for creating and managing instances of the required dependencies and injecting them into the dependent classes.

`Key concepts of Dependency Injection in Angular`

* Providers: Providers are responsible for creating instances of services or other objects that will be injected. They tell Angular how to create and deliver dependencies.

* Injectors: Angular maintains an injector hierarchy that allows it to resolve and provide dependencies when needed. The root injector is created by the Angular platform during the bootstrapping process.

* Injection Token: Angular uses an injection token to identify a dependency. An injection token is a unique object used as a key to identify a specific dependency in the injector.

* @Injectable decorator: The @Injectable decorator is used to define a class as a service that can be injected into other components or services.

## Route Guards

Angular Route Guards are a powerful feature that allows you to control navigation and access to routes in an Angular application. Route Guards are used to protect certain routes based on specific conditions, such as user authentication, authorization, or data loading.

#### 1. CanActivate

This guard determines whether a user is allowed to activate (navigate to) a particular route. It is commonly used to protect routes that require authentication. If the user is not authenticated, the guard can redirect them to a login page or block access altogether.

#### 2. CanActivateChild

Similar to CanActivate, but specifically applies to child routes. It checks if a user is allowed to activate a child route within a parent route.

#### 3. CanDeactivate

This guard is used to determine whether a user can deactivate (navigate away from) a specific route. It is commonly used for confirmation prompts, asking users to confirm their decision before leaving the page.

#### 4. CanMatch

 the canMatch guard was used to control the route matching process, but it is now deprecated in favor of using functional guards with CanMatchFn. With functional guards, you have more flexibility in defining your custom logic for route matching, giving you better control over the navigation flow in your Angular application

---

# ANGULAR CLI AND PROJECT SETUP

Angular CLI (Command Line Interface) is a powerful tool provided by the Angular team to facilitate the development of Angular applications. It offers a set of commands that help you create, manage, and build Angular projects easily and efficiently. Angular CLI abstracts many complex tasks and configurations, allowing developers to focus on building application features rather than setting up the project from scratch.

## Installing Angular CLI

npm install -g @angular/cli

## Angular CLI Version

ng version

## Install Project

ng new `your-project-name`

## Update Project To Latest Version

ng update

ng update @angular/cli

ng update @angular/core

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

To Generate Component: ng g c `component-name`

To Generate Module: ng g m `module-name`

To Generate Directive: ng g d `directive-name`

To Generate Pipe: ng g p `pipe-name`

To Generate Service: ng g s `service-name`

To Generate Class: ng g cl `class-name`

To Generate Guard: ng g g `guard-name`

To Generate Interface: ng g i `interface-name`

To Generate Enum: ng g e `enum-name`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# PROJECT DEPENDENCIES

primeng

ng-bootstrap

fortawesome

# Feature needed functions

HTTP Client and API Communication

Observables and RxJS

Angular Material and UI Components

Angular Animations

Angular Compiler and AOT (Ahead-of-Time) Compilation

Change Detection and Zones

Lifecycle Hooks

Route Guards

Angular Universal (Server-side Rendering)

RxJS (Reactive Extensions for JavaScript)

Angular Ivy (The new rendering engine, introduced in Angular 9)

Angular Elements (Package Angular components as custom elements)

Angular Compiler Options (Control how Angular compiles and bundles the application)

Angular Language Service (IDE support for Angular in editors like Visual Studio Code)

Progressive Web Apps (PWA) support

Angular Schematics (Extensible code generation tools)

Angular DevTools (Chrome extension for Angular application debugging)

Bazel (An alternative build tool for Angular)

Angular Performance Optimization

Angular Upgrade and Migration Strategies (AngularJS to Angular)

Angular Best Practices and Style Guidelines

Angular Design Patterns

State Management (ngrx/store or Ngxs)

Angular Security (XSS, CSRF, etc.)

Angular Deployment and Hosting

Angular Testing (Unit Testing, Integration Testing, and End-to-end Testing)

Angular Internationalization (i18n)

---

Reverse Proxy

SSL/TLS

Authentication and Authorization

Cross-Site Request Forgery (CSRF) Protection

Content Security Policy (CSP)

HTTP Security Headers

Cookies

Cache Handling

Local Storage and Session Storage