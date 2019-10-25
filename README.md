# ScaffoldME

![Version](https://img.shields.io/npm/v/@marceliwac/scaffoldme?color=informational)
![License](https://img.shields.io/github/license/marceliwac/scaffoldme?color=informational)
![Downloads](https://img.shields.io/npm/dt/@marceliwac/scaffoldme)
![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2019-orange)

ScaffoldME is your tool for getting up and running with [Mongoose](https://mongoosejs.com/)
and [Express](https://expressjs.com/) for a REST-ful API.

It provides a basic utility that scaffolds a structure of **models**, **routers** and **controllers**
that simplifies the process of coding out the basic file structure for a sensible API. 

## Installation
The package should be installed globally.

```shell script
npm i -g @marceliwac/scaffoldme
```

## Usage
The package currently allows to initialise the directory structure for new projects, as well
as integrate new model-based endpoints (i.e. routes) with associated controllers by adding a
new model.

#### Initialisation 
To initialise the directory structure in a newly created project, simply type:
```shell script
scaffoldme init
```

> The project directory has to fulfil several criteria for the command to succeed.
> Firstly, the directories for **models**, **routers** and **controllers** should not
> be present in the root path of the directory. Secondly, the index file for the
> directory of routers should not contain an index file.

Upon success, the following directory tree will be created:

```
.                   # Project root
├── controllers     # Controllers handling the endpoint routes
├── models          # Mongoose models
├── routes          # Route endpoint mappings
│   ├── index.js    # Main handler for registering routes 
```

#### Adding models
Once the project directory has been initialised to conform to the package's structure,
the scaffolding for new models can be created by calling the **add** operation.

```shell script
scaffoldme add <ModelName>
```

**The model name has to follow PascalCase convention!**


Running the command with a model name of *SpaceCat* should result in 
the following directory structure:

```
.                               # Project root
├── controllers                 # Controllers handling the endpoint routes
│   ├── SpaceCatController.js   # Controller for the SpaceCat endpoint 
├── models                      # Mongoose models
│   ├── SpaceCat.js             # SpaceCat model
├── routes                      # Route endpoint mappings
│   ├── index.js                # Main handler for registering routes 
│   ├── spaceCatRouter.js       # Routing configuration for SpaceCat endpoint 
```

By default this command creates two endpoints for the created model. The first one
is bound to the default Mongoose `find()` method, and the second one to the 
`findById()` method. These methods are wrapped into functions withing the corresponding
controller (class) file. The bindings for those functions are placed within the
router file for that model and given an endpoint within modified router index file.

The command also creates the file for a model, which by default contains only a single
*name* parameter. This model can be then changed freely and modified to accommodate
for the application's needs. 

> It is important to acknowledge that running the **add** operation results in the
> re-build of the router index file. This uses ALL of the existing files under models
> directory assuming that the corresponding controllers and routes are present.

## Registering routes
To register routes, the index file in `routes/` containing the Router class should
be used. The usage follows a simple pass-through pattern for the main Express app
object, and can be used like so:

```javascript
const express = require('express')
const Router = require('./routes')

const app = express()
Router.registerRoutes(app);
``` 

# Future work
Several issues are planned for the future updates of this module. Following is a 
non-exhaustive list of features planned for development:

- [ ] Help operation (display help)
- [ ] Remove model operation (remove model and associated files)
- [ ] Configuration files for tweaking the naming and behaviour
- [ ] Unit and E2E tests
- [ ] CI/CD - Continuous integration and delivery

# Contributing
If you are interested in the further development of the module, feel free to submit
an issue via [GitHub issues](https://github.com/marceliwac/scaffoldme). It will be
used both for bug tracking and feature development.
