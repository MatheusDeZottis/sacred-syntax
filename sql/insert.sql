INSERT INTO pessoa(nome, cpf_cnpj, data_nascimento, sexo, tipo) VALUES
('junior', '11111111', '1999-01-20', 'Masculino', 1),
('Lex', '2222222', '1965-01-20', 'Masculino', 2),
('wesley', '333333', '1985-01-25', 'Masculino', 3),
('wilian', '444444', '1986-06-22', 'Masculino', 4),
('andreia', '555555', '1998-04-28', 'Feminino', 5),
('valeria', '666666', '1998-03-28', 'Feminino', 6),
('Danielli', '777777', '1988-01-04', 'Feminino', 7),
('Murrilo', '8888888', '1999-01-09', 'Masculino', 8),
('Isabela', '9999999', '1999-01-10', 'Feminino', 9),
('Tainara', '10101010', '1984-09-24', 'Feminino', 10),
('Gabrella', '11111110', '2001-07-22', 'Feminino', 11),
('Daniel', '12121212', '2000-01-24', 'Masculino', 12);


INSERT INTO pessoa_fisica (nome, cpf_cnpj, sexo, data_nascimento, tipo) VALUES
('gabriel', '111111', 'Masculino','1996-05-22', 1),
('renata', '22222', 'Feminino','1979-05-13',  2),
('charles', '3333', 'Masculino','1989-05-21',  3),
('pablo', '44444', 'Masculino','1997-05-03',  4),
('wanessa', '55555', 'Feminino', '1994-05-01', 5);

INSERT INTO pessoa_juridica (cpf_cnpj, inscricao_estadual, tipo) VALUES
('11111111', '123456789', 1),
('222222', '987654321', 2),
('33333', '456789123', 3),
('44444', '789123456', 4),
('5555', '321654987', 5);

INSERT INTO pessoal_trabalho (cpf_cnpj, cargo, salario, admissao, tipo) VALUES
('111111', 'Devolps Junior', 3800.00, '2020-12-31', 1),
('222222', 'front end junior', 3200.00, '2020-10-30', 2),
('33333', 'back end junior', 3500.00, '2023-11-23', 3),
('44444', 'full stack senior', 15000.00, '2020-03-20', 4),
('55555', 'analista de dados', 4200.00, '2021-01-08', 5);

INSERT INTO endereco (cep, logradouro, numero, cidade, estado, tipo) VALUES
('111111', 'qd1 lt1', 1, 'morretes', 'PR', 1),
('22222', 'qd2 lt2', 2, 'Curitiba', 'PR', 2),
('33333', 'qd3 lt3', 3, 'Goiânia', 'GO', 3),
('44444', 'qd4 lt4', 4, 'Ilheus', 'BA', 4),
('55555', 'qd5 lt5', 5, 'Itacare', 'BA', 5);


INSERT INTO moradia (cpf_cnpj, codigo_endereco, casa_ap, tipo) VALUES
('111111', 1, 'ap', 1),
('22222', 2, 'casa', 2),
('33333', 3, 'ap', 3),
('44444', 4, 'casa', 4),
('55555', 5, 'ap', 5);


