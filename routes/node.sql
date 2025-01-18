-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 18, 2025 at 06:58 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `uuid` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactnumber` varchar(100) NOT NULL,
  `paymentmethod` varchar(100) NOT NULL,
  `total` int NOT NULL,
  `productDetails` json NOT NULL,
  `createdBy` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `name`, `uuid`, `email`, `contactnumber`, `paymentmethod`, `total`, `productDetails`, `createdBy`) VALUES
(1, 'John Doe', '3777e380-d454-11ef-82d3-b7ec5194b86d', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(2, 'John Doe', '72b0b760-d454-11ef-a202-7759a3699d78', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(3, 'John Doe', 'b0bd44b0-d454-11ef-a9d4-d74521756909', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(4, 'John Doe', 'cec827e0-d454-11ef-a9d4-d74521756909', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(5, 'John Doe', 'fc302610-d454-11ef-a857-efe17f912910', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(6, 'John Doe', '9d94fb70-d455-11ef-a857-efe17f912910', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 5, \"quantity\": 2}, {\"name\": \"Sandwich\", \"price\": 10, \"quantity\": 2}]', 'admin'),
(7, 'John Doe', '5b225f70-d456-11ef-8e38-8f20498d782c', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(8, 'John Doe', '67281210-d456-11ef-8f7d-bf4dba131420', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(9, 'John Doe', '7c664d90-d456-11ef-a7a6-cb58ddf9d8d4', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(10, 'John Doe', 'a07fc9e0-d456-11ef-bacc-c134414c95fe', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(11, 'John Doe', 'baae8450-d456-11ef-92e6-19f60dd7d183', 'john.doe@example.com', '1234567890', 'Credit Card', 100, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(12, 'John Doe', 'ce3cecf0-d456-11ef-92e6-19f60dd7d183', 'john.doe@example.com', '1234567890', 'Credit Card', 4, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(13, 'John Doe', 'd601e8a0-d456-11ef-92e6-19f60dd7d183', 'john.doe@example.com', '1234567890', 'Credit Card', 4, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(14, 'John Doe', '31763b50-d457-11ef-a7ad-13d4a292feb3', 'john.doe@example.com', '1234567890', 'Credit Card', 4, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(15, 'John Doe', '7724abf0-d457-11ef-bb47-57a5f53bcfad', 'john.doe@example.com', '1234567890', 'Credit Card', 4, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin'),
(16, 'John Doe', 'dba28840-d457-11ef-bb47-57a5f53bcfad', 'john.doe@example.com', '1234567890', 'Credit Card', 4, '[{\"name\": \"Coffee\", \"price\": 1.5, \"quantity\": 1}, {\"name\": \"Sandwich\", \"price\": 2, \"quantity\": 1}]', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `Name`) VALUES
(1, 'pizza'),
(2, 'coffee'),
(3, 'shampo'),
(4, 'eee');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `categorgyid` int NOT NULL,
  `description` varchar(22) NOT NULL,
  `price` int NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `categorgyid`, `description`, `price`, `status`) VALUES
(2, 'caano moos', 32, 'it is good', 1, 'true'),
(3, 'mango', 1, 'good', 12, 'true'),
(4, 'mango', 1, 'good', 12, 'true'),
(5, 'mango000', 1, 'good', 12, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `contactnumber` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `contactnumber`, `email`, `password`, `status`, `role`) VALUES
(1, 'abdirahmaan', '334332', 'abdirahman@gmail.com', 123, 'active', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`contactnumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
