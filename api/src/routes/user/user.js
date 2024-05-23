const userService = require('./../../services/user-service');

module.exports = (router) => {
    router.get("/",async (req, res) => {
        const data = userService.list();

        res.status(200).json(data);
    });

    router.get("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = userService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        res.status(200).json(data);
    });

    router.post("/",async (req, res) => {
        const { name, email, password } = req.body;
    
        if (!name || !email || !password) {
            res.status(400).json({
                message: 'Dados inválidos!' 
            });

            return;
        }

        const data = userService.create(req.body);
        
        return res.status(200).json(data);
    });

    router.put("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = userService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        const user = userService.update(id, req.body);
        
        return res.status(200).json(user);
    });

    router.delete("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = userService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        userService.delete(id);
        
        return res.status(200).json({
            message: 'Registro deletado com sucesso!'
        });
    });

    return router;
};