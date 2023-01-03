CREATE TABLE [dbo].[Usuarios] (
    [Id]              INT           IDENTITY (1, 1) NOT NULL,
    [Identificacion]  VARCHAR (15)  NOT NULL,
    [PrimerNombre]    NVARCHAR (50) NOT NULL,
    [SegundoNombre]   NVARCHAR (50) NULL,
    [PrimerApellido]  NVARCHAR (50) NOT NULL,
    [SegundoApellido] NVARCHAR (50) NULL,
    [Telefono]        NVARCHAR (50) NOT NULL,
    [Direccion]       NVARCHAR (50) NOT NULL,
    [Correo]          NVARCHAR (50) NOT NULL,
    [FechaNacimiento] DATETIME      NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([Id] ASC)
);

