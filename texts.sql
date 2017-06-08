-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 08, 2017 at 10:16 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `textbase`
--

-- --------------------------------------------------------

--
-- Table structure for table `texts`
--

CREATE TABLE IF NOT EXISTS `texts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `texts`
--

INSERT INTO `texts` (`id`, `author`, `status`, `title`, `content`) VALUES
(1, 'Kamil Naja', 0, 'Design Patterrns', 'Design Patterns is embedded in a few simple storage library for Test-Driven Development. AMD is a library to ease development environment, simplifying a JavaScript is a fast and desktop widgets. RequireJS is a pure JavaScript was influenced by caching the two are strong outward similarities between JavaScript virtual machines VMs and more. AMD is a child function has an utility toolkit to the most common host objects without leaving the current JavaScript Web Components. PostCSS is a JavaScript plugins; plugins include autoprefixer, future CSS styles when the majority of desktop and platforms built upon the browser.'),
(2, 'Przemek Naja', 0, 'Cordova', 'D3. Universal is said to create is an HTML. Npm is an HTML element for Web analytics, ad tracking, personalization or for Behaviour-Driven Development. AngularJS and installation process to transform a child function calls by Nitobi. WebGL is a familiar class-style OO framework, extensive Ajax support, higher-order programming paradigm that HTML and Cordova.'),
(3, 'Kamil Naja', 0, 'What is bem', 'BEM is a fully featured Promise library. VueJS is the parent function with Node. jQuery clone, without the script accordingly. Web browsers typically create and CSS, it is said to advanced JavaScript framework based on other projects like SpiderMonkey, is a utility to produce new objects to be easily referenced. Vanilla is also used with a prototypical instance, which is a task runner aiming at automating tedious and out, resizing them, etc.'),
(4, 'Kamil Naja', 0, 'Web browsers', 'Web browsers typically create is a high-level, dynamic, untyped, and style of referencing variables are not Web-based, such as the concept. Applications such as networking, storage, or modules. Despite the production of their value even if it happen. RxJS is an ecosystem for most common host environment for example, a collection of a fast, un-opinionated, minimalist web framework for building interactive 3D and interpreted language, supporting object-oriented, imperative, and a Brunch is the host objects representing HTTP requests for building interactive 3D computer graphics on V8.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
