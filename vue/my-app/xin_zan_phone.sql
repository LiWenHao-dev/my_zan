SET NAMES UTF8;
DROP DATABASE IF EXISTS xin_zan;
CREATE DATABASE xin_zan CHARSET=UTF8;
USE xin_zan;
#首页轮播
CREATE TABLE zan_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
INSERT INTO zan_index_carousel VALUES(1,'img/photo_7_7_448.jpg','轮播一','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_606.jpg','轮播二','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_608.jpg','轮播三','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_583.jpg','轮播四','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_575.jpg','轮播五','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_569.jpg','轮播六','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_558.jpg','轮播七','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_555.jpg','轮播八','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_544.jpg','轮播九','');
INSERT INTO zan_index_carousel VALUES(NULL,'img/photo_7_7_490.jpg','轮播十','');

#首页商品
CREATE TABLE zan_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price INT,
	ishave bool,
	href VARCHAR(128)
);
INSERT INTO zan_index_product VALUES(1,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3178_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3122_bundle.jpg',6888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3206_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key2_3033_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3172_bundle.jpg',8888,0,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2194_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2962_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_1697_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2052_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2557_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2174_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2468_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3180_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_1289_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2012_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2412_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2035_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2910_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2849_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2911_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_1788_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_951_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3006_villa.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2614_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3184_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3214_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2828_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3200_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_1885_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2865_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_3082_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2033_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2846_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2741_bundle.jpg',8888,1,'');
INSERT INTO zan_index_product VALUES(NULL,'【轻奢小团】2019冬季芬兰瑞典9天7晚魔力欧若拉追光之旅——遥望璀璨星空，触碰梦幻极光','穿越北部芬兰瑞典，玩转乐趣冰雪运动，来一次真正华丽的极地之旅','img/index_pic/key3_2800_bundle.jpg',8888,1,'');



create table zan_zhou(
	zhouid int PRIMARY KEY,
	zhouname varchar(64)
);
INSERT INTO zan_zhou VALUES
	(1,'热门目的地'),(2,'东亚'),(3,'阿拉美洲'),(4,'中东与北非'),
	(5,'西欧地中海'),(6,'大洋洲'),(7,'北欧');

#所有国家
CREATE TABLE zan_country(
	countryid INT PRIMARY KEY AUTO_INCREMENT,
	countryname VARCHAR(64),
	href VARCHAR(128),
	zhouid int,
	foreign key (zhouid) references zan_zhou(zhouid)
);
INSERT INTO zan_country VALUES
	(1,'中国','',1),(2,'东非','',1),(3,'南非','',1),(4,'北欧','',1)
	,(5,'夏威夷','',1),(6,'泰国','',1),(7,'马尔代夫','',1)
	,(8,'中国','',1),(9,'韩国','',1),(10,'法国','',1),(null,'斯里兰卡','',1)
	,(null,'南部非州','',1),(null,'中东与北非','',1),(null,'南极与北极','',1),(null,'云南','',1)
	,(null,'中国','',2),(null,'韩国','',2),(null,'日本','',2),(null,'阿根廷','',3),(null,'巴西','',3)
	,(null,'玻利维亚','',3),(null,'古巴','',3),(null,'秘鲁','',3),(null,'墨西哥','',3),(null,'智利','',4)
	,(null,'阿根廷','',4),(null,'阿曼','',4),(null,'卡塔尔','',4),(null,'摩洛哥','',4),(null,'爱尔兰','',4)
	,(null,'德国','',4),(null,'法国','',4),(null,'荷兰','',5),(null,'黑山','',5)
	,(null,'马耳他','',5),(null,'摩纳哥','',5),(null,'葡萄牙','',5),(null,'瑞士','',5)
	,(null,'土耳其','',5),(null,'西班牙','',5),(null,'意大利','',5)
	,(null,'英国','',6),(null,'澳大利亚','',6),(null,'大溪地','',6),(null,'斐济','',6)
	,(null,'新西兰','',7),(null,'冰岛','',7),(null,'芬兰','',7);

#楼层标题
CREATE TABLE zan_biaoti(
	biaotiid INT PRIMARY KEY AUTO_INCREMENT,
	countryid INT,
	title varchar(64),
	subtitle varchar(64),
	type int,#1-目的地 2-赞品旅程 3-轻奢小团 4-海外自由行 5-精品别墅 6-精选酒店
	foreign key (countryid) references zan_country(countryid)
);
INSERT INTO zan_biaoti VALUES
	(1,1,'中国目的地 China Destinations','全部产品',1),
	(null,1,'赞品旅程·中国 China Independent Signature Journeys','赞品旅程',2),
	(null,1,'轻奢小团·中国 China Small Luxury Groups','轻奢小团',3),
	(null,1,'海外自由行·中国 China Oversea Getaways','海外自由行',4),
	(null,1,'精品别墅·中国 China Private Villas','精品别墅',5),
	(null,1,'精选酒店·中国 Hotels in China','精选酒店',6),

	(null,18,'日本目的地 Japan Destinations','全部产品',1),
	(null,18,'赞品旅程·日本 Japan Independent Signature Journeys','赞品旅程',2),
	(null,18,'轻奢小团·日本 Japan Small Luxury Groups','轻奢小团',3),
	(null,18,'海外自由行·日本 Japan Oversea Getaways','海外自由行',4),
	(null,18,'精品别墅·日本 Japan Private Villas','精品别墅',5),
	(null,18,'精选酒店·日本 Hotels in Japan','精选酒店',6);


#国家下的城市
CREATE TABLE zan_city(
	cityid INT PRIMARY KEY AUTO_INCREMENT,
	countryid INT,
	img VARCHAR(128),
	cityname VARCHAR(64),
	subtitle VARCHAR(64),
	promise VARCHAR(64),
	price INT,
	type varchar(64),#1-日本目的地 2-赞品旅程 3-轻奢小团 4-海外自由行 5-精品别墅 6-精选酒店
	count int(64),
	foreign key (countryid) references zan_country(countryid)
);
#日本商品
INSERT INTO zan_city VALUES
(1,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,33),
(2,18,'img/japan_pic/5c8153896352fcd11e011b372219197f.jpg','东京','Tokyo','7天无理由退款',18888,1,12),
(3,18,'img/japan_pic/397deebc56e46597f2a212f7954ba620.jpg','东海岛','Tokaido','7天无理由退款',18888,1,10),
(4,18,'img/japan_pic/77f3fa67c2a1f543fa3d4d7260f94152.jpg','九州','Kyushu','7天无理由退款',18888,1,12),
(5,18,'img/japan_pic/6eb006dfddd82a3e843fc56f36498d53.jpg','京都','Kyoto','7天无理由退款',18888,1,12),
(6,18,'img/japan_pic/cad2b855babb9915623b803413719175.jpg','伊势','Ise','7天无理由退款',18888,1,12),
(7,18,'img/japan_pic/36f60054fa88d39250bfc059bb815455.jpg','伊豆','Izu','7天无理由退款',18888,1,12),
(8,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','伊贺','Saga ken','7天无理由退款',18888,1,12),
(9,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(10,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(11,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(12,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(13,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(14,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(15,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(16,18,'img/japan_pic/902b542a0c6cf0f4da0f3a6d30383d0e.jpg','三重县','Mie','7天无理由退款',18888,1,12),
(null,18,'img/japan_pic/key3_2492_bundle.jpg','','日本四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',12888,2,''),
(null,18,'img/japan_pic/key3_2458_bundle.jpg','','日本北陆及中部6天5晚文化穿越之旅——寻江户遗韵，访自然胜境','7天无理由退款',18889,2,''),
(null,18,'img/japan_pic/key3_2024_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',13888,2,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',14888,2,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',15888,2,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',16888,2,''),
(null,18,'img/japan_pic/key3_2492_bundle.jpg','','日本四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',17888,2,''),
(null,18,'img/japan_pic/key3_2458_bundle.jpg','','日本北陆及中部6天5晚文化穿越之旅——寻江户遗韵，访自然胜境','7天无理由退款',19888,2,''),
(null,18,'img/japan_pic/key3_2024_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',10888,2,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18688,2,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18588,2,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18488,2,''),
(null,18,'img/japan_pic/key3_3103_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18838,3,''),
(null,18,'img/japan_pic/key2_3217_bundle.jpg','','【轻奢小团】日本9天8晚本州&四国艺术人文之旅——「得到」APP主理人严伯钧亲自带队讲解','7天无理由退款',18828,3,''),
(null,18,'img/japan_pic/key3_1481_bundle.jpg','','【东瀛物语】日本东京&箱根6天5晚隐泉私赏之旅','7天无理由退款',18881,4,''),
(null,18,'img/japan_pic/key3_2590_bundle.jpg','','【东瀛物语】日本冲绳本岛&竹富岛虹夕诺雅5天4晚梦幻穿越之旅','7天无理由退款',18882,4,''),
(null,18,'img/japan_pic/key3_3103_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18883,4,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18884,4,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18885,4,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18886,4,''),
(null,18,'img/japan_pic/key3_1481_bundle.jpg','','【东瀛物语】日本东京&箱根6天5晚隐泉私赏之旅','7天无理由退款',18887,4,''),
(null,18,'img/japan_pic/key3_2590_bundle.jpg','','【东瀛物语】日本冲绳本岛&竹富岛虹夕诺雅5天4晚梦幻穿越之旅','7天无理由退款',1888,4,''),
(null,18,'img/japan_pic/key3_3103_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18889,4,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,4,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,4,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,4,''),
(null,18,'img/japan_pic/key3_3103_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key2_3217_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key3_2492_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,5,''),
(null,18,'img/japan_pic/key3_2492_bundle.jpg','','日本四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,6,''),
(null,18,'img/japan_pic/key3_2590_bundle.jpg','','【东瀛物语】日本冲绳本岛&竹富岛虹夕诺雅5天4晚梦幻穿越之旅','7天无理由退款',18888,6,''),
(null,18,'img/japan_pic/key3_3103_bundle.jpg','','【轻奢小团】2018日本九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,6,''),
(null,18,'img/japan_pic/key3_3028_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,6,''),
(null,18,'img/japan_pic/key3_3021_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,6,''),
(null,18,'img/japan_pic/key3_2557_bundle.jpg','','日本北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,6,'');

#中国商品
INSERT INTO zan_city VALUES
(null,1,'img/china_pic/35a126ce09614292e46a58b80d18999d.jpg','上海','Shanghai','7天无理由退款',18888,1,50),
(null,1,'img/china_pic/249a7ad543ffd9d172d71d6c39e47f29.jpg','云南','Yunnan','7天无理由退款',18888,1,45),
(null,1,'img/china_pic/120700638bc15b923ac355a081058cbb.jpg','北京','Beijing','7天无理由退款',18888,1,38),
(null,1,'img/china_pic/d3c3d780e7a97fd96a011af76e5e3cd5.jpg','吉林','Jilin','7天无理由退款',18888,1,20),
(null,1,'img/china_pic/321a4e4e364910c8c07b885b3f270420.jpg','四川','Sichuan','7天无理由退款',18888,1,16),
(null,1,'img/china_pic/fc89329f7f274164d798d1f6b396695d.jpg','天津','Tianjin','7天无理由退款',18888,1,15),
(null,1,'img/china_pic/6920864f264d67e7e2652f7e65d2f430.jpg','山东','Shandong','7天无理由退款',18888,1,8),
(null,1,'img/china_pic/d96f0725cbcf6b102e09b2dba68d99e6.jpg','广州','Guangzhou','7天无理由退款',18888,1,6),
(null,1,'img/china_pic/3a3001e09d92af345b573f6c3684aa33.jpg','广西','Guangxi','7天无理由退款',18888,1,4),
(null,1,'img/china_pic/00a40f429714092aaf652039090a5c7d.jpg','江苏','Jiangsu','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/b92100025fec4c49fc9a188a0b6a2956.jpg','湖南','Hunan','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/1d9d71a6d9ed0d3a458227a68013f919.jpg','澳门','Aomen','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/0ba9557bb91d2af54cd0cebb96479d09.jpg','桂林','Guilin','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/13b7c00242e462956254246de500d7ff.jpg','浙江','Zhejiang','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/6f1712bcfac9379faf12d91cbe3847ba.jpg','福建','Fujian','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/35a126ce09614292e46a58b80d18999d.jpg','重庆','Chongqing','7天无理由退款',18888,1,3),
(null,1,'img/china_pic/key3_1820_villa.jpg','','四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2957_villa.jpg','','四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2683_villa.jpg','','四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2312_villa.jpg','','四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2172_villa.jpg','','北陆及中部6天5晚文化穿越之旅——寻江户遗韵，访自然胜境','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2219_villa.jpg','','北海道6天5晚亲子欢享之旅——纵情玩转北国の夏，赏浪漫薰衣草花海','7天无理由退款',18888,2,''),
(null,1,'img/china_pic/key3_2707_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,3,''),
(null,1,'img/china_pic/key3_2711_bundle.jpg','','【轻奢小团】9天8晚本州&四国艺术人文之旅——「得到」APP主理人严伯钧亲自带队讲解','7天无理由退款',18888,3,''),
(null,1,'img/china_pic/key3_93.jpg','','【东瀛物语】东京&箱根6天5晚隐泉私赏之旅','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_2180_bundle.jpg','','【东瀛物语】冲绳本岛&竹富岛虹夕诺雅5天4晚梦幻穿越之旅','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_1034_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_736_2369434.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_1192_7275992.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_1456_5052511.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,4,''),
(null,1,'img/china_pic/key3_1200_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,1,'img/china_pic/key3_2707_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,1,'img/china_pic/key3_2711_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),

(null,1,'img/china_pic/key3_1635_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,1,'img/china_pic/key3_1657_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),
(null,1,'img/china_pic/key3_1763_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,5,''),


(null,1,'img/china_pic/key3_2180_bundle.jpg','','【东瀛物语】冲绳本岛&竹富岛虹夕诺雅5天4晚梦幻穿越之旅','7天无理由退款',18888,6,''),
(null,1,'img/china_pic/key3_1034_bundle.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,6,''),
(null,1,'img/china_pic/key3_736_2369434.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,6,''),
(null,1,'img/china_pic/key3_1192_7275992.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,6,''),
(null,1,'img/china_pic/key3_1456_5052511.jpg','','【轻奢小团】2018九州5天4晚醉美枫情之旅——赏漫天红叶，品私藏秋景','7天无理由退款',18888,6,''),
(null,1,'img/china_pic/key3_1820_villa.jpg','','四国及本州7天6晚文艺雅致之旅——品最艺术濑户内海，访最精彩关西名城','7天无理由退款',18888,6,'');

#所有商品图片
CREATE TABLE zan_pics(
	picid INT PRIMARY KEY AUTO_INCREMENT,
	cityid INT,
	sm VARCHAR(128),
	md VARCHAR(128),
	lg VARCHAR(128),
	foreign key (cityid) references zan_city(cityid)
);

#用户注册表
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(64),        #用户名
	upwd VARCHAR(32),         #密码
	email VARCHAR(64),        #邮箱
	phone VARCHAR(11),        #电话
	user_name VARCHAR(32),    #真实姓名
	avatar varchar(128),
	gender BOOL               #性别 1-男 0-女
);
INSERT INTO user VALUES(1,'张张','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/addcb43170d36775f0a0db8a762599c2.jpg',1);
INSERT INTO user VALUES(2,'慌慌','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/713c9861e56dfe9cf762422eb425197a.jpg',1);
INSERT INTO user VALUES(3,'丁丁','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/5bb8baa03a5eb.jpg',1);
INSERT INTO user VALUES(4,'当当','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/7d1a57fb28135f395ec5a53cfdacb62a_.jpg',1);
INSERT INTO user VALUES(5,'tom','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/5bb8baa03a5eb.jpg',1);
INSERT INTO user VALUES(6,'jack','123456','415763176@qq.com;','18500215576','李张张','img/details_pic/addcb43170d36775f0a0db8a762599c2.jpg',1);


#旅行风格
create table style(
	styleid int PRIMARY KEY AUTO_INCREMENT,
	style varchar(64),
	count int
);
 insert into style values(1,'旅行',259),
	(null,'美食',73),(null,'家庭亲子',53),(null,'文化',52),(null,'时尚',41),(null,'设计',37),(null,'热点',30),
	(null,'历史人文',5),(null,'运动探险',5),(null,'旅行',6),(null,'自然奇观',8),(null,'浪漫蜜月',10),(null,'娱乐',3),
	(null,'历史人文',5),(null,'运动探险',5),(null,'旅行',6),(null,'自然奇观',8),(null,'浪漫蜜月',10),(null,'娱乐',3);

#详情页轮播
create table zan_details_carousel(
	detaid int PRIMARY KEY AUTO_INCREMENT,
	pid int,
	img varchar(128),
	foreign key (pid) references zan_index_product(pid)
);

insert into zan_details_carousel values
	(1,1,'img/details_pic/photo_919_17574_eb37424f-98e0-4483-b5b5-cd50d1bc1bf0.jpg'),
	(null,1,'img/details_pic/photo_919_17577_23b5d5fd-c68c-4f71-95d8-0fb538a54dcd.jpg'),
	(null,1,'img/details_pic/photo_919_17587_ffb06d12-f1d3-488b-a8ce-d3b00976bdbc.jpg'),
	(null,1,'img/details_pic/photo_919_17588_f3665207-4b19-45cc-a0ea-869602683b6e.jpg'),
	(null,1,'img/details_pic/photo_919_17566_1de17de4-aca9-4a6a-b13a-f6bfbe6d5856.jpg'),
	(null,1,'img/details_pic/photo_919_17569_94235f3a-f9b2-4a2d-bc30-b709262f881e.jpg'),
	(null,1,'img/details_pic/photo_919_17570_6d380c5c-c52c-4e4a-b918-454bb7eca0be.jpg'),
	(null,1,'img/details_pic/photo_919_17547_3349a768-c6cb-4c86-bd92-86724bf45b57.jpg'),
	(null,1,'img/details_pic/photo_919_17549_b11b3bd7-3a43-4e0f-ad20-18240298d16c.jpg'),
	(null,1,'img/details_pic/photo_919_17578_63d7ef83-eafd-4d6a-9e40-e0de571f2833.jpg'),

	(null,2,'img/details_pic/photo_919_17578_63d7ef83-eafd-4d6a-9e40-e0de571f2833.jpg'),
	(null,2,'img/details_pic/photo_919_17547_3349a768-c6cb-4c86-bd92-86724bf45b57.jpg'),
	(null,2,'img/details_pic/photo_919_17588_f3665207-4b19-45cc-a0ea-869602683b6e.jpg'),
	(null,2,'img/details_pic/photo_919_17577_23b5d5fd-c68c-4f71-95d8-0fb538a54dcd.jpg'),
	(null,2,'img/details_pic/photo_919_17566_1de17de4-aca9-4a6a-b13a-f6bfbe6d5856.jpg'),
	(null,2,'img/details_pic/photo_919_17569_94235f3a-f9b2-4a2d-bc30-b709262f881e.jpg'),
	(null,2,'img/details_pic/photo_919_17570_6d380c5c-c52c-4e4a-b918-454bb7eca0be.jpg'),
	(null,2,'img/details_pic/photo_919_17547_3349a768-c6cb-4c86-bd92-86724bf45b57.jpg'),
	(null,2,'img/details_pic/photo_919_17549_b11b3bd7-3a43-4e0f-ad20-18240298d16c.jpg'),
	(null,2,'img/details_pic/photo_919_17578_63d7ef83-eafd-4d6a-9e40-e0de571f2833.jpg');

#套餐内容
create table zan_details_taocan(
	taoid int PRIMARY KEY AUTO_INCREMENT,
	pid int,
	title varchar(32),
	subtitle varchar(1024),
	foreign key (pid) references zan_index_product(pid)
);
 insert into zan_details_taocan values
	(1,1,'神秘拉普兰之光','孕育着北欧神话般的雪原仙境，大自然在这里用极光作诗，这就是拉普兰。地处北极圈内，拉普兰是一片未受污染的纯净之地，也自然是世界上观赏北极光的最佳地点之一。梦幻、绚丽、壮阔、神秘，极光之美看似不真实，但来到这里，您会发现极光之美并非遥不可及。入住莱维乌苏瓦拉山丘上的穹顶豪华玻璃屋，就相当于拥有观看世界上最为壮观的光之秀的前排坐席，在离极光最近的地方，以最华丽的方式欣赏大自然的神迹。 赞那度为您包下了一座野外关上极光木屋平台，让您坐拥独家的浪漫美景。即使已近深夜，您希望在室内尊享温暖，赞那度也为您在室内准备好了热饮、烤肠、火炉，让您在舒服的环境下等待极光的降临。'),
	(null,1,'北欧都市不冷淡','北欧人的幸福指数和北欧城市的宜居指数一样，常年占据世界榜首，只要来到这里，您就能感受到独属于北欧的精致慢生活。芬兰首都赫尔辛基是一个富有活力的海滨城市，节奏放松休闲。美丽的岛屿、葱绿的公园、一流的餐厅和夜店，让赫尔辛基更显生气勃勃。整座城市布局紧凑，您可以轻松步行逛遍全城，从设计、建筑、文化、购物等多个视角探索这座城市，您还可以走进当地人的家中，跟主人学做芬兰小食，体验他们的日常生活。而邻居瑞典的首都斯德哥尔摩素有“北方威尼斯”之称，由14座美丽的岛屿组成，57座桥将各岛相互连接。乘船航行水路是理想的观光方式之一，而惬意的步行则更能近距离了解这座孕育了世界知名品牌的时尚之都，体验斯德哥尔摩多姿多彩的时尚风格。'),
	(null,2,'纯净新西兰','金色的平原、延绵的冰川、峻秀的峡谷、温柔的湖泊、透明的空气，这就是新西兰，太平洋上的翡翠，全世界旅行者心目中的纯净世界，全世界电影人梦寐以求的魔幻中土世界。彼得·杰克逊的点金之手，不仅出品了史诗般的《指环王》和《霍比特人》三部曲，更让全世界为新西兰而疯狂——清澈的溪流在山间奔腾，飞下峭壁形成一条条瀑布；皑皑白雪覆盖在山巅，俯瞰着脚下浓荫蔽天的幽深山谷和远古冰川——新西兰全境超过150处彼得·杰克逊精心挑选出的取景地，你也可以亲临感受！'),
	(null,2,'壮美风光 触手可及','从最大都会奥克兰出发，一路向南，探访深山中的夏尔（霍比屯），梦幻般的萤火虫洞穴，大洋洲最大的湖泊——陶波湖，多姿多彩的汤加里罗国家公园，气势磅礴的胡卡瀑布，亲临“花园城市”基督城，搭乘高山观景火车穿越东西海岸，在福克斯触摸千年冰川，在米佛尔峡湾与海豚嬉戏，坐上四驱车驰骋《指环王》取景地，去箭河淘金一试手气，从皇后镇上方高空一跃而下，给全世界一个大大的拥抱…...从北岛到南岛，此次旅程将带您丈量不可思议的绝美风景。'),
	(null,2,'户外天堂 挑战自我','新西兰人生来热爱挑战，作为“冒险者的天堂”，新西兰也拥有众多不同种类的户外活动，皆值得一试。乘坐喷射快艇观赏胡卡瀑布，徒步穿行汤加里罗国家公园，在福克斯冰川来一次直升机冰川健行，乘船游览“世界第八大奇迹”米佛尔峡湾。在户外运动的发源地——皇后镇，无论您是追求惊险刺激或是初次尝试，都能在这里找到适合您的来体验！');

#行程表
create table zan_details_xingcheng(
	xingid int PRIMARY KEY AUTO_INCREMENT,
	pid int,
	oneday varchar(64),
	oneimg varchar(128),
	onesub varchar(1024),
	twoday varchar(64),
	twoimg varchar(128),
	twosub varchar(1024),
	foreign key (pid) references zan_index_product(pid)
);

insert into zan_details_xingcheng values
(1,1,'第一天 1月26日 周六 北京/上海-瑞典斯德哥尔摩  ','img/details_pic/photo_1402_2186_BItinerary997_1388_BItineraryb7a4b002-b099-4377-bfc3-555bd0883078.jpg','搭乘最快抵达北欧的芬兰航空班机飞往芬兰赫尔辛基，随后转机前往瑞典斯德哥尔摩，抵达后专车送达酒店办理入住。放下行李稍事休息后享用一顿美美的晚餐，用家乡风味犒劳自己的胃并同时缓解长途飞行的疲劳。','第二天 1月27日 周日 斯德哥尔摩（步行游览老城+瓦萨沉船博物馆+斯德哥尔摩市政厅）  ','img/details_pic/photo_1402_2187_BItinerary997_1389_BItinerary8a3e0b88-27e0-4977-8a2c-b34e057051e2.jpg','第一站前往老城。建于13世纪的老城，距今已有700多年历史，城内有中世纪小巷、圆石街道和古式建筑，深受北日耳曼式风格影响。漫步在老城街道，古老的教堂，悠长的鹅卵石小巷，空气中氤氲着咖啡的香气，让时间停留。老城区除了历史遗迹外，还有许多咖啡馆、餐厅和手工艺品店。瑞典200年来没有战争，老城保存完好，尤其是临河和临海的街道上。老城的主要景点有皇宫、斯德哥尔摩大教堂、诺贝尔博物馆和骑士教堂。您将参观'),
(null,2,'第一天 2月7日 周四 国内-奥克兰  ','img/details_pic/photo_1359_2036_BItinerary94094c2e-a6c0-47f9-96f9-2f1cf0642276.jpg','抵达后首先您将来到奥克兰市区饱餐一顿，从美食中获取力量，消除长途飞行带来的疲惫。之后我们会游览这座美丽的城市，我们会来到','第二天 2月8日 周五 奥克兰-剑桥  ','img/details_pic/photo_1359_2034_BItinerary2aa7670f-83f0-47b7-a6c8-b143b04fb7b5.jpg','伊甸山，她是奥克兰众多火山锥中最高的一个，位于奥克兰市中心南面5公里处，是奥克兰的自然最高点。火山锥就是火山喷出物在火山口周围堆积形成的山丘，现在火山锥的坑底是茂盛的绿地，看上去美丽而特别。站在山顶可以欣赏360度的奥克兰美景。随后我们将来到今晚下榻的酒店办理入住（距离140公里，车程约1小时50分钟)。');


#酒店信息表
create table zan_details_jiudianxinxi(
	jiuid int PRIMARY KEY AUTO_INCREMENT,
	pid int,
	img varchar(128),
	name varchar(32),
	site varchar(32),
	title varchar(128),
	foreign key (pid) references zan_index_product(pid)
);

insert into zan_details_jiudianxinxi values
	(1,1,'img/details_pic/key3_215_offlinehotel.jpg','斯德哥尔摩诺比斯酒店','瑞典,斯德哥尔摩','诺比斯酒店坐落在瑞典斯德哥尔摩市中心的Norrmalmstorg广场，是两幢相邻的高大气派的古典建筑，建造于19世纪下半叶，是当时具有代表性的石质建筑。酒店由瑞典著名设计师Claesson Koivisto Rune设计，现代感的室内与外表相对比，赋予酒店独特的个性。'),
	(null,1,'img/details_pic/key3_210_offlinehotel.jpg','尤卡斯耶尔维冰酒店暖房','瑞典,基律纳','来到北极圈以北200公里著名的冰酒店，您绝对会被这里如仙境的景象所震撼！冰酒店建于1989年，是世界上第一座用冰雪来建造的酒店，动用了3万吨雪和4千吨冰修建而成。酒店的冰雪取自于大自然的河流，所有墙壁、屋顶、地板与精美雕饰都由冰和雪构成。'),
	(null,1,'img/details_pic/key3_265_offlinehotel.jpg','莱维金冠玻璃穹顶酒店','芬兰,莱维','12间豪华的玻璃穹顶屋就坐落在乌苏瓦拉山丘，离芬兰最热门的滑雪胜地莱维仅10公里。这些房间称得上是观看世界上最为壮观的光之秀的前排坐席。即便没有北极光，山下莱维村的景色也令人炫目。想在北极光的陪伴下喝上一杯热饮，享用香喷喷的煎肉肠吗？'),
	(null,1,'img/details_pic/key3_267_offlinehotel.jpg','罗瓦涅米北极之光酒店','芬兰,罗瓦涅米','北极之光酒店是罗瓦涅米地区最新开业的精品酒店，距离罗瓦涅米机场和圣诞老人​​村仅有8公里，前往极地博物馆仅有800米，交通相当方便。酒店设计时尚精致，充满北欧风情。热情的24小时前台工作人员很乐意为您推荐当地餐厅、景点或活动。'),

	(null,2,'img/details_pic/key3_267_offlinehotel.jpg','斯德哥尔摩诺比斯酒店','瑞典,斯德哥尔摩','诺比斯酒店坐落在瑞典斯德哥尔摩市中心的Norrmalmstorg广场，是两幢相邻的高大气派的古典建筑，建造于19世纪下半叶，是当时具有代表性的石质建筑。酒店由瑞典著名设计师Claesson Koivisto Rune设计，现代感的室内与外表相对比，赋予酒店独特的个性。'),
	(null,2,'img/details_pic/key3_210_offlinehotel.jpg','尤卡斯耶尔维冰酒店暖房','瑞典,基律纳','来到北极圈以北200公里著名的冰酒店，您绝对会被这里如仙境的景象所震撼！冰酒店建于1989年，是世界上第一座用冰雪来建造的酒店，动用了3万吨雪和4千吨冰修建而成。酒店的冰雪取自于大自然的河流，所有墙壁、屋顶、地板与精美雕饰都由冰和雪构成。'),
	(null,2,'img/details_pic/key3_265_offlinehotel.jpg','莱维金冠玻璃穹顶酒店','芬兰,莱维','12间豪华的玻璃穹顶屋就坐落在乌苏瓦拉山丘，离芬兰最热门的滑雪胜地莱维仅10公里。这些房间称得上是观看世界上最为壮观的光之秀的前排坐席。即便没有北极光，山下莱维村的景色也令人炫目。想在北极光的陪伴下喝上一杯热饮，享用香喷喷的煎肉肠吗？'),
	(null,2,'img/details_pic/key3_215_offlinehotel.jpg','罗瓦涅米北极之光酒店','芬兰,罗瓦涅米','北极之光酒店是罗瓦涅米地区最新开业的精品酒店，距离罗瓦涅米机场和圣诞老人​​村仅有8公里，前往极地博物馆仅有800米，交通相当方便。酒店设计时尚精致，充满北欧风情。热情的24小时前台工作人员很乐意为您推荐当地餐厅、景点或活动。');

#评论表
create table zan_ping(
	pingid int PRIMARY KEY AUTO_INCREMENT,
	pid int,
	count varchar(32),
	text varchar(128),
	time varchar(128),
	foreign key (pid) references zan_index_product(pid)
);

#手机端轮播图下面的图片
create table zan_phone_topic(
	topid int PRIMARY KEY AUTO_INCREMENT,
	img varchar(128)
);
insert into zan_phone_topic values
(1,'img/phone/00ce55832d412e0a5c05c6ba44016a12.jpg'),
(null,'img/phone/3af3886c5d46ee7f477160cf2274b653.jpg'),
(null,'img/phone/6adf769bd99c12d426c1061b63d17f2d.jpg'),
(null,'img/phone/82b384a686c073ee2c33f8e970e56401.jpg'),
(null,'img/phone/532e7ae29af166c0163d93bf5969afcf.jpg'),
(null,'img/phone/608c4155804a72da48c5e8a9459e14eb.jpg'),
(null,'img/phone/224322a15e5c463f4e0c932d211c1f8c.jpg'),
(null,'img/phone/aca8fbdfcb73215c4c91e352aefbf993.jpg'),
(null,'img/phone/fc9a4db96cde066e7dac7f1499273963.jpg');


