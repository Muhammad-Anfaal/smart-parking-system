const Sequelize = require('sequelize');
const config = require('./config/database');
const User = require('./models/User'); // Import your User model
const Car = require('./models/Car'); // Import your Car model
const Subscription =require('./models/Subscription'); // Import your Subscription model
const ParkingArea = require('./models/ParkingArea'); // Import your ParkingArea model
const Admin = require('./models/Admin'); // Import your Admin model
const Feedback = require('./models/Feedback'); // Import your Feedback model
const SelectTime = require('./models/SelectTime'); // Import your SelectTime model
const sequelize = new Sequelize(config);

(async () => {
  try {
    // Sync models with the database
    await User.sync({ alter: true });
    await Car.sync({ alter: true });
    await Subscription.sync({ alter: true });
    await ParkingArea.sync({ alter: true });
    await Admin.sync({ alter: true });
    await Feedback.sync({ alter: true });
    await SelectTime.sync({ alter: true });
    await sequelize.authenticate();

    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();

module.exports = sequelize;



// const Sequelize = require('sequelize');
// const config = require('./config/database');
// const User = require('./models/User'); // Import your User model
// const Car = require('./models/Car'); // Import your Car model

// const sequelize = new Sequelize(config);

// (async () => {
//   try {
//     // Define associations between models
//     User.hasMany(Car); // A user can have multiple cars
//     Car.belongsTo(User); // A car belongs to a user

//     // Sync models with the database
//     await sequelize.sync({ alter: true });
    
//     console.log('Tables synchronized successfully.');
//   } catch (error) {
//     console.error('Error synchronizing tables:', error);
//     process.exit(1);
//   }
// })();

// module.exports = sequelize;
