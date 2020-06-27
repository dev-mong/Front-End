// alert('Im Working');
console.log('Im Working');


// const title=document.getElementById("title");

// console.log(title);
// title.innerHTML ="hi form js";
// title.style.color='black';
// document.title="Hello";

//id=tilte를 선택 
// const title=document.querySelector("#title");

// function handleResize(event){
//     console.log(event);
// }
// function handleClick(){
//     title.style.color="yellow";
// }
// // resize -> 창크기 변환 이벤트 => 를 실행할 때마다 함수 호출 (링크 호출 시 유용)
// window.addEventListener("resize",handleResize);
// // id가 titile인 태그를 선택하면 이벤트를 준다
// title.addEventListener("click",handleClick);


//if-else
// if(10==5){
//     console.log('hi');
// }else if("10"==="10"){
//     console.log("hello");
// }else{
//     console.log("bye");
// }


// const BASE_COLOR ="rgb(52, 73, 94)";
// const OTHER_COLOR="#7f8c8d";

// function handleClick(){
//     const currentColor=title.style.color;
//     if(currentColor===BASE_COLOR){
//         title.style.color=OTHER_COLOR;
//     }else{
//         title.style.color="BASE_COLOR";
//     }
// }

// // 초기화 함수
// function init(){
//     title.style.color=BASE_COLOR;
//     // title.addEventListener("click",handleClick);
//     //마우스 in 
//     title.addEventListener("mouseenter",handleClick);
// }


// init();

// function handleOffline(){
//     console.log("hi");
// }
// function handleOnline(){
//     console.log("welcome");
// }
// // window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);

const title=document.getElementById('title');
console.log(title);
const CLICKED_CLASS="clicked";
function handleClick(){
    console.log(1);
    const currentClass=title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className="";
    }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();