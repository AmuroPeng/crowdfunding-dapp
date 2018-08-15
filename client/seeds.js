var num = -1
// var num = 0

//状态：待审核checking，审核未通过failed，暂停paused，进行中doing，已结束closed
if (ProjectsCollection.find().count() === num){
    ProjectsCollection.insert({
        id:'project_address_1',
        title:'轻奢精品连锁酒店维也纳，给你在拉萨安了一个家',
        pic:'images/project/avatar/1.jpg',
        intro:'维也纳酒店集团是中国中档商务连锁酒店领先品牌，旗下已拥有10大子品牌，在全国326个大中城市中拥有2200多家（在营及在建）分店，超过30万间客房。',
        author_id:'user_public_key_1',//王书瑞
        time:'2018/08/09',
        locate:'拉萨市',
        tag:'酒店',
        expected_money:100000,
        current_monry:2112000,
        support_num:28,
        status:'checking'
    });
    ProjectsCollection.insert({
        id:'project_address_2',
        title:'3年300+门店，单日营业额突破7万，九田家烧肉魔都新选择',
        pic:'images/project/avatar/2.jpg',
        intro:'魔都区域环境排行第二名；全国300+门店，签约突破809家。打造体验式餐饮场景+外卖导流盈利模式，单店单日营业额突破7万。选用来自澳洲纯正安格斯牛和日本和牛血统的高端黑牛，从牧场到到餐桌全程冷链运输。',
        author_id:2,//杨安
        time:'2018/08/09',
        locate:'浦东新区',
        tag:'餐饮',
        expected_money:50000,
        current_monry:1800000,
        support_num:30,
        status:'doing'
    });
    ProjectsCollection.insert({
        id:'project_address_3',
        title:'在重新定义成都生活方式的太古里，私飨正打造着川菜之美',
        pic:'images/project/avatar/3.jpg',
        intro:'置身于日均客流量10万人次的远洋太古里，透过荥经砂器气孔释放的食物香气，私飨将川菜小品与非物质文化遗产完美融合，用质朴本真的菜肴，传承川菜之美，打造具有东方生活美学的“食停空间”。',
        author_id:'user_public_key_1',//姚舒
        time:'2018/08/08',
        locate:'成都市',
        tag:'餐饮',
        expected_money:100000,
        current_monry:2105000,
        support_num:70,
        status:'closed'
    });
}

if (UsersCollection.find().count() === num){
    UsersCollection.insert({
        id:'user_public_key_1',
        name:'血小板',
        pic:'images/user/avatar/1.jpg',
        intro:'血小板（英语：platelet），也称血栓细胞，为血液的一个组成部分，可与凝血因子一起，借由结块作用，对血管受伤而出血的部位进行反应，进而形成凝块',
        balance:20000
    });
}