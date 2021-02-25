DROP DATABASE IF EXISTS fishy_db; 
CREATE DATABASE fishy_db; 
USE fishy_db; 

-- Creazione tabella per gestire i giocatori
DROP TABLE IF EXISTS `Player`;
CREATE TABLE `Player` (
    `UserId` int(11) NOT NULL AUTO_INCREMENT, 
    `Nickname` varchar(20) NOT NULL,
    `Password` varchar(100) NOT NULL,
    `Highscore` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (`UserId`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Popolamento della tabella Player
LOCK TABLES `Player` WRITE;
INSERT INTO `Player` VALUES (1,'Diego','die',1486), (2,'coso','coso',3580), (3,'Elwen','paolo',3579), (4,'Thar','alessandro',3560);
UNLOCK TABLES;


-- Creazione tabella per la gestione delle partite
DROP TABLE IF EXISTS `Game`;
CREATE TABLE `Game` (
  `GameId` int(11) NOT NULL AUTO_INCREMENT,
  `Player` varchar(100) NOT NULL,
  `Score` int(11) DEFAULT NULL,
  `Time` int(11) DEFAULT NULL,
  `Win` int(5) DEFAULT NULL,
  `EatenFishes` int(11) DEFAULT NULL,
  PRIMARY KEY (`GameId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Popolamento della tabella Game
LOCK TABLES `Game` WRITE;
INSERT INTO `Game` VALUES (1,'Diego', 0, 5, 0, 0), (2, 'coso', 50, 40, 0, 56), (3, 'coso', 55, 40, 0, 67), (4, 'Elwen', 10, 40, 0, 8), (5, 'Thar', 180, 40, 0, 26), (6, 'Elwen', 100, 58, 0, 39), (7,'Elwen', 210, 162, 1, 81), (8,'coso', 110, 172, 1, 86), (9,'Thar', 160, 168, 1, 84), (10,'Elwen', 160, 167, 1, 90) ;
UNLOCK TABLES;
