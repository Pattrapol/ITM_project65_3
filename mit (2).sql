-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2023 at 09:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mit`
--
CREATE DATABASE IF NOT EXISTS `mit` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `mit`;

-- --------------------------------------------------------

--
-- Table structure for table `maskdetect`
--

DROP TABLE IF EXISTS `maskdetect`;
CREATE TABLE `maskdetect` (
  `Detect_ID` int(11) NOT NULL COMMENT 'ID การตรวจจับ',
  `DateTime` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'วันเวลาที่ตรวจจับ',
  `Status` enum('ใส่','ไม่ใส่','ใส่ผิด') COLLATE utf8_unicode_ci NOT NULL COMMENT 'สถานะการตรวจจับ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `maskdetect`
--

INSERT INTO `maskdetect` (`Detect_ID`, `DateTime`, `Status`) VALUES
(1, '2023-02-25 13:24:46', 'ใส่'),
(2, '2023-02-25 13:24:46', 'ใส่'),
(7, '2023-02-25 13:25:00', 'ใส่'),
(8, '2023-02-25 13:58:06', 'ไม่ใส่'),
(9, '2023-02-25 13:58:06', 'ไม่ใส่'),
(10, '2023-02-25 13:58:06', 'ใส่ผิด'),
(11, '2023-02-25 13:58:06', 'ใส่'),
(12, '2023-02-25 13:58:06', 'ใส่ผิด'),
(13, '2023-02-26 13:58:06', 'ไม่ใส่'),
(14, '2023-02-26 13:58:06', 'ใส่ผิด'),
(15, '2023-02-26 13:58:06', 'ไม่ใส่'),
(16, '2023-02-26 13:58:06', 'ใส่ผิด'),
(17, '2023-02-26 13:58:06', 'ใส่'),
(18, '2023-02-26 13:58:06', 'ใส่'),
(19, '2023-02-26 13:58:06', 'ไม่ใส่'),
(20, '2023-02-27 13:58:06', 'ใส่ผิด'),
(21, '2023-02-27 13:58:06', 'ไม่ใส่'),
(22, '2023-02-27 13:58:06', 'ใส่'),
(23, '2023-02-27 13:58:06', 'ใส่ผิด'),
(24, '2023-02-27 13:58:06', 'ใส่'),
(25, '2023-02-27 13:58:06', 'ไม่ใส่'),
(26, '2023-02-27 13:58:06', 'ใส่ผิด'),
(27, '2023-02-28 13:58:06', 'ใส่'),
(28, '2023-02-28 01:38:22', 'ไม่ใส่');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `maskdetect`
--
ALTER TABLE `maskdetect`
  ADD PRIMARY KEY (`Detect_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `maskdetect`
--
ALTER TABLE `maskdetect`
  MODIFY `Detect_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID การตรวจจับ', AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
