CREATE DATABASE IF NOT EXISTS `catalog`;

USE `catalog`;

CREATE TABLE IF NOT EXISTS discs (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(200) NOT NULL,
    artist varchar(100) DEFAULT NULL,
    year smallint(4) NOT NULL,
    tracks smallint(11) NOT NULL, 
    gender varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('One', 'Metalica', 2011, 12, 'Rock');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Resolution', 'Andy Timons', 2015, 12, 'Rock');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('MTV Ao Vivo', 'Barão Vermelho', 2012, 12, 'Rock');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Magic', 'Bruno Mars', 2015, 12, 'Pop');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Feriado', 'Celso Fonseca', 2010, 12, 'MPB');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Just Me', 'Brian Mcknight', 2009, 10, 'R&B');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('O Sambista', 'Chico Buarque', 1998, 12, 'MPB');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Nó na Orelha', 'Criolo', 1998, 12, 'MPB');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Live in Paris', 'Diana Krall', 2001, 12, 'Jazz');
INSERT INTO discs (name, artist, year, tracks, gender) VALUES ('Vidas Pra Contar', 'Djavan', 2015, 12, 'MPB');