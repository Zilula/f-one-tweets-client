


const KEYS = {}


switch (process.env) {
    case 'prod':
        KEYS.SERVER_URL = 'ws://f-one-tweets-server.herokuapp.com/'
        break;

    default:
            KEYS.SERVER_URL = 'ws://localhost:7890'

        break;
}


export default KEYS