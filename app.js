import { createElement as h, useState, useEffect } from “https://esm.sh/react@18.3.1”;
import { createRoot } from “https://esm.sh/react-dom@18.3.1/client”;

const INITIAL_ITEMS = [
{ id: 1, day: “ראשון”, timeSlot: “8:30-9:00”, hotel: “וילג׳”, type: “1”, location: “חדר”, script: “שוטים של השחקנים בחדר, ביוטי בלי השחקנים קצת. השחקנית בפריים והשחקן דרך המראה יושב וקורא”, cast: “שחקן ושחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 2, day: “ראשון”, timeSlot: “8:30-9:00”, hotel: “וילג׳”, type: “5”, location: “חדר”, script: “עושים שנצ בחדר, שנצ במרפסת”, cast: “שחקן ושחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 3, day: “ראשון”, timeSlot: “9:00-10:30”, hotel: “מלכת שבא”, type: “4”, location: “חדר אוכל”, script: “קלוז אפ מטורף על מנה, יוצאים מהחדר אוכל- קצת לובי, קבלה- יציאה ללוגו”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 4, day: “ראשון”, timeSlot: “9:00-10:30”, hotel: “מלכת שבא”, type: “2,8”, location: “חדר אוכל”, script: “השחקנית והאוכל- ביוט וולוג. חיתוך לחם טרי בקלוז אפ. בציעה של קרואסון, לצלם כמה מנות יפות, כמה צלחות יפות”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 5, day: “ראשון”, timeSlot: “9:00-10:30”, hotel: “מלכת שבא”, type: “3”, location: “חדר אוכל”, script: “קפה וסלט בארוחת בוקר- עם השחקנית”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 6, day: “ראשון”, timeSlot: “9:00-10:30”, hotel: “מלכת שבא”, type: “12”, location: “חדר אוכל”, script: “שחקנית בחדר אוכל נפרדת מהבופה”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 7, day: “ראשון”, timeSlot: “10:30-11:30”, hotel: “מלכת שבא”, type: “12”, location: “לובי”, script: “שחקנית עומדת באזור דלפק הקבלה, מסתכלת בקנאה על אורחים שנכנסים מאושרים עם מזוודות.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 8, day: “ראשון”, timeSlot: “10:30-11:30”, hotel: “מלכת שבא”, type: “12”, location: “יציאה מהמלון”, script: “שחקנית עומדת ביציאה מהמלון, מסתכלת בטלפון ונושמת לרווחה כשהיא סוגרת שוב.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 9, day: “ראשון”, timeSlot: “10:30-11:30”, hotel: “מלכת שבא”, type: “3”, location: “לוגו מלון בחוץ”, script: “לצלם את השחקנית על הלוגו”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 10, day: “ראשון”, timeSlot: “10:30-11:30”, hotel: “מלכת שבא”, type: “2”, location: “לובי”, script: “הלובי המשופץ, ביוטי וולוג פלוס השחקנית ישנה על הספה”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 11, day: “ראשון”, timeSlot: “10:30-11:30”, hotel: “מלכת שבא”, type: “2”, location: “לובי”, script: “שחקנית יושבת על עגלת מזוודות ומישהו מסיע אותה החוצה מהפריים.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 12, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “12”, location: “חדר יפה/סוויטה”, script: “שחקנית יושבת על המיטה בחדר, לבושה בחלוק- מדברת עם הקבלה: הצ׳ק-אאוט ב11 בבוקר או ב11 בלילה?”, cast: “שחקנית”, logisticsClient: “חלוק מגבת וחדר יפה”, logisticsProduction: “” },
{ id: 13, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “3”, location: “חדר יפה/סוויטה”, script: “השחקנית בחדר, נופלת על המיטה. פותחת את הוילון.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 14, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “3”, location: “חדר יפה/סוויטה”, script: “שחקן מפיל את עצמו אחורה על המיטה בסוויטה עם אנחת רווחה טובה של חופש.”, cast: “שחקן”, logisticsClient: “”, logisticsProduction: “” },
{ id: 15, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “12”, location: “חדר יפה/סוויטה”, script: “שחקנית נאבקת לסגור מזוודה מפוצצת בחדר, מדברת לעבר ילדים מחוץ לפריים.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 16, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “8”, location: “חדר יפה/סוויטה”, script: “ביוטי חדר”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 17, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “2”, location: “חדר יפה/סוויטה”, script: “קלוז-אפ יד מושכת וילון, אור שמש שוטף את החדר.”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 18, day: “ראשון”, timeSlot: “12:00-13:30”, hotel: “מלכת שבא”, type: “8”, location: “חדר יפה/סוויטה”, script: “קלוז-אפ יד מקרבת כרטיס למנעול, אור ירוק וקליק.”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 19, day: “ראשון”, timeSlot: “14:15-15:00”, hotel: “מלכת שבא”, type: “10”, location: “בריכה”, script: “שחקן מקליט הודעה בטלפון כשהוא בתוך המים של הבריכה, עם משקפי שמש.”, cast: “שחקן”, logisticsClient: “”, logisticsProduction: “” },
{ id: 20, day: “ראשון”, timeSlot: “14:15-15:00”, hotel: “מלכת שבא”, type: “10”, location: “בריכה”, script: “שחקן משתזף ברוגע על שפת הבריכה.”, cast: “שחקן”, logisticsClient: “”, logisticsProduction: “” },
{ id: 21, day: “ראשון”, timeSlot: “14:15-15:00”, hotel: “מלכת שבא”, type: “10”, location: “בריכה”, script: “שחקן שוחה להנאתו במים”, cast: “שחקן”, logisticsClient: “”, logisticsProduction: “” },
{ id: 22, day: “ראשון”, timeSlot: “15:00-16:00”, hotel: “מלכת שבא”, type: “”, location: “בריכה”, script: “ביוטי כללי של בריכה ושחקנים”, cast: “שחקן ושחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 23, day: “ראשון”, timeSlot: “15:00-16:00”, hotel: “מלכת שבא”, type: “8”, location: “בריכה”, script: “השתקפות הבריכה והשמיים בתוך משקפי שמש על השולחן.”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 24, day: “ראשון”, timeSlot: “15:00-16:00”, hotel: “מלכת שבא”, type: “3”, location: “ספא”, script: “מגבות מגולגול, שחקנית בספא”, cast: “שחקנית”, logisticsClient: “כניסה לספא”, logisticsProduction: “” },
{ id: 25, day: “ראשון”, timeSlot: “15:00-16:00”, hotel: “מלכת שבא”, type: “2”, location: “מועדון הילדים”, script: “מועדון הילדים”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 26, day: “ראשון”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “12”, location: “בריכה”, script: “שחקנית יושבת חצי גוף במים”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “” },
{ id: 27, day: “ראשון”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “2”, location: “בריכה”, script: “קוקטייל צבעוני על שפת הבריכה- עם השחקנית”, cast: “שחקנית ושחקן”, logisticsClient: “קוקטייל”, logisticsProduction: “” },
{ id: 28, day: “ראשון”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “10”, location: “בריכה”, script: “צילום רחפן של בריכת מלכת שבא עם השחקנית”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “רחפן” },
{ id: 29, day: “ראשון”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “12”, location: “בריכה”, script: “צילום רחפן- שחקנים”, cast: “שחקן, שחקנית, מרטה, אורי ואליה”, logisticsClient: “”, logisticsProduction: “רחפן” },
{ id: 30, day: “ראשון”, timeSlot: “16:00-17:00”, hotel: “”, type: “”, location: “בריכה”, script: “קוביית קרח זזה בקולה או משהו קר ליד הבריכה”, cast: “-”, logisticsClient: “זירו”, logisticsProduction: “” },
{ id: 31, day: “ראשון”, timeSlot: “17:00-17:20”, hotel: “מלכת שבא”, type: “8”, location: “בריכה”, script: “בריכת קטנים- ביוטי”, cast: “-”, logisticsClient: “”, logisticsProduction: “” },
{ id: 32, day: “ראשון”, timeSlot: “17:00-17:20”, hotel: “מלכת שבא”, type: “8”, location: “בריכה”, script: “טיפות מים על כוס קוקטייל קרה ליד הבריכה”, cast: “-”, logisticsClient: “קוקטייל”, logisticsProduction: “” },
{ id: 33, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “7”, location: “טיילת”, script: “עושה קעקוע חינה”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 34, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “”, location: “טיילת”, script: “שחקן יושב עם כל מיני שקיות מיואש”, cast: “”, logisticsClient: “”, logisticsProduction: “שקיות” },
{ id: 35, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “2”, location: “חוף”, script: “פתיח של 2- בעיניי לא צריך”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 36, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “3”, location: “חוף”, script: “ביוטי שחקנים בים ובטיילת- הולכים על החוף, מכניסים רגליים, הולכים בטיילת”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 37, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “5”, location: “חוף”, script: “ישנים על מגבת בחוף”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 38, day: “ראשון”, timeSlot: “17:45-19:15”, hotel: “”, type: “1”, location: “חוף”, script: “שחקן יושב על החוף - ובזמן שאתם מחפשים איך לסגור את החודש? אני מחפש באיזה חוף לשבת אחרי המשמרת.”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 39, day: “ראשון”, timeSlot: “19:30+”, hotel: “מלכת שבא”, type: “10”, location: “חדר אוכל”, script: “מעמיס הר של שניצלים או משהו אחר”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 40, day: “ראשון”, timeSlot: “19:30+”, hotel: “מלכת שבא”, type: “4”, location: “חדר אוכל”, script: “מזלג חותך עוגה”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 41, day: “ראשון”, timeSlot: “19:30+”, hotel: “”, type: “”, location: “חדר”, script: “אם יש חדר יפה אז לצילומי ביוטי - פותחים יין או משהו בחדר”, cast: “”, logisticsClient: “חדר במלכת שבא”, logisticsProduction: “” },
{ id: 42, day: “שני”, timeSlot: “8:30-9:00”, hotel: “וילג׳”, type: “1”, location: “חדר אוכל”, script: “ארוחת בוקר- ביוטי שוטים קצרים. עם ובלי שחקנית”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 43, day: “שני”, timeSlot: “9:00-11:00”, hotel: “אריאה”, type: “7”, location: “חדר אוכל”, script: “שחקנית בחדר האוכל באמצע ביס - תופסת את הכובע וזורקת שוב.”, cast: “”, logisticsClient: “כובע קש”, logisticsProduction: “” },
{ id: 44, day: “שני”, timeSlot: “9:00-11:00”, hotel: “אריאה”, type: “5”, location: “חדר אוכל”, script: “שחקנים עייפים אחרי ארוחה- צלחות אחרי האוכל”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 45, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “7”, location: “מרפסת”, script: “אתם חייבים חופשה- זורקת כובע”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 46, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “7”, location: “בריכה”, script: “שותה קוקטייל- כובע”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 47, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “9”, location: “בריכה”, script: “צילום יפה ומרשים של הבריכה מוארת בשמש”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 48, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “”, location: “בריכה”, script: “מרטוש והרחפן”, cast: “מרטה”, logisticsClient: “”, logisticsProduction: “רחפן” },
{ id: 49, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “9”, location: “הגשר והים”, script: “ביוטי”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 50, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “7”, location: “ספא”, script: “שוכבת על הגב והכובע נופל עליה”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 51, day: “שני”, timeSlot: “9:00-11:00”, hotel: “אריאה”, type: “9”, location: “ספא”, script: “ספא מגבות מגולגול, שחקנית”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 52, day: “שני”, timeSlot: “9:00-11:00”, hotel: “”, type: “9”, location: “”, script: “צילומי ביוטי”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 53, day: “שני”, timeSlot: “9:00-11:00”, hotel: “אריאה”, type: “11”, location: “לובי”, script: “כותרת: איך אני חושבת שפקידת הקבלה רואה אותי. בחורה עם טרולי חוצה את הלובי. כותרת: איך פקידת הקבלה רואה אותי. בחורה עם טרולי הולכת וכל שנייה נעצרת.”, cast: “שחקנית”, logisticsClient: “”, logisticsProduction: “טרולי” },
{ id: 54, day: “שני”, timeSlot: “11:00-13:00”, hotel: “וילג׳”, type: “1”, location: “חוץ”, script: “הולכים בין החדרים”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 55, day: “שני”, timeSlot: “11:00-13:00”, hotel: “וילג׳”, type: “8”, location: “חדר אוכל”, script: “צילום איטי חלב נשפך לקפה שחור או קצף קפוצ׳ינו בחדר אוכל.”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 56, day: “שני”, timeSlot: “11:00-13:00”, hotel: “וילג׳”, type: “1”, location: “בריכה”, script: “שחקנית בבריכה- שוטים קצרים”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 57, day: “שני”, timeSlot: “11:00-13:00”, hotel: “וילג׳”, type: “1”, location: “בריכה”, script: “רק מים”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 58, day: “שני”, timeSlot: “11:00-13:00”, hotel: “וילג׳”, type: “5”, location: “בריכה”, script: “רביצה בבריכה, שוכבת על כסא נוח מתחת לשמשיה, כובע קש על הפנים”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 59, day: “שני”, timeSlot: “13:00”, hotel: “וילג׳”, type: “5”, location: “משרד”, script: “אביעד”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 60, day: “שני”, timeSlot: “13:30”, hotel: “מלכת שבא”, type: “1”, location: “לובי וכביסה”, script: “כל תסריט 1 חוץ מהשוט האחרון”, cast: “שחקן”, logisticsClient: “מדים”, logisticsProduction: “” },
{ id: 61, day: “שני”, timeSlot: “15:30”, hotel: “מלכת שבא”, type: “6”, location: “”, script: “ראיון עם שמעון”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 62, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “2”, location: “קבלה, מציל, ברמן ועובד”, script: “כל התסריט”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 63, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “3”, location: “”, script: “מישהו”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 64, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “7”, location: “מדבקות בכל מיני מקומות”, script: “להדביק על הדלת כניסה, על ראש של אחד העובדים, על גב של מישהו, על בר או כוס יין.”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 65, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “8”, location: “שירות חדרים”, script: “3 עובדות”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 66, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “9”, location: “”, script: “לצלם את הצ׳קרית, הקבט, ושהם לוחצים ידיים”, cast: “”, logisticsClient: “צריכה קבט וצ׳קרית שיצטלמו”, logisticsProduction: “” },
{ id: 67, day: “שני”, timeSlot: “16:00-17:00”, hotel: “מלכת שבא”, type: “9”, location: “”, script: “טלפון על השולחן”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 68, day: “שלישי”, timeSlot: “9:30”, hotel: “מאריס”, type: “4”, location: “”, script: “כל תסריט 4 עם דודו”, cast: “”, logisticsClient: “”, logisticsProduction: “” },
{ id: 69, day: “שלישי”, timeSlot: “9:30”, hotel: “מאריס”, type: “3”, location: “”, script: “צילומי ביוטי”, cast: “”, logisticsClient: “”, logisticsProduction: “” }
];

