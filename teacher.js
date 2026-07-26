/* ===========================================
TEACHER.JS
PART 1
=========================================== */

const T={

room:"",
roomData:null,

async api(){

return await SERVER_HERO_FIREBASE_READY;

},

clean(x){

return String(x||"")

.trim()

.toUpperCase()

.replace(/[^A-Z0-9-]/g,"")

.slice(0,20);

},

async create(){

this.room=

this.clean(

newRoomCode.value

);

const teacher=

teacherName.value.trim();

if(

!this.room||

!teacher

){

roomStatus.innerHTML=

"Isi nama guru dan kod bilik.";

return;

}

const F=

await this.api();

await F.update(

F.ref(

F.database,

`rooms/${this.room}`

),

{

code:this.room,

teacher,

status:"waiting",

createdAt:

F.serverTimestamp()

}

);

roomStatus.innerHTML=

`Bilik ${this.room} berjaya dibuka.`;

const base=

`${location.origin}${location.pathname.replace("teacher.html","")}`;

joinLink.value=

`${base}index.html?room=${this.room}`;

this.watch();

},

async watch(){

const F=

await this.api();

F.onValue(

F.ref(

F.database,

`rooms/${this.room}`

),

snap=>{

this.roomData=

snap.val()||{};

this.render(

this.roomData

);

}

);

},

render(data){

const players=

Object.values(

data.players||{}

);

totalStudents.innerHTML=

players.length;

approvedStudents.innerHTML=

players.filter(

p=>p.approved

).length;

racingStudents.innerHTML=

players.filter(

p=>p.status==="racing"

).length;

finishedStudents.innerHTML=

players.filter(

p=>p.finished

).length;

summary.innerHTML=

`Jumlah Pelajar :
<b>${players.length}</b>`;

studentList.innerHTML=

players

.map(

(p,i)=>`

<div class="student-row">

<b>

${i+1}

</b>

<span>

${p.avatar||"👤"}

<br>

<b>

${p.name}

</b>

<br>

<small>

${p.id}

</small>

</span>

<span>

${p.approved?"✅":"⌛"}

</span>

<strong>

${p.score||0}

</strong>

<button

onclick="T.approve('${p.key}',${!p.approved})">

${p.approved?"Batalkan":"Approve"}

</button>

</div>

`

)

.join("");

/* ===========================================
TEACHER.JS
PART 2
=========================================== */

const sorted=

[...players]

.filter(

p=>p.approved

)

.sort(

(a,b)=>

(b.score||0)

-

(a.score||0)

||

(a.lastAnswerMs||999999)

-

(b.lastAnswerMs||999999)

);

liveLeaderboard.innerHTML=

sorted

.map(

(p,i)=>`

<div class="leader-row">

<b>

${i==0?"🥇":i==1?"🥈":i==2?"🥉":"#"+(i+1)}

</b>

<span>

${p.name}

</span>

<strong>

${p.score||0}

</strong>

<span>

${p.progress||0}/10

</span>

<span>

${p.status||"-"}

</span>

</div>

`

)

.join("");

firstPlace.innerHTML=

sorted[0]?.name||"-";

secondPlace.innerHTML=

sorted[1]?.name||"-";

thirdPlace.innerHTML=

sorted[2]?.name||"-";

},

async approve(

key,

value

){

const F=

await this.api();

await F.update(

F.ref(

F.database,

`rooms/${this.room}/players/${key}`

),

{

approved:value,

status:

value

?

"approved"

:

"waiting"

}

);

},

async approveAll(){

const F=

await this.api();

const snap=

await F.get(

F.ref(

F.database,

`rooms/${this.room}/players`

)

);

const updates={};

Object.keys(

snap.val()||{}

)

.forEach(

k=>{

updates[`${k}/approved`]=true;

updates[`${k}/status`]="approved";

}

);

await F.update(

F.ref(

F.database,

`rooms/${this.room}/players`),

updates

);

/* ===========================================
TEACHER.JS
PART 3
=========================================== */

},

async status(

value

){

const F=

await this.api();

await F.update(

F.ref(

F.database,

`rooms/${this.room}`

),

{

status:value,

startedAt:

value==="racing"

?

F.serverTimestamp()

:

null

}

);

},

async remove(

key

){

const F=

await this.api();

await F.remove(

F.ref(

F.database,

`rooms/${this.room}/players/${key}`

)

);

},

async csv(){

const F=

await this.api();

const snap=

await F.get(

F.ref(

F.database,

`rooms/${this.room}/players`

)

);

const players=

Object.values(

snap.val()||{}

)

.sort(

(a,b)=>

(b.score||0)

-

(a.score||0)

);

const rows=[

["Rank","Name","ID","Score","XP"],

...players.map(

(p,i)=>[

i+1,

p.name,

p.id,

p.score||0,

p.xp||0

]

)

];

const csv=

rows

.map(

r=>

r.join(",")

)

.join("\n");

const a=

document.createElement(

"a"

);

a.href=

URL.createObjectURL(

new Blob(

[csv],

{

type:"text/csv"

}

)

);

a.download=

`${this.room}.csv`;

a.click();

},

drawRace(){

if(

!this.roomData||

!this.roomData.players

){

return;

}

const players=

Object.values(

this.roomData.players

)

.filter(

p=>p.approved

)

.sort(

(a,b)=>

(b.score||0)

-

(a.score||0)

);

const lanes=

document

.querySelectorAll(

"#raceTrack .lane"

);

lanes.forEach(

lane=>lane.innerHTML=""

);

players

.slice(0,10)

.forEach(

(player,index)=>{

const lane=

lanes[index];

if(!lane)return;

const car=

document.createElement(

"div"

);

car.className="car";

car.style.left=

Math.min(

90,

(player.progress||0)

*10

)+"%";

car.innerHTML=

`🚗 <b>${player.name}</b>`;

lane.appendChild(

car

);

}

);

}

/* ===========================================
TEACHER.JS
PART 4 (FINAL)
=========================================== */

};

document.addEventListener(

"DOMContentLoaded",

()=>{

createRoomBtn.onclick=()=>T.create();

approveAllBtn.onclick=()=>T.approveAll();

startRaceBtn.onclick=()=>T.status("racing");

finishRaceBtn.onclick=()=>T.status("finished");

exportCsvBtn.onclick=()=>T.csv();

copyLinkBtn.onclick=()=>{

joinLink.select();

document.execCommand("copy");

copyLinkBtn.innerHTML="✅ DISALIN";

setTimeout(()=>{

copyLinkBtn.innerHTML="📋 COPY LINK";

},1500);

};

setInterval(()=>{

T.drawRace();

},500);

});

window.T=T;
