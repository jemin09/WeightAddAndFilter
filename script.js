let person=[
    {name:'Jack',oldweight:65, newWeight:68},
    {name:'Mary',oldweight:55, newWeight:53},
    {name:'Bob',oldweight:71, newWeight:66},
    {name:'Steve',oldweight:62, newWeight:68},
    {name:'James',oldweight:81, newWeight:77},
    {name:'Julia',oldweight:52, newWeight:52},
    {name:'Micheal',oldweight:68, newWeight:68},
    {name:'Bill',oldweight:60, newWeight:61},
    {name:'Sonny',oldweight:61, newWeight:60}
];
let arr=[];

function showDetails(){
    showDetailsTable(person);
}
function showDetailsTable(person){
    let  perMap=person.map(function(per){
        let str='<tr class=\''+getClassPerson(per)+'\'>';
        str+='<td class="col1">'+per.name+'</td>';
        str+='<td class="col1">'+per.oldweight+'</td>';
        str+='<td class="col1">'+per.newWeight+'</td>';
        str+='</tr>';
        return str;
    });
    let str='New Weigth between :'+ makeCodeDD('minwt','Select min Wt')+'<br/><br/>';
    str+=makeCodeDD('maxwt','Select max Wt')+'<br/><br/>';
    str+='<button onclick="filterData()" class="btn"> Filter</button>';
    str+='<button onclick="clearfilter()" class="btn"> Clear Filter</button>';
    str+='<button onclick="NewMemberadd()" class="btn"> Add New Member</button>';

    let header='<th class=\'th1\' onclick=\'sort(0)\'>Name</th>';
    header+='<th class=\'th1\' onclick=\'sort(1)\'>Old Weight</th>';
    header+='<th class=\'th1\' onclick=\'sort(2)\'>New Weight</th>';
    let html=str+'<table class="table1">'+header+perMap.join('')+'</table>';
    let ele=document.getElementById('showdata');
    ele.innerHTML=html;
}

function NewMemberadd(){
    let str='<h2>Add New Member</h2><br/><br/>'
    str+='Name:<input type="text" id="name"><br/><br/>';
    str+=makeCodeDD('oldWt','Select Old Weight')+'<br/><br/>';
    str+=makeCodeDD('newWt','Select New Weight')+'<br/><br/>';
    str+='<button class="btn" onclick=\'addPerson()\'>Add</button>';
    let div=document.getElementById('showdata');
    div.innerHTML=str;
}

function makeCodeDD(id,first,selVal){
    for(let i=40;i<=100;i++){
        arr.push(i);
    }
    const arr1=arr.map(function(opt){
        if(opt==selVal)
            return '<option selected>'+opt+'</option>';
        else
            return '<option>'+opt+'</option>';
    });
    let header='<option>'+first+'</option>';
    if(selVal=='')
        header='<option>'+first+'</option>';
    
    let s1='<select id=\''+id+'\'>'+header+arr1.join('')+'</select>';
    return s1;
}
// console.log('hi=',arr);

function sort(colno){
    if(colno==0){
        person.sort(sortNameDesc);
        showDetails();
    }   
    else if(colno==1){
        person.sort(sortoldWtDesc);
        showDetails();
    }        
    else{
        person.sort(sortNewWtDesc);
        showDetails();
    }
        
}

function sortNameDesc(per1,per2){
    let name1=per1.name;
    let name2=per2.name;
    return (-1)*name1.localeCompare(name2);   
}

function sortoldWtDesc(per1,per2){
    let Wt1=per1.oldweight;
    let Wt2=per2.oldweight;
        if(Wt1>Wt2)
            return -1;
        else if(Wt1<Wt2)
            return 1;
        else
            return 0;

}
function sortNewWtDesc(per1,per2){
    let Wt1=per1.newWeight;
    let Wt2=per2.newWeight;
        if(Wt1>Wt2)
            return -1;
        else if(Wt1<Wt2)
            return 1;
        else
            return 0;
}
function getClassPerson(per){
    let oldwt=per.oldweight;
    let newwt=per.newWeight;
    // console.log(oldwt,newwt)
    if(newwt>oldwt){
        console.log()
        return 'Red';
    }
    else if(newwt<oldwt)
        return 'Green';
    else if(newwt==oldwt)
        return 'Gray';
}
function filterData(){
    let minWt=document.getElementById('minwt').value;
    let maxWt=document.getElementById('maxwt').value;
    let arr=person.filter(function(per){
        return (per.newWeight>=minWt && per.newWeight<=maxWt)
    });
   showDetailsTable(arr);
}

function addPerson(){
    let st={};
    st.name=document.getElementById('name').value;
    let index=person.findIndex(function(per){
     return per.name==st.name;
     });
     if(index>=0){
         alert('Already The name is in the databas');
     }
     else{
         console.log(st.name);
         st.oldweight=document.getElementById('oldWt').value;
         st.newWeight=document.getElementById('newWt').value;
         console.log(st);
         person.push(st);
         showDetails()
     }
}

function clearfilter(){
    showDetails();
}