const STATUS = { PENDING: “pending”, DONE: “done”, PARTIAL: “partial”, DELAYED: “delayed”, SKIPPED: “skipped” };

const STATUS_META = {
pending:  { label: “ממתין”,   emoji: “⏳”, bg: “#1e293b”, fg: “#94a3b8”, border: “#334155”, pill: “#0f172a” },
done:     { label: “בוצע”,    emoji: “✅”, bg: “#052e16”, fg: “#4ade80”, border: “#166534”, pill: “#14532d” },
partial:  { label: “חלקית”,   emoji: “🔶”, bg: “#1c1400”, fg: “#fbbf24”, border: “#854d0e”, pill: “#78350f” },
delayed:  { label: “נדחה”,    emoji: “⏰”, bg: “#1e1b4b”, fg: “#a78bfa”, border: “#4c1d95”, pill: “#3730a3” },
skipped:  { label: “לא בוצע”, emoji: “✕”,  bg: “#1a0505”, fg: “#f87171”, border: “#991b1b”, pill: “#7f1d1d” }
};

const HOTEL_ACCENT = {
“וילג׳”: “#38bdf8”,
“וילג”: “#38bdf8”,
“מלכת שבא”: “#f472b6”,
“אריאה”: “#34d399”,
“מאריס”: “#fb923c”,
“”: “#64748b”
};

const KEY_ITEMS = “may_items_v3”;
const KEY_STATS = “may_statuses_v3”;

function parseMinutes(slot) {
if (!slot) return 9999;
var first = slot.split(”-”)[0].trim().split(”+”)[0].trim();
var parts = first.split(”:”);
return (parseInt(parts[0], 10) || 0) * 60 + (parseInt(parts[1], 10) || 0);
}

function addMinsToSlot(slot, delta) {
if (!slot || slot.indexOf(”+”) !== -1) return slot;
function fmt(total) {
var hh = Math.floor(total / 60) % 24;
var mm = total % 60;
return hh + “:” + (mm < 10 ? “0” + mm : “” + mm);
}
function parseT(t) {
var p = t.trim().split(”:”);
return (parseInt(p[0], 10) || 0) * 60 + (parseInt(p[1], 10) || 0);
}
var parts = slot.split(”-”);
if (parts.length === 2) {
return fmt(parseT(parts[0]) + delta) + “-” + fmt(parseT(parts[1]) + delta);
}
return fmt(parseT(parts[0]) + delta);
}

function getStatus(statuses, id) {
return (statuses[id] && statuses[id].status) || STATUS.PENDING;
}

function Tag(props) {
return h(“span”, {
style: {
fontSize: “10px”,
background: props.bg || “rgba(255,255,255,0.04)”,
border: “1px solid “ + (props.borderColor || “#1e2d45”),
color: props.color || “#64748b”,
padding: “1px 7px”,
borderRadius: “10px”,
fontWeight: props.bold ? 700 : 400
}
}, props.children);
}

function ItemCard(props) {
var item = props.item;
var ist = props.ist || {};
var st = ist.status || STATUS.PENDING;
var meta = STATUS_META[st];
var accent = HOTEL_ACCENT[item.hotel] || “#64748b”;
var isDone = st === STATUS.DONE;

var tags = [];
if (item.hotel) tags.push(h(Tag, { key: “h”, color: accent, bg: “rgba(255,255,255,0.06)”, borderColor: accent + “40”, bold: true }, item.hotel));
if (item.location) tags.push(h(Tag, { key: “l” }, “📍 “ + item.location));
if (item.type) tags.push(h(Tag, { key: “t”, color: “#475569” }, “#” + item.type));
if (item.logisticsProduction) tags.push(h(Tag, { key: “p”, color: “#fbbf24”, bg: “#1a0f00”, borderColor: “#92400e” }, “⚙️ “ + item.logisticsProduction));
if (item.logisticsClient) tags.push(h(Tag, { key: “c”, color: “#4ade80”, bg: “#001a0f”, borderColor: “#166534” }, “🎯 “ + item.logisticsClient));

var left = [];
left.push(h(“div”, { key: “tags”, style: { display: “flex”, flexWrap: “wrap”, gap: “4px”, marginBottom: “6px” } }, tags));
left.push(h(“p”, { key: “sc”, style: { margin: “0 0 4px”, fontSize: “13px”, color: isDone ? “#475569” : “#cbd5e1”, lineHeight: 1.5, textDecoration: isDone ? “line-through” : “none” } }, item.script));
if (item.cast && item.cast !== “-”) {
left.push(h(“p”, { key: “ca”, style: { margin: 0, fontSize: “11px”, color: “#475569” } }, “👤 “ + item.cast));
}
if (ist.notes) {
left.push(h(“p”, { key: “n”, style: { margin: “4px 0 0”, fontSize: “11px”, color: “#a78bfa”, fontStyle: “italic” } }, “📝 “ + ist.notes));
}
if (ist.reason) {
left.push(h(“p”, { key: “r”, style: { margin: “2px 0 0”, fontSize: “11px”, color: “#fbbf24” } }, “💬 “ + ist.reason));
}

var rightChildren = [
h(“span”, { key: “b”, style: { fontSize: “11px”, fontWeight: 700, padding: “3px 8px”, borderRadius: “6px”, background: meta.pill, color: meta.fg, whiteSpace: “nowrap” } }, meta.emoji + “ “ + meta.label)
];
if (st === STATUS.PARTIAL && ist.completionPct) {
rightChildren.push(h(“span”, { key: “p”, style: { fontSize: “10px”, color: “#fbbf24” } }, ist.completionPct + “%”));
}

return h(“div”, {
onClick: props.onClick,
style: {
background: meta.bg,
border: “1px solid “ + meta.border,
borderRight: “3px solid “ + accent,
borderRadius: “10px”,
padding: “11px 12px”,
marginBottom: “7px”,
cursor: “pointer”,
opacity: isDone ? 0.6 : 1
}
}, h(“div”, { style: { display: “flex”, justifyContent: “space-between”, gap: “8px” } }, [
h(“div”, { key: “l”, style: { flex: 1, minWidth: 0 } }, left),
h(“div”, { key: “r”, style: { flexShrink: 0, display: “flex”, flexDirection: “column”, alignItems: “flex-end”, gap: “4px” } }, rightChildren)
]));
}

function ItemModal(props) {
var item = props.item;
var ist = props.ist || {};
var st0 = ist.status || STATUS.PENDING;
var pct0 = ist.completionPct || 50;

var stateSt = useState(st0);
var st = stateSt[0]; var setSt = stateSt[1];
var statePct = useState(pct0);
var pct = statePct[0]; var setPct = statePct[1];
var stateReason = useState(ist.reason || “”);
var reason = stateReason[0]; var setReason = stateReason[1];
var stateNotes = useState(ist.notes || “”);
var notes = stateNotes[0]; var setNotes = stateNotes[1];
var stateDOpen = useState(false);
var dOpen = stateDOpen[0]; var setDOpen = stateDOpen[1];
var stateDMins = useState(30);
var dMins = stateDMins[0]; var setDMins = stateDMins[1];

var accent = HOTEL_ACCENT[item.hotel] || “#64748b”;

function backdropClick(e) {
if (e.target === e.currentTarget) props.onClose();
}

// Top header tags
var headerTags = [];
if (item.hotel) headerTags.push(h(“span”, { key: “h”, style: { fontSize: “10px”, color: accent, fontWeight: 800, background: accent + “15”, padding: “2px 8px”, borderRadius: “8px”, border: “1px solid “ + accent + “30” } }, item.hotel));
if (item.timeSlot) headerTags.push(h(“span”, { key: “t”, style: { fontSize: “10px”, color: “#7dd3fc”, background: “#0c1a2e”, padding: “2px 8px”, borderRadius: “8px”, border: “1px solid #1e3a5f” } }, “⏰ “ + item.timeSlot));
if (item.location) headerTags.push(h(“span”, { key: “l”, style: { fontSize: “10px”, color: “#94a3b8”, background: “#1e293b”, padding: “2px 8px”, borderRadius: “8px” } }, “📍 “ + item.location));

var headerArea = [
h(“div”, { key: “tg”, style: { display: “flex”, gap: “6px”, flexWrap: “wrap”, marginBottom: “6px” } }, headerTags),
h(“p”, { key: “sc”, style: { margin: 0, fontSize: “14px”, color: “#e2e8f0”, lineHeight: 1.6, fontWeight: 500 } }, item.script)
];
if (item.cast && item.cast !== “-”) {
headerArea.push(h(“p”, { key: “ca”, style: { margin: “6px 0 0”, fontSize: “12px”, color: “#64748b” } }, “👤 “ + item.cast));
}
if (item.logisticsClient) {
headerArea.push(h(“p”, { key: “lc”, style: { margin: “4px 0 0”, fontSize: “11px”, color: “#4ade80” } }, “🎯 לוגיסטיקה לקוח: “ + item.logisticsClient));
}
if (item.logisticsProduction) {
headerArea.push(h(“p”, { key: “lp”, style: { margin: “2px 0 0”, fontSize: “11px”, color: “#fbbf24” } }, “⚙️ לוגיסטיקה הפקה: “ + item.logisticsProduction));
}

// Status grid
var statusButtons = Object.keys(STATUS_META).map(function (val) {
var meta = STATUS_META[val];
var selected = st === val;
return h(“button”, {
key: val,
onClick: function () { setSt(val); },
style: {
padding: “10px 8px”,
border: “1px solid “ + (selected ? meta.border : “#1e2d45”),
borderRadius: “8px”,
background: selected ? meta.bg : “#0f172a”,
color: selected ? meta.fg : “#475569”,
cursor: “pointer”,
fontSize: “12px”,
fontWeight: 700,
outline: selected ? “2px solid “ + meta.border : “none”,
outlineOffset: “1px”
}
}, meta.emoji + “ “ + meta.label);
});

var body = [];
body.push(h(“div”, { key: “hd”, style: { marginBottom: “12px” } }, headerArea));
body.push(h(“div”, { key: “sep”, style: { height: “1px”, background: “#1e2d45”, margin: “12px 0” } }));

body.push(h(“div”, { key: “stl”, style: { fontSize: “11px”, color: “#475569”, fontWeight: 700, letterSpacing: “1px”, marginBottom: “8px”, textTransform: “uppercase” } }, “סטטוס”));
body.push(h(“div”, { key: “stg”, style: { display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: “7px”, marginBottom: “14px” } }, statusButtons));

if (st === STATUS.PARTIAL) {
body.push(h(“div”, {
key: “pct”,
style: { marginBottom: “14px”, background: “#1c1400”, border: “1px solid #854d0e”, borderRadius: “8px”, padding: “12px” }
}, [
h(“div”, { key: “l”, style: { fontSize: “12px”, color: “#fbbf24”, fontWeight: 700, marginBottom: “8px” } }, “כמה בוצע? “ + pct + “%”),
h(“input”, {
key: “i”,
type: “range”,
min: “10”,
max: “90”,
step: “10”,
value: pct,
onChange: function (e) { setPct(Number(e.target.value)); }
})
]));
}

body.push(h(“div”, { key: “rl”, style: { fontSize: “11px”, color: “#475569”, fontWeight: 700, letterSpacing: “1px”, marginBottom: “6px”, textTransform: “uppercase” } }, “סיבה / הסבר”));
body.push(h(“textarea”, {
key: “rt”,
value: reason,
onChange: function (e) { setReason(e.target.value); },
placeholder: “למה? מה קרה? כמה צלמנו?”,
style: { width: “100%”, padding: “10px”, background: “#0f1929”, border: “1px solid #1e2d45”, borderRadius: “8px”, color: “#e2e8f0”, fontSize: “13px”, resize: “vertical”, minHeight: “64px”, boxSizing: “border-box”, outline: “none”, marginBottom: “10px”, display: “block” }
}));

body.push(h(“div”, { key: “nl”, style: { fontSize: “11px”, color: “#475569”, fontWeight: 700, letterSpacing: “1px”, marginBottom: “6px”, textTransform: “uppercase” } }, “הערות”));
body.push(h(“textarea”, {
key: “nt”,
value: notes,
onChange: function (e) { setNotes(e.target.value); },
placeholder: “הערות נוספות…”,
style: { width: “100%”, padding: “10px”, background: “#0f1929”, border: “1px solid #1e2d45”, borderRadius: “8px”, color: “#e2e8f0”, fontSize: “13px”, resize: “vertical”, minHeight: “64px”, boxSizing: “border-box”, outline: “none”, marginBottom: “14px”, display: “block” }
}));

// Delay this item
var delayBtnText = “⏰ דחה פריט זה בנפרד “ + (dOpen ? “▲” : “▼”);
var delaySection = [
h(“button”, {
key: “tb”,
onClick: function () { setDOpen(!dOpen); },
style: { background: “none”, border: “none”, color: “#a78bfa”, fontSize: “12px”, fontWeight: 700, cursor: “pointer”, padding: 0 }
}, delayBtnText)
];
if (dOpen) {
var presetButtons = [15, 30, 45, 60, 90, 120].map(function (m) {
var sel = dMins === m;
return h(“button”, {
key: m,
onClick: function () { setDMins(m); },
style: {
padding: “5px 10px”,
border: “1px solid “ + (sel ? “#7c3aed” : “#2e1a6b”),
borderRadius: “6px”,
background: sel ? “#7c3aed” : “transparent”,
color: sel ? “#fff” : “#a78bfa”,
cursor: “pointer”,
fontSize: “11px”
}
}, m < 60 ? (m + “ד”) : ((m / 60) + “ש”));
});
delaySection.push(h(“div”, {
key: “dp”,
style: { marginTop: “10px”, background: “#1e1b4b”, border: “1px solid #4c1d95”, borderRadius: “8px”, padding: “12px” }
}, [
h(“div”, { key: “row”, style: { display: “flex”, gap: “6px”, flexWrap: “wrap”, marginBottom: “10px” } }, presetButtons),
h(“button”, {
key: “go”,
onClick: function () { props.onDelay(dMins); },
style: { width: “100%”, padding: “9px”, background: “#7c3aed”, border: “none”, borderRadius: “8px”, color: “white”, fontWeight: 700, cursor: “pointer”, fontSize: “13px” }
}, “דחה ב-” + (dMins < 60 ? (dMins + “ דקות”) : ((dMins / 60) + “ שעה”)))
]));
}
body.push(h(“div”, { key: “ds”, style: { marginBottom: “16px” } }, delaySection));

// Action buttons
body.push(h(“div”, { key: “ab”, style: { display: “flex”, gap: “8px” } }, [
h(“button”, {
key: “cancel”,
onClick: props.onClose,
style: { flex: 1, padding: “13px”, background: “#0f172a”, border: “1px solid #1e2d45”, borderRadius: “10px”, color: “#64748b”, cursor: “pointer”, fontSize: “14px” }
}, “ביטול”),
h(“button”, {
key: “save”,
onClick: function () {
var patch = { status: st, reason: reason, notes: notes };
if (st === STATUS.PARTIAL) patch.completionPct = pct;
props.onSave(patch);
},
style: { flex: 2, padding: “13px”, background: accent, border: “none”, borderRadius: “10px”, color: “#000”, fontWeight: 800, cursor: “pointer”, fontSize: “14px” }
}, “שמור ✓”)
]));

return h(“div”, {
onClick: backdropClick,
style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,0.75)”, zIndex: 100, display: “flex”, alignItems: “flex-end”, justifyContent: “center” }
}, h(“div”, {
dir: “rtl”,
style: { background: “#0f172a”, borderRadius: “20px 20px 0 0”, border: “1px solid #1e2d45”, borderBottom: “none”, padding: “0 0 24px”, width: “100%”, maxWidth: “600px”, maxHeight: “88vh”, overflowY: “auto” }
}, [
h(“div”, { key: “h1”, style: { padding: “12px 0 0”, display: “flex”, justifyContent: “center” } },
h(“div”, { style: { width: “36px”, height: “4px”, background: “#1e2d45”, borderRadius: “2px” } })
),
h(“div”, { key: “h2”, style: { height: “3px”, background: “linear-gradient(90deg, “ + accent + “, transparent)”, margin: “12px 0 0” } }),
h(“div”, { key: “body”, style: { padding: “16px 18px 0” } }, body)
]));
}

function GlobalDelayModal(props) {
var stateMins = useState(30);
var mins = stateMins[0]; var setMins = stateMins[1];

function backdropClick(e) {
if (e.target === e.currentTarget) props.onClose();
}

var presetButtons = [15, 30, 45, 60, 90, 120].map(function (m) {
var sel = mins === m;
return h(“button”, {
key: m,
onClick: function () { setMins(m); },
style: {
flex: “1 0 calc(33% - 4px)”,
padding: “10px 4px”,
border: “1px solid “ + (sel ? “#7c3aed” : “#1e1b4b”),
borderRadius: “8px”,
background: sel ? “#7c3aed” : “#1e1b4b”,
color: sel ? “white” : “#a78bfa”,
cursor: “pointer”,
fontSize: “13px”,
fontWeight: 700
}
}, m < 60 ? (m + “ דק׳”) : ((m / 60) + “ שעה”));
});

return h(“div”, {
onClick: backdropClick,
style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,0.8)”, zIndex: 200, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: “16px” }
}, h(“div”, {
dir: “rtl”,
style: { background: “#0f172a”, border: “1px solid #4c1d95”, borderRadius: “16px”, padding: “24px”, width: “100%”, maxWidth: “340px” }
}, [
h(“h2”, { key: “t”, style: { margin: “0 0 6px”, fontSize: “18px”, color: “#c4b5fd” } }, “⏰ דחיית לו״ז כולל”),
h(“p”, { key: “d”, style: { margin: “0 0 18px”, fontSize: “13px”, color: “#64748b”, lineHeight: 1.5 } }, “כל הפריטים שטרם בוצעו ידחו בהתאמה. הלו״ז כולו ייזוז קדימה.”),
h(“div”, { key: “l”, style: { fontSize: “12px”, color: “#a78bfa”, fontWeight: 700, marginBottom: “8px”, letterSpacing: “1px”, textTransform: “uppercase” } }, “כמה דקות לדחות?”),
h(“div”, { key: “g”, style: { display: “flex”, gap: “6px”, flexWrap: “wrap”, marginBottom: “14px” } }, presetButtons),
h(“div”, { key: “a”, style: { display: “flex”, gap: “8px” } }, [
h(“button”, {
key: “c”,
onClick: props.onClose,
style: { flex: 1, padding: “12px”, background: “#0f172a”, border: “1px solid #1e2d45”, borderRadius: “10px”, color: “#64748b”, cursor: “pointer” }
}, “ביטול”),
h(“button”, {
key: “ok”,
onClick: function () { props.onConfirm(mins); },
style: { flex: 2, padding: “12px”, background: “#7c3aed”, border: “none”, borderRadius: “10px”, color: “white”, fontWeight: 800, cursor: “pointer”, fontSize: “14px” }
}, “דחה את הכל ב-” + (mins < 60 ? (mins + “ דק׳”) : ((mins / 60) + “ שעה”)))
])
]));
}

function App() {
var stateItems = useState(function () {
try {
var v = localStorage.getItem(KEY_ITEMS);
return v ? JSON.parse(v) : INITIAL_ITEMS;
} catch (e) { return INITIAL_ITEMS; }
});
var items = stateItems[0]; var setItems = stateItems[1];

var stateStats = useState(function () {
try {
var v = localStorage.getItem(KEY_STATS);
return v ? JSON.parse(v) : {};
} catch (e) { return {}; }
});
var statuses = stateStats[0]; var setStatuses = stateStats[1];

var stateDay = useState(“ראשון”);
var activeDay = stateDay[0]; var setActiveDay = stateDay[1];

var stateSel = useState(null);
var selectedItem = stateSel[0]; var setSelectedItem = stateSel[1];

var stateGD = useState(false);
var showGlobalDelay = stateGD[0]; var setShowGlobalDelay = stateGD[1];

var stateFlt = useState(“all”);
var filterStatus = stateFlt[0]; var setFilterStatus = stateFlt[1];

useEffect(function () {
try { localStorage.setItem(KEY_ITEMS, JSON.stringify(items)); } catch (e) {}
}, [items]);
useEffect(function () {
try { localStorage.setItem(KEY_STATS, JSON.stringify(statuses)); } catch (e) {}
}, [statuses]);

function updateStatus(id, patch) {
setStatuses(function (prev) {
var next = Object.assign({}, prev);
next[id] = Object.assign({}, prev[id] || {}, patch);
return next;
});
}

function delayAll(mins) {
setItems(function (prev) {
return prev.map(function (item) {
var st = getStatus(statuses, item.id);
if (st === STATUS.PENDING || st === STATUS.PARTIAL) {
return Object.assign({}, item, { timeSlot: addMinsToSlot(item.timeSlot, mins) });
}
return item;
});
});
setShowGlobalDelay(false);
}

function delayOne(id, mins) {
setItems(function (prev) {
return prev.map(function (item) {
if (item.id === id) {
return Object.assign({}, item, { timeSlot: addMinsToSlot(item.timeSlot, mins) });
}
return item;
});
});
updateStatus(id, { status: STATUS.DELAYED });
}

var dayItems = items.filter(function (i) { return i.day === activeDay; });
var slotsSet = {};
dayItems.forEach(function (i) { slotsSet[i.timeSlot] = true; });
var slots = Object.keys(slotsSet).sort(function (a, b) { return parseMinutes(a) - parseMinutes(b); });

var totalCount = items.length;
var doneCount = items.filter(function (i) { return getStatus(statuses, i.id) === STATUS.DONE; }).length;
var partialCount = items.filter(function (i) { return getStatus(statuses, i.id) === STATUS.PARTIAL; }).length;
var pct = Math.round(((doneCount + partialCount * 0.5) / totalCount) * 100);

function filtered(arr) {
if (filterStatus === “all”) return arr;
return arr.filter(function (i) { return getStatus(statuses, i.id) === filterStatus; });
}

// Build header
var headerTop = h(“div”, { style: { display: “flex”, justifyContent: “space-between”, alignItems: “flex-start” } }, [
h(“div”, { key: “t” }, [
h(“div”, { key: “p”, style: { fontSize: “11px”, letterSpacing: “3px”, color: “#475569”, textTransform: “uppercase”, marginBottom: “2px” } }, “Production Schedule”),
h(“h1”, { key: “h”, style: { margin: 0, fontSize: “20px”, fontWeight: 800, color: “#f1f5f9”, letterSpacing: “-0.5px” } }, “ברייקדאון מאי 🎬”)
]),
h(“button”, {
key: “btn”,
onClick: function () { setShowGlobalDelay(true); },
style: { background: “#1e1b4b”, border: “1px solid #4c1d95”, color: “#a78bfa”, borderRadius: “8px”, padding: “8px 14px”, fontSize: “12px”, fontWeight: 700, cursor: “pointer”, letterSpacing: “0.5px” }
}, “⏰ דחיית לו״ז”)
]);

var progressBar = h(“div”, { style: { marginTop: “12px”, display: “flex”, gap: “10px”, alignItems: “center” } }, [
h(“div”, { key: “bar”, style: { flex: 1, background: “#0f1929”, borderRadius: “3px”, height: “5px”, overflow: “hidden”, border: “1px solid #1e2d45” } },
h(“div”, { style: { width: pct + “%”, height: “100%”, background: “linear-gradient(90deg, #22c55e, #4ade80)”, transition: “width 0.5s” } })
),
h(“span”, { key: “n”, style: { fontSize: “11px”, color: “#64748b”, whiteSpace: “nowrap”, fontWeight: 700 } }, doneCount + “/” + totalCount + “ · “ + pct + “%”)
]);

var dayTabs = [“ראשון”, “שני”, “שלישי”].map(function (day) {
var dayCount = items.filter(function (i) { return i.day === day; }).length;
var dayDone = items.filter(function (i) { return i.day === day && getStatus(statuses, i.id) === STATUS.DONE; }).length;
var active = activeDay === day;
return h(“button”, {
key: day,
onClick: function () { setActiveDay(day); },
style: {
flex: 1, padding: “10px 8px”, border: “none”, background: “none”, cursor: “pointer”,
borderBottom: active ? “2px solid #7c3aed” : “2px solid transparent”,
color: active ? “#c4b5fd” : “#475569”, fontWeight: active ? 800 : 500,
fontSize: “13px”
}
}, [
“יום “ + day,
h(“div”, { key: “c”, style: { fontSize: “9px”, color: active ? “#7c3aed” : “#334155”, marginTop: “1px” } }, dayDone + “/” + dayCount)
]);
});

var filterDefs = [
[“all”, “הכל”, “#475569”],
[“pending”, STATUS_META.pending.label, STATUS_META.pending.border],
[“done”, STATUS_META.done.label, STATUS_META.done.border],
[“partial”, STATUS_META.partial.label, STATUS_META.partial.border],
[“delayed”, STATUS_META.delayed.label, STATUS_META.delayed.border],
[“skipped”, STATUS_META.skipped.label, STATUS_META.skipped.border]
];
var filterPills = filterDefs.map(function (def) {
var val = def[0]; var label = def[1]; var color = def[2];
var sel = filterStatus === val;
return h(“button”, {
key: val,
onClick: function () { setFilterStatus(val); },
style: {
padding: “3px 10px”, borderRadius: “20px”,
border: “1px solid “ + (sel ? color : “#1e2d45”),
background: sel ? color : “transparent”,
color: sel ? “#fff” : “#64748b”,
fontSize: “11px”, fontWeight: 600, cursor: “pointer”, whiteSpace: “nowrap”
}
}, label);
});

var header = h(“div”, {
style: { background: “linear-gradient(180deg, #0f1929 0%, #060d1a 100%)”, borderBottom: “1px solid #1e2d45”, position: “sticky”, top: 0, zIndex: 50 }
}, [
h(“div”, { key: “p”, style: { padding: “14px 16px 10px” } }, [headerTop, progressBar]),
h(“div”, { key: “d”, style: { display: “flex”, borderTop: “1px solid #1e2d45”, overflowX: “auto” } }, dayTabs),
h(“div”, { key: “f”, style: { padding: “8px 12px”, display: “flex”, gap: “6px”, overflowX: “auto”, borderTop: “1px solid #1e2d45” } }, filterPills)
]);

// Body - schedule list
var slotBlocks = slots.map(function (slot) {
var slotItemsAll = dayItems.filter(function (i) { return i.timeSlot === slot; });
var slotItems = filtered(slotItemsAll);
if (slotItems.length === 0 && filterStatus !== “all”) return null;

```
var slotHeader = h("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" } }, [
  h("div", { key: "tl", style: { background: "#0f172a", border: "1px solid #1e2d45", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", fontWeight: 800, color: "#7dd3fc", letterSpacing: "1px", whiteSpace: "nowrap" } }, slot || "ללא שעה"),
  h("div", { key: "ln", style: { flex: 1, height: "1px", background: "linear-gradient(90deg, #1e2d45, transparent)" } }),
  h("span", { key: "n", style: { fontSize: "10px", color: "#334155" } }, "" + slotItemsAll.length)
]);

var cards = slotItems.map(function (item) {
  return h(ItemCard, {
    key: item.id,
    item: item,
    ist: statuses[item.id] || {},
    onClick: function () { setSelectedItem(item); }
  });
});

return h("div", { key: slot, style: { marginBottom: "20px" } }, [
  slotHeader,
  h("div", { key: "cards" }, cards)
]);
```

}).filter(function (x) { return x !== null; });

var body = h(“div”, { style: { padding: “12px 12px 80px”, maxWidth: “720px”, margin: “0 auto” } }, slotBlocks);

// Modals
var children = [
h(“div”, { key: “hdr” }, header),
h(“div”, { key: “bod” }, body)
];

if (selectedItem) {
children.push(h(ItemModal, {
key: “im”,
item: selectedItem,
ist: statuses[selectedItem.id] || {},
onSave: function (patch) { updateStatus(selectedItem.id, patch); setSelectedItem(null); },
onDelay: function (mins) { delayOne(selectedItem.id, mins); setSelectedItem(null); },
onClose: function () { setSelectedItem(null); }
}));
}
if (showGlobalDelay) {
children.push(h(GlobalDelayModal, {
key: “gd”,
onConfirm: delayAll,
onClose: function () { setShowGlobalDelay(false); }
}));
}

return h(“div”, { dir: “rtl”, style: { background: “#060d1a”, minHeight: “100vh” } }, children);
}

var root = createRoot(document.getElementById(“root”));
root.render(h(App));
