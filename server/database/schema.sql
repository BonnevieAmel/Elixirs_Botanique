CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plantsName VARCHAR(255) ,
  scientificName VARCHAR(255),
  description TEXT,
  virtues TEXT,
  contraindications TEXT,
  image VARCHAR(255)
);

CREATE TABLE teas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teaName VARCHAR(255) NOT NULL,
  description TEXT,
  preparation TEXT
);

CREATE TABLE teasplants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tea_id INT,
  plant_id INT,
  quantity VARCHAR(50),
  FOREIGN KEY (tea_id) REFERENCES teas(id),
  FOREIGN KEY (plant_id) REFERENCES plants(id)
);
INSERT INTO plants (plantsName, scientificName, description, virtues, contraindications, image) VALUES
('Camomille', 'Matricaria chamomilla', 'La camomille est une plante herbacée annuelle de la famille des Astéracées.', 'Apaisante, anti-inflammatoire, antispasmodique.', 'Peut provoquer des allergies chez certaines personnes.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936454-camomille.png'),
('Bourrache', 'Borago officinalis', 'La bourrache est une plante herbacée annuelle de la famille des Boraginacées.', 'Diurétique, expectorante, anti-inflammatoire.', 'Éviter en cas de troubles hépatiques.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936481-bourrache.png'),
('Nigelle', 'Nigella sativa', 'La nigelle est une plante annuelle de la famille des Renonculacées.', 'Antioxydante, anti-inflammatoire, immunostimulante.', 'À éviter pendant la grossesse.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936491-nigelle.png'),
('Mélisse', 'Melissa officinalis', 'La mélisse est une plante herbacée vivace de la famille des Lamiacées.', 'Calmante, digestive, antivirale.', 'Peut interagir avec les sédatifs et les médicaments pour la thyroïde.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936503-melisse.png'),
('Sauge', 'Salvia officinalis', 'La sauge est une plante herbacée vivace de la famille des Lamiacées.', 'Antibactérienne, antifongique, antivirale.', 'Ne pas utiliser en cas de grossesse ou d’allaitement.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936516-sauge.png'),
('Verveine', 'Verbena officinalis', 'La verveine est une plante herbacée vivace de la famille des Verbénacées.', 'Antispasmodique, calmante, digestive.', 'Éviter en cas de grossesse.', 'https://image.noelshack.com/fichiers/2024/27/2/1719936542-verveine.png'),
('Calendula', 'Calendula officinalis', 'Le calendula est une plante herbacée annuelle de la famille des Astéracées.', 'Anti-inflammatoire, cicatrisante, antiseptique.', 'Peut provoquer des réactions allergiques.', 'https://image.noelshack.com/fichiers/2024/27/3/1719985057-20240624-122738-removebg-preview.png'),
('Menthe', 'Mentha spicata', 'La menthe est une plante herbacée vivace de la famille des Lamiacées.', 'Digestive, antispasmodique, antiseptique.', 'Peut provoquer des brûlures d’estomac et des irritations.', 'https://image.noelshack.com/fichiers/2024/27/3/1719985086-20240624-123027-1-removebg-preview.png'),
('Ortie', 'Urtica dioica', 'L’ortie est une plante herbacée vivace de la famille des Urticacées.', 'Anti-inflammatoire, diurétique, reminéralisante.', 'Peut provoquer des allergies cutanées.', 'https://image.noelshack.com/fichiers/2024/27/3/1719985070-20240624-122832-1-removebg-preview.png'),
('Valériane', 'Valeriana officinalis', 'La valériane est une plante herbacée vivace de la famille des Caprifoliacées.', 'Sédative, anxiolytique, antispasmodique.', 'Peut causer des maux de tête et des étourdissements.', 'https://image.noelshack.com/fichiers/2024/27/3/1719985033-20240624-122931-removebg-preview.png');


INSERT INTO teas (teaName, description, preparation) VALUES
('Tisane Relaxante', 'Une tisane apaisante à base de camomille et de mélisse.', 'Infuser une cuillère à soupe de camomille et une cuillère à café de mélisse dans 250 ml d\'eau chaude pendant 10 minutes.'),
('Tisane Digestive', 'Une tisane pour faciliter la digestion à base de menthe et de verveine.', 'Infuser une cuillère à soupe de menthe et une cuillère à café de verveine dans 250 ml d\'eau chaude pendant 5 à 10 minutes.');


INSERT INTO teasplants (tea_id, plant_id, quantity) VALUES
(1, 1, '1 cuillère à soupe'),
(1, 4, '1 cuillère à café'),
(2, 8, '1 cuillère à soupe'),
(2, 6, '1 cuillère à café');

