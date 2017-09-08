/*
* @Author: Administrator
* @Date:   2017-09-04 11:03:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-07 20:07:15
*/
// var a=1;
// var b=2;
// document.write(a+b);
// alert(a);
// var a;
// alert(a);
// a=2;
// alert(a);
// a=3;
// alert(a);
// var a=5;
// alert(a);
// alert(b);
// var num1=43;
// var num2=40;
// var str="our class have"+num1+"your class have"+num2+"sum is"+(num1+num2);
// var a=20;
// alert(a++);
// alert(a);
// alert(++a);
// alert(a);
// var str=`zheshi
// akskks
// jsskksks
// jsksksk`;
// alert(str);
// var str1=`our class have${num1}your class have${num2}sum is${num1+num2}`;
// alert(str1);
// var s='true';
// var str=1;
// var str1=20;
// alert(s>=str);
// alert(str1>str);
// alert('2'>true);
// var a=1;
// var b=1;
// alert(a===b);
// var a=1;
// var b='2';
// alert(a!==b)
// var a=10;
// var b=20;
// var flag;
// alert(a>20&&a)
// alert(1&&a&&2)
// alert(undefined&&a)
// alert(null&&a&&0)
// alert(a||b)
// 根据条件 选择性的对flag进行赋值；
// if(a%2==0){
// 	flag=true;
// }
// alert(flag);
// 
// 
// var g=prompt('请输入你的分数',45544554456654);
// if(g>=90&&g<=100){
// 	alert('优秀');
// }else if(g>=80&&g<90){
// 	alert('良好');
// }else if(g>=70&&g<80){
// 	alert('中');
// }else if(g>=60&&g<70){
// 	alert('及格');
// }else if(g>=0&&g<60){
// 	alert('不及格');
// }else{
// 	alert('输入错误');
// }



// for(var i=0;i<=3;i++){
// 	alert('halou');
// }
// 
// 
// var a=prompt('请输入你的分数','');
// if(a>10){
// 	alert('jjja');
// }else{
// 	alert('jdjsdjsd');
// }


// var week=prompt('今天星期几', 1);//这里输入的值为字符串
// //字符串变数字：*1    /1   -0
// //数字变字符串：  ''  ""
// switch(week){
//    case '1':
//    alert('第一组');
//    break;
//    case '2':
//    alert('第二组');
//    break;
//    case '3':
//    alert('第三组');
//    break;
//    case '4':
//    alert('第四组');
//    break;
//    case '5':
//    alert('第五组');
//    break;
//    case '6':
//    alert('第六组');
//    break;
//    case '0':
//    alert('第七组');
//    break;
//    default: 
//    alert('输入错误');
//    break;
// }
// for(var i=1;i<=10;i++){
// 	alert(i);
// }
// 
// 
// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+i;
//     //sum+=i;
// }
// alert(sum);

// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+2*i;
//     //sum+=i;
// }
// alert(sum);


// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+(2*i+1);
//     //sum+=i;
// }
// alert(sum);



// var sum=0;
// for(var i=1;i<=10;i++){
// 	if(i%2==0){    
// 		sum=sum+i;
// 	}
//     //sum+=i;
// }
// alert(sum);
// 
// 
// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=10;i++){
// 	document.write('<tr>');
// 	for(j=1;j<=10;j++){
// 		document.write('<td>'+i+'*'+j+'='+(i*j)+'</td>');
// 	}
// 	document.write('</tr>');
// }
// document.write('</table>');
// 
// 
// // 
//  document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=10;i++){
// 	if(i%2==0){
// 	document.write('<tr bgcolor="red">');	
// 	for(j=1;j<=10;j++){
// 			document.write('<td>'+i+'-'+j+'</td>');
// 	}
// 	document.write('</tr>');
//    }
//   else{
// 	document.write('<tr bgcolor="yellow">');	
// 	for(j=1;j<=10;j++){
// 			document.write('<td>'+i+'-'+j+'</td>');
		
