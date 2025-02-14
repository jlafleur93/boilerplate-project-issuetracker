"use strict";

const bodyParser = require("body-parser");

// Create an issue with every field: POST request to /api/issues/{project}
// Create an issue with only required fields: POST request to /api/issues/{project}
// Create an issue with missing required fields: POST request to /api/issues/{project}
// View issues on a project: GET request to /api/issues/{project}
// View issues on a project with one filter: GET request to /api/issues/{project}
// View issues on a project with multiple filters: GET request to /api/issues/{project}

// Delete an issue: DELETE request to /api/issues/{project}
// Delete an issue with an invalid _id: DELETE request to /api/issues/{project}
// Delete an issue with missing _id: DELETE request to /api/issues/{project}
module.exports = function (app) {
  let retObj = {};
  let obj = []
  
  function generateRandomString() {
    let randomString = "";
    for (let i = 0; i <= 6; i++) {
      randomString += Math.round(Math.random() * 10);
    }
    return randomString;
  }
  app
    .route("/api/issues/:project")

    .get(function (req, res) {
      let project = req.params.project;
      const _id = req.params._id;
      obj[project]
      console.log(obj[project])
      res.json( obj );
    })

    .post(function (req, res) {
      let project = req.params.project;
      
      const issue_title = req.body.issue_title;
      const issue_text = req.body.issue_text;
      const assigned_to = req.body.assigned_to;
      const created_by = req.body.created_by;
      const status_text = req.body.status_text;
      
      const _id = generateRandomString();
      project = {
        issue_title,
        issue_text,
        assigned_to,
        created_by,
        status_text,
        _id,
        open : true,
      };
      retObj = project;
      obj.push(project)
      console.log(project, obj)
      res.json(obj);
    })

    .put(function (req, res) {
      let project = req.params.project;
    })

    .delete(function (req, res) {
      let project = req.params.project;
    });
};
