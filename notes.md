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

## S2:14-18 Creating a new Angular Component

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

## S2:19 - Using an Inline Template over an external Template File

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