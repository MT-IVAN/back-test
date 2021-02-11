const { Router } = require('express');

module.exports = function({HomeController}){
    const router = Router();
    //homeContoller scope will be kept instead of express scope
    //then we can access our service
    router.get('/', HomeController.index);

    return router;
}
