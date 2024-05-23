const taskService = require('./../../services/task-service');

module.exports = (router) => {
    router.get("/",async (req, res) => {
        const data = taskService.list();

        res.status(200).json(data);
    });

    router.get("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = taskService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        res.status(200).json(data);
    });

    router.post("/",async (req, res) => {
        const { description, userId, completed } = req.body;
    
        if (!description || !userId) {
            res.status(400).json({
                message: 'Dados inválidos!' 
            });

            return;
        }

        const data = taskService.create(req.body);
        
        return res.status(200).json(data);
    });

    router.put("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = taskService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        const task = taskService.update(id, req.body);
        
        return res.status(200).json(task);
    });

    router.delete("/:id",async (req, res) => {
        const id = req.params.id || 0;
        const data = taskService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        taskService.delete(id);
        
        return res.status(200).json({
            message: 'Registro deletado com sucesso!'
        });
    });

    router.patch("/:id/toogle-completed",async (req, res) => {
        const id = req.params.id || 0;
        const data = taskService.getById(id);

        if (!data) {
            res.status(404).json({
                message: 'Registro não encontrado'
            });

            return;
        }

        const task = taskService.toogleCompleted(id);
        
        return res.status(200).json(task);
    });

    return router;
};