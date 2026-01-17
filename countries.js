var countries=document.getElementById("world-map")
const board= document.getElementById("table")

var countriesList=[
{"name": "Canada", "owner": 0, "id":document.getElementById('Canada'), "reserves": 100,  "neighbor":["United States","Groenland"]},
{"name": "Groenland", "owner": 0, "id":document.getElementById('Groenland'),"reserves": 100, "neighbor":["Canada","Iceland"]},
{"name": "United States","owner": 0,"id":document.getElementById('United States'),"reserves": 100, "neighbor":["Cuba","Canada","Mexico"]},
{"name": "Mexico","owner": 0,"id":document.getElementById('Mexico'),"reserves": 100, "neighbor":["United States","Guatemala","Belize","Cuba"]},
{"name": "Guatemala","owner": 0,"id":document.getElementById('Guatemala'),"reserves": 100, "neighbor":["Belize","El Salvador","Honduras","Mexico"]},
{"name": "Belize","owner": 0,"id":document.getElementById('Belize'),"reserves": 100, "neighbor":["Guatemala","Mexico"]},
{"name": "El Salvador","owner": 0,"id":document.getElementById('El Salvador'),"reserves": 100, "neighbor":["Honduras","Guatemala"]},
{"name": "Honduras","owner": 0,"id":document.getElementById('Honduras'),"reserves": 100, "neighbor":["El Salvador","Nicaragua","Guatemala"]},
{"name": "Nicaragua","owner": 0,"id":document.getElementById('Nicaragua'),"reserves": 100, "neighbor":["Costa Rica","Honduras"]},
{"name": "Costa Rica","owner": 0,"id":document.getElementById('Costa Rica'),"reserves": 100, "neighbor":["Panama","Nicaragua"]},
{"name": "Panama","owner": 0,"id":document.getElementById('Panama'),"reserves": 100, "neighbor":["Costa Rica","Columbia"]},
{"name": "Cuba","owner": 0,"id":document.getElementById('Cuba'),"reserves": 100,"neighbor":["United States","Mexico","Jamaica","Haiti"]},
{"name": "Jamaica","owner": 0,"id":document.getElementById('Jamaica'),"reserves": 100,"neighbor":["Cuba","Haiti"]},
{"name": "Haiti","owner": 0,"id":document.getElementById('Haiti'),"reserves": 100,"neighbor":["Dominica Republic","Jamaica","Cuba"]},
{"name": "Dominica Republic","owner": 0,"id":document.getElementById('Dominica Republic'),"reserves": 100,"neighbor":["Puerto Rico","Haiti"]},
{"name": "Puerto Rico","owner": 0,"id":document.getElementById('Puerto Rico'),"reserves": 100,"neighbor":["Dominica Republic","Venezuela"]},
{"name": "Columbia","owner": 0,"id":document.getElementById('Columbia'),"reserves": 100,"neighbor":["Ecuador","Peru","Venezuela","Brazil","Panama"]},
{"name": "Ecuador","owner": 0,"id":document.getElementById('Ecuador'),"reserves": 100,"neighbor":["Columbia","Peru"]},
{"name": "Venezuela","owner": 0,"id":document.getElementById('Venezuela'),"reserves": 100,"neighbor":["Columbia","Guyana","Brazil","Puerto Rico"]},
{"name": "Peru","owner": 0,"id":document.getElementById('Peru'),"reserves": 100,"neighbor":["Columbia","Ecuador","Bolivia","Chile","Brazil"]},
{"name": "Argentina","owner": 0,"id":document.getElementById('Argentina'),"reserves": 100,"neighbor":["Uruguay","Paraguay","Bolivia","Chile","Brazil"]},
{"name": "Bolivia","owner": 0,"id":document.getElementById('Bolivia'),"reserves": 100,"neighbor":["Argentina","Brazil","Peru","Chile","Paraguay"]},
{"name": "Brazil","owner": 0,"id":document.getElementById('Brazil'),"reserves": 100,"neighbor":["Argentina","Suriname","Guyana","French Guiana","Columbia","Uruguay","Paraguay","Bolivia","Peru","Venezuela"]},
{"name": "Uruguay","owner": 0,"id":document.getElementById('Uruguay'),"reserves": 100,"neighbor":["Argentina","Brazil"]},
{"name": "Paraguay","owner": 0,"id":document.getElementById('Paraguay'),"reserves": 100,"neighbor":["Argentina","Bolivia","Brazil"],},
{"name": "Suriname","owner": 0,"id":document.getElementById('Suriname'),"reserves": 100,"neighbor":["Guyana","French Guyana","Brazil"],},{
"name": "French Guiana","owner": 0,"id":document.getElementById('French Guiana'),"reserves": 100,"neighbor":["Suriname","Brazil"],},
{"name": "Guyana","owner": 0,"id":document.getElementById('Guyana'),"reserves": 100,"neighbor":["Suriname","Brazil","Venezuela"],},
{"name": "Chile","owner": 0,"id":document.getElementById('Chile'),"reserves": 100,"neighbor":["Argentina","Bolivia","Peru"],},{
"name": "Iceland","owner": 0,"id":document.getElementById('Iceland'),"reserves": 100, "neighbor":["Groenland","United Kingdom"],},
{"name": "United Kingdom","owner": 0,"id":document.getElementById('United Kingdom'),"reserves": 100, "neighbor":["Iceland","Ireland","France"]},
{"name": "Ireland","owner": 0,"id":document.getElementById('Ireland'),"reserves": 100, "neighbor":["United Kingdom"]},
{"name": "France","owner": 0,"id":document.getElementById('France'),"reserves": 100, "neighbor":["United Kingdom","Spain","Germany","Italy","Belgium","Luxembourg","switzerland"]},
{"name": "Spain","owner": 0,"id":document.getElementById('Spain'),"reserves": 100, "neighbor":["France","Portugal","Morocco"]},
{"name": "Portugal","owner": 0,"id":document.getElementById('Portugal'),"reserves": 100, "neighbor":["Spain"]},
{"name": "Luxembourg","owner": 0,"id":document.getElementById('Luxembourg'),"reserves": 100, "neighbor":["France","Germany","Belgium"]},
{"name": "Germany","owner": 0,"id":document.getElementById('Germany'),"reserves": 100, "neighbor":["France","Holland","Belgium","Switzerland","Poland","Denmark","Cz","Austria"]},
{"name": "Belgium","owner": 0,"id":document.getElementById('Belgium'),"reserves": 100, "neighbor":["France","Holland","Germany","Luxembourg"]},
{"name": "Holland","owner": 0,"id":document.getElementById('Holland'),"reserves": 100, "neighbor":["Germany","Belgium"]},
{"name": "Switzerland","owner": 0,"id":document.getElementById('Switzerland'),"reserves": 100, "neighbor":["Germany","France","Austria","Italy"]},
{"name": "Italy","owner": 0,"id":document.getElementById('Italy'),"reserves": 100, "neighbor":["Slovenia","Croatia","France","Austria","Switzerland"]},
{"name": "Austria","owner": 0,"id":document.getElementById('Austria'),"reserves": 100, "neighbor":["Slovenia","Slovakia","Hungary","Germany","CZ","Switzerland"]},
{"name": "Slovenia","owner": 0,"id":document.getElementById('Slovenia'),"reserves": 100, "neighbor":["Hungary","Italy","Croatia","Austria"]},
{"name": "Croatia","owner": 0,"id":document.getElementById('Croatia'),"reserves": 100, "neighbor":["Hungary","Slovenia","Bosnia","Serbia"]},
{"name": "Bosnia","owner": 0,"id":document.getElementById('Bosnia'),"reserves": 100, "neighbor":["Croatia","Serbia","Montenegro"]},
{"name": "Montenegro","owner": 0,"id":document.getElementById('Montenegro'),"reserves": 100, "neighbor":["Albania","Kosovo","Bosnia","Serbia"]},
{"name": "Albania","owner": 0,"id":document.getElementById('Albania'),"reserves": 100, "neighbor":["Kosovo","Montenegro","Macedonia","Greece"]},
{"name": "Greece","owner": 0,"id":document.getElementById('Greece'),"reserves": 100, "neighbor":["Albania"," Türkiye","Macedonia","Bulgaria", "Cyprus"]},
{"name": "Bulgaria","owner": 0,"id":document.getElementById('Bulgaria'),"reserves": 100, "neighbor":["Serbia","Romania","Türkiye","Macedonia","Greece"]},
{"name": "Macedonia","owner": 0,"id":document.getElementById('Macedonia'),"reserves": 100, "neighbor":["Greece","Albania"," Bulgaria","Kosovo","Serbia"]},
{"name": "Kosovo","owner": 0,"id":document.getElementById('Kosovo'),"reserves": 100, "neighbor":["Montenegro","Albania"," Macedonia","Serbia"]},
{"name": "Serbia","owner": 0,"id":document.getElementById('Serbia'),"reserves": 100, "neighbor":["Bulgaria"," Kosovo","Macedonia","Bosnia","Croatia","Hungary","Romania"]},
{"name": "Hungary","owner": 0,"id":document.getElementById('Hungary'),"reserves": 100, "neighbor":["Austria","Slovakia","Ukraine","Romania","Serbia","Croatia","Slovenia"]},
{"name": "CZ","owner": 0,"id":document.getElementById('CZ'),"reserves": 100, "neighbor":["Austria"," Slovakia","Germany","Poland"]},
{"name": "Slovakia","owner": 0,"id":document.getElementById('Slovakia'),"reserves": 100, "neighbor":["Austria"," Hungary","CZ","Ukraine","Poland"]},
{"name": "Poland","owner": 0,"id":document.getElementById('Poland'),"reserves": 100, "neighbor":["CZ"," Germany","Ukraine","Belarus","Lithuania","Slovakia","Russian Federation"]},
{"name": "Ukraine","owner": 0,"id":document.getElementById('Ukraine'),"reserves": 100, "neighbor":["Russian Federation","Romania","Hungary","Poland","Belarus","Moldova","Slovakia"]},
{"name": "Moldova","owner": 0,"id":document.getElementById('Moldova'),"reserves": 100, "neighbor":["Romania","Ukraine"]},
{"name": "Romania","owner": 0,"id":document.getElementById('Romania'),"reserves": 100, "neighbor":[" Moldova","Ukraine","Bulgaria","Hungary","Serbia"]},
{"name": "Belarus","owner": 0,"id":document.getElementById('Belarus'),"reserves": 100, "neighbor":[" Poland","Ukraine","Russian Federation","Latvia","Lithuania"]},
{"name": "Lithuania","owner": 0,"id":document.getElementById('Lithuania'),"reserves": 100, "neighbor":[" Poland","Belarus","Russian Federation","Latvia"]},
{"name": "Latvia","owner": 0,"id":document.getElementById('Latvia'),"reserves": 100, "neighbor":["Estonia","Belarus","Russian Federation","Lithuania"]},
{"name": "Estonia","owner": 0,"id":document.getElementById('Estonia'),"reserves": 100, "neighbor":[" Latvia","Russian Federation"]},
{"name": "Denmark","owner": 0,"id":document.getElementById('Denmark'),"reserves": 100, "neighbor":[" Germany","Sweden"]},
{"name": "Sweden","owner": 0,"id":document.getElementById('Sweden'),"reserves": 100, "neighbor":["Denmark","Norway","Finland"]},
{"name": "Norway","owner": 0,"id":document.getElementById('Norway'),"reserves": 100, "neighbor":[" Russian Federation","Sweden","Finland"]},
{"name": "Finland","owner": 0,"id":document.getElementById('Finland'),"reserves": 100, "neighbor":[" Russian Federation","Sweden","Norway"]},
{"name": "Russian Federation","owner": 2,"id":document.getElementById('Russian Federation'),"reserves": 100, "neighbor":[" Belarus","Ukraine","Finland","Estonia","Latvia","Georgia","Azerbaijan","Georgia","Kazakhstan","Mongolia","China","North Korea"]},
{"name": "Mongolia","owner": 0,"id":document.getElementById('Mongolia'),"reserves": 100, "neighbor":[" Russian Federation","China"]},
{"name": "China","owner": 0,"id":document.getElementById('China'),"reserves": 100, "neighbor":["Afghanistan", "Bhutan", "India", "Kazakhstan", "North Korea", "Kyrgizstan", "Laos", "Mongolia", "Myanmar", "Nepal", "Pakistan", "Russian Federation", "Tajikistan", "Vietnam"]},
{"name": "Kazakhstan","owner": 0,"id":document.getElementById('Kazakhstan'),"reserves": 100, "neighbor":["Turkmenistan"," Russian Federation","China","Kyrgizstan","Uzbekistan"]},
{"name": "Uzbekistan","owner": 0,"id":document.getElementById('Uzbekistan'),"reserves": 100, "neighbor":["Turkmenistan","Kyrgizstan","Afghanistan","Tajikistan","Kazakhstan"]},
{"name": "Turkmenistan","owner": 0,"id":document.getElementById('Turkmenistan'),"reserves": 100, "neighbor":["Uzbekistan","Iran","Afghanistan","Kazakhstan"]},
{"name":"Tajikistan","owner": 0,"reserves": 100,"id":document.getElementById('Tajikistan'), "neighbor":["Uzbekistan","China","Afghanistan","Kyrgizstan"]},
{"name": "Kyrgizstan","owner": 0,"reserves": 100,"id":document.getElementById('Kyrgizstan'), "neighbor":["China","Uzbekistan","Tajikistan","Kazakhstan"]},
{"name": "Afghanistan","owner": 0,"reserves": 100,"id":document.getElementById('Afghanistan'), "neighbor":["China","Pakistan","Turkmenistan","Tajikistan","Iran"]},
{"name": "Iran","owner": 0,"reserves": 100,"id":document.getElementById('Iran'), "neighbor":["Afghanistan","Pakistan","Turkmenistan","Iraq","Azerbaijan","Armenia","Türkiye"]},
{"name": "Azerbaijan","owner": 0,"reserves": 100,"id":document.getElementById('Azerbaijan'), "neighbor":["Georgia","Russian Federation","Iran","Armenia"]},
{"name": "Georgia","owner": 0,"reserves": 100,"id":document.getElementById('Georgia'), "neighbor":["Azerbaijan","Russian Federation","Türkiye","Armenia"]},
{"name": "Armenia","owner": 0,"reserves": 100,"id":document.getElementById('Armenia'), "neighbor":["Azerbaijan","Georgia","Türkiye","Iran"]},
{"name": "Pakistan","owner": 0,"reserves": 100,"id":document.getElementById('Pakistan'), "neighbor":["Iran","India","Afghanistan","China"]},
{"name": "India","owner": 0,"reserves": 100,"id":document.getElementById('India'), "neighbor":["Nepal","Pakistan","Bangladesh","Myanmar","China","Buthan","Sri Lanka"]},
{"name": "Sri Lanka","owner": 0,"reserves": 100,"id":document.getElementById('Sri Lanka'), "neighbor":["India"]},
{"name": "Nepal","owner": 0,"reserves": 100,"id":document.getElementById('Nepal'), "neighbor":["China","India"]},
{"name": "Buthan","owner": 0,"reserves": 100,"id":document.getElementById('Buthan'), "neighbor":["China","India"]},
{"name": "Bangladesh","owner": 0,"reserves": 100,"id":document.getElementById('Bangladesh'), "neighbor":["Myanmar","India"]},
{"name": "Sri Lanka","owner": 0,"reserves": 100,"id":document.getElementById('Sri Lanka'), "neighbor":["India"]},
{"name": "Myanmar","owner": 0,"reserves": 100,"id":document.getElementById('Myanmar'), "neighbor":["China","India","Laos","Thailand","Bangladesh"]},
{"name": "Laos","owner": 0,"reserves": 100,"id":document.getElementById('Laos'), "neighbor":["Cambodgia","Vietnam","China","Thailand","Myanmar"]},
{"name": "Vietnam","owner": 0,"reserves": 100,"id":document.getElementById('Vietnam'), "neighbor":["Cambodgia","Laos","China"]},
{"name": "Cambodgia","owner": 0,"reserves": 100,"id":document.getElementById('Cambodgia'), "neighbor":["Vietnam","Laos","Thailand"]},
{"name": "Thailand","owner": 0,"reserves": 100,"id":document.getElementById('Thailand'), "neighbor":["Cambodgia","Laos","Myanmar","Malaysia"]},
{"name": "Malaysia","owner": 0,"reserves": 100,"id":document.getElementById('Malaysia'), "neighbor":["Thailand","Indonesia","Myanmar","Malaysia","Brunei"]},
{"name": "Indonesia","owner": 0,"reserves": 100,"id":document.getElementById('Indonesia'), "neighbor":["Timor","Philippines","Papua New Guinea","Malaysia","Brunei", "Australia"]},
{"name": "Philippines","owner": 0,"reserves": 100,"id":document.getElementById('Philippines'), "neighbor":["Indonesia"]},
{"name": "Brunei","owner": 0,"reserves": 100,"id":document.getElementById('Brunei'), "neighbor":["Malaysia"]},
{"name": "Papua New Guinea","owner": 0,"reserves": 100,"id":document.getElementById('Papua New Guinea'), "neighbor":["Indonesia", "Australia"]},
{"name": "Timor","owner": 0,"reserves": 100,"id":document.getElementById('Timor'), "neighbor":["Indonesia", "Australia"]},
{"name": "Australia","owner": 0,"reserves": 100,"id":document.getElementById('Australia'), "neighbor":["Indonesia", "Timor","New Zealand","Papua New Guinea"]},
{"name": "New Zealand","owner": 0,"reserves": 100,"id":document.getElementById('New Zealand'), "neighbor":["Australia"]},
{"name": "North Korea","owner": 0,"reserves": 100,"id":document.getElementById('North Korea'), "neighbor":["China","Russia","South Korea"]},
{"name": "South Korea","owner": 0,"reserves": 100,"id":document.getElementById('South Korea'), "neighbor":["Japan","North Korea"]},
{"name": "Japan","owner": 0,"reserves": 100,"id":document.getElementById('Japan'), "neighbor":["South Korea"]},
{"name": "Türkiye","owner": 0,"reserves": 100,"id":document.getElementById('Türkiye'), "neighbor":["Greece","Bulgaria","Syria","Iran","Iraq","Cyprus","Armenia","Georgia"]},
{"name": "Cyprus","owner": 0,"reserves": 100,"id":document.getElementById('Cyprus'), "neighbor":["Greece","Syria","Türkiye"]},
{"name": "Syria","owner": 0,"reserves": 100,"id":document.getElementById('Syria'), "neighbor":["Cyprus","Iraq","Türkiye","Levant","Lebanon"]},
{"name": "Levant","owner": 0,"reserves": 100,"id":document.getElementById('Levant'), "neighbor":["Türkiye","Saudi Arabia","Lebanon","Egypt"]},
{"name": "Lebanon","owner": 0,"reserves": 100,"id":document.getElementById('Lebanon'), "neighbor":["Syria","Levant"]},
{"name": "Iraq","owner": 0,"reserves": 100,"id":document.getElementById('Iraq'), "neighbor":["Syria","Iran","Kuwait","Saudi Arabia","Türkiye"]},
{"name": "Kuwait","owner": 0,"reserves": 100,"id":document.getElementById('Kuwait'), "neighbor":["Saudi Arabia","Iraq"]},
{"name": "Saudi Arabia","owner": 0,"reserves": 100,"id":document.getElementById('Saudi Arabia'), "neighbor":["Syria","Iraq","Levant","Kuwait","Yemen","Oman","Qatar","Bahrain","UAE"]},
{"name": "Yemen","owner": 0,"reserves": 100,"id":document.getElementById('Yemen'), "neighbor":["Oman","Saudi Arabia"]},
{"name": "Oman","owner": 0,"reserves": 100,"id":document.getElementById('Oman'), "neighbor":["Yemen","Saudi Arabia", "UAE"]},
{"name": "UAE","owner": 0,"reserves": 100,"id":document.getElementById('UAE'), "neighbor":["Oman","Saudi Arabia"]},
{"name": "Qatar","owner": 0,"reserves": 100,"id":document.getElementById('Qatar'), "neighbor":["Saudi Arabia"]},
{"name": "Bahrain","owner": 0,"reserves": 100,"id":document.getElementById('Bahrain'), "neighbor":["Saudi Arabia"]},
{"name": "Egypt","owner": 0,"reserves": 100,"id":document.getElementById('Egypt'), "neighbor":["Levant","Lybia","Sudan"]},
{"name": "Lybia","owner": 0,"reserves": 100,"id":document.getElementById('Lybia'), "neighbor":["Algeria","Chad","Sudan","Tunisia","Egypt"]},
{"name": "Tunisia","owner": 0,"reserves": 100,"id":document.getElementById('Tunisia'), "neighbor":["Algeria","Lybia"]},
{"name": "Algeria","owner": 0,"reserves": 100,"id":document.getElementById('Algeria'), "neighbor":["Morocco","Mali","Niger","Lybia","Mauritania","Western Sahara","Tunisia"]},
{"name": "Morocco","owner": 0,"reserves": 100,"id":document.getElementById('Morocco'), "neighbor":["Algeria","Spain","Western Sahara"]},
{"name": "Western Sahara","owner": 0,"reserves": 100,"id":document.getElementById('Western Sahara'), "neighbor":["Algeria","Mauritania","Morocco"]},
{"name": "Mauritania","owner": 0,"reserves": 100,"id":document.getElementById('Mauritania'), "neighbor":["Algeria","Western Sahara","Mali","Senegal"]},
{"name": "Mali","owner": 0,"reserves": 100,"id":document.getElementById('Mali'), "neighbor":["Algeria","Mauritania","Niger","Senegal","Burkina Faso","Guinea","Côte d'Ivoire"]},
{"name": "Niger","owner": 0,"reserves": 100,"id":document.getElementById('Niger'), "neighbor":["Algeria","Lybia","Chad","Nigeria","Burkina Faso","Benin","Burkina Faso"]},
{"name": "Chad","owner": 0,"reserves": 100,"id":document.getElementById('Chad'), "neighbor":["Lybia","Sudan","Niger","Cameroon","Central African Republic",]},
{"name": "Sudan","owner": 0,"reserves": 100,"id":document.getElementById('Sudan'), "neighbor":["Lybia","Egypt","Chad","South Sudan","Central African Republic","Eritrea","Ethiopia"]},
{"name": "Eritrea","owner": 0,"reserves": 100,"id":document.getElementById('Eritrea'), "neighbor":["Sudan","Ethiopia","Djibouti"]},
{"name": "Djibouti","owner": 0,"reserves": 100,"id":document.getElementById('Djibouti'), "neighbor":["Somalia","Ethiopia","Eritrea"]},
{"name": "Somalia","owner": 0,"reserves": 100,"id":document.getElementById('Somalia'), "neighbor":["Djibouti","Ethiopia","Kenya"]},
{"name": "Ethiopia","owner": 0,"reserves": 100,"id":document.getElementById('Ethiopia'), "neighbor":["Djibouti","Somalia","Eritrea","Sudan","South Sudan","Kenya"]},
{"name": "South Sudan","owner": 0,"reserves": 100,"id":document.getElementById('South Sudan'), "neighbor":["Central African Republic","Uganda","RDC","Sudan","Ethiopia","Kenya"]},
{"name": "Central African Republic","owner": 0,"reserves": 100,"id":document.getElementById('Central African Republic'), "neighbor":["South Sudan","Sudan","RDC","Chad","Cameroon","Congo"]},
{"name": "Cameroon","owner": 0,"reserves": 100,"id":document.getElementById('Cameroon'), "neighbor":["Central African Republic","Congo","Chad","Gabon","Nigeria","Equatorial Guinea"]},
{"name": "Nigeria","owner": 0,"reserves": 100,"id":document.getElementById('Nigeria'), "neighbor":["Cameroon","Benin","Niger","Chad"]},
{"name": "Benin","owner": 0,"reserves": 100,"id":document.getElementById('Benin'), "neighbor":["Nigeria","Togo","Burkina Faso","Niger"]},
{"name": "Togo","owner": 0,"reserves": 100,"id":document.getElementById('Togo'), "neighbor":["Ghana","Benin","Burkina Faso"]},
{"name": "Ghana","owner": 0,"reserves": 100,"id":document.getElementById('Ghana'), "neighbor":["Togo","Côte d'Ivoire","Burkina Faso"]},
{"name": "Côte d'Ivoire","owner": 0,"reserves": 100,"id":document.getElementById("Côte d'Ivoire"), "neighbor":["Ghana","Mali","Guinea","Liberia","Burkina Faso"]},
{"name": "Burkina Faso","owner": 0,"reserves": 100,"id":document.getElementById("Burkina Faso"), "neighbor":["Ghana","Mali","Niger","Togo","Benin","Côte d'Ivoire"]},
{"name": "Liberia","owner": 0,"reserves": 100,"id":document.getElementById("Liberia"), "neighbor":["Sierra Leone","Guinea","Côte d'Ivoire"]},
{"name": "Guinea","owner": 0,"reserves": 100,"id":document.getElementById("Guinea"), "neighbor":["Sierra Leone","Liberia","Côte d'Ivoire","Mali","Guinea-Bissau","Senegal"]},
{"name": "Sierra Leone","owner": 0,"reserves": 100,"id":document.getElementById("Sierra Leone"), "neighbor":["Guinea","Liberia"]},
{"name": "Guinea-Bissau","owner": 0,"reserves": 100,"id":document.getElementById("Guinea-Bissau"), "neighbor":["Guinea","Senegal"]},
{"name": "Senegal","owner": 0,"reserves": 100,"id":document.getElementById("Senegal"), "neighbor":["Guinea","Mali","Mauritania","The Gambia"]},
{"name": "The Gambia","owner": 0,"reserves": 100,"id":document.getElementById("The Gambia"), "neighbor":["Senegal"]},
{"name": "Equatorial Guinea","owner": 0,"reserves": 100,"id":document.getElementById("Equatorial Guinea"), "neighbor":["Cameroon","Gabon"]},
{"name": "Gabon","owner": 0,"reserves": 100,"id":document.getElementById("Gabon"), "neighbor":["Equatorial Guinea","Cameroon","Congo"]},
{"name": "Congo","owner": 0,"reserves": 100,"id":document.getElementById("Congo"), "neighbor":["RDC","Cameroon","Central African Republic"]},
{"name": "RDC","owner": 0,"reserves": 100,"id":document.getElementById("RDC"), "neighbor":["Congo","South Sudan","Uganda","Rwanda","Burundi","Tanzania","Zambia","Angola","Cameroon","Central African Republic"]},
{"name": "Uganda","owner": 0,"reserves": 100,"id":document.getElementById("Uganda"), "neighbor":["RDC","South Sudan","Kenya","Rwanda","Burundi","Tanzania"]},
{"name": "Kenya","owner": 0,"reserves": 100,"id":document.getElementById("Kenya"), "neighbor":["Ethiopia","Somalia","Uganda","Tanzania","South Sudan"]},
{"name": "Tanzania","owner": 0,"reserves": 100,"id":document.getElementById("Tanzania"), "neighbor":["RDC","Kenya","Rwanda","Burundi","Uganda","Malawi","Zambia","Mozambique"]},
{"name": "Rwanda","owner": 0,"reserves": 100,"id":document.getElementById("Rwanda"), "neighbor":["RDC","Tanzania","Burundi","Uganda"]},
{"name": "Burundi","owner": 0,"reserves": 100,"id":document.getElementById("Burundi"), "neighbor":["RDC","Tanzania","Rwanda"]},
{"name": "Mozambique","owner": 0,"reserves": 100,"id":document.getElementById("Mozambique"), "neighbor":["Zambia","Zimbabwe","Tanzania","Malawi","Eswatini","South Africa","Madagascar"]},
{"name": "Malawi","owner": 0,"reserves": 100,"id":document.getElementById("Malawi"), "neighbor":["Zambia","Zimbabwe","Tanzania","Mozambique"]},
{"name": "Zambia","owner": 0,"reserves": 100,"id":document.getElementById("Zambia"), "neighbor":["Angola","Namibia","Zimbabwe","Tanzania","Mozambique","RDC","Malawi"]},
{"name": "Angola","owner": 0,"reserves": 100,"id":document.getElementById("Angola"), "neighbor":["RDC","Namibia","Zambia"]},
{"name": "Namibia","owner": 0,"reserves": 100,"id":document.getElementById("Namibia"), "neighbor":["Angola","Botswana","Zambia","South Africa"]},
{"name": "South Africa","owner": 0,"reserves": 100,"id":document.getElementById("South Africa"), "neighbor":["Namibia","Botswana","Zimbabwe","Eswatini","Lesotho","Mozambique"]},
{"name": "Botswana","owner": 0,"reserves": 100,"id":document.getElementById("Botswana"), "neighbor":["Namibia","South Africa","Zimbabwe"]},
{"name": "Lesotho","owner": 0,"reserves": 100,"id":document.getElementById("Lesotho"), "neighbor":["South Africa"]},
{"name": "Eswatini","owner": 0,"reserves": 100,"id":document.getElementById("Eswatini"), "neighbor":["South Africa","Mozambique"]},
{"name": "Madagascar","owner": 0,"reserves": 100,"id":document.getElementById("Madagascar"), "neighbor":["Mozambique"]},
{"name": "Zimbabwe","owner": 0,"reserves": 100,"id":document.getElementById("Zimbabwe"), "neighbor":["Mozambique","Botswana","South Africa","Zambia"]},
]

