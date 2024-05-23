const userService = require('./../../services/user-service');

module.exports = (router) => {
    router.post("/",async (req, res) => {
        const { email, password } = req.body

        const data = userService.validateLogin(email, password);

        if (!data) {
            res.status(401).json({
                message: 'Credenciais inválidas!' 
            });
            
            return;
        }

        res.status(200).json(data);
    });

    return router;
};