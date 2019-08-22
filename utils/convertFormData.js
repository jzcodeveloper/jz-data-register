exports.convertFormData = body => {
  const studentData = {};
  const parentData = {};
  const representData = {};

  for (const key in body) {
    const [model, field] = key.split(".");

    if (field === "photo") continue;

    if (model === "student") {
      studentData[field] = body[key];
      continue;
    }

    if (model === "parent") {
      parentData[field] = body[key];
      continue;
    }

    if (model === "represent") {
      representData[field] = body[key];
      continue;
    }
  }

  return { studentData, parentData, representData };
};
