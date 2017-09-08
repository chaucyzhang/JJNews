'use strict';


var mongoose = require('mongoose'),
    News = mongoose.model('News');


/**
 * @api {GET} /news Get News list
 * @apiName get_newsList
 * @apiGroup News
 *
 *
 * @apiSuccess {data} Array return the news array.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [{
		"title": "赵丽颖现身机场，疲惫过度助理忙搀扶，仍不忘为粉丝签名后离开",
		"thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
		"thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"url": "http://mini.eastday.com/mobile/161028202106247.html?qid=juheshuju",
		"uniquekey": "161028202106247",
		"type": "头条",
		"realtype": "娱乐",
		"author_name": "海哥聊娱乐",
		"date": "2016-10-29T03:21:00.000Z",
		"id": "59acf09f01e89207e28e9d7f"
	},
	{
		"title": "陈伟霆看秀交谈被嫌弃！旁边观众表情亮了，素质问题还是另有隐情",
		"thumbnail_pic_s": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpm_03200403.jpeg",
		"thumbnail_pic_s02": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpl_05500201.jpeg",
		"thumbnail_pic_s03": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpl_05500201.jpeg",
		"url": "http://mini.eastday.com/mobile/161028201752132.html?qid=juheshuju",
		"uniquekey": "161028201752132",
		"type": "头条",
		"realtype": "娱乐",
		"author_name": "八卦小姨妈",
		"date": "2016-10-29T03:17:00.000Z",
		"id": "59acf09f01e89207e28e9d80"
	}]
 *
 * @apiSampleRequest /news
 */
exports.get_newsList = function(req, res) {
    News.find({},'-pagecontent', function(err, newsList) {
        if (err)
            res.send(err);
        res.json(newsList);
    });
};