var selectedArmy;
var gameStarted= false;
var playerNumber;
var startPosition;
let npc=[];
var playerLand=[];

function startGame(){
    if(startPosition==null){
        document.getElementById("initial-header").innerText="Please select a country before starting the game"
    }
    else{
    document.getElementById('main-menu').style.display="none",
    document.getElementById('gameDashboard').style.display="flex"
    gameStarted= true, 
    playerNumber= document.getElementById('playerNumber').value,
     asignPlayers(playerNumber),
     setInterval(recruitment, 1000), 
     setInterval(attack, 10000), 
     setInterval(update_reserves,1000), 
     setInterval(updateBoard,1000) ,
     setInterval(playerActions,1000);
     setInterval(landUpdate,1000)
}}


countries.addEventListener('mouseover',(e)=>{ 
let countryIdName=e.target.id;
const firstMatch = countriesList.find((emp) => emp.name ===(countryIdName));
if(countryIdName=='worldmap'){
    document.getElementById("showReserve").style.display= "none"
    return}
document.getElementById("showReserve").innerText= `${countryIdName} :${firstMatch.reserves} troops`
document.getElementById("showReserve").style.display= "initial"

})


function UpdateCountry(CountryName,owner,color){
    const Match = countriesList.find((emp) => emp.name ===(CountryName));
    Match.owner=owner;
    Match.id.style.fill=color;
    Match.id.style.transition= "0.5s ease-in"
}


