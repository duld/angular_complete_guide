# Angular Notes

## Pre-requisites

### Notes taken from [Angular Quickstart](https://angular.io/guide/quickstart)

### Angular Requires

* __node.js__ version 8.x or 10.x.
* __npm__ package manager.
* angular cli
  * __npm install -g @angular/cli__

### Creating a workspace

Angular apps are created in a context of an Angular __workspace__. A workspace contains the files for one or more __projects__. A __project__ is the set of files that comprise an app, a library, or end-to-end tests.

To Create a new workspace and initial app project.

```Shell

ng new my-app

```

### Serving the application

Angular includes a server, so that can easily build and serve your app locally.

```Shell

ng serve --open

```

#### TLDR 1

* Create a new app
  * __ng new my-app__
* Start the app
  * __ng serve --open__

---

## Angular vs Angular N

Angular 2 is a complete re-write of Angular 1. Angular version 4 and above is considered, "just Angular". Angular 1 is now called AngularJS. Each new version of Angular is just an incremental improment over the previous version.

## CLI Deep Dive & Troubleshooting

Depeneding on the Angular CLI version you have installed, the generated application may or may not have the "FormsModule" as an import in the AppModule. If the import is not present you can include it using.

```JavaScript

import { FormsModule } from `@angular/forms`;

```

Just from quickly looking at the [documentation](https://angular.io/api/forms/FormsModule). It looks like the module is used to aid in the use of "template-driven forms". This is a safe guess, since that is exactly what the documentation says. What is a "template-driven form"? Afer looking it up, A template-driven form is a representation of a Form control in Angular.

### Updading the CLI

```bash
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli
```

### Common Issues and Solutions

1) __Creation of a new project takes forever:__ This can happen on Windows form time to time. Try running the command line as administrator.

2) __You get an EADDR error (Address already in use):__ You might already have another ng server process running - make sure to quite that or use __ng server --port ANOTHERPORT__

3) __My changes are not reflected in the browser (App is not compiling)__ Check if the window running __ng serve__ displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI.

## Project Setup and First App

We need to use the Angular CLI for Angular development. BUT WHY? Angular Apps are more elaborate than a simple JS library so the Angular CLI helps us manage this complexity.

### Creating a new Project

```Shell

ng new my-first-app

```

Then launch the generated angular app.

```Shell

ng serve --open

```

## Editing the First App

Lots to wrap our head around, Holy Moly! The generated Angular App comes with whole bunch of crap. The code that is being used to build the app lives in the __src__ directory. Angular has the idea of components. A component is made up of many parts

* app.component.css
  * used to style the component
* app.component.html
  * the HTML template
* app.component.spec.ts
  * this is where we can test our component.
* app.component.ts
  * where we describe the behavior of our compent in TypeScript.
* app.module.ts
  * Where we define our module exports and imports.

### Thoughts

* __Q)__ What is the purpose of the naming convention employed? What are the considerations and assumptions being made?
* __Q)__ What does a project look like that makes use of many components?

## Typescript

Typescript is a superset of Javascript. It is fully capable of anything that can be done in Javascript with some additional features; Types, Classes and Interfaces for example. Typescript is meant to be compiled to JavaScript.

## S2 L14-18 Creating a new Angular Component

To create a new Angular Component we have two options: manually creating the directory, creating the necessary files and updating the __app.module.ts__ file so that Angular knows about our new Component. Or, instead we can use the Angular CLI.

### Creating the Component manually

* Create a directory inside the __/app__ where our component will be housed.

* Create a *MyNewComponent.component.ts* file.
  
  * We will be exporting a class that represents our compnent.
  * Our Component class will have a TypeScript Decorator __@Component()__
  * The decorator must be supplied with some Metadata about our Component. Common Metadata includes:
    * selector
    * templateUrl
    * providers

* Create a mynewcomponent.component.html file for the markup. This is the HTML markup we will reference in the @Component metadata as our __templateUrl__ value.

