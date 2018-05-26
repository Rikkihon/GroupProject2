CREATE DATABASE IF NOT EXISTS TaskRecommender_DB;
USE TaskRecommender_DB;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

create table posts (
    post_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    post varchar(255) NOT NULL,
    user varchar(255) NOT NULL,
    createdAt TIMESTAMP,
   updatedAt TIMESTAMP,
    PRIMARY KEY (post_id)
);

create table comments (
    id integer(11) AUTO_INCREMENT NOT NULL,
    user varchar(255) NOT NULL,
    comment varchar(255),
    post_id integer,
    constraint foreign key(post_id) references posts(post_id),
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    primary key (id)
);
