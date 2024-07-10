-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.33 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla db_tpo_nodejs.destinos
CREATE TABLE IF NOT EXISTS `destinos` (
  `id_destino` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_destino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.destinos: ~0 rows (aproximadamente)
DELETE FROM `destinos`;

-- Volcando estructura para tabla db_tpo_nodejs.facturacion
CREATE TABLE IF NOT EXISTS `facturacion` (
  `id_factura` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.facturacion: ~0 rows (aproximadamente)
DELETE FROM `facturacion`;

-- Volcando estructura para tabla db_tpo_nodejs.paquete_viajes
CREATE TABLE IF NOT EXISTS `paquete_viajes` (
  `id_alojamiento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `ubicacion` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  `precio` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`id_alojamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.paquete_viajes: ~0 rows (aproximadamente)
DELETE FROM `paquete_viajes`;

-- Volcando estructura para tabla db_tpo_nodejs.reservas
CREATE TABLE IF NOT EXISTS `reservas` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_viaje` int NOT NULL,
  `fecha_reserva` datetime NOT NULL,
  PRIMARY KEY (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.reservas: ~0 rows (aproximadamente)
DELETE FROM `reservas`;

-- Volcando estructura para tabla db_tpo_nodejs.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `apellido` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dni` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nombre_usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `numero_telefono` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `numero_celular` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `ciudad` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `provincia` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pais` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Usuario',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.usuarios: ~113 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `dni`, `nombre_usuario`, `email`, `contrasena`, `numero_telefono`, `numero_celular`, `direccion`, `ciudad`, `provincia`, `pais`, `imagen`, `fecha_registro`, `fecha_actualizacion`, `rol`) VALUES
	(1, 'Ismael Carter', 'Mann', '29070726', 'admin', 'admin@admin.com', '123', '455-584-1603', '951-533-3898', '3814 Bergstrom Pine', 'West Mariane', 'Alaska', 'France', NULL, '2024-06-16 19:55:05', '2024-06-16 06:44:58', 'Usuario'),
	(2, 'Olga Donnelly', 'McGlynn', '34307033', 'Maureen91', 'Geo63@gmail.com', '5KqJLZg_mVgmxeE', '592-831-4613', '290-813-1514', '135 Heller Crossroad', 'North Brownton', 'Tennessee', 'Swaziland', NULL, '2024-06-16 19:55:05', '2024-06-16 14:22:35', 'Editor'),
	(3, 'Annie Jerde DVM', 'Powlowski', '44683281', 'Orin18', 'Magdalen21@gmail.com', 'PE__2udq8nUxZBZ', '888-829-8846', '309-871-4808', '10601 Schowalter Crossroad', 'Ernietown', 'Oregon', 'Reunion', NULL, '2024-06-16 19:55:05', '2024-06-15 20:37:32', 'Baneado'),
	(4, 'Irving Hammes', 'McGlynn', '29978172', 'Tate_Blanda', 'Lambert_Hauck0@yahoo.com', 'cu5q1ZfZJ2QVgsB', '308-394-4321', '455-792-1908', '8618 Edgar Place', 'Lake Elsinore', 'Colorado', 'Guernsey', NULL, '2024-06-16 19:55:05', '2024-06-15 18:34:23', 'Usuario'),
	(5, 'Karen Frami III', 'Cassin', '12291460', 'Antonette.Nader98', 'Tyra_Oberbrunner86@gmail.com', 'P9eDz_sPnvab1Sp', '432-951-1998', '303-823-4219', '1586 Delta Cliffs', 'West Jewellburgh', 'Colorado', 'Western Sahara', NULL, '2024-06-16 19:55:05', '2024-06-16 05:46:25', 'Baneado'),
	(6, 'Ismael Treutel', 'Bartoletti', '33470835', 'Miracle7', 'Mara_Greenholt@yahoo.com', 'QWMmd422kJ8Ni5s', '460-745-3822', '201-562-3503', '23692 Vandervort Alley', 'Morissetteville', 'New Jersey', 'Honduras', NULL, '2024-06-16 19:55:05', '2024-06-15 21:11:18', 'Admin'),
	(7, 'Harvey Monahan', 'Oberbrunner', '31677192', 'Piper90', 'Christina_Kozey94@hotmail.com', 'drEyOFvlb7GwSYo', '928-743-3827', '459-479-3158', '478 Jerde Mountain', 'Miramar', 'Missouri', 'Uzbekistan', NULL, '2024-06-16 19:55:05', '2024-06-16 11:24:13', 'Baneado'),
	(8, 'Marjorie Cole', 'Rempel', '32654698', 'Hayden.West', 'Fanny_Thiel@gmail.com', 'RqRzdCdqXnwXclC', '829-673-0549', '511-439-9798', '17358 Terrance Coves', 'Homenickfort', 'Oklahoma', 'Armenia', NULL, '2024-06-16 19:55:05', '2024-06-16 01:49:03', 'Baneado'),
	(9, 'Clifton Effertz', 'Von', '45863453', 'Merl.Daniel58', 'Rodger_Koepp17@gmail.com', 'm_eN9iGPB6dcU7g', '297-296-0905', '527-332-7189', '9651 Alysha Corner', 'Corkerymouth', 'Colorado', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-16 07:32:09', 'Suspendido'),
	(10, 'Nellie Mante', 'Flatley', '21185831', 'Patricia19', 'Hope39@yahoo.com', 'DM0nBEW5q6D_81k', '977-919-4757', '812-218-6300', '1143 Ida Overpass', 'North Jaymouth', 'Kentucky', 'Portugal', NULL, '2024-06-16 19:55:05', '2024-06-16 05:45:38', 'Usuario'),
	(11, 'Betsy Johnson', 'Mills', '26851378', 'Blanca.Zulauf', 'Mariela29@hotmail.com', 'HFyfz9Oyxud9lqc', '404-218-6734', '668-570-4105', '64985 Smitham Knolls', 'Schroederfurt', 'New Mexico', 'Cape Verde', NULL, '2024-06-16 19:55:05', '2024-06-16 16:36:12', 'Editor'),
	(12, 'Damon Nienow DDS', 'Morissette', '17860563', 'Rebekah.Hand96', 'Jayson_Considine70@hotmail.com', 'T20WF8IhKJp8N_x', '793-340-0364', '638-468-7581', '8487 Dickinson Estates', 'Kileyview', 'Alaska', 'Vanuatu', NULL, '2024-06-16 19:55:05', '2024-06-16 08:00:35', 'SuperUsuario'),
	(13, 'Mrs. Muriel Predovic', 'Carroll', '43630583', 'Naomi28', 'Juston86@hotmail.com', 'sBCcnefTnUle31U', '934-897-3524', '936-923-5736', '311 Aufderhar Via', 'South Tonimouth', 'Michigan', 'Sudan', NULL, '2024-06-16 19:55:05', '2024-06-15 20:38:35', 'Usuario'),
	(14, 'Bertha Weber', 'Jenkins', '44124817', 'Myles_Mertz', 'Vernice80@hotmail.com', 'NladJhpqjxB3SPr', '205-619-0574', '233-879-7630', '20014 Wilhelm Mission', 'Ritchiestad', 'Iowa', 'Uzbekistan', NULL, '2024-06-16 19:55:05', '2024-06-16 06:36:49', 'Moderador'),
	(15, 'Clint Hegmann', 'Kutch', '45631213', 'Shea23', 'Braxton.Pacocha88@yahoo.com', 'nZ1kKb8ptHwz_Z8', '505-461-5317', '796-392-9688', '5415 Josephine Gardens', 'Eleanorebury', 'New Mexico', 'Mauritania', NULL, '2024-06-16 19:55:05', '2024-06-16 00:58:47', 'Baneado'),
	(16, 'Mr. Marlon Prohaska', 'Leuschke', '18588076', 'Brennon_Carter', 'Kelley_Stokes@yahoo.com', 'JgBOKmA7qh8GT7t', '268-983-7616', '278-388-1881', '534 Marc Tunnel', 'Lizethmouth', 'Hawaii', 'Pakistan', NULL, '2024-06-16 19:55:05', '2024-06-16 05:56:18', 'Eliminado'),
	(17, 'Seth Yundt', 'Flatley', '30649302', 'Adelle.Schulist24', 'Gudrun0@yahoo.com', 'On4Y0SI0yVWhaNo', '938-692-1622', '439-967-1370', '39103 Williamson Inlet', 'Port Dejuan', 'Maine', 'Timor-Leste', NULL, '2024-06-16 19:55:05', '2024-06-15 20:35:06', 'Eliminado'),
	(18, 'Mrs. Shaun Osinski', 'Renner', '28630491', 'Geovanni_OConnell', 'Addison.Abshire78@yahoo.com', 'QQN1OnvPhBcC_S_', '270-784-7972', '266-908-5099', '149 Carissa Dam', 'North Verda', 'Idaho', 'Bosnia and Herzegovina', NULL, '2024-06-16 19:55:05', '2024-06-16 16:31:08', 'Baneado'),
	(19, 'Bert Swift', 'Dicki', '48735379', 'Mitchell.Cummerata', 'Tony.Pollich@hotmail.com', '8C1tu3go2EioVcC', '628-550-4032', '259-760-5285', '90805 Antonio Trail', 'Elkhart', 'Kansas', 'Mauritius', NULL, '2024-06-16 19:55:05', '2024-06-15 22:58:18', 'SuperUsuario'),
	(20, 'Lucy Hamill', 'Stokes', '42671668', 'Ellis.Huel10', 'Winona95@gmail.com', 'GXYrXLuWiq2XF3S', '324-423-0447', '983-216-3330', '3576 McCullough Keys', 'Herzogshire', 'West Virginia', 'Lesotho', NULL, '2024-06-16 19:55:05', '2024-06-16 14:52:08', 'Admin'),
	(21, 'Ms. Eula Bogisich', 'Robel', '22547540', 'Marques_Lowe', 'Mavis_Cronin@hotmail.com', 'cMRxvLflLlQOwp6', '543-910-9815', '744-462-8344', '1869 Alexanne Keys', 'Morissetteburgh', 'Delaware', 'Philippines', NULL, '2024-06-16 19:55:05', '2024-06-16 06:09:53', 'Baneado'),
	(22, 'Maggie O\'Kon', 'Hahn', '37940982', 'Jackson_Barton', 'Petra5@hotmail.com', 'sCgn3PF99B_A1Uv', '784-765-7202', '713-386-3620', '65083 Osinski Manor', 'Kulasfurt', 'Maine', 'Guinea-Bissau', NULL, '2024-06-16 19:55:05', '2024-06-16 10:10:29', 'Suspendido'),
	(23, 'Sheryl Ferry', 'McLaughlin', '43263088', 'Weston_Balistreri65', 'Mohammed_Farrell82@gmail.com', 'w0fG7luE2Opa8s1', '678-510-5460', '246-393-3088', '409 Valerie Village', 'Pine Hills', 'Mississippi', 'Gambia', NULL, '2024-06-16 19:55:05', '2024-06-16 01:30:23', 'Baneado'),
	(24, 'Chris Blanda', 'Hayes', '45282826', 'Jess_Hansen', 'Wellington_Hermann@gmail.com', 'AZcbQwKSm8_K7Z1', '406-337-3465', '984-472-5145', '372 Schinner Forks', 'North Lavinia', 'North Dakota', 'Wallis and Futuna', NULL, '2024-06-16 19:55:05', '2024-06-15 18:32:03', 'SuperUsuario'),
	(25, 'Roland Reichert', 'Becker', '34042645', 'Alexandro.Borer74', 'Shanel.Hamill@gmail.com', 'hnGNv2cyfH0im2c', '570-855-0713', '547-537-6874', '23755 Predovic Turnpike', 'Port Royal', 'Maryland', 'Maldives', NULL, '2024-06-16 19:55:05', '2024-06-16 11:47:44', 'Eliminado'),
	(26, 'Eugene Halvorson', 'Stamm', '11828299', 'Woodrow_Stroman', 'Rusty44@gmail.com', '0U6rD2Ips21uL4y', '709-565-8177', '360-364-8531', '27829 Rau Mission', 'New Imani', 'Virginia', 'Costa Rica', NULL, '2024-06-16 19:55:05', '2024-06-16 07:46:41', 'Eliminado'),
	(27, 'Delia Schaden', 'Schaden', '12259867', 'Floyd_Monahan85', 'General26@yahoo.com', 'wEDAOe4tHqWgZup', '666-652-2723', '436-675-4014', '492 Joesph Stream', 'Burleson', 'Wisconsin', 'Belarus', NULL, '2024-06-16 19:55:05', '2024-06-16 02:51:42', 'Admin'),
	(28, 'Patrick Rempel', 'Deckow', '41588216', 'Justine57', 'Nayeli_Conroy@hotmail.com', 'Gf1cD0Tx5i1ggaR', '487-931-9765', '912-479-8996', '183 Benjamin Plains', 'Walkerfort', 'Alaska', 'San Marino', NULL, '2024-06-16 19:55:05', '2024-06-16 15:00:09', 'Admin'),
	(29, 'Mrs. Joann Schinner', 'Bradtke', '17197844', 'Tressa_Borer', 'Ayana.Sporer@yahoo.com', '7TRC4HvAEW1Cr49', '436-933-1404', '388-689-2012', '3898 Bayer Rapids', 'Santa Rosa', 'Idaho', 'Azerbaijan', NULL, '2024-06-16 19:55:05', '2024-06-16 13:36:42', 'Admin'),
	(30, 'Traci Gaylord V', 'Wyman', '12444822', 'Jaime_Kilback', 'Sim_Orn@yahoo.com', 'zScDc801IR6akJ9', '999-635-8577', '732-468-0748', '999 Charlotte Squares', 'Nyasiaborough', 'New York', 'Tunisia', NULL, '2024-06-16 19:55:05', '2024-06-15 22:41:43', 'Moderador'),
	(31, 'Kristy Becker', 'Moen', '29800200', 'Bret_Ernser', 'Jacquelyn69@gmail.com', 'aC8a5KVfwxgl54W', '592-283-3384', '604-728-1440', '83898 Ledner Haven', 'North Karl', 'Louisiana', 'Svalbard & Jan Mayen Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 00:32:47', 'Usuario'),
	(32, 'Jana Dibbert', 'Mills', '21356489', 'Clovis.Simonis70', 'Vivianne21@hotmail.com', 'DLau_9zuO92EEab', '578-869-4108', '498-785-9482', '96073 Cruickshank Lake', 'Haleighside', 'Rhode Island', 'Heard Island and McDonald Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 12:58:07', 'Admin'),
	(33, 'Miss Gretchen Conn', 'Jacobs', '24327866', 'Roberta53', 'Dwight.Larkin32@gmail.com', 'SUrDofdqF385OZT', '448-585-4380', '855-573-4860', '91840 Ziemann Trail', 'Abbottfurt', 'Washington', 'Armenia', NULL, '2024-06-16 19:55:05', '2024-06-16 15:05:18', 'SuperUsuario'),
	(34, 'Mrs. Emily Cartwright', 'Bradtke', '10727618', 'Adan.Moen97', 'Bella47@hotmail.com', '_yjdm5jMNz0svb2', '383-739-6843', '730-724-1127', '02265 Alejandra Burgs', 'Edmond', 'Tennessee', 'Cayman Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 07:39:00', 'Admin'),
	(35, 'Lowell Davis Jr.', 'Schneider', '45575092', 'Cristal.DuBuque', 'Keira.Rempel@gmail.com', 'q13_B96esbLi3Mx', '891-332-7350', '617-635-4975', '4422 Kasandra Ports', 'Legrosside', 'South Carolina', 'Jordan', NULL, '2024-06-16 19:55:05', '2024-06-16 10:46:26', 'Editor'),
	(36, 'Lorene Zulauf', 'Schumm', '29186724', 'Catharine_Anderson31', 'Keshaun.Kautzer71@hotmail.com', 'TfODtCJ6F7hcEj9', '777-589-3386', '344-934-0922', '59635 Selmer Freeway', 'Millerfort', 'Vermont', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-15 18:39:10', 'Baneado'),
	(37, 'Cesar Kohler', 'Ernser', '17697718', 'Kallie_Nienow', 'Dane96@hotmail.com', '7_ozt5l2RrU9j8M', '417-895-6871', '773-636-8386', '29983 Clifton Canyon', 'La Mesa', 'North Dakota', 'Wallis and Futuna', NULL, '2024-06-16 19:55:05', '2024-06-15 23:21:38', 'Moderador'),
	(38, 'Angie Langosh', 'Ledner', '12817971', 'Brady35', 'Brody_Homenick91@hotmail.com', 'PrIh62qVZOv2op2', '560-718-0358', '891-555-0121', '9760 Kali Key', 'New Jakayla', 'Montana', 'Chad', NULL, '2024-06-16 19:55:05', '2024-06-15 18:26:30', 'Editor'),
	(39, 'Austin Schmeler', 'Upton', '26849591', 'Joan_Mayer89', 'Seamus.Hahn96@hotmail.com', 'R_VE_ffKHO4cQEC', '637-532-3241', '514-383-2601', '700 Kuhn Forks', 'Savannahburgh', 'Arkansas', 'Australia', NULL, '2024-06-16 19:55:05', '2024-06-16 15:37:20', 'Moderador'),
	(40, 'Sharon Collins', 'Hintz', '24226622', 'Cara.Funk90', 'Lina.Bosco@hotmail.com', 'd82oFq1V_x7TEJo', '603-337-9633', '901-676-3253', '16546 Rohan Avenue', 'Eldonbury', 'Florida', 'Tanzania', NULL, '2024-06-16 19:55:05', '2024-06-16 08:09:49', 'Baneado'),
	(41, 'Terrance Schuster', 'Durgan', '42436392', 'Brandt8', 'Wilfred29@hotmail.com', 'wP6k_hsek5ENAgl', '898-311-9487', '272-569-6345', '062 Spencer Road', 'Langfort', 'Mississippi', 'Ethiopia', NULL, '2024-06-16 19:55:05', '2024-06-15 19:14:39', 'Editor'),
	(42, 'Pearl Walker', 'Franecki', '28508331', 'Cara_Ward65', 'Oma.Weissnat@hotmail.com', 'bZzOKagDyKOr_pX', '565-724-2691', '420-564-2456', '68044 Douglas Row', 'North Aylin', 'Pennsylvania', 'Puerto Rico', NULL, '2024-06-16 19:55:05', '2024-06-16 07:26:50', 'Moderador'),
	(43, 'Melissa Bednar', 'Kassulke', '41961611', 'Tate_Schimmel45', 'Desmond.Schumm20@hotmail.com', 'XVdGhMKIjWsh1aC', '252-486-8599', '992-202-0562', '2809 Lewis Port', 'Lake Ayana', 'Missouri', 'Argentina', NULL, '2024-06-16 19:55:05', '2024-06-16 00:30:59', 'Admin'),
	(44, 'Spencer Satterfield', 'Schulist', '49502770', 'Marquis.Powlowski', 'Helena.Hodkiewicz@gmail.com', 'MJj1OW95eClcOkQ', '620-655-5255', '344-812-1808', '9675 Wiegand Groves', 'Stillwater', 'Arizona', 'Zambia', NULL, '2024-06-16 19:55:05', '2024-06-16 10:12:17', 'Usuario'),
	(45, 'Jerome Williamson', 'Stracke', '36264543', 'Frankie_Abernathy4', 'Spencer.Zemlak48@yahoo.com', 'IFO8uCSjhgWYcrk', '393-417-4112', '305-892-4175', '1389 Eveline Plain', 'Fritschborough', 'Virginia', 'Fiji', NULL, '2024-06-16 19:55:05', '2024-06-16 01:43:19', 'Suspendido'),
	(46, 'Gretchen Orn III', 'Huels', '16767337', 'Myrtie.Medhurst', 'Shana40@gmail.com', 'JH9rgdlgSeWY2Vc', '660-458-1806', '663-968-1664', '357 Margot Trail', 'Estellebury', 'Michigan', 'Tunisia', NULL, '2024-06-16 19:55:05', '2024-06-16 08:35:23', 'Suspendido'),
	(47, 'Jean Treutel', 'Wunsch', '35494913', 'Carson_Hettinger92', 'Giles.Lynch@gmail.com', 'FpO9k3GzAFwo14c', '722-653-1914', '383-381-2657', '8275 Oren Keys', 'Salem', 'Oregon', 'United Kingdom', NULL, '2024-06-16 19:55:05', '2024-06-15 16:58:14', 'Eliminado'),
	(48, 'Chris Kuhic', 'Kunde', '24286052', 'Shawn.Satterfield', 'Chauncey.Sipes97@gmail.com', '_2RcA6N2tT48tMK', '649-690-0095', '269-300-8293', '175 Yasmeen Stream', 'Auburn', 'Nebraska', 'Papua New Guinea', NULL, '2024-06-16 19:55:05', '2024-06-15 21:41:59', 'Eliminado'),
	(49, 'Peggy Wolff', 'Wiegand', '25980885', 'Viva_Pollich85', 'Uriel_Connelly@yahoo.com', '2QAGcpyDcWb_RVo', '379-603-2265', '279-717-4310', '463 Stefan Hills', 'Baumbachbury', 'South Dakota', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-16 01:18:22', 'Admin'),
	(50, 'Anita Stamm', 'Bernier', '16545763', 'Jada.Murazik', 'Alivia23@gmail.com', 'cctnnzsxDRJw_RX', '865-886-8654', '783-984-6405', '064 Zachariah Islands', 'North Jeanneside', 'Minnesota', 'Thailand', NULL, '2024-06-16 19:55:05', '2024-06-15 18:51:29', 'Editor'),
	(51, 'Donna Hilll', 'Leffler', '27042570', 'Sean_Jaskolski', 'Jensen.Mayer73@hotmail.com', 'u_dHTQIekKNbs0G', '733-267-7020', '236-298-5768', '1829 Kulas Forge', 'Boynton Beach', 'Michigan', 'Slovenia', NULL, '2024-06-16 19:55:05', '2024-06-16 16:05:46', 'Admin'),
	(52, 'Raquel Stroman', 'Davis', '29683584', 'Isabella_Kohler56', 'Loyal_Kris66@hotmail.com', 'Om_6e7_FfKlOx86', '422-512-2817', '250-887-8506', '194 Jada Brook', 'Elisefurt', 'North Carolina', 'Nigeria', NULL, '2024-06-16 19:55:05', '2024-06-15 22:58:20', 'Baneado'),
	(53, 'Claude Connelly', 'Koepp', '13536889', 'Christiana_Leannon67', 'Maynard.Krajcik@hotmail.com', 'tSV6iw_lKTKo0Al', '895-531-3061', '664-220-8217', '44315 Macey Prairie', 'Elnaberg', 'South Carolina', 'Bangladesh', NULL, '2024-06-16 19:55:05', '2024-06-15 19:52:38', 'Editor'),
	(54, 'Dave Miller', 'Harris', '49138709', 'Enos_Kiehn', 'Virgie51@yahoo.com', 'k0S4z8J8TyN5z3_', '544-408-2404', '732-820-3033', '10920 Kohler Mountains', 'New Cordie', 'Nevada', 'Denmark', NULL, '2024-06-16 19:55:05', '2024-06-16 03:24:01', 'Suspendido'),
	(55, 'Belinda Quigley', 'Keeling', '29523888', 'Stanley.Luettgen74', 'Charles.Bahringer14@gmail.com', 'K4B9zR69S0eHilz', '478-525-5218', '611-620-8801', '431 Bradly Park', 'South Claire', 'Oregon', 'Djibouti', NULL, '2024-06-16 19:55:05', '2024-06-16 16:05:47', 'Eliminado'),
	(56, 'Mae Renner', 'Frami', '48346125', 'Alejandra0', 'Florian_Lubowitz@yahoo.com', 'NptiTIl5N6hyWcy', '404-477-6192', '725-695-7702', '4628 Loy Cape', 'Robertsmouth', 'Colorado', 'Vanuatu', NULL, '2024-06-16 19:55:05', '2024-06-16 08:03:32', 'SuperUsuario'),
	(57, 'Colleen Marvin', 'Schiller', '30323798', 'Chasity.Metz', 'Adaline60@hotmail.com', '0mNZHws7AcDK5Yz', '350-352-8601', '947-253-6317', '5833 Boehm Brook', 'North Orland', 'New Hampshire', 'Netherlands', NULL, '2024-06-16 19:55:05', '2024-06-16 15:53:58', 'Usuario'),
	(58, 'Cesar Kutch', 'Kohler', '14341930', 'Arlie_Reichert', 'Charity66@yahoo.com', 'bOEGJNkVq8EhY8h', '736-412-7036', '258-655-3292', '6208 Hauck Mall', 'Mannport', 'Arizona', 'Turkey', NULL, '2024-06-16 19:55:05', '2024-06-15 17:10:22', 'Suspendido'),
	(59, 'Paulette Wiegand', 'Bechtelar', '47866542', 'Ronaldo.Casper', 'Loy_Bins57@hotmail.com', 'jqrvPHI2xeXSNdd', '263-986-4193', '230-876-1294', '432 Lee Causeway', 'Manhattan', 'Indiana', 'Ethiopia', NULL, '2024-06-16 19:55:05', '2024-06-16 14:03:12', 'Eliminado'),
	(60, 'Shelley Homenick Jr.', 'Durgan', '10630654', 'Wanda.Kuhlman', 'Jacynthe_Renner10@gmail.com', 'A18lewhaKOEJpsL', '295-566-4107', '517-930-2196', '9053 Aubrey Point', 'Schambergerstad', 'Wyoming', 'Greece', NULL, '2024-06-16 19:55:05', '2024-06-16 14:29:01', 'Editor'),
	(61, 'Diana Feil', 'Howell', '16482611', 'Uriel53', 'Deanna.Runolfsson33@yahoo.com', 'Yx5nXE65bMjfieP', '579-479-6485', '474-481-1943', '8952 Bode Lake', 'Valentinaville', 'West Virginia', 'Andorra', NULL, '2024-06-16 19:55:05', '2024-06-16 10:11:56', 'Suspendido'),
	(62, 'Elsa Wyman', 'Cremin', '38461300', 'Allen.Schmidt11', 'Braulio_Greenholt46@gmail.com', 'ypJgtXVRjRWE_8b', '297-296-4463', '554-740-7924', '200 Magali Centers', 'Duluth', 'Ohio', 'Burundi', NULL, '2024-06-16 19:55:05', '2024-06-15 20:44:19', 'Editor'),
	(63, 'Julian Barrows', 'Yundt', '49158402', 'Ethel44', 'Woodrow.Greenfelder@hotmail.com', 'J8AJkChyMLlF2QD', '984-810-4145', '474-293-2130', '06726 Danial Knoll', 'Port General', 'Oregon', 'Poland', NULL, '2024-06-16 19:55:05', '2024-06-16 10:41:30', 'Eliminado'),
	(64, 'Evan Wisozk V', 'Rempel', '16543926', 'Yolanda.Rogahn52', 'Katrina47@hotmail.com', '1urc1NZR5B0ptV5', '690-229-2863', '913-539-7022', '052 Rubie Cove', 'South Vergie', 'Arizona', 'Latvia', NULL, '2024-06-16 19:55:05', '2024-06-16 13:44:45', 'Usuario'),
	(65, 'Dave Krajcik', 'Klein', '28479273', 'Brad78', 'Bessie_Runolfsson78@gmail.com', 'iYUU4a7EJuuR6wX', '325-413-9735', '848-322-1389', '9256 Lueilwitz Oval', 'Hegmannfort', 'Iowa', 'Libyan Arab Jamahiriya', NULL, '2024-06-16 19:55:05', '2024-06-16 14:26:05', 'Moderador'),
	(66, 'Julio Koelpin', 'Stamm', '20276967', 'Betsy_Bashirian0', 'David_Boyer@hotmail.com', 'nJZi4GVzIboBskP', '991-931-8972', '463-520-3847', '1275 Lee Well', 'Stanleyborough', 'Colorado', 'Saint Barthelemy', NULL, '2024-06-16 19:55:05', '2024-06-15 17:31:43', 'Eliminado'),
	(67, 'Roberto Waters', 'Ferry', '25007219', 'Ward9', 'Jo96@gmail.com', '87Tx_PVxjfyV0sc', '536-792-4495', '526-500-6263', '18089 Shanna Glen', 'Rodriguezshire', 'Alabama', 'Brazil', NULL, '2024-06-16 19:55:05', '2024-06-16 11:15:46', 'Moderador'),
	(68, 'Mrs. Everett Frami', 'Runolfsson', '46912527', 'Dylan_Willms80', 'Bridie_Huel63@yahoo.com', '2SN0K8ZgwfDvvKp', '851-979-4257', '243-648-3246', '6085 Hilll Gardens', 'West Amya', 'Hawaii', 'Norway', NULL, '2024-06-16 19:55:05', '2024-06-16 09:00:31', 'Editor'),
	(69, 'Kirk Abshire MD', 'Hettinger', '46855691', 'Terrill.Bogisich69', 'Brooks_Kreiger89@gmail.com', 'w4Ngx72YwYRhti8', '344-864-6044', '642-946-9362', '15079 Graham Well', 'Newport Beach', 'Missouri', 'Solomon Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 00:04:05', 'Suspendido'),
	(70, 'Leslie Feest IV', 'Hudson', '37076139', 'Antonio_Grimes', 'Genesis_Medhurst@gmail.com', '191ku27dsOV7qhd', '460-503-2804', '974-761-2972', '07181 Victoria Ways', 'Mackenzieshire', 'New York', 'Austria', NULL, '2024-06-16 19:55:05', '2024-06-15 17:22:00', 'Usuario'),
	(71, 'Debra Mayer', 'Pfannerstill', '46929308', 'Hershel.Will29', 'Dave_Lehner75@hotmail.com', 'K33W2HOnbNNMY9n', '410-263-1580', '386-733-7153', '433 Abshire Ridges', 'Bartonton', 'Montana', 'Lao People\'s Democratic Republic', NULL, '2024-06-16 19:55:05', '2024-06-15 19:04:40', 'Usuario'),
	(72, 'Dr. April Kerluke', 'Murray', '49273654', 'Velma_Adams99', 'Tracey_Ankunding35@gmail.com', '5rD8FNjMgdguNMM', '403-951-1319', '711-204-5117', '17775 Rogahn Camp', 'New Adrien', 'California', 'Eritrea', NULL, '2024-06-16 19:55:05', '2024-06-16 07:25:37', 'Moderador'),
	(73, 'Mable Heidenreich', 'Frami', '13110297', 'Josianne10', 'Uriel.Bailey@hotmail.com', 'k2r5kDHWBpn4FTl', '960-629-6494', '201-622-1135', '1575 Runolfsdottir Road', 'Kipport', 'Minnesota', 'Guatemala', NULL, '2024-06-16 19:55:05', '2024-06-15 23:57:01', 'Eliminado'),
	(74, 'Terrance Medhurst', 'Spencer', '40580224', 'Dovie.Koss7', 'Colt.Christiansen@yahoo.com', 'Py_xUlgLEEmKccA', '695-704-8210', '367-531-2833', '21639 Dane Branch', 'Wolfville', 'Georgia', 'Holy See (Vatican City State)', NULL, '2024-06-16 19:55:05', '2024-06-16 12:55:49', 'SuperUsuario'),
	(75, 'Ivan Moore', 'Abernathy', '44871306', 'Fatima_Ratke94', 'Dorothy_Bechtelar@yahoo.com', 'iKk4SdmfTVRBvGk', '876-312-8510', '314-766-2473', '607 Zane Parkways', 'North Estherbury', 'Utah', 'Saint Helena', NULL, '2024-06-16 19:55:05', '2024-06-16 05:40:27', 'Eliminado'),
	(76, 'Greg Schmitt I', 'Reinger', '47267696', 'Emanuel51', 'Durward.Rohan50@gmail.com', 'kHAkb2KLDplSMOG', '912-600-3833', '579-409-6232', '9969 Harmony Parks', 'Hettingerstad', 'Nebraska', 'Netherlands', NULL, '2024-06-16 19:55:05', '2024-06-16 15:18:21', 'Baneado'),
	(77, 'Maggie Feil I', 'Quitzon', '16424006', 'Akeem.Stehr11', 'Assunta62@yahoo.com', '3Ha8PzDrHY4bKVg', '696-252-4004', '239-754-2906', '42834 Reta Squares', 'Lake Hilariofort', 'Indiana', 'Finland', NULL, '2024-06-16 19:55:05', '2024-06-16 03:06:27', 'SuperUsuario'),
	(78, 'Olivia Cassin', 'Labadie', '36976401', 'Alison.Zulauf12', 'Sanford20@hotmail.com', 'mvw19zLaJInzZyv', '991-222-3707', '509-700-9351', '846 Zboncak Pass', 'Luciousmouth', 'Iowa', 'Cambodia', NULL, '2024-06-16 19:55:05', '2024-06-16 12:59:02', 'Editor'),
	(79, 'Preston Ledner', 'Schneider', '26659989', 'Verla_Macejkovic', 'Estel.Heidenreich39@hotmail.com', 'K2NyQS5hCrEaeHn', '533-854-7659', '940-911-9868', '052 Brenda Passage', 'Lake Jamaal', 'Delaware', 'Libyan Arab Jamahiriya', NULL, '2024-06-16 19:55:05', '2024-06-15 18:55:14', 'Admin'),
	(80, 'Martha Boyle', 'Brown', '40495825', 'Oma.Howell', 'Sean.Nitzsche@yahoo.com', 'iFw4CZ7YE3XX81s', '520-709-8001', '231-607-7558', '39073 Katlynn Glens', 'Lake Hilbertton', 'South Dakota', 'Israel', NULL, '2024-06-16 19:55:05', '2024-06-16 00:54:45', 'SuperUsuario'),
	(81, 'Dr. Emma Hayes', 'Kshlerin', '22780671', 'Krystina93', 'Fred.Schmitt@gmail.com', 'HUiQ3CBYJe26wkB', '247-398-7465', '217-906-5664', '7454 Theo Well', 'Taylorhaven', 'North Carolina', 'Libyan Arab Jamahiriya', NULL, '2024-06-16 19:55:05', '2024-06-15 17:12:54', 'Suspendido'),
	(82, 'Chris Carter PhD', 'Runolfsdottir', '36605188', 'Pierce.Beatty76', 'Sandrine.Hilpert@gmail.com', 'oypIwvTuGk1jVtq', '372-607-8194', '463-975-8378', '3428 Koelpin Points', 'Delano', 'Arizona', 'Mongolia', NULL, '2024-06-16 19:55:05', '2024-06-16 16:03:15', 'Moderador'),
	(83, 'Kent Mayer', 'Gerhold', '24018194', 'Jerrell95', 'Clair66@gmail.com', '8lC3G1y1X7qun1g', '963-958-0890', '284-378-0931', '46822 Eleazar Throughway', 'Mayermouth', 'Arkansas', 'Brazil', NULL, '2024-06-16 19:55:05', '2024-06-16 05:57:36', 'Usuario'),
	(84, 'Diane Spencer', 'Kiehn', '23957100', 'Dangelo.Weimann31', 'Keenan.DAmore@gmail.com', 'FU3XUi8DEPb3IF_', '577-789-4827', '200-862-8499', '2864 Braeden Freeway', 'East Maeve', 'Georgia', 'Armenia', NULL, '2024-06-16 19:55:05', '2024-06-16 08:57:25', 'Suspendido'),
	(85, 'Phyllis Collins', 'Considine', '16663023', 'Doug_Hermann39', 'Alessandra_Murray@gmail.com', 'guXmsLHGrl9LpCy', '880-558-2050', '409-975-2516', '652 Hackett Pike', 'Mission Viejo', 'New Mexico', 'Ecuador', NULL, '2024-06-16 19:55:05', '2024-06-15 21:14:28', 'Moderador'),
	(86, 'Mack Wehner', 'Wilkinson', '37921620', 'Effie_Romaguera65', 'Wilton.Langworth49@yahoo.com', 'wXSUvjpwAJTmRDJ', '534-777-9612', '770-892-1185', '1049 Mosciski Lights', 'Casandraview', 'Rhode Island', 'Serbia', NULL, '2024-06-16 19:55:05', '2024-06-15 22:57:24', 'Usuario'),
	(87, 'Edwin Halvorson', 'Leuschke', '42154328', 'Dusty86', 'Rosalia_Harvey@gmail.com', 'n643HZmUcz_XsF0', '331-555-4723', '609-506-5493', '85773 Kohler Harbors', 'New Rochelle', 'Georgia', 'Saudi Arabia', NULL, '2024-06-16 19:55:05', '2024-06-16 08:51:08', 'Moderador'),
	(88, 'Ashley Jakubowski', 'Powlowski', '26343226', 'Burdette13', 'Ronny.Cole40@yahoo.com', '6ruLuGwmALWYPlV', '461-735-4299', '729-513-4929', '581 Kailey Mission', 'Bayerbury', 'Connecticut', 'Bermuda', NULL, '2024-06-16 19:55:05', '2024-06-16 16:26:00', 'Eliminado'),
	(89, 'Elsa Conroy', 'Wiza', '39479668', 'Adeline_Jakubowski15', 'Trenton90@gmail.com', 'k0PrR94RSsfmKwl', '542-858-1656', '232-592-7863', '970 Nader Brooks', 'Rosemead', 'Oklahoma', 'United States Minor Outlying Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 14:13:12', 'Baneado'),
	(90, 'Carmen McLaughlin', 'Sipes', '49039473', 'Wilbert.Lockman', 'Nya82@yahoo.com', 'z5PPnmO4sZU1z2X', '872-969-3472', '447-595-7170', '417 Dudley Roads', 'Lake Darrellberg', 'North Dakota', 'Dominica', NULL, '2024-06-16 19:55:05', '2024-06-15 21:11:49', 'Editor'),
	(91, 'Lester Cummings', 'Cassin', '34401713', 'Salvador8', 'Ralph76@hotmail.com', 'NWo0Cf9KfDidPp5', '660-836-0510', '496-677-3735', '20148 Lang Mall', 'West Peyton', 'Idaho', 'Norway', NULL, '2024-06-16 19:55:05', '2024-06-15 21:55:01', 'Suspendido'),
	(92, 'Mrs. Elena Collier', 'Harvey', '31083050', 'Waylon.Simonis6', 'Vivienne8@yahoo.com', 'HIHTa7Cp09urhLB', '528-911-7624', '496-501-0456', '8500 Norwood Neck', 'Garden Grove', 'Alaska', 'Bolivia', NULL, '2024-06-16 19:55:05', '2024-06-15 19:20:09', 'Editor'),
	(93, 'Esther Gleason', 'Thompson', '11459606', 'Sigmund.Bednar', 'Diana9@yahoo.com', 'TTS6vkbghoKeV_q', '923-774-2737', '875-675-1188', '4513 Prohaska Loop', 'St. Paul', 'Missouri', 'Svalbard & Jan Mayen Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 15:28:17', 'Moderador'),
	(94, 'Rene Mertz', 'Huel', '36535584', 'Eric55', 'Jerrell96@hotmail.com', 'e6VwVPlbakenOks', '254-379-7829', '771-923-6578', '06320 Coralie Vista', 'North Carson', 'South Dakota', 'Samoa', NULL, '2024-06-16 19:55:05', '2024-06-16 12:13:45', 'Baneado'),
	(95, 'Joel Nikolaus', 'McCullough', '44581076', 'Napoleon11', 'Ian39@gmail.com', 'A4htBHpd_E8uBl3', '358-481-9506', '596-237-2232', '37146 Kameron Mission', 'Scottsdale', 'Michigan', 'Nepal', NULL, '2024-06-16 19:55:05', '2024-06-16 13:47:55', 'Suspendido'),
	(96, 'Miss Sherman Padberg', 'Koss', '47052117', 'Ellen_Wiegand', 'Destiny_Walsh17@hotmail.com', 'gQO5mCZG0Cibzp1', '984-353-9762', '927-274-6154', '367 Hollie Center', 'North Jordyn', 'Oklahoma', 'Grenada', NULL, '2024-06-16 19:55:05', '2024-06-15 23:13:34', 'Moderador'),
	(97, 'Eva Stamm', 'Grady', '13394291', 'Shayne.Medhurst', 'Felicita.Lueilwitz54@yahoo.com', 'lsjcz_LdP0Bmigl', '436-493-3772', '900-608-0380', '0858 Harber Manor', 'Arvidchester', 'Ohio', 'Uruguay', NULL, '2024-06-16 19:55:05', '2024-06-16 10:35:00', 'Moderador'),
	(98, 'Charles Becker', 'Schroeder', '31836045', 'Brice.Schaefer', 'Celestine98@gmail.com', 'S4tY1vGsAaWQthL', '540-982-2502', '825-221-1330', '1426 Fay Port', 'East Tevinfurt', 'Wyoming', 'Somalia', NULL, '2024-06-16 19:55:05', '2024-06-15 22:00:25', 'Baneado'),
	(99, 'Gail McDermott', 'Buckridge', '29478108', 'Heather61', 'Freddie_Dicki37@gmail.com', '0mOmBOE6RVH1Xwv', '753-838-1806', '431-454-5467', '5577 Hodkiewicz Bridge', 'Pinellas Park', 'Wisconsin', 'Syrian Arab Republic', NULL, '2024-06-16 19:55:05', '2024-06-16 13:50:17', 'Editor'),
	(100, 'Walter Feil', 'Kohler', '37263777', 'Magnus.Bailey', 'Muhammad.Macejkovic@gmail.com', 'miwnkl08NEFfUua', '775-276-9235', '203-892-0409', '63470 Blanda Views', 'Port Dakotachester', 'Virginia', 'Uganda', NULL, '2024-06-16 19:55:05', '2024-06-16 03:53:52', 'SuperUsuario'),
	(102, 'Marcelo', 'Anton', '30243906', 'admin', 'admin123@admin123.com', 'admin123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-28 20:03:25', '2024-06-28 20:03:25', 'Admin'),
	(103, 'Experiment', 'lechita', NULL, 'Tetudo', 'experi@place.com', '$2b$10$rgDpzULD8IB1vMipfA6ZneqcBmzCzRtAXKe6h6g9zSWCwRsSFPj6O', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-28 20:39:22', '2024-06-28 20:39:22', NULL),
	(104, 'Juan', 'Perez', '12345678', 'juanperez', 'juanperez@example.com', '$2b$10$wx/mgb.lh5Y/LvxjbY4PR.yNMKQaGSnlvUhoExYeYf8TGl67Wi1fi', '123456789', '987654321', 'Calle Falsa 123', 'Buenos Aires', 'Buenos Aires', 'Argentina', NULL, '2024-07-09 16:00:31', '2024-07-09 16:00:31', 'Usuario'),
	(105, NULL, NULL, NULL, 'pepe123', 'asus.rok@gmail.com', '$2b$10$fVlV1oT26DcztvclXOgebu4RfpFJh1qx83V2hLHgg8wMbH9YAaV06', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 18:36:11', '2024-07-09 18:36:11', NULL),
	(106, NULL, NULL, NULL, 'aksjdhaskjdh', 'alksdjaslkdj@aksjdhask.com', '$2b$10$dizoAeY1SHNa/worxQ9QYOkv1NXQftx8O3zgFmRUPNQC2vf15GWca', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 18:37:32', '2024-07-09 18:37:32', NULL),
	(107, NULL, NULL, NULL, 'marceloanton', 'marceloanton@outlook.com', '$2b$10$eaIdyb1ytrgIf6.uAvC8b.7EqHSTUY.jyZgRx0JZl8FCOHgGrRKJ.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 18:53:01', '2024-07-09 18:53:01', NULL),
	(109, NULL, NULL, NULL, 'marceloantona', 'asus.rok@gamail.com', '$2b$10$pxrimRZ.pBCbzWNldAbQre3Z2oLJwfpk8q4jQM1sVpRZUuoaEcv5u', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 19:11:58', '2024-07-09 19:11:58', NULL),
	(110, NULL, NULL, NULL, 'marcealoantona', 'asus.rok@gaamail.com', '$2b$10$OlGWyohHtm1olUsiqhWFW.K4xE2pSeu38F86CKcbg2qQPETJaW916', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 19:12:27', '2024-07-09 19:12:27', NULL),
	(111, NULL, NULL, NULL, 'marcealoantsona', 'asus.rsok@gaamail.com', '$2b$10$D.PaJDbsj9vt4il53pakvONqXkV3745i/73T3fwApBmiEFHOKx0qy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 19:13:07', '2024-07-09 19:13:07', NULL),
	(112, NULL, NULL, NULL, 'maarceloantona', 'marceloaanton@outlook.com', '$2b$10$G8ANwkM7iF6kW8tCDf2eUOPheAgTc81aBMHpAX7z17XTF0j0lfdtK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 19:13:29', '2024-07-09 19:13:29', NULL),
	(113, NULL, NULL, NULL, 'marcelo', 'marcelo@marcelo.com', '$2b$10$pCqcaj1OBW.7TktEPyVRm.SmpkX0KZu.BzOZS6iG0b8qJkzAkji4.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-10 17:17:23', '2024-07-10 17:17:23', NULL),
	(114, NULL, NULL, NULL, 'admin123', 'a@a.com', '$2b$10$efFd6Ef0m4FpVgkYJU8q6egHHQR1MYjvlFIB5qutp5nZqhHQ1Enya', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-10 17:26:58', '2024-07-10 17:26:58', NULL),
	(115, NULL, NULL, NULL, 'test', 't@t.com', '$2b$10$DeGC5EyJNt.O7jBhYwr8ru4OESg6M4zOO5Vcj973hldSj9Z9MSP4m', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-10 17:46:02', '2024-07-10 17:46:02', NULL);

-- Volcando estructura para tabla db_tpo_nodejs.vuelos
CREATE TABLE IF NOT EXISTS `vuelos` (
  `id_vuelo` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_vuelo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.vuelos: ~0 rows (aproximadamente)
DELETE FROM `vuelos`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
