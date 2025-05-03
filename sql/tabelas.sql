CREATE TABLE IF NOT EXISTS pessoa (
  nome VARCHAR(150) NOT NULL,
  cpf_cnpj VARCHAR(15) NOT NULL,
  data_nascimento TIMESTAMP NOT NULL,
  sexo VARCHAR(15) NOT NULL,
  tipo NUMERIC(2) DEFAULT 1,
  PRIMARY KEY (cpf_cnpj)
);

CREATE TABLE IF NOT EXISTS pessoa_fisica (
  nome VARCHAR(150) NOT NULL,
  cpf_cnpj VARCHAR(15) NOT NULL,
  data_nascimento TIMESTAMP,
  sexo VARCHAR(10),
  tipo NUMERIC(2) DEFAULT 1,
  PRIMARY KEY (cpf_cnpj),
  FOREIGN KEY (cpf_cnpj) REFERENCES pessoa(cpf_cnpj)
);

CREATE TABLE IF NOT EXISTS pessoa_juridica (
  cpf_cnpj VARCHAR(15) NOT NULL,
  inscricao_estadual VARCHAR(20),
  tipo NUMERIC(2) DEFAULT 1,
  PRIMARY KEY (cpf_cnpj),
  FOREIGN KEY (cpf_cnpj) REFERENCES pessoa(cpf_cnpj)
);

CREATE TABLE IF NOT EXISTS pessoal_trabalho (
  cpf_cnpj VARCHAR(15) NOT NULL,
  cargo VARCHAR(50),
  salario FLOAT,
  admissao TIMESTAMP,
  tipo NUMERIC(2) DEFAULT 1,
  PRIMARY KEY (cpf_cnpj),
  FOREIGN KEY (cpf_cnpj) REFERENCES pessoa(cpf_cnpj)
);

CREATE TABLE IF NOT EXISTS endereco (
  cep VARCHAR(10) NOT NULL,
  logradouro VARCHAR(100) NOT NULL,
  numero INT NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  tipo NUMERIC(2) DEFAULT 1
);

CREATE TABLE IF NOT EXISTS moradia (
  cpf_cnpj VARCHAR(15) NOT NULL,
  codigo_endereco INT NOT NULL,
  casa_ap VARCHAR(10) NOT NULL,
  tipo NUMERIC(2) DEFAULT 1,
  PRIMARY KEY (cpf_cnpj),
  FOREIGN KEY (cpf_cnpj) REFERENCES pessoa(cpf_cnpj),
  FOREIGN KEY (codigo_endereco) REFERENCES endereco(codigo)
);