class Player{
    constructor(ownerId,fillColor,location=[],neighbor=[],army){
        this.ownerId= ownerId;
        this.fillColor=fillColor;
        this.location= location;
        this.neighbor=neighbor;
        this.army=army;
    }
        neighborList(e)
           { this.neighbor.push(...e);
            this.neighbor = this.neighbor.filter(val => !this.location.includes(val));
        }
        addArmy(){
            return this.army= (this.army +this.location.length * 2) ;
        }


        attackCountry(){
            for(var a=0; a<countriesList.length; a++){
                if(this.location.includes(countriesList[a].name)&&countriesList[a].owner!=this.ownerId ){
                    let deletedValue= countriesList[a].name;
                    this.location= this.location.filter(e=> e !== deletedValue)
                   this.neighbor=[];
                        for(var b=0; b<this.location.length; b++){
                            const Match = countriesList.find((emp) => emp.name ===(this.location[b]));
                            this.neighbor.push(...Match.neighbor)
                            this.neighbor = this.neighbor.filter(val => !this.location.includes(val));
                        }
                    

                }
                if(countriesList[a].owner!=this.ownerId && this.neighbor.includes(countriesList[a].name) && countriesList[a].reserves< this.army){
                    UpdateCountry(countriesList[a].name,this.ownerId,this.fillColor);
                    this.location.push(countriesList[a].name);
                    this.neighborList(countriesList[a].neighbor);
                    this.army= this.army-countriesList[a].reserves;
                    countriesList[a].reserves=0;
                    break;
}}}}



