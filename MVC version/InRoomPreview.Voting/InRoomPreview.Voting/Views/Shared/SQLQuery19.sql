CREATE TABLE Artist (Id INT NOT NULL, FirstName NVARCHAR, LastName NVARCHAR, ImageTitle NVARCHAR, Paintings NVARCHAR)

INSERT INTO Artist (Id,FirstName,LastName,ImageTitle,Paintings)
VALUES ('78956','Andrej','Koromanov','World War II','Mona Lisa','Poseidon')

CREATE TABLE ArtistWorks (WorkId INT NOT NULL, WorkTitle NVARCHAR, PaintingsMade NVARCHAR)

INSERT INTO ArtistWorks (WorkId,WorkTitle,PaintingsMade)
VALUES ('87946','William Shakespeare','World War I','The Cold War','Elizabeth II')

CREATE TABLE ArtistProjects (ProjectId INT NOT NULL, WorkProject NVARCHAR, ProjectsMade NVARCHAR)

INSERT INTO ArtistProjects (ProjectId,WorkProject,ProjectsMade)
VALUES ('78956','The Gulf of Eden','Napoleon Bonaparte','King John II','The Louvre','Richard III')

SELECT * 
FROM Artist
INNER JOIN ArtistProjects ap on Artist.Id = ap.ProjectId
WHERE Id = '78956'

SELECT *
FROM ArtistWorks
INNER JOIN ArtistProjects ap on LEN(ArtistWorks.PaintingsMade) != LEN(ap.ProjectsMade)

SELECT *
FROM ArtistProjects
UPDATE ArtistProjects SET ProjectId = '87946'

SELECT *
FROM Artist
INNER JOIN ArtistWorks ar on LEN(Artist.Paintings) = LEN(ar.PaintingsMade) 

SELECT * 
FROM ArtistProjects
WHERE LEN(ProjectsMade) = 4 
ORDER BY ProjectsMade DESC

SELECT *
FROM ArtistWorks
GROUP BY WorkId
ORDER BY PaintingsMade DESC 

SELECT *
FROM Artist
WHERE LEN(Paintings) = 2
GROUP BY Id
ORDER BY Id ASC

SELECT *
FROM ArtistWorks
WHERE WorkTitle = 'William Shakespeare'
GROUP BY WorkId 
ORDER BY WorkId ASC

SELECT *
FROM Artist
UPDATE Artist SET Id = '87956'