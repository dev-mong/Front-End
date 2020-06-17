

    var datas =[];
window.onload = function () {
    // var datas =[];

    var submit = document.getElementById('sub_btn');

    storage();

    submit.onclick = function () { //버튼 클릭 시 
        var uInput = document.getElementsByName('input');

        var inputData = '{"id":"' + uInput[0].value + '",';
        inputData += '"pw":"' + uInput[1].value + '",';
        inputData += '"name":"' + uInput[2].value + '"}';


        //Json 
        jsondata = JSON.parse(inputData);

        // 배열에 객체 저장
        datas.push(jsondata);

        localStorage.setItem('data', JSON.stringify(datas));

    }
    
    
    // var get=localStorage.getItem('data');
        
    // var memeber=JSON.parse(get);
    // console.log(memeber[0].id);


    //수정 클릭 시
    var btn_upate=document.getElementById('update');
    btn_upate.onclick=function(){
        // var update=window.open('','','width=500, height=500'); //팝업창 

        // var html='<h1>데이터수정</h1>';
        // html+='<input type="button" value="닫기" onclick="window.close()"> <br>';
        // html+='<lable>아이디</label> <input type="text"> <br>';
        // html+='<lable>비밀번호</label> <input type="text"> <br>';
        // html+='<lable>이름</label> <input type="text"> <br>';
        // html+='<input type="button" value="수정" id="update onclick="update()">';
        // update.document.write(html);

        // window.opener.onload=function(){
        //     console.log(1);
        // }
        
    }

    
    //삭제 클릭 시 
    var btn_del=document.getElementById('delete');
    btn_del.onclick=function(){
        
    }

};

    function storage(){ //동기화
        console.log(1);
        var storageData=localStorage.getItem('data');

        if(storageData==null){
            localStorage.getItem('data',JSON.stringify(datas));
        }else{
            datas=JSON.parse(storageData);
        }
    };

