// poem
var words=[
    '杨子芸*沈亦轩',
    '唐妮鸿*高千慧',
    '陈圣杰*寿景雯',
    '杨子芸*沈亦轩',
    '瑾萱*黄振轩',
    '王元澈*沈思远',
    '吴弘毅*杨鑫睿',
    '玄静好*张家赫',
    '顿盛吴*雯雯',
    '陈智轩*祁路雅',
    '鲁卿*陈芃祎',
    '江宇*唐琬',
    '赵再焱*鲁少越',
    '梁清雯*樊文',
    '潘浩宇*茗瑶',
    '哲渲*赵奕普',
    '李欣怡*李承键',
    '范晏辰*于佩琦',
    '周淳*李沛雯',
    '李皓轩*李鑫程',
    '瞿瑞希*刘思婍',
    '范文君*曹乐尘',
    '正森*杜煦东',
    '蒋可可*杨嘉琳',
    '祖雨轩*黄小宇',
    '滕亦凡*李宸铭',
    '雨宝儿*付小艺',
    '黄晓婷*沐雨茜',
    '林筱曦*陈怡',
    '翟若涵*郑煜清',
    '云汐*卿艺靖',
    '怡梦*梓彤',
    '王浩宇*吴欣雅',
    '锦涵*雷欣怡',
    '梁钰彤*聪聪',
    '罗国豪*陶俊宇',
    '张沐阳*高嘉麟',
    '刘奕阳*陈宇',
    '汉聂*杨峻熙'
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


 
