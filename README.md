angular-bootstrap-seed
======================

This is my seed project for AngularJS apps with Bootstrap

### How to setup env

git clone https://github.com/valkirilov/angular-bootstrap-seed.git

### How to run server

Because of the problems with cross-origins on localhost you have to put your app on a server or just run simpple HTTP server on your machine. Run web-server.js placed in the scripts folder from the root of the project. Then navigate your browser to **http://localhost:<port>/app/index.html** to see the app running in your browser.

    user@machine:~/Documents/Dev/angular-bootstrap-seed: nodejs scripts/web-server.js PORT
    
### How to enable internationalization

In this project is included angular-gettext module. To specify which strings have to be translated you just have to put ``translate`` attribute to this element. Here is a simple example:

    <h1 translate>This is translatable heading</h1
    
Then you have to use Grunt to export and compile your strings. Once ecported you have to edit .pot file inside /app/po/ folder and sva there your .po files. To export and compile them just use ``grunt`` command

    user@machine:~/Documents/Dev/angular-bootstrap-seed: grunt

### How to setup template with Angular

Bootstrap templates are stored in app/templates and when you want to use one of the just get it's content and copy it in app/index-templated.html in the body. Some of the templates has additional stylesheets and you have to add it in the head part (they are named the same way as the template is).

#### Available templates with connected Bootsrap and Angular
- Basic [repo](https://github.com/valkirilov/angular-bootstrap-seed/blob/master/app/templates/template-basic.html)
- Cover [repo](https://github.com/valkirilov/angular-bootstrap-seed/blob/master/app/templates/template-cover.html)
- all are supported but I am lazy to add them here in the README
    
