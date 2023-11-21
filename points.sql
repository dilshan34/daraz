-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2023 at 05:50 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `points`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `loyalty_points` int(11) DEFAULT 0,
  `role_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `email`, `loyalty_points`, `role_id`) VALUES
(1, 'dilshan', 'dilshan@gmail.com', 210, 2),
(10, 'gihan', 'gihan@gmail.com', 52, 2),
(11, 'admin', 'admin@gmail.com', 0, 1),
(12, 'gihan', 'gihan1@gmail.com', 0, 2),
(13, 'Jimith', 'jimith@gmail.com', 45, 2),
(14, 'Pubudu', 'pubudu@gmail.com', 0, 2),
(15, 'Hiruni', 'hiruni@gmail.com', 0, 2),
(16, 'Thishan', 'thishan@gmail.com', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `price`) VALUES
(1, 'Laptop', '50000.00'),
(2, 'Mouse', '500.00'),
(3, 'key Board', '2000.00'),
(4, 'Speaker', '3500.00');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `purchase_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `purchase_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`purchase_id`, `customer_id`, `product_id`, `purchase_date`) VALUES
(2, 1, 1, '2023-11-19 18:30:00'),
(3, 1, 1, '2023-11-19 18:30:00'),
(4, 1, 1, '2023-11-20 18:30:00'),
(5, 1, 1, '2023-11-20 18:30:00'),
(6, 1, 1, '2023-11-20 18:30:00'),
(7, 1, 1, '2023-11-20 18:30:00'),
(8, 10, 1, '2023-11-20 18:30:00'),
(9, 10, 2, '2023-11-20 18:30:00'),
(10, 10, 3, '2023-11-20 18:30:00'),
(11, 1, 1, '2023-11-20 18:30:00'),
(12, 1, 1, '2023-11-20 18:30:00'),
(13, 1, 1, '2023-11-20 18:30:00'),
(14, 1, 1, '2023-11-20 18:30:00'),
(15, 1, 1, '2023-11-20 18:30:00'),
(16, 1, 1, '2023-11-20 18:30:00'),
(17, 1, 1, '2023-11-20 18:30:00'),
(18, 1, 1, '2023-11-20 18:30:00'),
(19, 13, 1, '2023-11-20 18:30:00'),
(20, 13, 1, '2023-11-20 18:30:00'),
(21, 13, 2, '2023-11-20 18:30:00'),
(22, 13, 3, '2023-11-20 18:30:00'),
(23, 13, 3, '2023-11-20 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `redeemed_points`
--

CREATE TABLE `redeemed_points` (
  `redemption_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `points_redeemed` int(11) DEFAULT NULL,
  `redemption_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `redeemed_points`
--

INSERT INTO `redeemed_points` (`redemption_id`, `customer_id`, `points_redeemed`, `redemption_date`) VALUES
(1, 1, 20, '2023-11-20 11:21:04'),
(2, 1, 20, '2023-11-19 18:30:00'),
(3, 1, 20, '2023-11-19 18:30:00'),
(4, 1, 20, '2023-11-19 18:30:00'),
(5, 1, 10, '2023-11-20 18:30:00'),
(6, 1, 10, '2023-11-20 18:30:00'),
(7, 10, 0, '2023-11-20 18:30:00'),
(8, 10, 0, '2023-11-20 18:30:00'),
(9, 10, 0, '2023-11-20 18:30:00'),
(10, 10, 10, '2023-11-20 18:30:00'),
(11, 10, 10, '2023-11-20 18:30:00'),
(12, 10, 10, '2023-11-20 18:30:00'),
(13, 10, 7, '2023-11-20 18:30:00'),
(14, 10, 5, '2023-11-20 18:30:00'),
(15, 10, 5, '2023-11-20 18:30:00'),
(16, 10, 10, '2023-11-20 18:30:00'),
(17, 10, 4, '2023-11-20 18:30:00'),
(18, 10, 4, '2023-11-20 18:30:00'),
(19, 1, 40, '2023-11-20 18:30:00'),
(20, 1, 20, '2023-11-20 18:30:00'),
(21, 1, 10, '2023-11-20 18:30:00'),
(22, 1, 10, '2023-11-20 18:30:00'),
(23, 1, 20, '2023-11-20 18:30:00'),
(24, 1, 110, '2023-11-20 18:30:00'),
(25, 13, 5, '2023-11-20 18:30:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `redeemed_points`
--
ALTER TABLE `redeemed_points`
  ADD PRIMARY KEY (`redemption_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `redeemed_points`
--
ALTER TABLE `redeemed_points`
  MODIFY `redemption_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `redeemed_points`
--
ALTER TABLE `redeemed_points`
  ADD CONSTRAINT `redeemed_points_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
