const CONTROLLERS_DIR = './controllers';
const MODELS_DIR = './models';
const ROUTES_DIR = './routes';
const INDEX_FILE = 'index.js';


const CONTROLLERS_INDEX =
    `
module.exports = {

};
`;

const ROUTES_INDEX =
    `
class Router {
    static registerRoutes(app) {
    
    }
}

module.exports = Router;
`;

module.exports = {
    CONTROLLERS_DIR,
    MODELS_DIR,
    ROUTES_DIR,
    INDEX_FILE,
    CONTROLLERS_INDEX,
    ROUTES_INDEX
};