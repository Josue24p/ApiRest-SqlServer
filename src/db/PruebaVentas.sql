CREATE DATABASE VENTAS
ON
(NAME=VENTAS, --Nombre del archivo con la terminación data
FILENAME='C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Ventas.mdf', --Ruta y nombre REAL del archivo con la extensión
SIZE=5, --Tamaño INICIAL de la Base de datos
MAXSIZE=10, --Tamaño MÁXIMO de la Base de datos
FILEGROWTH=1) --Tamaño o la proporción en la que crecerá el archivo principal
GO

USE VENTAS


--CREACIÓN DE TABLAS

CREATE TABLE CLIENTES(
IdCliente int NOT NULL,
NroDocumento varchar(50) NOT NULL,
ApellidosNombres varchar(255)NOT NULL,
FechaHoraRegistro datetime NOT NULL,
Constraint key_cliente primary key (IdCliente),
);

CREATE TABLE VENTAHEADER(
IdVentaH int NOT NULL,
SerieNumero varchar(50) not null,
FechaHora datetime NOT NULL,
IdCliente int not null,
Subtotal decimal(10,2) NOT NULL,
IGV decimal(10,2) NOT NULL,
Total decimal(10,2) NOT NULL,
Constraint key_ventah primary key(IdVentaH),
Constraint fkey_ventah foreign key(IdCliente) references CLIENTES(IdCliente)
);

CREATE TABLE VENTADETAILS(
IdVentaD int NOT NULL,
IdVentaH int NOT NULL,
Linea int not null,
Codigo varchar(50) not null,
Descripcion varchar(50) not null,
Total decimal(10,2) not null,
Constraint key_ventad primary key (IdVentaD),
Constraint fkey_ventad foreign key (IdVentaH) references VENTAHEADER(IdVentaH)
);

--Insertar valores para la tabla Clientes

INSERT INTO CLIENTES (NroDocumento,ApellidosNombres,FechaHoraRegistro)
VALUES('74576072','Poza Perez Josue Anthony',GETDATE())
INSERT INTO CLIENTES (NroDocumento,ApellidosNombres,FechaHoraRegistro)
VALUES('75124564','Lopez Cordova Sebastian Lucas',GETDATE())
INSERT INTO CLIENTES (NroDocumento,ApellidosNombres,FechaHoraRegistro)
VALUES('84576142','Flores Peña Christopher Alexander',GETDATE())
INSERT INTO CLIENTES (NroDocumento,ApellidosNombres,FechaHoraRegistro)
VALUES('87574074','Poza Flores Jacinto',GETDATE())
INSERT INTO CLIENTES (NroDocumento,ApellidosNombres,FechaHoraRegistro)
VALUES('12345678','Poza Flores Jacinto',GETDATE())

SELECT * FROM CLIENTES

--Insertar valores para la tabla VentaHeader

INSERT INTO VENTAHEADER(SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total)
VALUES('A001-0001',GETDATE(),1,100,18.00,118.00)
INSERT INTO VENTAHEADER(SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total)
VALUES('A001-0002',GETDATE(),2,120,21.60,141.60)
INSERT INTO VENTAHEADER(SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total)
VALUES('A001-0003',GETDATE(),3,150,27.00,177.00)
INSERT INTO VENTAHEADER(SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total)
VALUES('A001-0004',GETDATE(),4,80,14.40,94.40)

SELECT * FROM VENTAHEADER

--Insertar valores para la tabla VentaDetails

INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(1,1,'COD001','Descripción del Producto 1',50)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(1,2,'COD002','Descripción del Producto 2',50)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(2,1,'COD003','Descripción del Producto 3',60)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(2,2,'COD004','Descripción del Producto 4',60)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(3,1,'COD005','Descripción del Producto 5',70)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(3,2,'COD006','Descripción del Producto 6',80)
INSERT INTO VENTADETAILS(IdVentaH,Linea,Codigo,Descripcion,Total)
VALUES(4,1,'COD007','Descripción del Producto 7',80)



SELECT * FROM VENTADETAILS
SELECT * FROM VENTAHEADER
SELECT * FROM CLIENTES
delete from CLIENTES where IdCliente=17
select GETDATE()
DBCC CHECKIDENT (CLIENTES, RESEED,13) --resetea el autoincrement
SELECT CLIENTES.IdCliente,CLIENTES.ApellidosNombres, CLIENTES.NroDocumento, CLIENTES.FechaHoraRegistro, VENTAHEADER.SerieNumero,
VENTAHEADER.FechaHora, VENTAHEADER.Subtotal, VENTAHEADER.IGV,VENTAHEADER.Total FROM CLIENTES 
INNER JOIN VENTAHEADER ON VENTAHEADER.IdCliente= CLIENTES.IdCliente
