// poem
var words=[
	'雅雯*杨子芸',
	'陈温晴*周卓伊',
'陆旷原*杨峻熙',
'沈亦轩*潘东子',
'妍霓*何云汐',
'迦勒*余佳敏',
'刘颖*唐妮鸿',
'程芳怡*圣哲',
'高千慧*卿艺靖',
'沈佳怡*陈圣杰',
'王嘉璇*卢昊烨',
'怡梦*寿景雯',
'瑾萱*何嫣然',
'梓彤*黄振轩',
'王元澈*王浩宇',
'沈思远*翟瀚辰',
'天赐*胡嫣然',
'吴弘毅*孙梓玲',
'蔡骐睿*游泽睿',
'吴欣雅*杨鑫睿',
'玄静好*锦涵',
'张家赫*欣然',
'江芙瑞*林佩儿',
'阙锦文*顿盛吴',
'石景豪*高子轩',
'雷欣怡*雯雯',
'易卓妍*陈智轩',
'祁路雅*李子涵',
'梁钰彤*余琨厚',
'张瑞熙*李骉',
'雨嘉*鲁卿',
'素瑶*陈芃祎',
'聪聪*罗国豪',
'梁梓涵*江宇',
'唐琬*赵再焱',
'刘浩阳*汪靖博',
'妍希*廖惠',
'李雨欣*鲁少越',
'梁清雯*凃雨昕',
'郑雅倩*樊文',
'潘浩宇*茗瑶',
'冯思睿*哲渲',
'赵奕普*陶俊宇',
'徐怡然*晖晖',
'李欣怡*张晓华',
'朱健浩*郑心宁',
'龚紫妍*郑绪美',
'家伟*李承键',
'张沐阳*高嘉麟',
'小妤*范晏辰',
'李泉霖*刘若曦',
'于佩琦*陈可馨',
'周淳*李沛雯',
'李皓轩*李鑫程',
'王毛蕴*蒙妙珊',
'瞿瑞希*李钰童',
'孙钰琦*邦辉',
'刘思婍*范文君',
'包向阳*杨欣瑜',
'曹乐尘*林齐娜',
'正森*俊炜',
'美霖*杜煦东',
'蒋可可*杨嘉琳',
'李谨言*祖雨轩',
'黄小宇*滕亦凡',
'李宸铭*吴蕙',
'豪豪*刘奕阳',
'王瑶*陈宇',
'姚钰涵*雨宝儿',
'晏梓涵*刘佳明',
'付小艺*萱萱',
'黄晓婷*沐雨茜',
'林筱曦*陈怡',
'黄垠闰*李蒙呈',
'覃宏宇*梁玲玲',
'翟若涵*郑煜清',
'汉聂*李颜竹'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '25px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-50,15)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(30,40)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(30,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');

        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}

window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },5600)


 
