-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 08, 2017 at 05:13 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) CHARACTER SET utf8 NOT NULL,
  `newstitle` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) CHARACTER SET utf8 NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`, `status`) VALUES
(45, '精选', '精选', '', '2017-05-02 00:00:00', '百度', 1),
(46, '百家', '百家新闻', 'img/4.jpg', '2017-05-03 00:00:00', '百度', 1),
(47, '本地', '本地新闻', 'img/5.jpg', '2017-05-03 00:00:00', '百度', 1),
(48, '图片', '图片', 'img/1.jpg', '2017-05-03 00:00:00', 'baidu', 1),
(52, '本地', '本地', '', '2017-05-02 00:00:00', '百度', 1),
(53, '搞笑', '搞笑新闻', '', '2017-05-05 00:00:00', '23333', 0),
(58, '精选', '精选新闻', 'img/4.jpg', '2017-05-08 00:00:00', 'hello', 0),
(61, '互联网', '互联网', 'img/3.jpg', '2017-05-08 00:00:00', '互联网', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=65;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
