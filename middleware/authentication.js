const projects = require('../data/helpers/projectModel');
const actions = require('../data/helpers/actionModel');

function validateProjectID(req, res, next) {
  const { id } = req.params;
  projects
    .get(id)
    .then(data => {
      if (data) {
        req.data = data;
        next();
      } else {
        res.status(404).json({
          error: 'ID does not exist'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function validateActionsID(req, res, next) {
  const { id } = req.params;
  actions.get(id).then(data => {
    if (data) {
      req.data = data;
      next();
    } else {
      res.staus(404).json({
        error: 'ID does not exist'
      });
    }
  });
}

(module.exports = validateActionsID), validateProjectID;
