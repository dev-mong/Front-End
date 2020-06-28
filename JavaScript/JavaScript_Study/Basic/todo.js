const todoForm=document.querySelector(".js-todoForm"),
    toDoInput=todoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //JSON.stringify => 문자열 저장
}

function delToDo(event){
     console.log(event.target.parent);
     const btn=event.target;
     const li=btn.parentNode;
     toDoList.removeChild(li);
     const cleanToDos=toDos.filter(function(toDo){
         return toDo.id !==parseInt(li.id);
     });

     //
     toDos=cleanToDos;
     saveToDos(); 
     
}

function paintToDo(text){
    // console.log(text);
    
    //li 태그 생성
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    //인덱스 번호 
    const newId=toDos.length+1;

    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",delToDo);
    span.innerText=text;
    //appendChild -> 자식 노드 리스트의 맨 마지막 태그에 추가 
    li.appendChild(span);
    li.appendChild(delBtn);
    //li 태그에 id 값 추가 
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text : text,
        id : newId
    };
    
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    //리스트 값을 초기화 -> 반복 가능
    toDoInput.value="";
}


function loadToDos(){
    // local 저장소에서 데이터 가져옴 
    const loadToDos=localStorage.getItem(TODOS_LS);
    if(loadToDos !==null){
        // console.log(loadToDos);

        //JSON 파싱
        const parsedToDos=JSON.parse(loadToDos);
        // console.log(parsedToDos);

        //forEach : 배열 인덱스 크기만큼 실행, toDo : 한 객체를 의미 
        parsedToDos.forEach(function(toDo){
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    todoForm.addEventListener("submit",handleSubmit);
}   

init();