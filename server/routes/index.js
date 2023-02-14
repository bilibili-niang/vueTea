const express = require('express');
const router = express.Router();
const connection = require('../db/sql')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// 首页推荐
router.get('/api/index_list/0/data/1', function (req, res) {
    console.log('success')
    res.send({
        code: 0,
        data: {
            topBar: [
                {id: 1, label: '推荐'},
                {id: 2, label: "大红袍"},
                {id: 3, label: "铁观音"},
                {id: 4, label: "绿茶"},
                {id: 5, label: "普尔"},
                {id: 5, label: "茶具"},
                {id: 6, label: "花茶"},
                {id: 6, label: "维吉尔"},
                {id: 6, label: "Yamato"},
            ],
            data: [
                // swiper
                {
                    id: 0,
                    type: 'swiperList',
                    data: [
                        {id: 0, imgUrl: "./images/swiper1.jpeg"},
                        {id: 1, imgUrl: "./images/swiper1.jpeg"},
                        {id: 2, imgUrl: "./images/swiper1.jpeg"},
                        {id: 3, imgUrl: "./images/swiper1.jpeg"},
                    ]
                },
                //icons
                {
                    id: 1,
                    type: 'iconList',
                    data: [
                        {
                            id: 1,
                            title: '自饮茶',
                            imgUrl: './images/icons/icons1.png'
                        },
                        {
                            id: 2,
                            title: '茶具',
                            imgUrl: './images/icons/icons2.png'
                        },
                        {
                            id: 3,
                            title: '茶礼盒',
                            imgUrl: './images/icons/icons3.png'
                        },
                        {
                            id: 4,
                            title: '领福利',
                            imgUrl: './images/icons/icons4.png'
                        },
                        {
                            id: 5,
                            title: '官方验证',
                            imgUrl: './images/icons/icons5.png'
                        }
                    ]
                },
                //推荐
                {
                    id: 2,
                    type: 'recommendList',
                    data: [
                        {
                            id: 1,
                            name: '铁观音2號250g',
                            content: '核心产区滋味正',
                            price: '648',
                            imgUrl: './images/recommend/img.png'
                        }, {
                            id: 2,
                            name: '铁观音2號250g',
                            content: '核心产区滋味正',
                            price: '648',
                            imgUrl: './images/recommend/img.png'
                        },
                        {
                            id: 3,
                            name: '铁观音2號250g',
                            content: '核心产区滋味正',
                            price: '648',
                            imgUrl: './images/recommend/img.png'
                        }
                    ]

                },
                // 猜你喜欢
                {
                    id: 3,
                    type: 'likeList',
                    data: [{
                        id: 1,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img.png',
                        price: '68'
                    },
                        {
                            id: 2,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img2.png',
                            price: '299'
                        },
                        {
                            id: 3,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img3.png',
                            price: '68'
                        },
                        {
                            id: 4,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img4.png',
                            price: '68'
                        },
                        {
                            id: 5,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img5.png',
                            price: '68'
                        },
                        {
                            id: 6,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img6.png',
                            price: '68'
                        },
                        {
                            id: 7,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img7.png',
                            price: '68'
                        },
                        {
                            id: 8,
                            name: '雨前珍稀白茶1号',
                            imgUrl: './images/like/img8.png',
                            price: '68'
                        }]
                },
                //ad
                {
                    id: 4,
                    type: 'adList',
                    data: [
                        {
                            id: 1,
                            imgUrl: './images/ad/tgy.png'
                        },
                        {
                            id: 2,
                            imgUrl: './images/ad/tgy2.png'
                        }
                    ]
                },
            ]
        }
    })
})

