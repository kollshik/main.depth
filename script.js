//Площадь___________________

let mainSquare = document.forms.main__square;

let widthSquare = mainSquare.width;
let heighSquare = mainSquare.heigh;
let resultSquare = mainSquare.result;

const countSquare = document.querySelector('.square__count');
const clearSquare = document.querySelector('.square__clear');

countSquare.onclick=function(){
    resultSquare.value = (widthSquare.value*heighSquare.value);
};

clearSquare.onclick=function(){
    widthSquare.value='';
    heighSquare.value='';
    resultSquare.value='';
    };

//Средня глубина___________________

const mainDepth = document.forms.main__depth;
let depthPoint1 = mainDepth.depth__point_1;
let depthPoint2 = mainDepth.depth__point_2;
let depthPoint3 = mainDepth.depth__point_3;
let depthPoint4 = mainDepth.depth__point_4;
let depthPoint5 = mainDepth.depth__point_5;

let = depthResult = mainDepth.depth__result;

const depthCount = document.querySelector('.depth__count');
const depthClear = document.querySelector('.depth__clear');



depthCount.onclick = function(){

    //gap = (((depthPoint1.value-minPoint) + (depthPoint2.value-minPoint) + (depthPoint3.value-minPoint) + (depthPoint4.value-minPoint) + (depthPoint5.value-minPoint))+1)/5;
    
    let minPoint = Math.min((depthPoint1.value*1), (depthPoint2.value*1), (depthPoint3.value*1), (depthPoint4.value*1), (depthPoint5.value*1));

    depthResult.value = (((depthPoint1.value*1-minPoint) + (depthPoint2.value*1-minPoint) + (depthPoint3.value*1-minPoint) + (depthPoint4.value*1-minPoint) + (depthPoint5.value*1-minPoint))/5);

    console.log(depthResult.value)

    
};

depthClear.onclick=function(){
    depthPoint1.value='';
    depthPoint2.value='';
    depthPoint3.value='';
    depthPoint4.value='';
    depthPoint5.value='';
    depthResult.value='';
    }


//___Расход мешков смеси

const mainСonsumption = document.forms.main__consumption;
let kg = mainСonsumption.consumption__width_1;
let kolvo = mainСonsumption.consumption__bag;

let plus = mainСonsumption.consumption__plus;

let widthAll = mainСonsumption.consumption__width_all;

const СonsumptionCount = document.querySelector('.consumption__count');
const СonsumptionClear = document.querySelector('.consumption__clear');


СonsumptionCount.onclick = function(){
 
    widthAll.value = (resultSquare.value * ((depthResult.value*1)+(plus.value*1))*10) * kg.value;

    kolvo.value = ((resultSquare.value * ((depthResult.value*1)+(plus.value*1))*10) * kg.value)/25;

    
};

СonsumptionClear.onclick=function(){
    kg.value='';
    kolvo.value='';
    }