// 	}
// 	document.write('</tr>');
//    }
// }
// document.write('</table>');
// // 
// // 
// // 
// // 
// 几行几列
// function liebiao(m,n){
// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=m;i++){
// 	if(i%2==0){
// 	document.write('<tr>');	
// 	for(j=1;j<=n;j++){
// 		if(j%2==0){
// 			document.write('<td bgcolor="red">'+i+'-'+j+'</td>');
// 		}else{
// 			document.write('<td bgcolor="yellow">'+i+'-'+j+'</td>');
// 		}
		
// 	}
// 	document.write('</tr>');
//    }
//   else{
// 	document.write('<tr>');	
// 	for(j=1;j<=n;j++){
// 		if(j%2==1){
// 			document.write('<td bgcolor="red">'+i+'-'+j+'</td>');
// 		}else{
// 			document.write('<td bgcolor="yellow">'+i+'-'+j+'</td>');
// 		}
// 	}
// 	document.write('</tr>');
//    }
// }
// document.write('</table>');
// }
// liebiao(8,8);



// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=9;i++){
// 	document.write('<tr>');
// 	for(j=1;j<=i;j++){
// 		document.write('<td>'+i+'*'+j+'='+(i*j)+'</td>');
// 	}
// 	document.write('</tr>');
// }
// 
// 
// document.write('</table>');
// var table='<table border="1px solid #000" cellspacing="0" cellpadding="10px">';
// for(i=1;i<=10;i++){
// 	var colors;
// 	if(i%2==0){
// 		colors='red';
//     // table+='<tr style="background-color:red">';

// 	}else{
// 		colors='green';
//     // table+='<tr style="background-color:green">';

// 	}
//     table+='<tr style=background-color:'+colors+'>';
// 	// console.log(color);

//     for(var j=1;j<=10;j++){
//     	table+='<td>'+i+'-'+j+'</td>';
//     }
//     table+='</tr>';
// }
// table+='</table>';
// document.write(table);


// var h=prompt("请输入行数", 0);
// function jinzita(h){
// var tab='<table>';
// for(i=1;i<=h;i++){
//     tab+='<tr>';
//     //tab=tab+'<tr>'
//     for(var k=1;k<=(h-i);k++){
//             tab+='<td>'+'&nbsp;'+'</td>';
//         }
//     for(var j=1;j<=(2*i-1);j++){
//     	tab+='<td>'+'*'+'</td>';	
//     }
//     tab+='</tr>';
//    }
// tab+='</table>';
// document.write(tab);
// }
// jinzita(20);



//斐波那契
// function feibonaqie(mm){
// var sum=0,i=1,j=0;
// for(var sum=1;sum<=mm;){
// 	sum=i+j;
// 	i=j;
// 	j=sum;
// 	document.write(sum+'&nbsp;');
//  }
// }
// feibonaqie(200);
// 
// 
// 
// //一位数组的最大值
// function am(ywsz){
// var max=ywsz[0];
// for(var i=1;i<ywsz.length;i++){
//    if(max<a[i]){
//    	max=a[i];
//    }
// }
// document.write(max);
// }
// var a=[21,132,33,2,3,14,68,4];
// am(a);


//冒泡排序
// // document.write(a);
// for(var i=0;i<a.length;i++){
//   for(var j=i+1;j<a.length;j++){
//    if(a[i]<a[j]){
//    	var temp=a[i];
//    	a[i]=a[j];
//    	a[j]=temp;
//    }
//  }
// }
// console.log(a);
// 
// var i=1,sum=0;
// // while(i<=10){
// // 	sum=sum+i;
// //     i++;
// // }
// // alert(sum);
// do{
//   sum=sum+i;
//     i++;
// }while(i<=10)
// alert(sum);



 
// 二维数组最大值
// function ewsz(aa){
// var max=aa[0][0];
// for(var i=0;i<aa.length;i++){

// 	for(var j=0;j<aa[i].length;j++){
		
//       if(max<=aa[i][j]){
//       	max=aa[i][j];
//       }
// 	}
// }
// document.write(max);
// }
// var ca=[[100,2,34],[5,9,12],[8,7,90]];
// ewsz(ca);


