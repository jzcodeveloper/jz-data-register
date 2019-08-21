const { writeFile, unlink, readdir } = require("fs").promises;
const { join } = require("path");

const Student = require("../models/Student");
const Parent = require("../models/Parent");
const Represent = require("../models/Represent");

const filePath = join(__dirname, "../assets/studentPhotos/");
const domainURL = `https://jz-data-register.herokuapp.com/api/students/getPhoto/`;

exports.create = async (req, res) => {
  try {
    const { body, file } = req;

    const student = await Student.findOne({ name: body.name });
    if (student) {
      res.status(400).json({ message: "This student already exists" });
    } else {
      //Create an base64 image from Buffer
      const photo =
        file && file.buffer ? Buffer.from(file.buffer).toString("base64") : "";

      const newStudent = new Student({
        photo: "",
        name: body.name,
        identification: body.identification,
        sex: body.sex,
        birthday: body.birthday,
        birthdayPlace: body.birthdayPlace,
        municipality: body.municipality,
        country: body.country,
        age: body.age,
        weight: body.weight,
        height: body.height,
        shirtSize: body.shirtSize,
        pantSize: body.pantSize,
        shoeSize: body.shoeSize,
        liveWithParents: body.liveWithParents,
        direction: body.direction,
        phoneNumber: body.phoneNumber,
        impedimentToSports: body.impedimentToSports,
        alergicTo: body.alergicTo,

        represent: new Represent({
          name: body.representName,
          sex: body.representSex,
          identification: body.representID,
          birthday: body.representBirthday,
          age: body.representAge,
          civilState: body.representCivilState,
          ocupation: body.representOcupation,
          company: body.representCompany,
          direction: body.representDirection,
          phoneNumber1: body.representPhoneNumber1,
          phoneNumber2: body.representPhoneNumber2
        }),

        parent: new Parent({
          name: body.parentName,
          sex: body.parentSex,
          identification: body.parentIdentification,
          birthday: body.parentBirthday,
          company: body.parentCompany,
          civilState: body.parentCivilState,
          ocupation: body.parentOcupation,
          direction: body.parentDirection,
          phoneNumber1: body.parentPhoneNumber1,
          phoneNumber2: body.parentPhoneNumber2,
          liveWithKid: body.liveWithKid
        })
      });

      if (photo) {
        const fileName = newStudent._id.toString();
        const fileExt = file.originalname.split(".")[1].toLowerCase();
        const path = `${filePath}${fileName}.${fileExt}`;

        await writeFile(path, photo, "base64");

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
    res.sendFile(join(__dirname, `../assets/studentPhotos/${fileName}`));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { body, file, params } = req;
    const { id } = params;

    const student = await Student.findByIdAndUpdate(id, body, {
      new: true
    });

    if (!student) {
      res.status(404).json({ message: "This student does not exist" });
    } else {
      //Create an base64 image from Buffer
      const photo =
        file && file.buffer ? Buffer.from(file.buffer).toString("base64") : "";

      //Represent data
      student.represent.name = body.representName;
      student.represent.sex = body.representSex;
      student.represent.identification = body.representID;
      student.represent.birthday = body.representBirthday;
      student.represent.age = body.representAge;
      student.represent.civilState = body.representCivilState;
      student.represent.ocupation = body.representOcupation;
      student.represent.company = body.representCompany;
      student.represent.direction = body.representDirection;
      student.represent.phoneNumber1 = body.representPhoneNumber1;
      student.represent.phoneNumber2 = body.representPhoneNumber2;

      //parent data
      student.parent.name = body.parentName;
      student.parent.sex = body.parentSex;
      student.parent.identification = body.parentIdentification;
      student.parent.birthday = body.parentBirthday;
      student.parent.company = body.parentCompany;
      student.parent.civilState = body.parentCivilState;
      student.parent.ocupation = body.parentOcupation;
      student.parent.direction = body.parentDirection;
      student.parent.phoneNumber1 = body.parentPhoneNumber1;
      student.parent.phoneNumber2 = body.parentPhoneNumber2;
      student.parent.liveWithKid = body.liveWithKid;

      if (photo) {
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
                await writeFile(path, photo, "base64");
              } else {
                await unlink(`${filePath}${files[i]}`);
                await writeFile(path, photo, "base64");
              }

              break;
            }

            if (i === files.length - 1 && fileName !== fileName2) {
              await writeFile(path, photo, "base64");
            }
          }
        } else {
          await writeFile(path, photo, "base64");
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
