1)Execute following table creation query in your database to setup database for running application.

CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL,
 `email` varchar(255) NOT NULL,
 `password` varchar(255) NOT NULL,
  `userType` varchar(255) NOT NULL,
  `city` varchar(255)  NULL,
 `state` varchar(255)  NULL,
 `phone` varchar(255)  NULL,
  `language` varchar(255)  NULL,
  `gender` varchar(255)  NULL,
 `school` varchar(255)  NULL,
 `company` varchar(255)  NULL,
 `about` text  NULL,
 `profilepic` varchar(255)  NULL,
 `created_at` datetime NOT NULL,
 `updated_at` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1

CREATE TABLE `propertylist` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `userid` int(11) NOT NULL,
 `city` varchar(255) NOT NULL,
 `pstate` varchar(255) NOT NULL,
 `street` text NOT NULL,
 `zipcode` varchar(255) NOT NULL,
 `propertyType` varchar(255) NOT NULL,
 `bedroom` varchar(255) NOT NULL,
 `bathroom` varchar(255) NOT NULL,
 `accomodation` varchar(255) NOT NULL,
 `detail` text,
 `amenities` text,
 `amenitiesKitchen` text,
 `amenitiesBathroom` text,
  `availableFrom` varchar(255) NOT NULL,
 `availableTo` varchar(255) NOT NULL,
 `rate` varchar(255) NOT NULL,
 `propertyImage` text,
 `created_at` datetime NOT NULL,
 `updated_at` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1

CREATE TABLE `bookedproperty` (
 `bookingID` int(11) NOT NULL AUTO_INCREMENT,
 `travelerID` int(11) NOT NULL,
 `ownerID` int(11) NOT NULL,
 `propertyid` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
 `arrivalDate` varchar(255) NOT NULL,
 `departureDate` varchar(255) NOT NULL,
  `guests` int(11)  NOT NULL,
  `rate` int(11)  NOT NULL,
 `created_at` datetime NOT NULL,
 `updated_at` datetime NOT NULL,
 PRIMARY KEY (`bookingid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1

2) Change following details in config.js file as per your system
    host: '',
    user: '',
    password: '',
    database: ''

3) To use existing data from database:
   Owner credentails:
   email: bean@gmail.com
   password: 123456

   Traveler credentails:
   email: joey@gmail.com
   password: 123456

4) Open cmd. 
    Route to frontend folder. Then write command: npm install
    To run application: npm start

    Route to backend folder. Then write command: npm install
    To run application: nodemon or index.js

5) Start wamp server and than go to localhost:3000 to run application.