### Creating the Component with the Angular CLI

```Shell
# Full Command to simplified
ng generate component <name> [options]
ng g component <name> [options]
ng g c <name> [options]
```

Thats about it.

## S2 L19 - Using an Inline Template over an external Template File

We can inline our Template markup inside of the servers.component.ts @Component Metadata declaration. We only need change the 'templateUrl' key to just 'template' and to add some valid markup.

```TypeScript
// This declaration uses an external Template file
@Component({
    selector: 'app-servers',
    templateUrl: './servers/component.html',
    styleUrls: ['./servers/component.css']
})
export class ServersComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}

// This declaration uses an in-line Template markup
@Component({
    selector: 'app-servers',
    templateUrl: `
        <h3>Same markup present in the external file</h3>
        <app-server></app-server>
        <app-server></app-server>
    `,
    styleUrls: ['./servers/component.css']
})
export class ServersComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
```

## S2 L21 More on Component Selector

The component Selector must be unique. The selector doesn't have to be a custom element. We can use many of the common selection strategies available in CSS.

>NOTE: Selecting by id will not work.

## S2 L22 What is Databinding

Databinding can be described as "communication between your TypeScript code and the Template (HTML).

### String Interpolation

You can reference a JavaScript value using string interpolation, if you wrap the reference with double curly braces.

```html

<div>
    <p>{{ someJavaScriptValue }}</p>
</div>

```

### Property Binding

We can pass values to our HTML template by binding them to HTML properties using the following syntax.

```html
<div>
    <img [src]="heroImageUrl">
</div>
```

### Event Binding

With event binding we can react to user events in our TypeScript code.

## S2 L23 String Interpolation

>"String Interpolation has to resolve into a string in the end."

Even in our TypeScript code, if we store a value as a Number, our value will be converted into a string. Is the value being used in string interpolation the equivalent of calling .toString()? Or new String(VALUE)? No clue.

## S2 L34 Property Binding

We can bind values from TypeScript to an HTML property using "property binding" in Angular. We need simply to wrap the property in square brackets like so:

```html
<img [src] = "someValueThatExistsInOurTypeScript">
```

## S2 L26-28 Event Binding, Bindable Properties and Passing Data via Event Binding

To bind an event on an HTML element we wrap the event we want to bind to in parenthesis.

### Binding to Click events

Using Angular we do not bind to 'onClick' for an element. Instead we specify the event name 'click'. This is also true when binding to different events, we specify the type of the event in all cases. *as far as I'm aware as of this writing!*

### $event

When we bind a method to a HTML event, we are able to pass back an event object back to our TypeScript. The syntax is as follows.

```HTML
<button (click)="btnClickHandler($event)">Click Me</button>
```

## S2:32 Directives

Directives are instructions in the DOM. A component is a type of a Directive, a Directive with a Template.

There are three kinds of directives in Angular:

1) Components - directives with a template.
2) Structural directives - change the DOM layout by adding or removing DOM elements.
3) Attribute directives - change the appearance or behavior of an element, component, or another directive.

Example Directive

```TypeScript
@Directive({
    selector: '[exampleDirective]'
})
export class ExampleDirective {
    // code
}
```

Using the Directive

```HTML
<div exampleDirective></div>
```

## S2 L33-34 Using ngif and else

There are different types of Directives in Angular. One such is a Structural Directive. Structural Directives can change the DOM, and allow for logic checks: such as if, else etc.

### ngif

ngif allows us to display or hide an element based on a the boolean evaluation of a property.

```html
<p *ngif="displayContent">Content to display</p>
```

### else & then

Inside of an ngif statement we can also use an else to branch our logic, with only some minor syntax additions.

```html
<p *ngif="displayContent; else errorMessage">Content to display</p>
<ng-template #errorMessage>
    <p>There was an error when requesting content from the server!</p>
</ng-template>
```

