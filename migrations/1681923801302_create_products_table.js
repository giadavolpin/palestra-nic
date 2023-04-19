module.exports = {
    "up": `CREATE TABLE products (
        id BIGINT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(40) NOT NULL,
        codice VARCHAR(20) NOT NULL,
        prezzo  DECIMAL(6,2) DEFAULT 0,
        PRIMARY KEY (id)
        );`,
    "down": ""
}