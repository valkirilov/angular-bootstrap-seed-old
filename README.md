angular-bootstrap-seed
======================

This is my seed project for AngularJS apps with Bootstrap

### How to run server

Run web-server.js placed in the scripts folder from the root of the project. Then navigate your browser to **http://localhost:<port>/app/index.html** to see the app running in your browser.

    user@machine:~/Documents/Dev/angular-bootstrap-seed: nodejs scripts/web-server.js PORT
    
### How to setup template with Angular

Bootstrap templates are stored in app/templates and when you want to use one of the just get it's content and copy it in app/index-templated.html in the body. Some of the templates has additional stylesheets and you have to add it in the head part (they are named the same way as the template is).

#### Available templates with connected Bootsrap and Angular
- Basic [repo](https://github.com/valkirilov/angular-bootstrap-seed/blob/master/app/templates/template-basic.html)
- Cover [repo](https://github.com/valkirilov/angular-bootstrap-seed/blob/master/app/templates/template-cover.html)
    
