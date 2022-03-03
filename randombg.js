//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var mobileimg =[
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/01.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/02.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/03.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/05.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/06.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/07.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/08.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/09.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/10.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/11.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/12.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/13.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/14.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/15.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/16.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/17.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/18.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/19.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/29459969.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/83173795_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/83949899_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/83981724_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/84549100_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/85208141_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/85901429_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/86109253_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/86367573_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/87000705_p0.jpg)"
];

//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var pcimg =[
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/27707042_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/40955546_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/52350802_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/56069940_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/64378555_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/71153351_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/74143184_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/75892159_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/77444562_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/77756214_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/80608201_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/82112975_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/83356691_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/83996054_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/84385313_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/85629961_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/86233916_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/87498724_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/88223294_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/88724826.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/89761841_p0.jpg)",
  "url(https://cdn.jsdelivr.net/gh/onizakimei/cdn/theme/bgimg/89776412_p0.jpg)"
];

//获取背景图片总数，生成随机数
var mobileindex =Math.ceil(Math.random() * (mobileimg.length-1));
var pcindex =Math.ceil(Math.random() * (pcimg.length-1));

//重设背景图片
function myFunction(x) {
    if (x.matches) { // 媒体查询
        document.getElementById("page-header").style.backgroundImage = mobileimg[mobileindex];
    } else {
       document.getElementById("page-header").style.backgroundImage = pcimg[pcindex];
    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // 执行时调用的监听函数
x.addListener(myFunction) // 状态改变时添加监听器