to add the else statement, we must terminate the truthy evaluation result with a semicolon then add 'else' along with an id representing the element we will display instead of the truthy element. In the above example the truthy element is not present but __implied__ to be the paragraph where the ngif check lives. If we wanted to be consistent we could write the above example as follows.

```html
<ng-container
*ngif="displayContent; then showContent; else errorMessage">
</ng-container>

<ng-template #showContent>
    <p>Content to display</p>
</ng-template>

<ng-template #errorMessage>
    <p>There was an error when requesting content from the server!</p>
</ng-template>
```

## S2 L35-36 Styling Elements dynamically with ngStyle and ngClass

### ngStyle

ngStyle allows us to set the style of a component dynamically by associating css properties with component methods or fields. The value to be set must be a javascript object with key value pairs.

```html
<p
  [ngStyle]="{backgroundColor: getColor()}"
>{{ 'Server' }} with ID {{ serverId }} is {{ serverStatus }}
</p>
```

### ngClass

like ngStyle we can update the styles associated with a component dynamically using ngClass. But unlike ngStyle, ngClass adds or removes whole css classes from the component, based on a boolean expression. ngClass also accepts a JavaScript Object like ngStyle, where the keys represent css classes instead of css properties.

```html
<p
  [ngClass]="{online: serverStatus === 'online'}"
>{{ 'Server' }} with ID {{ serverId }} is {{ serverStatus }}
</p>
```

## S2 L37 Outputting lists with ngFor

### ngFor

A __structural directive__ that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.

