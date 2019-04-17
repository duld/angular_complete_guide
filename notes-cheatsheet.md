# Cheatsheet

## Two Way Data Binding

We need to enable the 'ngModel' directive. This is done by including the 'FormsModule' to the imports[] in AppModule. Then we must import the __@angular/forms__ in the app.module.ts file.

```TypeScript
// Import FormsModule from @angular/forms
import { FormsModule } from '@angular/forms';
```

Then to use in our template.

```html
<!-- add two way databinding to element -->
<input
  type="text"
  [(ngModel)]="someAttribute">
<p>{{someAttribute}}</p>
```

### Syntax

It is important to note that two way databinding uses square brackets with parenthesis, and inside the parenthesis a __directive__. In the above example the __directive__ being used is __ngModel__.

## Model Classes

A Model is an ecapsulation of the data that is consumed by the application. I imagine that a model contains all the relevent information recieved from an API request, say, and any methods that would be desireable to interact with that data.