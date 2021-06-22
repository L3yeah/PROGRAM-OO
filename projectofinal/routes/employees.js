const router = require("express").Router();
const {getEmployees, getEmployeesById,createEmployees,delEmployees} = require("../controllers/employees");


router.route("/employees")
.get(getEmployees)
.post(createEmployees)

router.route("/employees/:id")
.get(getEmployeesById)
.delete(delEmployees)

module.exports = router;