/**
 * @api {POST} /news Create a news
 * @apiName create_news
 * @apiGroup News
 *
 * @apiParam {String} title  Mandatory title of the News.
 * @apiParam {String} [thumbnail_pic_s]  Optional thumbnail of the News.
 * @apiParam {String} [thumbnail_pic_s02]  Optional thumbnail of the News.
 * @apiParam {String} [thumbnail_pic_s03]  Optional thumbnail of the News.
 * @apiParam {String} url  Mandatory url of the News detail.
 * @apiParam {String} type  Mandatory type of the News.
 * @apiParam {String} realtype  Mandatory realtype of the News.
 * @apiParam {String} [author_name]  Optional author of the News.
 * @apiParam {String} [pagecontent]  Optional page content of the News.
 *
 * @apiSuccess {data} News return the newly created news.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
		"title": "赵丽颖现身机场，疲惫过度助理忙搀扶，仍不忘为粉丝签名后离开",
		"thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
		"thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"url": "http://mini.eastday.com/mobile/161028202106247.html?qid=juheshuju",
		"uniquekey": "161028202106247",
		"type": "头条",
		"realtype": "娱乐",
		"author_name": "海哥聊娱乐",
		"date": "2016-10-29T03:21:00.000Z",
		"id": "59acf09f01e89207e28e9d7f",
		"pagecontent":"<article id=\"J_article\" class=\"J-article article\">\r\n<div id=\"title\">\r\n<div class=\"article-title\">\r\n<h1 class=\"title\">“川师大血案”已移交法院 死者家属将申请重做精神鉴定</h1>\r\n</div>\r\n<div class=\"article-src-time\">\r\n<span class=\"src\">2016-10-22 19:17&nbsp;&nbsp;&nbsp;&nbsp;来源：中国新闻网</span>\r\n</div>\r\n</div>\r\n<div id=\"content\" class=\"J-article-content article-content\">\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 75.00%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-size=\"540x405\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-weight=\"540\" data-width=\"540\" data-height=\"405\"></a>\r\n</figure>\r\n<p class=\"section txt\">芦海强珍藏着弟弟的遗物。 钟欣 摄</p>\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 133.33%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-size=\"405x540\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-weight=\"405\" data-width=\"405\" data-height=\"540\"></a>\r\n</figure>\r\n<p class=\"section txt\">鉴定意见通知书。 钟欣 摄</p>\r\n<p class=\"section txt\">中新网成都10月22日电 (贺劭清)“我从成都市人民检察院得知，弟弟的案件已经移交至成都市中级人民法院。”22日，“川师大血案”死者芦海清堂哥芦海强告诉中新网记者，他准备下周向成都市中级人民法院提交重新鉴定申请书。</p>\r\n<p class=\"section txt\">3月27日，四川师范大学一名大一学生滕某因生活琐事，在该校成龙校区学生公寓学习室里，用当日白天从超市购买来的菜刀将同寝室友芦海清杀死。根据《死亡医学证明书》显示，被害人因头颈离断伤死亡。</p>\r\n<p class=\"section txt\">4月15日，成都警方通报称，涉嫌故意杀人罪的犯罪嫌疑人滕某已于案发次日被警方刑事拘留。5月4日，芦海强收到一份关于犯罪嫌疑人精神鉴定的《鉴定意见通知书》，其中显示，被鉴定人滕某患有抑郁症，对其2016年3月27日的违法行为评定为部分刑事责任能力。</p>\r\n<p class=\"section txt\">8月1日，芦海强向成都市人民检察院提交了重新鉴定申请书，希望对犯罪嫌疑人滕某重新进行精神鉴定。“检察院告诉我，我当时联系的鉴定机构不够权威，所以我现在正在寻找更权威的鉴定机构。”芦海强说。</p>\r\n<p class=\"section txt\">“根据法律规定，在法院审判阶段，当事人及其家属可以申请重新鉴定，受害人家属的意见是继续向法院申请重新鉴定。”受害人家属代理律师陈逢逢表示，抑郁症不是刑法意义上的精神病，本案中，滕某欲通过杀人被处死刑达到结束自己生命的目的，表明其对自己的杀人行为具有控制支配能力，希望法院能依法启动重新鉴定程序。(完)</p>\r\n\r\n</div>\r\n</article>"
	}
 *
 * @apiSampleRequest /news
 */

