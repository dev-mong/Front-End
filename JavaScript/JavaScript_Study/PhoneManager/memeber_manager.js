


window.onload = function () {


    var submit = document.getElementById('sub_btn');
    var datas =[];

    submit.onclick = function () { //버튼 클릭 시 

        var uInput = document.getElementsByName('input');
        // console.log(uInput[0].value);
        // console.log(uInput[1].value);
        // console.log(uInput[2].value);



        // var data = '{"id":"' +  + '",';
        var inputData = '{"id":"' + uInput[0].value + '",';
        inputData += '"pw":"' + uInput[1].value + '",';
        inputData += '"name":"' + uInput[2].value + '"}';

        //Json 
        var jsondata = JSON.parse(inputData);

        console.log('newData: ' + typeof (jsondata));
        console.log('id: ' + jsondata.id);
        console.log('pw: ' + jsondata.pw);
        console.log('name: ' + jsondata.name);

        // 배열에 저장
        datas.push(jsondata);
        console.log(datas);

        //데이터 저장
        // localStorage.setItem('data', JSON.stringify(datas));
        // // localStorage.setItem('pw', jsondata.pw);
        // // localStorage.setItem('name', jsondata.name);

        // console.log("data:"+localStorage.getItem('data'));
        // console.log("data:"+localStorage.getItem('data'));
        

    }

    
    // console.log("아이디 : " + localStorage.getItem('id'));
    // console.log("비밀번호 : " + localStorage.getItem('pw'));
    // console.log("이름 : " + localStorage.getItem('name'));
  
   

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

