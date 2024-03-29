const { writeFile, unlink, readdir } = require("fs").promises;
const { join } = require("path");
const { convertFormData } = require("../utils/convertFormData");

const Student = require("../models/Student");
const Parent = require("../models/Parent");
const Represent = require("../models/Represent");

const config = require("config");
const filePath = join(__dirname, "../uploads/studentPhotos/");
const domainURL = `${config.get("baseURL")}/students/getPhoto/`;

exports.create = async (req, res) => {
  try {
    const { body, file } = req;

    const { studentData, parentData, representData } = convertFormData(body);

    const student = await Student.findOne({ name: studentData.name });
    if (student) {
      res.status(400).json({ message: "This student already exists" });
    } else {
      const { buffer } = file || {};

      const newStudent = new Student({
        photo: "",
        ...studentData,
        parent: new Parent({ ...parentData }),
        represent: new Represent({ ...representData })
      });

      if (buffer) {
        const fileName = newStudent._id.toString();
        const fileExt = file.originalname.split(".")[1].toLowerCase();
        const path = `${filePath}${fileName}.${fileExt}`;

        await writeFile(path, buffer, "binary");

        // https://jz-data-register.herokuapp.com/api/studentPhoto/:fileName
        newStudent.photo = `${domainURL}${fileName}.${fileExt}`;
      }

      res.json(await newStudent.save());
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.get = async (req, res) => {
  try {
    const { name } = req.params;

    const student = await Student.findOne({ name });

    if (!student) {
      res.status(404).json({ message: "This student does not exist" });
    } else {
      res.json(student);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { name = "" } = req.params;

    const regexp = new RegExp(name, "i");

    const students = await Student.find({ name: regexp }).sort({ name: -1 });

    if (!students) {
      res.status(404).json({ message: "There are no students stored" });
    } else {
      res.json(students);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getPhoto = async (req, res) => {
  try {
    const { fileName } = req.params;
    res.sendFile(join(filePath, fileName));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { body, file, params } = req;
    const { id } = params;

    const { studentData, parentData, representData } = convertFormData(body);

    const student = await Student.findByIdAndUpdate(id, studentData, {
      new: true
    });

    if (!student) {
      res.status(404).json({ message: "This student does not exist" });
    } else {
      //Create an base64 image from Buffer
      const { buffer } = file || {};

      // Updating parent's data
      student.parent = { ...parentData };
      // Updating representative's data
      student.represent = { ...representData };

      if (buffer) {
        const files = await readdir(filePath);
        // Name of the image that will be uploaded
        const fileName = student._id.toString();
        // Extension of the image that will be uploaded
        const fileExt = file.originalname.split(".")[1].toLowerCase();
        // Final path to remove or create files in the directory
        const path = `${filePath}${fileName}.${fileExt}`;

        if (files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            // Name and extension of the image in the directory
            const [fileName2, fileExt2] = files[i].split(".");

            if (fileName === fileName2) {
              if (fileExt === fileExt2) {
                await writeFile(path, buffer, "base64");
              } else {
                await unlink(`${filePath}${files[i]}`);
                await writeFile(path, buffer, "base64");
              }

              break;
            }

            if (i === files.length - 1 && fileName !== fileName2) {
              await writeFile(path, buffer, "base64");
            }
          }
        } else {
          await writeFile(path, buffer, "base64");
        }

        // https://jz-data-register.herokuapp.com/api/studentPhoto/:fileName
        student.photo = `${domainURL}${fileName}.${fileExt}`;
      }

      res.json(await student.save());
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      res.status(404).json({ message: "This student does not exist" });
    } else {
      const files = await readdir(filePath);
      // Name of the image to be compared
      const fileName = student._id.toString();

      for (let i = 0; i < files.length; i++) {
        // Name of the image in the directory
        const [fileName2] = files[i].split(".");

        if (fileName === fileName2) {
          await unlink(`${filePath}${files[i]}`);

          break;
        }
      }

      res.json(student);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
