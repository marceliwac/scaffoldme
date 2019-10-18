const CONTROLLERS_DIR = './controllers';
const MODELS_DIR = './models';
const ROUTES_DIR = './routes';
const INDEX_FILE = 'index.js';
const IMPORT_ROUTES_PATTERN = '//__ROUTES_IMPORT__';
const REGISTER_ROUTES_PATTERN = '//__ROUTES_REGISTER__';
const SCAFFOLD_MODEL_PATTERN = '//__MODEL_SCAFFOLD__';

const ROUTES_INDEX =
`${IMPORT_ROUTES_PATTERN}
// THIS FILE WILL BE OVERWRITTEN AUTOMATICALLY WHEN YOU CALL 'scaffoldme'!
// ALTER IT ONLY IF YOU KNOW WHAT YOU ARE DOING!

class Router {
    static registerRoutes(app) {
        ${REGISTER_ROUTES_PATTERN}
    }
}

module.exports = Router;
`;

module.exports = {
    CONTROLLERS_DIR,
    MODELS_DIR,
    ROUTES_DIR,
    INDEX_FILE,
    ROUTES_INDEX,
    IMPORT_ROUTES_PATTERN,
    REGISTER_ROUTES_PATTERN,
    SCAFFOLD_MODEL_PATTERN
};