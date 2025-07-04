require("dotenv").config();
const db = require("./db");
const { Campus, Student } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables
  const campuses = await Campus.bulkCreate([
    { name: "Fitterman Hall",
      address: "245 Greenwich St, New York, NY 10007", 
      imageUrl: "https://placehold.co/200x200", 
      description: "Fitterman Hall at BMCC."
     },
    { name: "Main Building", address: "199 Chambers St, New York, NY 10007", 
      imageUrl: "https://placehold.co/200x200", 
      description: "Main Building of Borough of Manhattan Community College." 
    },
  ]);
  const students = await Student.bulkCreate([
    { 
      firstName: "Allan", 
      lastName: "James Lapid", 
      email: "allan@example.com", 
      gpa: 3.8,
      campusId: campuses[0].id 
    },
    { 
      firstName: "Finn", 
      lastName: "Instructor", 
      email: "finn@example.com",
      gpa: 3.9, 
      campusId: campuses[1].id 
    },
  ]);
console.log("Seeded database with campuses");
db.close();
};
seed();
