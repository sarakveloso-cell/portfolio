CREATE DATABASE cadastrobossanova;
USE cadastrobossanova;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (usuario, senha) VALUES
('sara@senai', '123'),
('admin@senai2', '123'),
('professor@email', '123');

SELECT * FROM usuarios;