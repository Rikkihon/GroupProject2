CREATE DATABASE IF NOT EXISTS TaskRecommender_DB;
USE TaskRecommender_DB;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

create table posts (
    post_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    post varchar(255) NOT NULL,
    user varchar(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    updatedAt TIMESTAMP NOT NULL,
    PRIMARY KEY (post_id)
);

create table comments (
    id integer(11) AUTO_INCREMENT NOT NULL,
    user varchar(255) NOT NULL,
    comment varchar(255),
    post_id integer,
    constraint foreign key(post_id) references posts(post_id),
    createdAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    updatedAt TIMESTAMP NOT NULL,
    primary key (id)
);

INSERT INTO posts (post_id, post, user) VALUES ( 1, 'Need babysitter for Thursday Night when I am in class', 'Javan', NOW(), NOW()  );
INSERT INTO posts (post_id, post, user) VALUES (2, 'Need Mechanic for broken dishwasher. Under $50, please ', 'Carl' , NOW(), NOW() );
INSERT INTO posts (post_id, post, user) VALUES (3, 'Need Lawn mowed for about 4 weeks while I am in Florida. Will pay 100 for the month', 'Tina', NOW(), NOW() );

INSERT INTO comments (comment, user, post_id) VALUES ('I will be home on Thursday if you want to have me watch your kid at my house', 'Pat', 1, NOW(),NOW()  );
INSERT INTO comments (comment, user, post_id) VALUES ('I know of a teenager who can do this for you while you are gone. I will get back to you.', 'Ed', 3, NOW(),NOW());
INSERT INTO comments (comment, user, post_id) VALUES ('My friend has a responsible kid who can babysit for you, let me give you her phone number', 'Elana', 1, NOW(),NOW() );
 

