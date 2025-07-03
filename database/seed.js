const db = require("./db");
const { Campus, Student } = require("./index");

const seed = async () => {
  try {
    await db.sync({ force: true });

    // Create DuckTales campuses
    const campuses = await Campus.bulkCreate([
      {
        name: "Duckburg University",
        address: "1 Money Bin Blvd, Duckburg",
        imageUrl: "https://via.placeholder.com/350x150?text=Duckburg+U",
        description: "Where the brightest ducks in town go to soar.",
      },
      {
        name: "St. Canard Institute of Technology",
        address: "404 Shadow Lane, St. Canard",
        imageUrl: "https://via.placeholder.com/350x150?text=St.+Canard+Tech",
        description: "Home of daring science... and darker heroes.",
      },
    ]);

    // Create DuckTales students
    const students = await Student.bulkCreate([
      {
        firstName: "Huey",
        lastName: "Duck",
        email: "huey@duckmail.com",
        imageUrl: "https://via.placeholder.com/150?text=Huey",
        gpa: 3.8,
        campusId: campuses[0].id,
      },
      {
        firstName: "Dewey",
        lastName: "Duck",
        email: "dewey@duckmail.com",
        imageUrl: "https://via.placeholder.com/150?text=Dewey",
        gpa: 3.6,
        campusId: campuses[0].id,
      },
      {
        firstName: "Louie",
        lastName: "Duck",
        email: "louie@duckmail.com",
        imageUrl: "https://via.placeholder.com/150?text=Louie",
        gpa: 3.4,
        campusId: campuses[0].id,
      },
      {
        firstName: "Webby",
        lastName: "Vanderquack",
        email: "webby@duckmail.com",
        imageUrl: "https://via.placeholder.com/150?text=Webby",
        gpa: 4.0,
        campusId: campuses[1].id,
      },
      {
        firstName: "Gosalyn",
        lastName: "Mallard",
        email: "gosalyn@duckmail.com",
        imageUrl: "https://via.placeholder.com/150?text=Gosalyn",
        gpa: 3.9,
        campusId: campuses[1].id,
      },
    ]);

    console.log(`🦆 Seeded ${campuses.length} DuckTales campuses`);
    console.log(`🎓 Seeded ${students.length} DuckTales students`);
    console.log("🌱 Seeding complete");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await db.close();
  }
};

seed();