exports.create_news = function(req, res) {
    var new_news = new News(req.body);
    new_news.save(function(err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};


/**
 * @api {GET} /news/{id} Get news detail by id
 * @apiName get_newsById
 * @apiGroup News
 *
 * @apiParam {String} id  Mandatory id of the News.
 *
 * @apiSuccess {data} News get news detail by id.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
		"title": "赵丽颖现身机场，疲惫过度助理忙搀扶，仍不忘为粉丝签名后离开",
		"thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
		"thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"url": "http://mini.eastday.com/mobile/161028202106247.html?qid=juheshuju",
		"uniquekey": "161028202106247",
		"type": "头条",
		"realtype": "娱乐",
		"author_name": "海哥聊娱乐",
		"date": "2016-10-29T03:21:00.000Z",
		"id": "59acf09f01e89207e28e9d7f",
		"pagecontent":"<article id=\"J_article\" class=\"J-article article\">\r\n<div id=\"title\">\r\n<div class=\"article-title\">\r\n<h1 class=\"title\">“川师大血案”已移交法院 死者家属将申请重做精神鉴定</h1>\r\n</div>\r\n<div class=\"article-src-time\">\r\n<span class=\"src\">2016-10-22 19:17&nbsp;&nbsp;&nbsp;&nbsp;来源：中国新闻网</span>\r\n</div>\r\n</div>\r\n<div id=\"content\" class=\"J-article-content article-content\">\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 75.00%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-size=\"540x405\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-weight=\"540\" data-width=\"540\" data-height=\"405\"></a>\r\n</figure>\r\n<p class=\"section txt\">芦海强珍藏着弟弟的遗物。 钟欣 摄</p>\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 133.33%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-size=\"405x540\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-weight=\"405\" data-width=\"405\" data-height=\"540\"></a>\r\n</figure>\r\n<p class=\"section txt\">鉴定意见通知书。 钟欣 摄</p>\r\n<p class=\"section txt\">中新网成都10月22日电 (贺劭清)“我从成都市人民检察院得知，弟弟的案件已经移交至成都市中级人民法院。”22日，“川师大血案”死者芦海清堂哥芦海强告诉中新网记者，他准备下周向成都市中级人民法院提交重新鉴定申请书。</p>\r\n<p class=\"section txt\">3月27日，四川师范大学一名大一学生滕某因生活琐事，在该校成龙校区学生公寓学习室里，用当日白天从超市购买来的菜刀将同寝室友芦海清杀死。根据《死亡医学证明书》显示，被害人因头颈离断伤死亡。</p>\r\n<p class=\"section txt\">4月15日，成都警方通报称，涉嫌故意杀人罪的犯罪嫌疑人滕某已于案发次日被警方刑事拘留。5月4日，芦海强收到一份关于犯罪嫌疑人精神鉴定的《鉴定意见通知书》，其中显示，被鉴定人滕某患有抑郁症，对其2016年3月27日的违法行为评定为部分刑事责任能力。</p>\r\n<p class=\"section txt\">8月1日，芦海强向成都市人民检察院提交了重新鉴定申请书，希望对犯罪嫌疑人滕某重新进行精神鉴定。“检察院告诉我，我当时联系的鉴定机构不够权威，所以我现在正在寻找更权威的鉴定机构。”芦海强说。</p>\r\n<p class=\"section txt\">“根据法律规定，在法院审判阶段，当事人及其家属可以申请重新鉴定，受害人家属的意见是继续向法院申请重新鉴定。”受害人家属代理律师陈逢逢表示，抑郁症不是刑法意义上的精神病，本案中，滕某欲通过杀人被处死刑达到结束自己生命的目的，表明其对自己的杀人行为具有控制支配能力，希望法院能依法启动重新鉴定程序。(完)</p>\r\n\r\n</div>\r\n</article>"
	}
 *
 * @apiSampleRequest /news/:id
 */
exports.get_newsById = function(req, res) {
    News.findById({_id:req.params.id}, function(err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};



/**
 * @api {PUT} /news/{id} update a news by id
 * @apiName update_newsById
 * @apiGroup News
 *
 * @apiParam {String} id  Mandatory id of the News.
 * @apiParam {String} title  Mandatory title of the News.
 * @apiParam {String} [thumbnail_pic_s]  Optional thumbnail of the News.
 * @apiParam {String} [thumbnail_pic_s02]  Optional thumbnail of the News.
 * @apiParam {String} [thumbnail_pic_s03]  Optional thumbnail of the News.
 * @apiParam {String} url  Mandatory url of the News detail.
 * @apiParam {String} type  Mandatory type of the News.
 * @apiParam {String} realtype  Mandatory realtype of the News.
 * @apiParam {String} [author_name]  Optional author of the News.
 * @apiParam {String} [pagecontent]  Optional page content of the News.
 *
 * @apiSuccess {data} News return the newly updated news.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
		"title": "赵丽颖现身机场，疲惫过度助理忙搀扶，仍不忘为粉丝签名后离开",
		"thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
		"thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
		"url": "http://mini.eastday.com/mobile/161028202106247.html?qid=juheshuju",
		"uniquekey": "161028202106247",
		"type": "头条",
		"realtype": "娱乐",
		"author_name": "海哥聊娱乐",
		"date": "2016-10-29T03:21:00.000Z",
		"id": "59acf09f01e89207e28e9d7f",
		"pagecontent":"<article id=\"J_article\" class=\"J-article article\">\r\n<div id=\"title\">\r\n<div class=\"article-title\">\r\n<h1 class=\"title\">“川师大血案”已移交法院 死者家属将申请重做精神鉴定</h1>\r\n</div>\r\n<div class=\"article-src-time\">\r\n<span class=\"src\">2016-10-22 19:17&nbsp;&nbsp;&nbsp;&nbsp;来源：中国新闻网</span>\r\n</div>\r\n</div>\r\n<div id=\"content\" class=\"J-article-content article-content\">\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 75.00%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-size=\"540x405\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_1.jpeg\" data-weight=\"540\" data-width=\"540\" data-height=\"405\"></a>\r\n</figure>\r\n<p class=\"section txt\">芦海强珍藏着弟弟的遗物。 钟欣 摄</p>\r\n<figure class=\"section img\">\r\n<a class=\"img-wrap\" style=\"padding-bottom: 133.33%;\" href=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-size=\"405x540\"><img width=\"100%\" alt=\"\" src=\"https://08.imgmini.eastday.com/mobile/20161022/20161022191707_9e1c900663466a36d5e6d70ed742d67e_2.jpeg\" data-weight=\"405\" data-width=\"405\" data-height=\"540\"></a>\r\n</figure>\r\n<p class=\"section txt\">鉴定意见通知书。 钟欣 摄</p>\r\n<p class=\"section txt\">中新网成都10月22日电 (贺劭清)“我从成都市人民检察院得知，弟弟的案件已经移交至成都市中级人民法院。”22日，“川师大血案”死者芦海清堂哥芦海强告诉中新网记者，他准备下周向成都市中级人民法院提交重新鉴定申请书。</p>\r\n<p class=\"section txt\">3月27日，四川师范大学一名大一学生滕某因生活琐事，在该校成龙校区学生公寓学习室里，用当日白天从超市购买来的菜刀将同寝室友芦海清杀死。根据《死亡医学证明书》显示，被害人因头颈离断伤死亡。</p>\r\n<p class=\"section txt\">4月15日，成都警方通报称，涉嫌故意杀人罪的犯罪嫌疑人滕某已于案发次日被警方刑事拘留。5月4日，芦海强收到一份关于犯罪嫌疑人精神鉴定的《鉴定意见通知书》，其中显示，被鉴定人滕某患有抑郁症，对其2016年3月27日的违法行为评定为部分刑事责任能力。</p>\r\n<p class=\"section txt\">8月1日，芦海强向成都市人民检察院提交了重新鉴定申请书，希望对犯罪嫌疑人滕某重新进行精神鉴定。“检察院告诉我，我当时联系的鉴定机构不够权威，所以我现在正在寻找更权威的鉴定机构。”芦海强说。</p>\r\n<p class=\"section txt\">“根据法律规定，在法院审判阶段，当事人及其家属可以申请重新鉴定，受害人家属的意见是继续向法院申请重新鉴定。”受害人家属代理律师陈逢逢表示，抑郁症不是刑法意义上的精神病，本案中，滕某欲通过杀人被处死刑达到结束自己生命的目的，表明其对自己的杀人行为具有控制支配能力，希望法院能依法启动重新鉴定程序。(完)</p>\r\n\r\n</div>\r\n</article>"
	}
 *
 * @apiSampleRequest /news/:id
 */
exports.update_newsById = function(req, res) {
    News.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};


/**
 * @api {DELETE} /news/{id} delete a news by id
 * @apiName delete_newsById
 * @apiGroup News
 *
 * @apiParam {String} id  Mandatory id of the News.
 *
 * @apiSuccess {data} News delete the target news by id.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * { message: 'News successfully deleted' }
 *
 * @apiSampleRequest /news/:id
 */
exports.delete_newsById = function(req, res) {
    News.remove({
        _id: req.params.id
    }, function(err, news) {
        if (err)
            res.send(err);
        res.json({ message: 'News successfully deleted' });
    });
};

