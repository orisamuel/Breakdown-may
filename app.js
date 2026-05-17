(function() {
var h = React.createElement;
var useState = React.useState;
var useEffect = React.useEffect;

var ITEMS = [
{ id:1, day:‘ראשון’, t:‘8:30-9:00’, hotel:‘וילג׳’, type:‘1’, loc:‘חדר’, script:‘שוטים של השחקנים בחדר, ביוטי בלי השחקנים קצת. השחקנית בפריים והשחקן דרך המראה יושב וקורא’, cast:‘שחקן ושחקנית’, lc:’’, lp:’’ },
{ id:2, day:‘ראשון’, t:‘8:30-9:00’, hotel:‘וילג׳’, type:‘5’, loc:‘חדר’, script:‘עושים שנצ בחדר, שנצ במרפסת’, cast:‘שחקן ושחקנית’, lc:’’, lp:’’ },
{ id:3, day:‘ראשון’, t:‘9:00-10:30’, hotel:‘מלכת שבא’, type:‘4’, loc:‘חדר אוכל’, script:‘קלוז אפ מטורף על מנה, יוצאים מהחדר אוכל- קצת לובי, קבלה- יציאה ללוגו’, cast:’-’, lc:’’, lp:’’ },
{ id:4, day:‘ראשון’, t:‘9:00-10:30’, hotel:‘מלכת שבא’, type:‘2,8’, loc:‘חדר אוכל’, script:‘השחקנית והאוכל- ביוט וולוג. חיתוך לחם טרי בקלוז אפ. בציעה של קרואסון, כמה מנות יפות’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:5, day:‘ראשון’, t:‘9:00-10:30’, hotel:‘מלכת שבא’, type:‘3’, loc:‘חדר אוכל’, script:‘קפה וסלט בארוחת בוקר- עם השחקנית’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:6, day:‘ראשון’, t:‘9:00-10:30’, hotel:‘מלכת שבא’, type:‘12’, loc:‘חדר אוכל’, script:‘שחקנית בחדר אוכל נפרדת מהבופה’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:7, day:‘ראשון’, t:‘10:30-11:30’, hotel:‘מלכת שבא’, type:‘12’, loc:‘לובי’, script:‘שחקנית עומדת באזור דלפק הקבלה, מסתכלת בקנאה על אורחים שנכנסים מאושרים עם מזוודות.’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:8, day:‘ראשון’, t:‘10:30-11:30’, hotel:‘מלכת שבא’, type:‘12’, loc:‘יציאה מהמלון’, script:‘שחקנית עומדת ביציאה מהמלון, מסתכלת בטלפון ונושמת לרווחה כשהיא סוגרת שוב.’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:9, day:‘ראשון’, t:‘10:30-11:30’, hotel:‘מלכת שבא’, type:‘3’, loc:‘לוגו מלון בחוץ’, script:‘לצלם את השחקנית על הלוגו’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:10, day:‘ראשון’, t:‘10:30-11:30’, hotel:‘מלכת שבא’, type:‘2’, loc:‘לובי’, script:‘הלובי המשופץ, ביוטי וולוג פלוס השחקנית ישנה על הספה’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:11, day:‘ראשון’, t:‘10:30-11:30’, hotel:‘מלכת שבא’, type:‘2’, loc:‘לובי’, script:‘שחקנית יושבת על עגלת מזוודות ומישהו מסיע אותה החוצה מהפריים.’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:12, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘12’, loc:‘חדר יפה/סוויטה’, script:‘שחקנית יושבת על המיטה בחדר, לבושה בחלוק- מדברת עם הקבלה: הצ׳ק-אאוט ב11 בבוקר או ב11 בלילה?’, cast:‘שחקנית’, lc:‘חלוק מגבת וחדר יפה’, lp:’’ },
{ id:13, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘3’, loc:‘חדר יפה/סוויטה’, script:‘השחקנית בחדר, נופלת על המיטה. פותחת את הוילון.’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:14, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘3’, loc:‘חדר יפה/סוויטה’, script:‘שחקן מפיל את עצמו אחורה על המיטה בסוויטה עם אנחת רווחה טובה של חופש.’, cast:‘שחקן’, lc:’’, lp:’’ },
{ id:15, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘12’, loc:‘חדר יפה/סוויטה’, script:‘שחקנית נאבקת לסגור מזוודה מפוצצת בחדר, מדברת לעבר ילדים מחוץ לפריים.’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:16, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘8’, loc:‘חדר יפה/סוויטה’, script:‘ביוטי חדר’, cast:’’, lc:’’, lp:’’ },
{ id:17, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘2’, loc:‘חדר יפה/סוויטה’, script:‘קלוז-אפ יד מושכת וילון, אור שמש שוטף את החדר.’, cast:’-’, lc:’’, lp:’’ },
{ id:18, day:‘ראשון’, t:‘12:00-13:30’, hotel:‘מלכת שבא’, type:‘8’, loc:‘חדר יפה/סוויטה’, script:‘קלוז-אפ יד מקרבת כרטיס למנעול, אור ירוק וקליק.’, cast:’-’, lc:’’, lp:’’ },
{ id:19, day:‘ראשון’, t:‘14:15-15:00’, hotel:‘מלכת שבא’, type:‘10’, loc:‘בריכה’, script:‘שחקן מקליט הודעה בטלפון כשהוא בתוך המים של הבריכה, עם משקפי שמש.’, cast:‘שחקן’, lc:’’, lp:’’ },
{ id:20, day:‘ראשון’, t:‘14:15-15:00’, hotel:‘מלכת שבא’, type:‘10’, loc:‘בריכה’, script:‘שחקן משתזף ברוגע על שפת הבריכה.’, cast:‘שחקן’, lc:’’, lp:’’ },
{ id:21, day:‘ראשון’, t:‘14:15-15:00’, hotel:‘מלכת שבא’, type:‘10’, loc:‘בריכה’, script:‘שחקן שוחה להנאתו במים’, cast:‘שחקן’, lc:’’, lp:’’ },
{ id:22, day:‘ראשון’, t:‘15:00-16:00’, hotel:‘מלכת שבא’, type:’’, loc:‘בריכה’, script:‘ביוטי כללי של בריכה ושחקנים’, cast:‘שחקן ושחקנית’, lc:’’, lp:’’ },
{ id:23, day:‘ראשון’, t:‘15:00-16:00’, hotel:‘מלכת שבא’, type:‘8’, loc:‘בריכה’, script:‘השתקפות הבריכה והשמיים בתוך משקפי שמש על השולחן.’, cast:’-’, lc:’’, lp:’’ },
{ id:24, day:‘ראשון’, t:‘15:00-16:00’, hotel:‘מלכת שבא’, type:‘3’, loc:‘ספא’, script:‘מגבות מגולגול, שחקנית בספא’, cast:‘שחקנית’, lc:‘כניסה לספא’, lp:’’ },
{ id:25, day:‘ראשון’, t:‘15:00-16:00’, hotel:‘מלכת שבא’, type:‘2’, loc:‘מועדון הילדים’, script:‘מועדון הילדים’, cast:’-’, lc:’’, lp:’’ },
{ id:26, day:‘ראשון’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘12’, loc:‘בריכה’, script:‘שחקנית יושבת חצי גוף במים’, cast:‘שחקנית’, lc:’’, lp:’’ },
{ id:27, day:‘ראשון’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘2’, loc:‘בריכה’, script:‘קוקטייל צבעוני על שפת הבריכה- עם השחקנית’, cast:‘שחקנית ושחקן’, lc:‘קוקטייל’, lp:’’ },
{ id:28, day:‘ראשון’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘10’, loc:‘בריכה’, script:‘צילום רחפן של בריכת מלכת שבא עם השחקנית’, cast:‘שחקנית’, lc:’’, lp:‘רחפן’ },
{ id:29, day:‘ראשון’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘12’, loc:‘בריכה’, script:‘צילום רחפן- שחקנים’, cast:‘שחקן, שחקנית, מרטה, אורי ואליה’, lc:’’, lp:‘רחפן’ },
{ id:30, day:‘ראשון’, t:‘16:00-17:00’, hotel:’’, type:’’, loc:‘בריכה’, script:‘קוביית קרח זזה בקולה או משהו קר ליד הבריכה’, cast:’-’, lc:‘זירו’, lp:’’ },
{ id:31, day:‘ראשון’, t:‘17:00-17:20’, hotel:‘מלכת שבא’, type:‘8’, loc:‘בריכה’, script:‘בריכת קטנים- ביוטי’, cast:’-’, lc:’’, lp:’’ },
{ id:32, day:‘ראשון’, t:‘17:00-17:20’, hotel:‘מלכת שבא’, type:‘8’, loc:‘בריכה’, script:‘טיפות מים על כוס קוקטייל קרה ליד הבריכה’, cast:’-’, lc:‘קוקטייל’, lp:’’ },
{ id:33, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:‘7’, loc:‘טיילת’, script:‘עושה קעקוע חינה’, cast:’’, lc:’’, lp:’’ },
{ id:34, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:’’, loc:‘טיילת’, script:‘שחקן יושב עם כל מיני שקיות מיואש’, cast:’’, lc:’’, lp:‘שקיות’ },
{ id:35, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:‘2’, loc:‘חוף’, script:‘פתיח של 2- בעיניי לא צריך’, cast:’’, lc:’’, lp:’’ },
{ id:36, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:‘3’, loc:‘חוף’, script:‘ביוטי שחקנים בים ובטיילת- הולכים על החוף, מכניסים רגליים, הולכים בטיילת’, cast:’’, lc:’’, lp:’’ },
{ id:37, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:‘5’, loc:‘חוף’, script:‘ישנים על מגבת בחוף’, cast:’’, lc:’’, lp:’’ },
{ id:38, day:‘ראשון’, t:‘17:45-19:15’, hotel:’’, type:‘1’, loc:‘חוף’, script:‘שחקן יושב על החוף - ובזמן שאתם מחפשים איך לסגור את החודש? אני מחפש באיזה חוף לשבת אחרי המשמרת.’, cast:’’, lc:’’, lp:’’ },
{ id:39, day:‘ראשון’, t:‘19:30+’, hotel:‘מלכת שבא’, type:‘10’, loc:‘חדר אוכל’, script:‘מעמיס הר של שניצלים או משהו אחר’, cast:’’, lc:’’, lp:’’ },
{ id:40, day:‘ראשון’, t:‘19:30+’, hotel:‘מלכת שבא’, type:‘4’, loc:‘חדר אוכל’, script:‘מזלג חותך עוגה’, cast:’’, lc:’’, lp:’’ },
{ id:41, day:‘ראשון’, t:‘19:30+’, hotel:’’, type:’’, loc:‘חדר’, script:‘אם יש חדר יפה אז לצילומי ביוטי - פותחים יין או משהו בחדר’, cast:’’, lc:‘חדר במלכת שבא’, lp:’’ },
{ id:42, day:‘שני’, t:‘8:30-9:00’, hotel:‘וילג׳’, type:‘1’, loc:‘חדר אוכל’, script:‘ארוחת בוקר- ביוטי שוטים קצרים. עם ובלי שחקנית’, cast:’’, lc:’’, lp:’’ },
{ id:43, day:‘שני’, t:‘9:00-11:00’, hotel:‘אריאה’, type:‘7’, loc:‘חדר אוכל’, script:‘שחקנית בחדר האוכל באמצע ביס - תופסת את הכובע וזורקת שוב.’, cast:’’, lc:‘כובע קש’, lp:’’ },
{ id:44, day:‘שני’, t:‘9:00-11:00’, hotel:‘אריאה’, type:‘5’, loc:‘חדר אוכל’, script:‘שחקנים עייפים אחרי ארוחה- צלחות אחרי האוכל’, cast:’’, lc:’’, lp:’’ },
{ id:45, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘7’, loc:‘מרפסת’, script:‘אתם חייבים חופשה- זורקת כובע’, cast:’’, lc:’’, lp:’’ },
{ id:46, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘7’, loc:‘בריכה’, script:‘שותה קוקטייל- כובע’, cast:’’, lc:’’, lp:’’ },
{ id:47, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘9’, loc:‘בריכה’, script:‘צילום יפה ומרשים של הבריכה מוארת בשמש’, cast:’’, lc:’’, lp:’’ },
{ id:48, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:’’, loc:‘בריכה’, script:‘מרטוש והרחפן’, cast:‘מרטה’, lc:’’, lp:‘רחפן’ },
{ id:49, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘9’, loc:‘הגשר והים’, script:‘ביוטי’, cast:’’, lc:’’, lp:’’ },
{ id:50, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘7’, loc:‘ספא’, script:‘שוכבת על הגב והכובע נופל עליה’, cast:’’, lc:’’, lp:’’ },
{ id:51, day:‘שני’, t:‘9:00-11:00’, hotel:‘אריאה’, type:‘9’, loc:‘ספא’, script:‘ספא מגבות מגולגול, שחקנית’, cast:’’, lc:’’, lp:’’ },
{ id:52, day:‘שני’, t:‘9:00-11:00’, hotel:’’, type:‘9’, loc:’’, script:‘צילומי ביוטי’, cast:’’, lc:’’, lp:’’ },
{ id:53, day:‘שני’, t:‘9:00-11:00’, hotel:‘אריאה’, type:‘11’, loc:‘לובי’, script:‘כותרת: איך אני חושבת שפקידת הקבלה רואה אותי. בחורה עם טרולי חוצה את הלובי, שיערה מתנפנף ברוח. כותרת: איך פקידת הקבלה רואה אותי. בחורה עם טרולי הולכת וכל שנייה נעצרת.’, cast:‘שחקנית’, lc:’’, lp:‘טרולי’ },
{ id:54, day:‘שני’, t:‘11:00-13:00’, hotel:‘וילג׳’, type:‘1’, loc:‘חוץ’, script:‘הולכים בין החדרים’, cast:’’, lc:’’, lp:’’ },
{ id:55, day:‘שני’, t:‘11:00-13:00’, hotel:‘וילג׳’, type:‘8’, loc:‘חדר אוכל’, script:‘צילום איטי חלב נשפך לקפה שחור או קצף קפוצ׳ינו בחדר אוכל.’, cast:’’, lc:’’, lp:’’ },
{ id:56, day:‘שני’, t:‘11:00-13:00’, hotel:‘וילג׳’, type:‘1’, loc:‘בריכה’, script:‘שחקנית בבריכה- שוטים קצרים’, cast:’’, lc:’’, lp:’’ },
{ id:57, day:‘שני’, t:‘11:00-13:00’, hotel:‘וילג׳’, type:‘1’, loc:‘בריכה’, script:‘רק מים’, cast:’’, lc:’’, lp:’’ },
{ id:58, day:‘שני’, t:‘11:00-13:00’, hotel:‘וילג׳’, type:‘5’, loc:‘בריכה’, script:‘רביצה בבריכה, שוכבת על כסא נוח מתחת לשמשיה, כובע קש על הפנים’, cast:’’, lc:’’, lp:’’ },
{ id:59, day:‘שני’, t:‘13:00’, hotel:‘וילג׳’, type:‘5’, loc:‘משרד’, script:‘אביעד’, cast:’’, lc:’’, lp:’’ },
{ id:60, day:‘שני’, t:‘13:30’, hotel:‘מלכת שבא’, type:‘1’, loc:‘לובי וכביסה’, script:‘כל תסריט 1 חוץ מהשוט האחרון’, cast:‘שחקן’, lc:‘מדים’, lp:’’ },
{ id:61, day:‘שני’, t:‘15:30’, hotel:‘מלכת שבא’, type:‘6’, loc:’’, script:‘ראיון עם שמעון’, cast:’’, lc:’’, lp:’’ },
{ id:62, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘2’, loc:‘קבלה, מציל, ברמן ועובד’, script:‘כל התסריט’, cast:’’, lc:’’, lp:’’ },
{ id:63, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘3’, loc:’’, script:‘מישהו’, cast:’’, lc:’’, lp:’’ },
{ id:64, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘7’, loc:‘מדבקות בכל מיני מקומות’, script:‘להדביק על הדלת כניסה, על ראש של אחד העובדים, על גב של מישהו, על בר או כוס יין.’, cast:’’, lc:’’, lp:’’ },
{ id:65, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘8’, loc:‘שירות חדרים’, script:‘3 עובדות’, cast:’’, lc:’’, lp:’’ },
{ id:66, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘9’, loc:’’, script:‘לצלם את הצ׳קרית, הקבט, ושהם לוחצים ידיים’, cast:’’, lc:‘צריכה קבט וצ׳קרית שיצטלמו’, lp:’’ },
{ id:67, day:‘שני’, t:‘16:00-17:00’, hotel:‘מלכת שבא’, type:‘9’, loc:’’, script:‘טלפון על השולחן’, cast:’’, lc:’’, lp:’’ },
{ id:68, day:‘שלישי’, t:‘9:30’, hotel:‘מאריס’, type:‘4’, loc:’’, script:‘כל תסריט 4 עם דודו’, cast:’’, lc:’’, lp:’’ },
{ id:69, day:‘שלישי’, t:‘9:30’, hotel:‘מאריס’, type:‘3’, loc:’’, script:‘צילומי ביוטי’, cast:’’, lc:’’, lp:’’ }
];

var ST = { P:‘pending’, D:‘done’, R:‘partial’, L:‘delayed’, S:‘skipped’ };
var META = {
pending:  { label:‘ממתין’,   emoji:‘⏳’, bg:’#1e293b’, fg:’#94a3b8’, bd:’#334155’, pill:’#0f172a’ },
done:     { label:‘בוצע’,    emoji:‘✅’, bg:’#052e16’, fg:’#4ade80’, bd:’#166534’, pill:’#14532d’ },
partial:  { label:‘חלקית’,   emoji:‘🔶’, bg:’#1c1400’, fg:’#fbbf24’, bd:’#854d0e’, pill:’#78350f’ },
delayed:  { label:‘נדחה’,    emoji:‘⏰’, bg:’#1e1b4b’, fg:’#a78bfa’, bd:’#4c1d95’, pill:’#3730a3’ },
skipped:  { label:‘לא בוצע’, emoji:‘✕’,  bg:’#1a0505’, fg:’#f87171’, bd:’#991b1b’, pill:’#7f1d1d’ }
};
var HACENT = {
‘וילג׳’:’#38bdf8’, ‘וילג’:’#38bdf8’,
‘מלכת שבא’:’#f472b6’, ‘אריאה’:’#34d399’, ‘מאריס’:’#fb923c’, ‘’:’#64748b’
};
var KI = ‘may_items_v4’, KS = ‘may_stats_v4’;

function parseMins(s) {
if (!s) return 9999;
var p = s.split(’-’)[0].split(’+’)[0].trim().split(’:’);
return (parseInt(p[0])||0)*60 + (parseInt(p[1])||0);
}
function shiftSlot(s, d) {
if (!s || s.indexOf(’+’)!==-1) return s;
function f(m) { var hh=Math.floor(m/60)%24, mm=m%60; return hh+’:’+(mm<10?‘0’:’’)+mm; }
function p(t) { var x=t.trim().split(’:’); return (parseInt(x[0])||0)*60+(parseInt(x[1])||0); }
var parts=s.split(’-’);
return parts.length===2 ? f(p(parts[0])+d)+’-’+f(p(parts[1])+d) : f(p(parts[0])+d);
}
function getSt(sts, id) { return (sts[id] && sts[id].status) || ST.P; }
function el() { return document.getElementById(‘root’); }

function Tag(o) {
return h(‘span’, { style: { fontSize:‘10px’, background:o.bg||‘rgba(255,255,255,0.04)’, border:‘1px solid ‘+(o.bc||’#1e2d45’), color:o.color||’#64748b’, padding:‘1px 7px’, borderRadius:‘10px’, fontWeight:o.bold?700:400 } }, o.text);
}

function Card(o) {
var item=o.item, ist=o.ist||{}, st=ist.status||ST.P, meta=META[st], ac=HACENT[item.hotel]||’#64748b’, done=st===ST.D;
var tags=[];
if (item.hotel) tags.push(h(Tag,{key:‘h’, color:ac, bg:‘rgba(255,255,255,0.06)’, bc:ac+‘40’, bold:true, text:item.hotel}));
if (item.loc) tags.push(h(Tag,{key:‘l’, text:’\uD83D\uDCCD ‘+item.loc}));
if (item.type) tags.push(h(Tag,{key:‘t’, color:’#475569’, text:’#’+item.type}));
if (item.lp) tags.push(h(Tag,{key:‘p’, color:’#fbbf24’, bg:’#1a0f00’, bc:’#92400e’, text:’\u2699\uFE0F ‘+item.lp}));
if (item.lc) tags.push(h(Tag,{key:‘c’, color:’#4ade80’, bg:’#001a0f’, bc:’#166534’, text:’\uD83C\uDFAF ‘+item.lc}));
var kids=[];
kids.push(h(‘div’,{key:‘tg’,style:{display:‘flex’,flexWrap:‘wrap’,gap:‘4px’,marginBottom:‘6px’}},tags));
kids.push(h(‘p’,{key:‘sc’,style:{margin:‘0 0 4px’,fontSize:‘13px’,color:done?’#475569’:’#cbd5e1’,lineHeight:1.5,textDecoration:done?‘line-through’:‘none’}},item.script));
if (item.cast && item.cast!==’-’) kids.push(h(‘p’,{key:‘ca’,style:{margin:0,fontSize:‘11px’,color:’#475569’}},’\uD83D\uDC64 ‘+item.cast));
if (ist.notes) kids.push(h(‘p’,{key:‘no’,style:{margin:‘4px 0 0’,fontSize:‘11px’,color:’#a78bfa’,fontStyle:‘italic’}},’\uD83D\uDCDD ‘+ist.notes));
if (ist.reason) kids.push(h(‘p’,{key:‘re’,style:{margin:‘2px 0 0’,fontSize:‘11px’,color:’#fbbf24’}},’\uD83D\uDCAC ‘+ist.reason));
var right=[h(‘span’,{key:‘b’,style:{fontSize:‘11px’,fontWeight:700,padding:‘3px 8px’,borderRadius:‘6px’,background:meta.pill,color:meta.fg,whiteSpace:‘nowrap’}},meta.emoji+’ ‘+meta.label)];
if (st===ST.R && ist.pct) right.push(h(‘span’,{key:‘p’,style:{fontSize:‘10px’,color:’#fbbf24’}},ist.pct+’%’));
return h(‘div’,{onClick:o.onClick,style:{background:meta.bg,border:’1px solid ’+meta.bd,borderRight:’3px solid ’+ac,borderRadius:‘10px’,padding:‘11px 12px’,marginBottom:‘7px’,cursor:‘pointer’,opacity:done?0.6:1}},
h(‘div’,{style:{display:‘flex’,justifyContent:‘space-between’,gap:‘8px’}},[
h(‘div’,{key:‘l’,style:{flex:1,minWidth:0}},kids),
h(‘div’,{key:‘r’,style:{flexShrink:0,display:‘flex’,flexDirection:‘column’,alignItems:‘flex-end’,gap:‘4px’}},right)
])
);
}

function Modal(o) {
var item=o.item, ist=o.ist||{};
var ss=useState(ist.status||ST.P), st=ss[0], setSt=ss[1];
var sp=useState(ist.pct||50), pct=sp[0], setPct=sp[1];
var sr=useState(ist.reason||’’), reason=sr[0], setReason=sr[1];
var sn=useState(ist.notes||’’), notes=sn[0], setNotes=sn[1];
var sd=useState(false), dOpen=sd[0], setDOpen=sd[1];
var sm=useState(30), dMins=sm[0], setDMins=sm[1];
var ac=HACENT[item.hotel]||’#64748b’;

```
var htags=[];
if (item.hotel) htags.push(h('span',{key:'h',style:{fontSize:'10px',color:ac,fontWeight:800,background:ac+'15',padding:'2px 8px',borderRadius:'8px',border:'1px solid '+ac+'30'}},item.hotel));
if (item.t) htags.push(h('span',{key:'t',style:{fontSize:'10px',color:'#7dd3fc',background:'#0c1a2e',padding:'2px 8px',borderRadius:'8px',border:'1px solid #1e3a5f'}},'\u23F0 '+item.t));
if (item.loc) htags.push(h('span',{key:'l',style:{fontSize:'10px',color:'#94a3b8',background:'#1e293b',padding:'2px 8px',borderRadius:'8px'}},'\uD83D\uDCCD '+item.loc));

var hd=[
  h('div',{key:'tg',style:{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'6px'}},htags),
  h('p',{key:'sc',style:{margin:0,fontSize:'14px',color:'#e2e8f0',lineHeight:1.6,fontWeight:500}},item.script)
];
if (item.cast && item.cast!=='-') hd.push(h('p',{key:'ca',style:{margin:'6px 0 0',fontSize:'12px',color:'#64748b'}},'\uD83D\uDC64 '+item.cast));
if (item.lc) hd.push(h('p',{key:'lc',style:{margin:'4px 0 0',fontSize:'11px',color:'#4ade80'}},'\uD83C\uDFAF '+item.lc));
if (item.lp) hd.push(h('p',{key:'lp',style:{margin:'2px 0 0',fontSize:'11px',color:'#fbbf24'}},'\u2699\uFE0F '+item.lp));

var stBtns=Object.keys(META).map(function(v) {
  var m=META[v], sel=st===v;
  return h('button',{key:v,onClick:function(){setSt(v);},style:{padding:'10px 8px',border:'1px solid '+(sel?m.bd:'#1e2d45'),borderRadius:'8px',background:sel?m.bg:'#0f172a',color:sel?m.fg:'#475569',cursor:'pointer',fontSize:'12px',fontWeight:700,outline:sel?'2px solid '+m.bd:'none',outlineOffset:'1px'}},m.emoji+' '+m.label);
});

var body=[
  h('div',{key:'hd',style:{marginBottom:'12px'}},hd),
  h('div',{key:'sp',style:{height:'1px',background:'#1e2d45',margin:'12px 0'}}),
  h('div',{key:'sl',style:{fontSize:'11px',color:'#475569',fontWeight:700,letterSpacing:'1px',marginBottom:'8px',textTransform:'uppercase'}},'סטטוס'),
  h('div',{key:'sg',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'7px',marginBottom:'14px'}},stBtns)
];
if (st===ST.R) {
  body.push(h('div',{key:'pc',style:{marginBottom:'14px',background:'#1c1400',border:'1px solid #854d0e',borderRadius:'8px',padding:'12px'}},[
    h('div',{key:'l',style:{fontSize:'12px',color:'#fbbf24',fontWeight:700,marginBottom:'8px'}},'כמה בוצע? '+pct+'%'),
    h('input',{key:'i',type:'range',min:'10',max:'90',step:'10',value:pct,onChange:function(e){setPct(Number(e.target.value));}})
  ]));
}
body.push(h('div',{key:'rl',style:{fontSize:'11px',color:'#475569',fontWeight:700,letterSpacing:'1px',marginBottom:'6px',textTransform:'uppercase'}},'סיבה / הסבר'));
body.push(h('textarea',{key:'rt',value:reason,onChange:function(e){setReason(e.target.value);},placeholder:'למה? מה קרה? כמה צלמנו?',style:{width:'100%',padding:'10px',background:'#0f1929',border:'1px solid #1e2d45',borderRadius:'8px',color:'#e2e8f0',fontSize:'13px',resize:'vertical',minHeight:'64px',boxSizing:'border-box',outline:'none',marginBottom:'10px',display:'block'}}));
body.push(h('div',{key:'nl',style:{fontSize:'11px',color:'#475569',fontWeight:700,letterSpacing:'1px',marginBottom:'6px',textTransform:'uppercase'}},'הערות'));
body.push(h('textarea',{key:'nt',value:notes,onChange:function(e){setNotes(e.target.value);},placeholder:'הערות נוספות...',style:{width:'100%',padding:'10px',background:'#0f1929',border:'1px solid #1e2d45',borderRadius:'8px',color:'#e2e8f0',fontSize:'13px',resize:'vertical',minHeight:'64px',boxSizing:'border-box',outline:'none',marginBottom:'14px',display:'block'}}));

var dParts=[h('button',{key:'tb',onClick:function(){setDOpen(!dOpen);},style:{background:'none',border:'none',color:'#a78bfa',fontSize:'12px',fontWeight:700,cursor:'pointer',padding:0}},'\u23F0 דחה פריט זה בנפרד '+(dOpen?'▲':'▼'))];
if (dOpen) {
  var pbs=[15,30,45,60,90,120].map(function(m){
    var sel=dMins===m;
    return h('button',{key:m,onClick:function(){setDMins(m);},style:{padding:'5px 10px',border:'1px solid '+(sel?'#7c3aed':'#2e1a6b'),borderRadius:'6px',background:sel?'#7c3aed':'transparent',color:sel?'#fff':'#a78bfa',cursor:'pointer',fontSize:'11px'}},m<60?(m+'ד'):((m/60)+'ש'));
  });
  dParts.push(h('div',{key:'dp',style:{marginTop:'10px',background:'#1e1b4b',border:'1px solid #4c1d95',borderRadius:'8px',padding:'12px'}},[
    h('div',{key:'row',style:{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}},pbs),
    h('button',{key:'go',onClick:function(){o.onDelay(dMins);},style:{width:'100%',padding:'9px',background:'#7c3aed',border:'none',borderRadius:'8px',color:'white',fontWeight:700,cursor:'pointer',fontSize:'13px'}},'דחה ב-'+(dMins<60?(dMins+' דקות'):((dMins/60)+' שעה')))
  ]));
}
body.push(h('div',{key:'ds',style:{marginBottom:'16px'}},dParts));
body.push(h('div',{key:'ab',style:{display:'flex',gap:'8px'}},[
  h('button',{key:'cn',onClick:o.onClose,style:{flex:1,padding:'13px',background:'#0f172a',border:'1px solid #1e2d45',borderRadius:'10px',color:'#64748b',cursor:'pointer',fontSize:'14px'}},'ביטול'),
  h('button',{key:'sv',onClick:function(){var p={status:st,reason:reason,notes:notes};if(st===ST.R)p.pct=pct;o.onSave(p);},style:{flex:2,padding:'13px',background:ac,border:'none',borderRadius:'10px',color:'#000',fontWeight:800,cursor:'pointer',fontSize:'14px'}},'שמור ✓')
]));

return h('div',{onClick:function(e){if(e.target===e.currentTarget)o.onClose();},style:{position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',zIndex:100,display:'flex',alignItems:'flex-end',justifyContent:'center'}},
  h('div',{dir:'rtl',style:{background:'#0f172a',borderRadius:'20px 20px 0 0',border:'1px solid #1e2d45',borderBottom:'none',padding:'0 0 24px',width:'100%',maxWidth:'600px',maxHeight:'88vh',overflowY:'auto'}},[
    h('div',{key:'h1',style:{padding:'12px 0 0',display:'flex',justifyContent:'center'}},h('div',{style:{width:'36px',height:'4px',background:'#1e2d45',borderRadius:'2px'}})),
    h('div',{key:'h2',style:{height:'3px',background:'linear-gradient(90deg,'+ac+',transparent)',margin:'12px 0 0'}}),
    h('div',{key:'bd',style:{padding:'16px 18px 0'}},body)
  ])
);
```

}

function DelayAll(o) {
var sm=useState(30), mins=sm[0], setMins=sm[1];
var pbs=[15,30,45,60,90,120].map(function(m){
var sel=mins===m;
return h(‘button’,{key:m,onClick:function(){setMins(m);},style:{flex:‘1 0 calc(33% - 4px)’,padding:‘10px 4px’,border:‘1px solid ‘+(sel?’#7c3aed’:’#1e1b4b’),borderRadius:‘8px’,background:sel?’#7c3aed’:’#1e1b4b’,color:sel?‘white’:’#a78bfa’,cursor:‘pointer’,fontSize:‘13px’,fontWeight:700}},m<60?(m+’ דק'’):((m/60)+’ שעה’));
});
return h(‘div’,{onClick:function(e){if(e.target===e.currentTarget)o.onClose();},style:{position:‘fixed’,inset:0,background:‘rgba(0,0,0,0.8)’,zIndex:200,display:‘flex’,alignItems:‘center’,justifyContent:‘center’,padding:‘16px’}},
h(‘div’,{dir:‘rtl’,style:{background:’#0f172a’,border:‘1px solid #4c1d95’,borderRadius:‘16px’,padding:‘24px’,width:‘100%’,maxWidth:‘340px’}},[
h(‘h2’,{key:‘tt’,style:{margin:‘0 0 6px’,fontSize:‘18px’,color:’#c4b5fd’}},’\u23F0 דחיית לו״ז כולל’),
h(‘p’,{key:‘ds’,style:{margin:‘0 0 18px’,fontSize:‘13px’,color:’#64748b’,lineHeight:1.5}},‘כל הפריטים שטרם בוצעו ידחו בהתאמה.’),
h(‘div’,{key:‘lb’,style:{fontSize:‘12px’,color:’#a78bfa’,fontWeight:700,marginBottom:‘8px’,textTransform:‘uppercase’}},‘כמה דקות?’),
h(‘div’,{key:‘gr’,style:{display:‘flex’,gap:‘6px’,flexWrap:‘wrap’,marginBottom:‘14px’}},pbs),
h(‘div’,{key:‘ab’,style:{display:‘flex’,gap:‘8px’}},[
h(‘button’,{key:‘c’,onClick:o.onClose,style:{flex:1,padding:‘12px’,background:’#0f172a’,border:‘1px solid #1e2d45’,borderRadius:‘10px’,color:’#64748b’,cursor:‘pointer’}},‘ביטול’),
h(‘button’,{key:‘ok’,onClick:function(){o.onConfirm(mins);},style:{flex:2,padding:‘12px’,background:’#7c3aed’,border:‘none’,borderRadius:‘10px’,color:‘white’,fontWeight:800,cursor:‘pointer’,fontSize:‘14px’}},‘דחה הכל ב-’+(mins<60?(mins+’ דק'’):((mins/60)+’ שעה’)))
])
])
);
}

function App() {
var si=useState(function(){try{var v=localStorage.getItem(KI);return v?JSON.parse(v):ITEMS;}catch(e){return ITEMS;}}), items=si[0], setItems=si[1];
var ss=useState(function(){try{var v=localStorage.getItem(KS);return v?JSON.parse(v):{};}catch(e){return {};}}), sts=ss[0], setSts=ss[1];
var sd=useState(‘ראשון’), day=sd[0], setDay=sd[1];
var sel=useState(null), selItem=sel[0], setSelItem=sel[1];
var sg=useState(false), showDAll=sg[0], setShowDAll=sg[1];
var sf=useState(‘all’), flt=sf[0], setFlt=sf[1];

```
useEffect(function(){try{localStorage.setItem(KI,JSON.stringify(items));}catch(e){}}, [items]);
useEffect(function(){try{localStorage.setItem(KS,JSON.stringify(sts));}catch(e){}}, [sts]);

function upSt(id, patch) {
  setSts(function(p){var n=Object.assign({},p);n[id]=Object.assign({},p[id]||{},patch);return n;});
}
function dAll(mins) {
  setItems(function(p){return p.map(function(it){var s=getSt(sts,it.id);if(s===ST.P||s===ST.R)return Object.assign({},it,{t:shiftSlot(it.t,mins)});return it;});});
  setShowDAll(false);
}
function dOne(id, mins) {
  setItems(function(p){return p.map(function(it){return it.id===id?Object.assign({},it,{t:shiftSlot(it.t,mins)}):it;});});
  upSt(id,{status:ST.L});
}

var dayItems=items.filter(function(i){return i.day===day;});
var slotsObj={};
dayItems.forEach(function(i){slotsObj[i.t]=true;});
var slots=Object.keys(slotsObj).sort(function(a,b){return parseMins(a)-parseMins(b);});

var total=items.length, done=items.filter(function(i){return getSt(sts,i.id)===ST.D;}).length, part=items.filter(function(i){return getSt(sts,i.id)===ST.R;}).length;
var pct=Math.round(((done+part*0.5)/total)*100);

function filt(arr){return flt==='all'?arr:arr.filter(function(i){return getSt(sts,i.id)===flt;});}

var dayTabs=['ראשון','שני','שלישי'].map(function(d){
  var dc=items.filter(function(i){return i.day===d;}).length, dd=items.filter(function(i){return i.day===d&&getSt(sts,i.id)===ST.D;}).length, act=day===d;
  return h('button',{key:d,onClick:function(){setDay(d);},style:{flex:1,padding:'10px 8px',border:'none',background:'none',cursor:'pointer',borderBottom:act?'2px solid #7c3aed':'2px solid transparent',color:act?'#c4b5fd':'#475569',fontWeight:act?800:500,fontSize:'13px'}},['יום '+d, h('div',{key:'c',style:{fontSize:'9px',color:act?'#7c3aed':'#334155',marginTop:'1px'}},dd+'/'+dc)]);
});

var fDefs=[['all','הכל','#475569'],['pending',META.pending.label,META.pending.bd],['done',META.done.label,META.done.bd],['partial',META.partial.label,META.partial.bd],['delayed',META.delayed.label,META.delayed.bd],['skipped',META.skipped.label,META.skipped.bd]];
var pills=fDefs.map(function(d){var sel=flt===d[0];return h('button',{key:d[0],onClick:function(){setFlt(d[0]);},style:{padding:'3px 10px',borderRadius:'20px',border:'1px solid '+(sel?d[2]:'#1e2d45'),background:sel?d[2]:'transparent',color:sel?'#fff':'#64748b',fontSize:'11px',fontWeight:600,cursor:'pointer',whiteSpace:'nowrap'}},d[1]);});

var header=h('div',{style:{background:'linear-gradient(180deg,#0f1929 0%,#060d1a 100%)',borderBottom:'1px solid #1e2d45',position:'sticky',top:0,zIndex:50}},[
  h('div',{key:'p',style:{padding:'14px 16px 10px'}},[
    h('div',{key:'tr',style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}},[
      h('div',{key:'t'},[
        h('div',{key:'sub',style:{fontSize:'11px',letterSpacing:'3px',color:'#475569',textTransform:'uppercase',marginBottom:'2px'}},'Production Schedule'),
        h('h1',{key:'ttl',style:{margin:0,fontSize:'20px',fontWeight:800,color:'#f1f5f9'}},'ברייקדאון מאי 🎬')
      ]),
      h('button',{key:'btn',onClick:function(){setShowDAll(true);},style:{background:'#1e1b4b',border:'1px solid #4c1d95',color:'#a78bfa',borderRadius:'8px',padding:'8px 14px',fontSize:'12px',fontWeight:700,cursor:'pointer'}},'\u23F0 דחיית לו״ז')
    ]),
    h('div',{key:'pb',style:{marginTop:'12px',display:'flex',gap:'10px',alignItems:'center'}},[
      h('div',{key:'b',style:{flex:1,background:'#0f1929',borderRadius:'3px',height:'5px',overflow:'hidden',border:'1px solid #1e2d45'}},
        h('div',{style:{width:pct+'%',height:'100%',background:'linear-gradient(90deg,#22c55e,#4ade80)',transition:'width 0.5s'}})
      ),
      h('span',{key:'n',style:{fontSize:'11px',color:'#64748b',whiteSpace:'nowrap',fontWeight:700}},done+'/'+total+' · '+pct+'%')
    ])
  ]),
  h('div',{key:'dt',style:{display:'flex',borderTop:'1px solid #1e2d45',overflowX:'auto'}},dayTabs),
  h('div',{key:'fp',style:{padding:'8px 12px',display:'flex',gap:'6px',overflowX:'auto',borderTop:'1px solid #1e2d45'}},pills)
]);

var slotBlocks=slots.map(function(slot){
  var all=dayItems.filter(function(i){return i.t===slot;}), shown=filt(all);
  if (!shown.length && flt!=='all') return null;
  return h('div',{key:slot,style:{marginBottom:'20px'}},[
    h('div',{key:'sh',style:{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}},[
      h('div',{key:'tl',style:{background:'#0f172a',border:'1px solid #1e2d45',borderRadius:'6px',padding:'4px 10px',fontSize:'11px',fontWeight:800,color:'#7dd3fc',letterSpacing:'1px',whiteSpace:'nowrap'}},slot||'ללא שעה'),
      h('div',{key:'ln',style:{flex:1,height:'1px',background:'linear-gradient(90deg,#1e2d45,transparent)'}}),
      h('span',{key:'n',style:{fontSize:'10px',color:'#334155'}},''+all.length)
    ]),
    h('div',{key:'cs'},shown.map(function(item){return h(Card,{key:item.id,item:item,ist:sts[item.id]||{},onClick:function(){setSelItem(item);}});}))
  ]);
}).filter(function(x){return x!==null;});

var children=[
  h('div',{key:'hdr'},header),
  h('div',{key:'body',style:{padding:'12px 12px 80px',maxWidth:'720px',margin:'0 auto'}},slotBlocks)
];
if (selItem) children.push(h(Modal,{key:'m',item:selItem,ist:sts[selItem.id]||{},onSave:function(p){upSt(selItem.id,p);setSelItem(null);},onDelay:function(m){dOne(selItem.id,m);setSelItem(null);},onClose:function(){setSelItem(null);}}));
if (showDAll) children.push(h(DelayAll,{key:'da',onConfirm:dAll,onClose:function(){setShowDAll(false);}}));

return h('div',{dir:'rtl',style:{background:'#060d1a',minHeight:'100vh'}},children);
```

}

ReactDOM.createRoot(document.getElementById(‘root’)).render(h(App));
})();
