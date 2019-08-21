const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const upload = require("../config/multer");

const Student = require("../controllers/StudentController");

router.post("/create", auth, upload.single("photo"), (req, res) => {
  Student.create(req, res);
});

router.get("/get/:name", auth, (req, res) => {
  Student.get(req, res);
});

router.get("/getAll", auth, (req, res) => {
  Student.getAll(req, res);
});

router.get("/getAll/:name", auth, (req, res) => {
  Student.getAll(req, res);
});

router.get("/getPhoto/:fileName", (req, res) => {
  Student.getPhoto(req, res);
});

router.put("/update/:id", auth, upload.single("photo"), (req, res) => {
  Student.update(req, res);
});

router.delete("/delete/:id", auth, (req, res) => {
  Student.delete(req, res);
});

module.exports = router;
