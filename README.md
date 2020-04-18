# LetsGetitDoneAgain

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server
Clone the Repo `git clone https://github.com/nurdtechie98/LetsGetItDoneAgain.git`

move t directory `cd LetsGetItDoneAgain`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular Pipes (Home Page)
* Inbuilt Pipes : [String](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/home/home.component.html#L6-L9) | [Currency](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/store/store.component.html#L4)
* Custom Pipes : [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/home/home.component.html#L18) | [Src Code](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/reverse-string.pipe.ts)
* Custom Pipes With Args : [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/home/home.component.html#L20) | [Src Code](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/append-string.pipe.ts)
* Custom Piped Using Inbuilt: [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/home/home.component.html#L21) | [Src Code](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/custom-lowercase.pipe.ts) | [Import](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/app.module.ts#L47) 
* Pipe Chaining: [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/9658e19d6174f952d69a29db4870d71729ce04b4/src/app/home/home.component.html#L22)

## Template Driven Form (About Page)
* [Template](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/about/about.component.html)
* [Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/about/about.component.ts)
* [Two-way data bindings](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/about/about.component.html#L4) [Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/about/about.component.ts#L13)
* Validity and StateChange [Example](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/about/about.component.html#L1) | [Example](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/generic-form/generic-form.component.html#L1)
* Handle Submit [Template](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/about/about.component.html#L1) | [Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/e38584637bfc949dbae5857cc49696292c100e89/src/app/about/about.component.ts#L18-L20)

## Custom Directives
* Component Directive [Generic Form Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/generic-form/generic-form.component.ts) | [Generic Form template](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/generic-form/generic-form.component.html) | [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/login/login.component.html)
* Attribut Directive [Directive](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/test-structural-directive.directive.ts) | [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/47ee91c9a7cf08d592a2746286945dd72b06af71/src/app/store/store.component.html#L5)
* Structural Directive [Directive](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/test-structural-directive.directive.ts) | [Usage](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/47ee91c9a7cf08d592a2746286945dd72b06af71/src/app/home/home.component.html#L30)

## Routing
* [Basic](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/47ee91c9a7cf08d592a2746286945dd72b06af71/src/app/app-routing.module.ts#L13-L19)
* [UnknownEndPoint](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/47ee91c9a7cf08d592a2746286945dd72b06af71/src/app/app-routing.module.ts#L20)
* [navigation](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/47ee91c9a7cf08d592a2746286945dd72b06af71/src/app/app.component.html#L314-L319)

## Service 
* [Shopping Service](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/shopping-manager.service.ts)
* [Store Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/tree/master/src/app/store) 
* [Cart Component](https://github.com/nurdtechie98/LetsGetItDoneAgain/tree/master/src/app/cart)

## HTTP Module for integration with [Auth API](https://github.com/nurdtechie98/LetsGetItDone/blob/master/controllers/auth.controller.js)
* [Import Module](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/1783da50ce199fca16125a39f884c42d4a69496d/src/app/app.module.ts#L43)
* [Authentication Service](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/master/src/app/auth.service.ts)
* [login handler](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/1783da50ce199fca16125a39f884c42d4a69496d/src/app/login/login.component.ts#L13-L20)
* [Signup handler](https://github.com/nurdtechie98/LetsGetItDoneAgain/blob/1783da50ce199fca16125a39f884c42d4a69496d/src/app/signup/signup.component.ts#L13-L20)