// 首页大红袍
router.get('/api/index_list/1/data/1', function (req, res) {
    res.send({
        code: 0,
        data: [
            //ad
            {
                id: 0,
                type: 'adList',
                data: [
                    {
                        id: 1,
                        imgUrl: './images/ad/dhp.png'
                    },
                    {
                        id: 2,
                        imgUrl: './images/ad/dhp2.png'
                    }
                ]
            },
            // 猜你喜欢
            {
                id: 1,
                type: 'likeList',
                data: [{
                    id: 1,
                    name: '雨前珍稀白茶1号',
                    imgUrl: './images/like/img.png',
                    price: '68'
                },
                    {
                        id: 2,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img2.png',
                        price: '299'
                    },
                    {
                        id: 3,
                        name: '老爸秘制小汉堡',
                        imgUrl: './images/like/img3.png',
                        price: '198'
                    },
                    {
                        id: 4,
                        name: '奥利给,干了',
                        imgUrl: './images/like/img4.png',
                        price: '648'
                    },
                    {
                        id: 5,
                        name: '电击小子',
                        imgUrl: './images/like/img5.png',
                        price: '1130'
                    },
                    {
                        id: 6,
                        name: '安吉白茶',
                        imgUrl: './images/like/img6.png',
                        price: '6628'
                    },
                    {
                        id: 7,
                        name: '东湖鸭屎香',
                        imgUrl: './images/like/img7.png',
                        price: '628'
                    },
                    {
                        id: 8,
                        name: '荒木川',
                        imgUrl: './images/like/img8.png',
                        price: '66'
                    }]
            },

        ]
    })


})


// 首页铁观音
router.get('/api/index_list/2/data/1', function (req, res) {
    res.send({
        code: 0,
        data: [
            //ad
            {
                id: 0,
                type: 'adList',
                data: [
                    {
                        id: 1,
                        imgUrl: './images/ad/tgy.png'
                    },
                    {
                        id: 2,
                        imgUrl: './images/ad/tgy2.png'
                    }
                ]
            },
            // 猜你喜欢
            {
                id: 1,
                type: 'likeList',
                data: [{
                    id: 1,
                    name: '雨前珍稀白茶1号',
                    imgUrl: './images/like/img.png',
                    price: '68'
                },
                    {
                        id: 2,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img.png',
                        price: '299'
                    },
                    {
                        id: 3,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img.png',
                        price: '68'
                    },
                    {
                        id: 4,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img.png',
                        price: '68'
                    },
                    {
                        id: 5,
                        name: '雨前珍稀白茶1号',
                        imgUrl: './images/like/img.png',
                        price: '68'
                    }]
            },

        ]
    })
})
// 查询商品接口
router.get('/api/goods/shopList', function (req, res, next) {
    //
    let [searchName, orderName] = Object.keys(req.query);
    let [name, order] = Object.values(req.query);

    console.log("searchName,orderName,name,order")
    console.log(searchName, orderName, name, order)
    connection.query('select * from goods_list where name like "%' + name + '%" order by ' + orderName + ' ' + order + '', function (error, results) {
        res.send({
            code: 0,
            data: results
        })
    })
})
// 分类的接口
router.get('/api/goods/list', function (req, res, next) {
    res.send({
        code: 0,
        data: [
            {
                //一级
                id: 0,
                name: '推荐',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '推荐',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '铁观音',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '功夫茶具',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '茶具电器',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '紫砂壶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 6,
                                name: '武夷岩茶',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 1,
                name: '绿茶',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '绿茶',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 2,
                name: '乌龙',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '乌龙',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 3,
                name: '红茶',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '红茶',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 4,
                name: '白茶',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '白茶',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 5,
                name: '普洱',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '普洱',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            },
            {
                //一级
                id: 6,
                name: '茉莉',
                data: [
                    {
                        //二级
                        id: 0,
                        name: '普洱',
                        list: [
                            //三级
                            {
                                id: 0,
                                name: '龙井',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 1,
                                name: '碧螺春',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 3,
                                name: '雀舌',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 4,
                                name: '安吉白茶',
                                imgUrl: './images/list1.jpeg'
                            },
                            {
                                id: 5,
                                name: '六安瓜片',
                                imgUrl: './images/list1.jpeg'
                            }
                        ]
                    }
                ]
            }
        ]
    })
})

module.exports = router;
