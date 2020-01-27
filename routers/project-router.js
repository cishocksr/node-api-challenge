const express = require('express');

const project = require('../data/helpers/projectModel');

const validateProjectID = require('../middleware/authentication');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  project
    .get('/')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'No projects exist'
      })
    );
});

router.get('/:id', validateProjectID, (req, res) => {
  const { id } = req.params;
  project
    .get(id)
    .then(data => res.status(200).json({ data }))
    .catch(err =>
      res.status(500).json({
        error: 'No project matches id'
      })
    );
});

router.post('/', (req, res) => {
  project
    .insert(req.body)
    .then(data => res.status(201).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'Could not add project'
      })
    );
});

router.put('/:id', validateProjectID, (req, res) => {
  const { id } = req.params;
  const { body } = req;
  project
    .update(id, body)
    .then(data => res.status(201).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'Could not update project'
      })
    );
});

router.delete('/:id', validateProjectID, (req, res) => {
  const { id } = req.params;
  project
    .remove(id)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.send(204).json({
        error: 'Project could not be deleted'
      })
    );
});

//getProjectActions
router.get('/:id', validateProjectID, (req, res) => {
  const { id } = req.params;
  project
    .getProjectActions(id)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.send({
        error: 'Project Actions not available'
      })
    );
});
module.exports = router;
