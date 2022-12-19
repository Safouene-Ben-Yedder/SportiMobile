exports.findStudentById = (req, res) => {
  let arr = [
    {
      id: 1,
      firstname: "Mohamed Aziz",
      lastname: "Ben Salem",
      jobtitle: "Student",
      email: "azizbensalem1998@gmail.com",
    },
    {
      id: 2,
      firstname: "Safouene",
      lastname: "Ben Yedder",
      jobtitle: "Student",
      email: "safwene98@gmail.com",
    },
  ];

  let obj = arr.find((o) => o.id == req.params.id);

  res.send(obj);
};
