CREATE TABLE cakes (
	id SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR(40) UNIQUE NOT NULL,
    "price" NUMERIC(10,2) NOT NULL,
	"image" VARCHAR NOT NULL,
    "description" TEXT
);

CREATE TABLE clients (
    id SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(254),
    "phone" VARCHAR(11)
);

CREATE TABLE orders (
    id SERIAL NOT NULL PRIMARY KEY,
    "clientId" INTEGER NOT NULL REFERENCES clients(id),
    "cakeId" INTEGER NOT NULL REFERENCES cakes(id),
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "totalPrice" NUMERIC(15,2) NOT NULL
);