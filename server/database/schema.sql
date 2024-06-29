CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plantsName VARCHAR(255) ,
  scientificName VARCHAR(255),
  description TEXT,
  virtues TEXT,
  contraindications TEXT,
  image VARCHAR(255)
);

INSERT INTO plants (plantsName, scientificName, description, virtues, contraindications, image) VALUES
('Camomille', 'Matricaria chamomilla', 'La camomille est une plante herbacée annuelle de la famille des Astéracées.', 'Apaisante, anti-inflammatoire, antispasmodique.', 'Peut provoquer des allergies chez certaines personnes.', 'https://example.com/images/camomille.jpg'),
('Bourrache', 'Borago officinalis', 'La bourrache est une plante herbacée annuelle de la famille des Boraginacées.', 'Diurétique, expectorante, anti-inflammatoire.', 'Éviter en cas de troubles hépatiques.', 'https://example.com/images/bourrache.jpg'),
('Nigelle', 'Nigella sativa', 'La nigelle est une plante annuelle de la famille des Renonculacées.', 'Antioxydante, anti-inflammatoire, immunostimulante.', 'À éviter pendant la grossesse.', 'https://example.com/images/nigelle.jpg'),
('Mélisse', 'Melissa officinalis', 'La mélisse est une plante herbacée vivace de la famille des Lamiacées.', 'Calmante, digestive, antivirale.', 'Peut interagir avec les sédatifs et les médicaments pour la thyroïde.', 'https://example.com/images/melisse.jpg'),
('Sauge', 'Salvia officinalis', 'La sauge est une plante herbacée vivace de la famille des Lamiacées.', 'Antibactérienne, antifongique, antivirale.', 'Ne pas utiliser en cas de grossesse ou d’allaitement.', 'https://example.com/images/sauge.jpg'),
('Verveine', 'Verbena officinalis', 'La verveine est une plante herbacée vivace de la famille des Verbénacées.', 'Antispasmodique, calmante, digestive.', 'Éviter en cas de grossesse.', 'https://example.com/images/verveine.jpg'),
('Calendula', 'Calendula officinalis', 'Le calendula est une plante herbacée annuelle de la famille des Astéracées.', 'Anti-inflammatoire, cicatrisante, antiseptique.', 'Peut provoquer des réactions allergiques.', 'https://example.com/images/calendula.jpg'),
('Menthe', 'Mentha spicata', 'La menthe est une plante herbacée vivace de la famille des Lamiacées.', 'Digestive, antispasmodique, antiseptique.', 'Peut provoquer des brûlures d’estomac et des irritations.', 'https://example.com/images/menthe.jpg'),
('Ortie', 'Urtica dioica', 'L’ortie est une plante herbacée vivace de la famille des Urticacées.', 'Anti-inflammatoire, diurétique, reminéralisante.', 'Peut provoquer des allergies cutanées.', 'https://example.com/images/ortie.jpg'),
('Valériane', 'Valeriana officinalis', 'La valériane est une plante herbacée vivace de la famille des Caprifoliacées.', 'Sédative, anxiolytique, antispasmodique.', 'Peut causer des maux de tête et des étourdissements.', 'https://example.com/images/valeriane.jpg');
