CREATE DATABASE IF NOT EXISTS TaskRecommender_DB;
USE TaskRecommender_DB;

DROP TABLE IF EXISTS request_needs;
DROP TABLE IF EXISTS comments;

-- create table request_needs (
--     id INTEGER(11) AUTO_INCREMENT NOT NULL,
--     post varchar(255) NOT NULL,
--     user varchar(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- create table comments (
--     id integer(11) AUTO_INCREMENT NOT NULL,
--     user varchar(255) NOT NULL,
--     usercomment varchar(255),
--     primary key (id)
-- );

-- INSERT INTO request_needs ( post, user) VALUES ( 'Need babysitter for Thursday Night when I am in class', 'Javan' );
-- INSERT INTO request_needs ( post, user) VALUES ('Need Mechanic for broken dishwasher. Under $50, please ', 'Carl' );
-- INSERT INTO request_needs ( post, user) VALUES ('Need Lawn mowed for about 4 weeks while I am in Florida. Will pay 100 for the month', 'Tina');

-- INSERT INTO comments (usercomment, user) VALUES ('I will be home on Thursday if you want to have me watch your kid at my house', 'Pat');
-- INSERT INTO comments (usercomment, user) VALUES ('I know of a teenager who can do this for you while you are gone. I will get back to you.', 'Ed');
-- INSERT INTO comments (usercomment, user) VALUES ('My friend has a responsible kid who can babysit for you, let me give you her phone number', 'Elana');
 

 