function randomLocation(a){
    const keys=Object.keys(a)
    var index=Math.floor(Math.random()*keys.length)
    var key=keys[index];
    return a[key];}




function asignPlayers(e){
    const colorList=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'];
    var usedCountry=[];
    //player
    neighborId= countriesList.indexOf(startPosition)

    var mainPlayer= new Player(11,'#80B300', startPosition.name, countriesList[neighborId].neighbor, 100)
    npc[0]=mainPlayer
    playerLand.push(startPosition.name);
    UpdateCountry(startPosition.name,11,"#80B300")
    board.innerHTML+=`<th>Player</th> <th id="11">${mainPlayer.army}</th>`
   
    //NPC
  for(var i=1; i < e; i++) 
  {
    usedCountry[i]=randomLocation(countriesList)
    neighborId= countriesList.indexOf(usedCountry[i])
    var countries=[usedCountry[i].name];
   npc[i]=new Player(i, colorList[i], countries, countriesList[neighborId].neighbor, 100)
   UpdateCountry(usedCountry[i].name ,npc[i].ownerId,npc[i].fillColor)
   board.innerHTML+=`<th>${countries}</th> <th id="${i}">${npc[i].army}</th>`

  }  

};

//problem, you can get the same number 2 times

countries.addEventListener('click',(e) =>
  {
    let countryIdName=e.target.id;
    const firstMatch = countriesList.find((emp) => emp.name ===(countryIdName));
    if(gameStarted===false){
        for(var i=0; i<countriesList.length; i++){
        if(countriesList[i].name!=countryIdName){
            countriesList[i].id.style.fill="grey"
        }
        firstMatch.id.style.fill= "#80B300";
        startPosition=firstMatch;
    }}
    if(gameStarted===true){
    for(i=0; i<countriesList.length; i++){
        if(countriesList[i].owner===11){
            
        }
        if( countriesList[i].owner===11 && countriesList[i].neighbor.includes(countryIdName)){
            if(npc[0].army>=firstMatch.reserves){
            UpdateCountry(countryIdName,11,"#80B300")
            playerLand.push(countryIdName)
            npc[0].army= npc[0].army-firstMatch.reserves;
            firstMatch.reserves=0;
            break;}
            if(npc[0].army<firstMatch.reserves){
                console.log("you dont have enough troops")
            }
        }
    
    }
}}

    );




    function landUpdate(){
        for(var e=0; e<playerLand.length; e++){
            const Match = countriesList.find((emp) => emp.name ===(playerLand[e]));
            if(Match.owner != 11){                playerLand.splice(e)
                console.log(playerLand)
            }
            if(playerLand.length<1){
                alert("you lost")
            }
        }
    }


    function recruitment(){
        for(i=1; i<npc.length; i++){
            npc[i].addArmy(); 
        }
    }
    function attack(){
        for(i=1; i<npc.length; i++){
            npc[i].attackCountry();      
        }
    }
function update_reserves(){
    for(i=0; i<countriesList.length; i++){
        countriesList[i].reserves+= 1;
    }
}

function updateBoard(){
    for(var d=1; d<npc.length;d++){
        let military=document.getElementById(`${d}`)
        military.innerHTML=`${npc[d].army}`
    }
}

function playerActions(){
    var playerArmy=document.getElementById("11");
    playerArmy.innerHTML=`${npc[0].army}`
    npc[0].army= (npc[0].army +playerLand.length * 2) ;
    
//+troops, range, attack actions



}
