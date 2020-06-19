

var datas = [];
window.onload = function () {


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


    //수정 클릭 시
    // var btn_upate = document.getElementById('update');
    // btn_upate.onclick = function () {
    //     // var update=window.open('','','width=300, height=200'); //팝업창 

    //     var get=localStorage.getItem('data');

    //     var data=JSON.parse(get);
    //     console.log(data[0].id);

    //     var html='<h1>데이터수정</h1>';
    //     html+='<input type="button" value="닫기" onclick="window.close()"> <br>';
    //     html+='<lable>아이디</label> <input id="update" type="text" placeholder="'+data[0].id+'"> <br>';
    //     html+='<lable>비밀번호</label> <input id="update" type="text"placeholder="'+data[0].pw+'"> <br>';
    //     html+='<lable>이름</label> <input id="update" type="text"placeholder="'+data[0].name+'"> <br>';
    //     html+='<input type="button" value="수정" id="update onclick="update()">';
    //     update.document.write(html);
    // }


    //삭제 클릭 시 
    var btn_del = document.getElementById('delete');
    btn_del.onclick = function () {
        var delData=localStorage.getItem('data');
        console.log('삭제 데이터:'+delData);   

        // console(delData[0]);

        var data=JSON.parse(delData);
        // console.log(data[0].id);

        for(var i=0;i<datas.length;i++){
            console.log(datas[i].id);
        }
        // localStorage.removeItem('data');
    }

};

function storage() { //동기화
    console.log(1);
    var storageData = localStorage.getItem('data');

    if (storageData == null) {
        localStorage.getItem('data', JSON.stringify(datas));
    } else {
        datas = JSON.parse(storageData);
    }
};

// function update(){ //수정
//     window.onload = function () {
//     var uInput = document.getElementsByName('update');

//     var inputData = '{"id":"' + uInput[0].value + '",';
//     inputData += '"pw":"' + uInput[1].value + '",';
//     inputData += '"name":"' + uInput[2].value + '"}';


//     //Json 
//     jsondata = JSON.parse(inputData);

//     // 배열에 객체 저장
//     datas.push(jsondata);

//     localStorage.setItem('data', JSON.stringify(datas));
//     }
// }