//数组去空
// function qukong(shuzu){
// var b=[];
// for(var i=0;i<shuzu.length;i++){
// 	if(shuzu[i]==undefined){//typeof a[i]!='undefined'
// 	continue;	
// 	}else{
// 		b[b.length]=shuzu[i];
// 	}
// }
// document.write(b);
// }
// var a=[1,2,,3,4,,5,6,,7];
// qukong(a);


//在数组后添加任意个数组元素(用argument)
// function push(arr){
//    for(var i=1;i<arguments.length;i++){
//    	arr[arr.length]=arguments[i];
//    }
//    alert(arr);
// }
// var zu=[1,2,3]
// push(zu,4,5,6,7)


//在数组后添加任意个数组元素(用剩余参数)
////...rest 接受剩余参数，数据类型为数组
// function push(arr,...rest){
//    for(var i=0;i<rest.length;i++){
//    	arr[arr.length]=rest[i];
//    }
//    alert(arr);
// }
// var zu=[1,2,3]
// push(zu,4,5,6,7)


//数组排序
//默认值  四种方法
// function sort(arr,type='>'){
//   // type=type||'<'
//   // type=(type==undefined?'<':type);
//   if(type=='<'){
//     sortUp(arr);
//   }else if(type=='>'){
//   	sortDown(arr);
//   }
// }
// function sortUp(arr){
// for(var i=0;i<arr.length;i++){
//   for(var j=i+1;j<arr.length;j++){
//    if(arr[i]>arr[j]){
//    	var temp=arr[i];
//    	arr[i]=arr[j];
//    	arr[j]=temp;
//    }
//  }
// }
// console.log(arr);
// }
// function sortDown(arr){
// for(var i=0;i<arr.length;i++){
//   for(var j=i+1;j<arr.length;j++){
//    if(arr[i]<arr[j]){
//    	var temp=arr[i];
//    	arr[i]=arr[j];
//    	arr[j]=temp;
//    }
//  }
// }
// console.log(arr);
// }
// var arr=[14,26,13]
// sort(arr);
// 
// 
// 
// 判断数组存在某一个特定值
// function exist(arr,num){
// for(var i=0;i<arr.length;i++){
// 	if(!(typeof arr=='object'&&arguments.length>1)){
//        return "输入有误";     
// 	}
// if(arr[i]==num){
// 	return true;
// }
// }
// return false;
// }

// arr=[9,8,7,6,4,3,4,5];
// alert(exist(arr,5));


//数组转换成字符串
// function join(arr,str){
// var string="";
// for( var i=0;i<arr.length;i++){
// 	// console.log(string)
//    if(i<arr.length-1){
//       string+=arr[i]+str;
//    }else{
//    	string+=arr[i];
//    }
// }
// return string;
// // console.log(string)
// // 
// }
// var arr=[9,8,7,6,4,3,4,5];
// alert(join(arr,'-'));

//过滤filter   筛选数组里面是偶数的数组元素

// function filter(arr){
// 	var arr1=[];
// for(var i=0;i<arr.length;i++){
// 	if(arr[i]%2==0){
//       arr1[arr1.length]=arr[i];
// 	}
// }
// return arr1;
// }
// var arr=[9,8,7,6,4,3,4,5];
// alert(filter(arr));


//函数调用函数
// function aa(num1,num2){
// return num1+num2;
// }
// function bb(num1,num2){
// return num1*num2;
// }
// function cc(num1,num2){
// return num1-num2;
// }
// function math(num1,num2,fn){
// 	return fn(num1,num2);
// }
// alert(math(8,4,aa));
// 
// 

//映射
var arr=[1,2,3,4,5,6]
function map(arr,fn){
	for(var i=0;i<arr.length;i++){
      arr[i]=fn(arr[i]);
	}
	return arr;
}
var result=map(arr,function(x){
	 return x*3;})
alert(result);
//筛选
var arr=[1,2,3,4,5,6]
function filter(arr,fn){
   var newarr=[];
   for(var i=0;i<arr.length;i++){
   	if(fn(arr[i])){
   		newarr[newarr.length]=arr[i];
   	}
   	
   }
   return newarr;
}
var result=filter(arr,function(x){
    return x%2==1;
})
alert(result);