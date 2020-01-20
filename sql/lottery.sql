/*
 Navicat MySQL Data Transfer

 Source Server         : l-node
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : lottery

 Target Server Version : 80011
 File Encoding         : utf-8

 Date: 06/12/2018 15:51:58 PM
*/


SET NAMES utf8;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  id varchar(255) NOT NULL,
  nickName varchar(255) DEFAULT NULL,
  phone varchar(20)  DEFAULT NULL,
  PRIMARY KEY (id)
  );

INSERT INTO Users VALUES 
    ('1', 'Bill', '1223456'),
    ('2', 'Bill', '1223456'),
    ('3', 'Bill', '1223456'),
    ('4', 'Bill', '1223456'),
    ('5', '张三', '92939293232'),
    ('6', '流水', '92939293232'),
    ('7', '历史', '92939293232'),
    ('8', 'lsd', '92939293232'),
    ('9', '连锁店', '92939293232'),
    ('10', '连锁店1', '92939293232'),
    ('11', '藕丝', '92939293232'),
    ('12', '老111', '92939293232'),
    ('13', '开始', '92939293232');


