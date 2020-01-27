const express = require('express');

const actions = require('../data/helpers/actionModel');
const validateActionsID = require('../middleware/authentication');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  actions
    .get()
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'There was an error retrieve the list of actions'
      })
    );
});

router.get('/:id', validateActionsID, (req, res) => {
  const { id } = req.params;
  actions
    .get(id)
    .then(data => res.status(200).json({ data }))
    .catch(err =>
      res.status(500).json({
        error: 'There is an error in retrieving your actions'
      })
    );
});

router.post('/', (req, res) => {
  actions
    .insert(req.body)
    .then(data => res.status(201).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'Could not add action'
      })
    );
});

router.put('/:id', validateActionsID, (req, res) => {
  const { id } = req.params;
  const { body } = req;
  actions
    .update(id, body)
    .then(data => res.status(201).json(data))
    .catch(err =>
      res.status(500).json({
        error: 'Could not update action'
      })
    );
});

router.delete('/:id', validateActionsID, (req, res) => {
  const { id } = req.params;
  actions
    .remove(id)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.send(204).json({
        error: 'Action could not be deleted'
      })
    );
});

module.exports = router;
