INTRODUCTION
============

Goals
-----

1. Simple, clean and small Ruby on Rails (RoR) clone for nodejs.
2. App hierarchy same as RoR.
3. Same or similar options as RoR. Most options are similar with few
   differences because node.js is specific program. As the matter
   of fact all RoR commands are represented in only one program: "nails".
4. Atm design decision is that node.js is placed behind web proxy server
   like apache/nginx/... Users can generate configuration for apache2
   (nginx route generator not implemented atm). Static pages are placed
   under public/ directory. Only real dependency for web is jQuery.
5. Node is responsible for real time communication.
6. Static pages are layout.
6. Views are responsible for node.js data.
7. Everything is JSON, so views are implemented with json-templates.
8. Core modules: async, json-template-foo, npm, restify, sequelize, wrench.
9. Follow mvc rules (and maybe REST) but not in RoR way because node.js is
   multiprotocol real time platform and design must be changed.

Important: Still in alpha phase, not fully implemented.

INSTALLATION
============

Dependencies
------------

1. node.js: server side javascript platform http://nodejs.org/download/
2. npm: node package manager https://npmjs.org/

You *must* install nodejs before using nails! Download nails:

    git clone git://github.com/popee/nails.git
    cd nails

Installation
------------

Generic installation (not tested):

    make
    PREFIX=/usr make install

Debian installation:

    make deb
    dpkg -i ../nails_0.1_amd64.deb
    make debclean

If you put created package in reposity you can use apt:

    apt-get update
    apt-get install nails

RPM: Not jet implemented.

USAGE
=====

Options
-------
    nails -h
    Usage: nails <new,init,generate,db,install,remove,-f,-d,-h,--help,-v,--version> <options>

    Actions:
        new: create new application
            new
        init: application init
            init
        generate: generate mvc component
            generate <model,view,controller,migration,scaffold,routes> ...
        db: database action
            db
        install: install modules
            install
        remove: uninstall modules
            remove
        -f: force action
            -f
        -d: choose database adapter (mysql,sqlite3,postgres).
            -d
        --help: print help (short -h)
            --help
        --version: print version (short -v)
            --version

Idea is to copy RoR commands with only few differences.
Package is still in alpha phase, so fork, steal, pass, ...
Patches are welcome.

Mysql is default db driver for newly created apps.

Basic workflow 
--------------

Create new nails app:

    nails new test_app0

To specify db driver use -d switch:

    nails new test_app0 -d postgres
    nails new test_app0 -d sqlite3

Enter application directory:

    cd test_app0

Edit main app configuration and include modules you will use.
Please don't touch already included modules:

    vi package.json

Edit database settings:

    vi config/database.json

Initialize app (will handle node modules, other stuff, ...):

    nails init

Edit config/routes.json

    vi config/routes.json

Generate routes for web server:

    nails generate routes apache2

Adjust apache2 (or server you use) based on previous command output.
Restart web server.

Generate migration:

    nails generate migration

You can set migration name:

    nails generate migration add_my_table

Migrations are placed in db/migrate/ in format YYYYMMDDHHmmss-name.js
Set up()/down() migration routines

    vi db/migrate/YYYYMMDDHHmmss-name.js

Start migration

    nails db migrate

Revert:

    nails db rollback

Edit public/index.html and other web files under /public

    vi public/index.html

Start node.js app

    nodejs index.js

Point browser to your virutal host.

HIERARCHY
=========

Directory structure
-------------------

Including most important files:

    root/
        index.js
        package.json
        app/
            models/
            views/
                layouts/
            controllers/
        config/
            database.json
            routes.json
            environments/
            initializers/
            locales/
        db/
            migrate/
        debian/
        doc/
        lib/
        log/
        node_modules/
        public/
            404.html
            index.html
            images/
            javascripts/
            stylesheets/
        script/
        test/
        tmp/

TODO
====

Ufffffff