[ngfor docs](https://angular.io/api/common/NgForOf#description)

## S5 L64 Binding to Custom Properties

In this lecture we continued inspecting the TypeScript code and explored how to wire up a custom property from a Parent component to a Child component. The parent component in this case was the root __app.component__ and the child component was __server-element.component__.

The app.component.ts file holds an array of 'serverElements' which are a JS object that hold a: type, name and content properties. In the template file of app.component.html we create a __server-element__ for every item in the __serverElements__ array on the __AppComponent__ Component class.

But in order for a __server-element__ component to gain access to the data in 'serverElements' we must first bind to a property on the __ServerElement__ Component Class. To do the binding we require the __Input__ decorator from __@angular/core__.

```TypeScript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // expose the 'element' property
  @Input() element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
```

> "By default, all properties on a component are private, and are note exposed to any parent components"

### Using an alias when exposing Component properties using @Input decorator

We can give our property an alias when exposing it, through the @Input decorator, by passing the @Input a string argument.

```TypeScript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // give our exposed property an alias
  @Input('propAlias') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
```

## S5 L66 Binding to Custom Events

If we want to expose an event to a parent component, there are a few steps we must take. First we need to create a custom event using Angular's __EventEmitter<>__ class. The EventEmitter is able to emit a custom event and pass data out of the component, however we must also, expose the event using the __@Output__ decorator.

```TypeScript
// inside some component //
@Output() myCustomEventA = new EventEmitter<{someData: string, moreData: number}>();

// another way to define the event.
@Output() someOtherEvent: EventEmitter<{diffData: number, otherData: stirng}> = new EventEmitter();
```

## S5 L67-68 Custom Property And Event Binding

We can communcate between components using the __@Input()__ and __@Output()__ decorators, which works well for __parent-to-child__ communcation. But this method can be cumbersome for __sibling-to-sibling__ communcation. There is another strategy for handling these types of relationships, called: __services__.

We will learn more about using services in Angular later in the course.

## S5 L69-70 Understanding View Encapsulation

Angular enforces style encapsulation, by only allowing styles defined in a component to be applied to that element. This is enforced by applying a unique attribute on all elements of a component and then using the new attribute as a selector in the css being applied.

### Overriding the default encapsulation behavior

The default View Encapsulation behavior can be overriden by declaring the desired behavior in the __@Component()__ definition, using the 'encapsulation' property.

```TypeScript
// ViewEncapsulation must be imported - first.
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('serverElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }
}
```

## S5 L71 Using Local References in Templates & @ViewChild

Elements in our Angular templates can have an identifier given to them, which we can use as a __local reference__. This local reference can be passed to method calls in our template or used as a selector.

When we pass the local reference to a method call, we have full access to the element inside the method. This lookup will occur for every method call that we pass the local reference to, if instead we want to do the lookup before any method call we can use a decorator instead: __ViewChild()__.

ViewChild will grab the local reference of the element at the creation of the component and hold onto it, we need only supply the selector, during the declaration.

## S5 L73 Projecting Content with ng-content

Everything that is placed inside of the opening and closing tag of your Angular Component will be lost by default. To change this behavior we need to embed an __ng-content__ directive inside of the component markup file.

```HTML
<!-- app-server-element component -->
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <ng-content>
        <!-- All markup inside of the app-server-element component will be projected here -->
    </ng-content>
  </div>
</div>
```

## S5 L74 Understanding Component Lifecycle

A component has a lifecycle managed by Angular.

> Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

A directive has the same set of lifecycle hooks.

* __ngOnChanges()__
  * Called after a bound input property changes
  * Called whenever an input value changes
  * Is called the first time before ngOnInit()
* __ngOnInit()__
  * Called once the component is initialized, this runs AFTER the constructor
  * Called after input values are set when a component is initialized.
  * Added to every component by default by the Angular CLI.
  * Called only once.
* __ngDoCheck()__
  * Called during every change detection run. ngDoCheck will run on any event to CHECK if anything has changed.
  * Called during all change detection runs
  * A run through the view by Angular to update/detect changes
* __ngAfterContentInit()__
  * Called after content (ng-content) has been projected into view.
  * Called only once after first ngDoCheck().
  * Called after the first run through of initializing content.
* __ngAfterContentChecked()__
  * Called every time the projected content has been checked.
  * Called after every ngDoCheck()
  * Waits till after ngAfterContentInit() on first run through
* __ngAfterViewInit()__
  * Called after the component's view (and child views) has been initialized.
* __ngAfterViewChecked()__
  * Called every time the view (and child views) have been checked.
  * Called after all the content is initialized and checked. (Component and child components).
  * First call is after ngAfterViewInit()
  * Called after every ngAfterContentChecked() call is completed
* __ngOnDestroy()__
  * Called once the component is about to be destroyed. Useful for clean up.
  * Used to clean up any necessary code when a component is removed from the DOM.
  * Fairly often used to unsubscribe from things like services.
  * Called only once just before component is removed from the DOM.

## S5 L75 Seeing Lifecycle Hooks in Action

We can gain access to life cycle hooks by difining the method hook our component. This in itself is enough, however it is best practice to IMPLEMENT the interface on our component as well. Explicit is better than implicit.

```TypeScript

import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-my-component',
  templateURL: './my-component/my-component.component.html',
  styleURL: ['./my-component/my-component.component.css']
})
export class MyComponent implements OnInit, OnChanges{
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}

```

## S5 L76-77 @ContentChild() decorator

Similar to how we can gain access to an element through the __@ViewChild()__ decorator, we can gain access to an element inside of an __ng-content__ through the __@ContentChild()__ decorator. What is the difference between the two, since they behave similarly?

> @ViewChild == your own child; @ContentChild == someone elses child.

In other words, we should use @ViewChild when binding to a local reference contained in a component's view. Not a component (B) that would be a child of that component (A), which would have it's own seperate view.

And conversely we should use @ContentChild to bind to a reference inside of the content block of some child component. As a reminder, the __Content__ of a component is __PROJECTED INTO__ a 'child component' from a 'parent component'.

[More on the topic - StackOverflow](https://stackoverflow.com/questions/34326745/whats-the-difference-between-viewchild-and-contentchild)

[ViewChildren & ContentChildren in Angular](https://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/)