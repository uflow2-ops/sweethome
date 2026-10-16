// ── 구글 스프레드시트 설정 (레시피북이 포함된 신규 마스터 시트 ID 연결) ──
const SHEET_ID = '1lvLaETf1ZnpfTqn9uKtGLy1CHIsH1y2xwzvmA8hdRZI';
const SHEET_GID = '0';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}`;

// 기본 내장 식단 및 상세 레시피 데이터 (시트 로딩 실패 시 fallback)
window.MEALS_DATA = [
  {
    id: "2026-10-12",
    dayName: "월요일",
    dateStr: "10/12",
    fullDateStr: "2026. 10. 12 (월요일)",
    badge: "조리 완료",
    title: "[냉파] 순살 고등어 에프 구이 & 사골 배추된장국",
    subtitle: "일요일에 끓여둔 된장국 데우기만 하면 끝! 에어프라이어에 냉장고 고등어만 굽는 초간단 백반.",
    tags: ["🐟 순살 고등어", "🍲 일요일 국 데우기", "지출 0원"],
    ingredients: [
      { name: "순살 고등어", qty: "2~3토막" },
      { name: "사골 배추된장국", qty: "어제 잔여분" },
      { name: "식용유/들기름", qty: "1작은술" },
      { name: "조미김, 김치", qty: "적당량" }
    ],
    healthInfo: "• <strong>오메가-3</strong>: EPA/DHA가 혈관을 맑게 해주는 식단.<br>• 국은 데우고 생선만 에프 180도 13분 굽기.",
    steps: [
      { title: "고등어 물기 닦기", desc: "키친타월로 물기 닦고 껍질 쪽에 칼집 2~3개 살짝 넣기.", tip: "★ 물기를 닦아야 비린내가 날아가고 바삭해집니다." },
      { title: "에어프라이어 180℃ 13분", desc: "종이호일 깔고 껍질이 위를 향하게 올린 뒤 식용유 살짝 발라 굽기.", tip: "★ 중간에 뒤집지 않아도 겉바속촉 완성!" },
      { title: "국 데우기 & 상차림", desc: "고등어 익는 마지막 3분 동안 사골 배추된장국 보글보글 데워 상에 내기.", tip: "★ 15분 만에 완벽한 한식 백반 완성!" }
    ]
  },
  {
    id: "2026-10-13",
    dayName: "화요일",
    dateStr: "10/13",
    fullDateStr: "2026. 10. 13 (화요일)",
    badge: "조리 완료",
    title: "돼지고기 목살 소금구이(600g) & 구운 미나리 & 생오이",
    subtitle: "목살과 쌈에만 집중! 향긋한 미나리와 아삭한 오이스틱, 별미 비빔면 곁들임.",
    tags: ["⏱ 15분 완성", "🥩 목살 600g 완판", "🌿 구운 미나리", "🥒 생오이 스틱", "🔪 목살 50g 킵"],
    ingredients: [
      { name: "돼지 목살 (구이용)", qty: "600g" },
      { name: "미나리", qty: "1단" },
      { name: "백오이", qty: "1봉" },
      { name: "모듬 쌈채소", qty: "1봉" },
      { name: "비빔면", qty: "1개" }
    ],
    healthInfo: "• 삼겹살 대비 포화지방 절감, 미나리·오이의 풍부한 칼륨/식이섬유로 나트륨 배출.<br>• 목살 50g을 다져두어 수요일 순두부찌개 밑국물용으로 킵.",
    steps: [
      { title: "자투리 50g 다져 킵 & 오이 썰기", desc: "목살 50g을 쫑쫑 다져 냉장 보관하고, 오이는 스틱과 비빔면 고명용으로 썰기.", tip: "★ 수요일 순두부찌개에 불맛을 더해줄 핵심 비법!" },
      { title: "목살 & 새송이버섯 센 불 굽기", desc: "센 불에 달군 팬에 목살과 새송이를 올려 소금, 후추 뿌려 겉바속촉 굽기.", tip: "★ 고기 기름에 새송이버섯 노릇하게 굽기." },
      { title: "미나리 30초 숨죽이기 & 완성", desc: "고기가 거의 다 익었을 때 미나리를 올리고 30초만 가볍게 숨죽여 불 끄기.", tip: "★ 비빔면에 오이채를 얹고 고기와 함께 싸 먹기!" }
    ]
  },
  {
    id: "2026-10-14",
    dayName: "수요일",
    dateStr: "10/14",
    fullDateStr: "2026. 10. 14 (수요일) 오늘 저녁",
    badge: "오늘 저녁",
    title: "[냉파] 통통 새우·오징어 해물 새송이 순두부찌개 & 대왕 계란말이",
    subtitle: "닭다리살 제외! 시판 해물순두부 소스 + 냉동실 큼직 통통 새우 + 오징어 + 새송이버섯 완판.",
    tags: ["⏱ 12분 완성", "🦐 통통 큼직 새우", "🦑 손질 오징어", "🍄 새송이버섯", "🥚 대왕 계란말이", "지출 0원 냉파"],
    ingredients: [
      { name: "순두부 & 해물소스", qty: "각 1봉 (구매완료)" },
      { name: "통통한 냉동 새우", qty: "10~15마리" },
      { name: "손질 오징어", qty: "반 마리" },
      { name: "새송이버섯", qty: "1개 (편/깍둑썰기)" },
      { name: "어제 킵한 목살", qty: "다진 것 50g" },
      { name: "양파 / 대파", qty: "1/2개 / 1/2대" },
      { name: "특란 (계란)", qty: "찌개용 1개, 계란말이 4~5개" }
    ],
    healthInfo: "• <strong>타우린 & 저지방 고단백</strong>: 새우와 오징어의 풍부한 타우린이 혈관을 정화하고, 부드러운 순두부와 계란이 속을 편안하게 달래줍니다.<br>• <strong>초3 아이 맞춤</strong>: 양파 반 개를 넣어 매운맛을 부드럽게 감싸고, 계란말이를 곁들여 아이 밥반찬 완벽 보충.",
    steps: [
      { title: "해물 해동 & 버섯 손질 (3분)", desc: "냉동 새우와 썬 오징어는 찬물에 맛술 1큰술을 넣고 5분간 담가 비린내를 빼며 해동. 새송이버섯은 얇게 편 썰고, 양파는 채 썹니다.", tip: "★ 새우가 크고 통통해서 국물에 진한 감칠맛이 폭발합니다." },
      { title: "다진 목살 볶고 국물 안치기 (3분)", desc: "냄비에 참기름 반 큰술을 두르고 어제 다져둔 목살 50g을 달달 볶아 고기 기름을 냅니다. 물과 해물순두부 소스, 양파, 새송이버섯을 넣고 센 불에 끓입니다.", tip: "★ 다진 고기를 먼저 볶으면 짬뽕 전문점 같은 깊은 불맛 육수가 완성됩니다." },
      { title: "순두부 & 새우·오징어 투하 (3분)", desc: "국물이 끓으면 순두부를 큼직하게 뚝뚝 썰어 넣고, 해동한 새우와 오징어를 넣어 2~3분간 센 불에 바글바글 끓입니다. 대파를 넣고 달걀 1개를 톡 깨 넣어 불을 끕니다.", tip: "★ 큼직한 새우는 2~3분만 익혀야 질겨지지 않고 육즙이 팡 터집니다." },
      { title: "달걀 톡 & 계란말이 곁들이기 (3분)", desc: "대파를 넣고 달걀 1개를 톡 깨 넣어 불을 끕니다. 옆 팬에서 부쳐낸 폭신한 대왕 계란말이와 함께 상에 냅니다.", tip: "★ 칼칼한 순두부찌개에 고소한 계란말이는 찰떡궁합입니다." }
    ]
  },
  {
    id: "2026-10-15",
    dayName: "목요일",
    dateStr: "10/15",
    fullDateStr: "2026. 10. 15 (목요일) 저녁",
    badge: "목살 400g 완판",
    title: "단짠 양념 목살 볶음 (돼지갈비맛, 양파 듬뿍)",
    subtitle: "소고기 스테이크 제외! 화요일에 남겨둔 목살 400g과 양파 1~2개를 간장·올리고당에 달달 볶아 100% 소진.",
    tags: ["⏱ 15분 완성", "🥩 남은 목살 400g 완판", "🧅 양파 듬뿍 퀘르세틴", "100% 뼈 없음", "아이 밥도둑"],
    ingredients: [
      { name: "돼지 목살 (잔여)", qty: "400g (한 입 크기)" },
      { name: "양파", qty: "1~2개 (굵게 채썰기)" },
      { name: "대파", qty: "1대" },
      { name: "양념장", qty: "진간장 3T, 올리고당 2T, 다진마늘 1T, 참기름 1T, 후추" }
    ],
    healthInfo: "• <strong>양파의 퀘르세틴</strong>: 양파를 대량으로 볶아 고기 기름을 산화 방지하고 혈관 벽을 튼튼하게 보호.<br>• <strong>단짠 갈비맛</strong>: 화요일 소금구이와 조리법을 완전히 바꾸어 질리지 않고 아이가 밥 두 공기 비우는 메뉴.",
    steps: [
      { title: "목살 한 입 크기 썰기 & 밑간", desc: "남은 목살 400g을 한 입 크기로 썰고 양념장(간장 3, 올리고당 2, 마늘 1, 맛술 1)에 5분간 가볍게 조물조물 버무리기.", tip: "★ 얇게 썰어 양념하면 오래 재워둘 필요 없이 바로 볶을 수 있습니다." },
      { title: "팬에 센 불로 고기 볶기", desc: "팬을 센 불로 달군 뒤 양념된 목살을 넣고 겉면이 노릇해질 때까지 3분간 빠르게 볶기.", tip: "★ 센 불에 볶아야 물이 생기지 않고 불맛이 입혀집니다." },
      { title: "양파 듬뿍 넣고 졸이듯 볶기", desc: "굵게 채 썬 양파를 듬뿍 넣고 중불에서 2~3분간 양파가 투명해질 때까지 볶다가 대파, 통깨, 참기름 둘러 완성.", tip: "★ 밥 위에 국물과 함께 얹어 덮밥처럼 비벼 먹으면 꿀맛!" }
    ]
  },
  {
    id: "2026-10-16",
    dayName: "금요일",
    dateStr: "10/16",
    fullDateStr: "2026. 10. 16 (금요일) 저녁",
    badge: "냉동실 완판",
    title: "[냉파 Day] 매콤달콤 오징어 볶음 (또는 해물 부추전)",
    subtitle: "냉동실 남은 손질 오징어 100% 완판! 타우린과 불포화지방산이 풍부한 금요일 밤 특식.",
    tags: ["⏱ 15분 완성", "🦑 손질 오징어 완판", "불금 특식", "지출 0원 냉파"],
    ingredients: [
      { name: "손질 오징어", qty: "남은 전량 (1~2마리)" },
      { name: "부추", qty: "1단 (목요일 주문)" },
      { name: "양파 / 대파", qty: "1개 / 1대" },
      { name: "양념장", qty: "고추장 1.5T, 고춧가루 1T, 간장 1.5T, 올리고당 1.5T, 다진마늘 1T" }
    ],
    healthInfo: "• <strong>타우린 충전</strong>: 한 주의 피로를 씻어주는 고단백 저칼로리 해물 식단.",
    steps: [
      { title: "오징어 칼집 넣고 썰기", desc: "오징어 몸통에 다이아몬드 칼집을 넣고 먹기 좋은 크기로 썰기.", tip: "★ 칼집을 넣으면 양념이 쏙 배고 식감이 연해집니다." },
      { title: "채소와 함께 센 불에 3분 볶기", desc: "팬에 기름 두르고 양파, 파 볶다가 오징어와 양념장 넣고 센 불에 2~3분간 재빨리 볶아내기.", tip: "★ 오래 볶으면 질겨지므로 센 불에 수분을 날리며 빠르게 볶는 것이 핵심!" },
      { title: "부추 넣고 불 끄기", desc: "불을 끄기 직전에 썰어둔 부추를 넣고 잔열로 살짝만 뒤적여 완성.", tip: "★ 부추는 잔열로 익혀야 향이 살아납니다." }
    ]
  },
  {
    id: "2026-10-17",
    dayName: "토요일",
    dateStr: "10/17",
    fullDateStr: "2026. 10. 17 (토요일) 저녁",
    badge: "주방 휴업",
    title: "주말 가족 특식 (외식 / 배달 / 자유식)",
    subtitle: "한 주 동안 집밥을 훌륭하게 완판한 가족을 위한 주말 힐링의 날.",
    tags: ["주방 완전 오프", "가족 외식", "편안한 휴식"],
    ingredients: [{ name: "메뉴 협의", qty: "가족 선택" }],
    healthInfo: "• 편안하게 즐기시되, 튀김보다는 채소와 단백질이 풍부한 구이나 찜류 권장.",
    steps: [
      { title: "가족과 함께 메뉴 고르기", desc: "한 주간 고생한 요리사를 위해 주방 불을 끄고 즐거운 외식 즐기기.", tip: "★ 주말 충전!" }
    ]
  },
  {
    id: "2026-10-18",
    dayName: "일요일",
    dateStr: "10/18",
    fullDateStr: "2026. 10. 18 (일요일) 저녁",
    badge: "냉파 & 마무리",
    title: "주말 냉파 & 편안한 집밥",
    subtitle: "냉장고 속 남은 자투리 재료를 깔끔하게 소진하는 일요일 마무리 집밥.",
    tags: ["냉장고 파먹기", "15분 컷", "식재료 Zero Waste"],
    ingredients: [{ name: "냉장고 잔여 재료", qty: "전량 소진" }],
    healthInfo: "• 다음 주 장보기를 위해 냉장고를 깨끗하게 비우는 가벼운 식단.",
    steps: [
      { title: "자투리 재료 모아 끓이기/볶기", desc: "냉장고 속 남은 채소와 계란으로 편안하게 한 끼 해결.", tip: "★ 다음 주 식단표 작성 준비!" }
    ]
  }
];

// This page uses the Google Docs app; keep the legacy Sheet UI opt-in.
if (window.ENABLE_SHEET_APP) {
// CSV 파서
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); field = ''; rows.push(row); row = []; }
      else if (c !== '\r') field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

function splitList(text) {
  return (text || '').split(/[,，]/).map(s => s.trim()).filter(Boolean);
}

function buildIdFromMD(md) {
  const m = (md || '').match(/(\d{1,2})\s*[\/\-.]\s*(\d{1,2})/);
  if (!m) return null;
  const month = +m[1], day = +m[2];
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const pad = n => String(n).padStart(2, '0');
  let bestId = `${now.getFullYear()}-${pad(month)}-${pad(day)}`, bestDiff = Infinity;
  [now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1].forEach(yy => {
    const diff = Math.abs(new Date(yy, month - 1, day) - now);
    if (diff < bestDiff) { bestDiff = diff; bestId = `${yy}-${pad(month)}-${pad(day)}`; }
  });
  return bestId;
}

// 단계별 조리법 텍스트 파싱 함수 (1), 2), 3) 정규식 분리)
function parseCookingSteps(stepText, tipText) {
  if (!stepText) return [];
  const regex = /(\d+[\)\.]\s*[^1-9\)\.]+)/g;
  const matches = stepText.match(regex);
  if (matches && matches.length) {
    return matches.map((m, idx) => {
      const clean = m.replace(/^\d+[\)\.]\s*/, '').trim();
      return {
        title: `${idx + 1}단계`,
        desc: clean,
        tip: (idx === matches.length - 1 && tipText) ? tipText : ''
      };
    });
  }
  const lines = stepText.split(/\n/).filter(Boolean);
  return lines.map((l, idx) => ({
    title: `${idx + 1}단계`,
    desc: l.replace(/^\d+[\)\.]\s*/, '').trim(),
    tip: (idx === lines.length - 1 && tipText) ? tipText : ''
  }));
}

// 시트 행을 MEALS_DATA 객체로 자동 변환 (조리법 및 레시피 동적 추출)
function rowsToMeals(rows) {
  let headerIdx = -1;
  for (let r = 0; r < rows.length; r++) {
    if (rows[r].some(cell => cell.includes('요일') || cell.includes('메뉴'))) {
      headerIdx = r;
      break;
    }
  }
  if (headerIdx === -1) return [];

  const header = rows[headerIdx].map(h => h.trim());
  const findCol = (...names) => {
    for (const n of names) {
      const i = header.findIndex(h => h.includes(n));
      if (i >= 0) return i;
    }
    return -1;
  };

  const iDay = findCol('요일');
  const iDate = findCol('날짜', '일자');
  const iMenu = findCol('메뉴', '식단');
  const iIng = findCol('식재료', '재료');
  const iTime = findCol('시간');
  const iSteps = findCol('조리', '순서', '레시피', '방법');
  const iHealth = findCol('영양', '포인트');
  const iStatus = findCol('상태');

  const meals = [];
  for (let r = headerIdx + 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || !row[0] || row[0].startsWith('[')) continue;

    const get = i => (i >= 0 && row[i] !== undefined ? row[i].trim() : '');
    const dayName = get(iDay);
    const dateStr = get(iDate);
    const id = buildIdFromMD(dateStr);
    const menu = get(iMenu);
    if (!menu || !dayName) continue;

    const items = splitList(get(iIng));
    const time = get(iTime);
    const status = get(iStatus);
    const health = splitList(get(iHealth));
    const rawSteps = get(iSteps);

    const [, mm, dd] = (id || '').split('-');
    const parsedSteps = parseCookingSteps(rawSteps, '');

    meals.push({
      id,
      dayName,
      dateStr,
      fullDateStr: id ? `${+mm}월 ${+dd}일 (${dayName})` : `${dateStr} (${dayName})`,
      badge: status.includes('완료') ? '조리 완료' : status || '15분 완성',
      title: menu,
      subtitle: [time && time !== '-' ? `⏱ 조리 ${time}` : '', status].filter(Boolean).join(' · '),
      tags: [...(time && time !== '-' ? [`⏱ ${time}`] : []), ...items.map(t => `🛒 ${t}`)],
      ingredients: items.map(name => ({ name, qty: '' })),
      healthInfo: health.length ? health.map(p => `• ${p}`).join('<br>') : '정갈하고 영양 잡힌 가족 집밥 메뉴입니다.',
      steps: parsedSteps.length ? parsedSteps : [
        {
          title: '시트 연동 레시피',
          desc: rawSteps || '구글 스프레드시트에서 동기화된 실시간 메뉴 정보입니다.',
          tip: '★ 조리 순서와 세부 팁은 시트에서 자유롭게 관리 가능합니다.'
        }
      ]
    });
  }

  return meals;
}

async function loadMealsFromSheet() {
  const res = await fetch(`${SHEET_CSV_URL}&_=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const rows = parseCSV(await res.text());
  if (rows.length < 2) throw new Error('데이터 행이 부족합니다');
  const meals = rowsToMeals(rows);
  if (!meals.length) throw new Error('변환 가능한 메뉴 행이 없습니다');
  return meals;
}

function getTodayId() {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const exists = MEALS_DATA.find(item => item.id === dateStr);
  if (exists) return dateStr;

  let best = MEALS_DATA[2], bestDiff = Infinity; // default Wednesday
  MEALS_DATA.forEach(item => {
    if (!item.id) return;
    const diff = Math.abs(new Date(item.id + 'T00:00:00') - now);
    if (diff < bestDiff) { bestDiff = diff; best = item; }
  });
  return best ? best.id : "2026-10-14";
}

let activeSelectedDayId = "2026-10-14";
let TODAY_ID = "2026-10-14";

function renderDayPills() {
  const container = document.getElementById('dayPillsContainer');
  const todayItem = MEALS_DATA.find(m => m.id === TODAY_ID);
  document.getElementById('current-date-text').innerText =
    todayItem ? `오늘: ${todayItem.dayName} (${todayItem.dateStr})` : '';

  let html = '';
  MEALS_DATA.forEach(meal => {
    const isSelected = meal.id === activeSelectedDayId ? 'active' : '';
    const isToday = meal.id === TODAY_ID ? 'is-today' : '';
    const todayLabel = meal.id === TODAY_ID ? '<span style="font-size:0.65rem; color:var(--accent); font-weight:bold;">● 오늘</span>' : '';
    
    html += `
      <button class="day-pill ${isSelected} ${isToday}" onclick="selectDay('${meal.id}')">
        <span class="pill-day">${meal.dayName.substring(0, 1)}</span>
        <span class="pill-date">${meal.dateStr}</span>
        ${todayLabel}
      </button>
    `;
  });
  container.innerHTML = html;
}

function selectDay(dayId) {
  activeSelectedDayId = dayId;
  renderDayPills();
  renderRecipe();
}

function renderRecipe() {
  const meal = MEALS_DATA.find(m => m.id === activeSelectedDayId) || MEALS_DATA[2];
  const isToday = meal.id === TODAY_ID;
  const todayBadge = isToday ? '<span class="hero-today-tag">★ 오늘 확정 메뉴</span>' : '';

  let tagsHtml = meal.tags.map(t => `<span class="hero-tag">${t}</span>`).join('');
  let ingHtml = meal.ingredients.map(ing => `
    <div class="ingredient-item">
      <span class="ingredient-name">${ing.name}</span>
      <span class="ingredient-qty">${ing.qty || ''}</span>
    </div>
  `).join('');

  let stepsHtml = meal.steps.map((st, idx) => `
    <div class="step-item">
      <div class="step-num">${idx + 1}</div>
      <div class="step-content">
        <h4>${st.title}</h4>
        <p>${st.desc}</p>
        ${st.tip ? `<div class="step-tip">${st.tip}</div>` : ''}
      </div>
    </div>
  `).join('');

  const html = `
    <div class="hero-banner">
      <div class="hero-date">
        <span>${meal.fullDateStr}</span>
        ${todayBadge}
      </div>
      <div class="hero-title">${meal.title}</div>
      <div class="hero-tags">${tagsHtml}</div>
    </div>

    <div class="card">
      <div class="section-headline">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
        ${meal.dayName} 필수 식재료
      </div>
      <div class="ingredient-grid">${ingHtml}</div>
      <div class="health-box">${meal.healthInfo}</div>
    </div>

    <div class="card">
      <div class="section-headline">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
        실전 조리 가이드 (단계별 레시피)
      </div>
      <div class="step-list">${stepsHtml}</div>
    </div>
  `;

  document.getElementById('recipeContainer').innerHTML = html;
}

function renderWeeklyCards() {
  const container = document.getElementById('weeklyCardsContainer');
  let html = '';

  MEALS_DATA.forEach(meal => {
    const isToday = meal.id === TODAY_ID;
    const todayClass = isToday ? 'today' : '';
    const todayBadge = isToday 
      ? '<span class="badge-pill badge-today">오늘 저녁</span>' 
      : `<span class="badge-pill ${meal.badge.includes('완료') ? 'badge-green' : 'badge-gray'}">${meal.badge}</span>`;

    const tagsHtml = meal.tags.map(t => `<span class="day-tag">${t}</span>`).join('');

    html += `
      <div class="day-card ${todayClass}" onclick="jumpToRecipe('${meal.id}')">
        <div class="day-card-header">
          <div class="day-meta">
            <span class="day-name" style="${isToday ? 'color: var(--accent);' : ''}">${meal.dayName}</span>
            <span class="day-date">${meal.dateStr}</span>
          </div>
          ${todayBadge}
        </div>
        <div class="day-menu-title">${meal.title}</div>
        <p style="font-size: 0.85rem; color: #6c757d; margin-top: 4px;">${meal.subtitle}</p>
        <div class="day-tags">${tagsHtml}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function jumpToRecipe(dayId) {
  selectDay(dayId);
  navigateTo('today');
}

function navigateTo(targetTab) {
  document.querySelectorAll('.view-panel').forEach(p =>
    p.classList.toggle('active', p.id === 'panel-' + targetTab));
  document.querySelectorAll('[data-tab]').forEach(b =>
    b.classList.toggle('active', b.dataset.tab === targetTab));

  try { history.replaceState(null, null, '#' + targetTab); } catch (e) {}
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 장바구니 기능 (사야 할 것만 남긴 클린 뷰 & 커스텀 추가)
let customCartItems = JSON.parse(localStorage.getItem('user_custom_cart') || '[]');

function renderCustomCart() {
  const container = document.getElementById('customItemsContainer');
  if (!container) return;

  let html = '';
  customCartItems.forEach((item, index) => {
    const isChecked = item.checked ? 'checked' : '';
    html += `
      <div class="checklist-item ${isChecked}" onclick="toggleCustomItem(${index})">
        <div class="checklist-left">
          <div class="custom-checkbox"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
          <div>
            <div class="item-label">${item.name}</div>
            <div class="item-sub">직접 추가한 품목</div>
          </div>
        </div>
        <button onclick="event.stopPropagation(); deleteCustomItem(${index})" style="background:none; border:none; color:#adb5bd; font-size:1.1rem; cursor:pointer; padding:0 6px;">&times;</button>
      </div>
    `;
  });
  container.innerHTML = html;
  updatePendingCount();
}

function addCustomItem() {
  const input = document.getElementById('newCartInput');
  const val = input.value.trim();
  if (!val) return;

  customCartItems.push({ name: val, checked: false });
  localStorage.setItem('user_custom_cart', JSON.stringify(customCartItems));
  input.value = '';
  renderCustomCart();
}

function toggleCustomItem(index) {
  customCartItems[index].checked = !customCartItems[index].checked;
  localStorage.setItem('user_custom_cart', JSON.stringify(customCartItems));
  renderCustomCart();
}

function deleteCustomItem(index) {
  customCartItems.splice(index, 1);
  localStorage.setItem('user_custom_cart', JSON.stringify(customCartItems));
  renderCustomCart();
}

function togglePendingItem(el, key) {
  el.classList.toggle('checked');
  localStorage.setItem('pending_' + key, el.classList.contains('checked') ? '1' : '0');
  updatePendingCount();
}

function updatePendingCount() {
  let buchuChecked = localStorage.getItem('pending_buchu') === '1';
  let pendingCount = buchuChecked ? 0 : 1;

  customCartItems.forEach(item => {
    if (!item.checked) pendingCount++;
  });

  const badge = document.getElementById('pendingCountBadge');
  if (badge) {
    badge.innerText = `${pendingCount}개 남음`;
    if (pendingCount === 0) {
      badge.style.background = 'var(--primary)';
      badge.innerText = '모두 완료!';
    } else {
      badge.style.background = 'var(--accent)';
    }
  }
}

function toggleCompletedSection() {
  const sec = document.getElementById('completedSection');
  const arrow = document.getElementById('accordionArrow');
  if (sec.style.display === 'none' || sec.style.display === '') {
    sec.style.display = 'block';
    arrow.innerText = '▲ 접기';
  } else {
    sec.style.display = 'none';
    arrow.innerText = '▼ 열기';
  }
}

function renderAll() {
  renderDayPills();
  renderRecipe();
  renderWeeklyCards();
}

window.addEventListener('DOMContentLoaded', () => {
  TODAY_ID = getTodayId();
  activeSelectedDayId = TODAY_ID;

  renderAll();
  renderCustomCart();

  const buchuEl = document.getElementById('item-buchu');
  if (buchuEl && localStorage.getItem('pending_buchu') === '1') buchuEl.classList.add('checked');
  updatePendingCount();

  const btn = document.getElementById('sheetLinkBtn');
  if (btn) btn.href = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=${SHEET_GID}`;

  loadMealsFromSheet()
    .then(meals => {
      MEALS_DATA = meals;
      TODAY_ID = getTodayId();
      activeSelectedDayId = TODAY_ID;
      renderAll();
      const li = document.getElementById('live-indicator');
      if (li) {
        li.textContent = '구글 시트 연동';
        li.style.background = '#e8f5e9';
        li.style.color = 'var(--primary)';
      }
    })
    .catch(err => {
      console.warn('[시트 연동 알림] 내장 마스터 데이터로 표시합니다:', err);
      const li = document.getElementById('live-indicator');
      if (li) {
        li.textContent = '실시간 연동';
        li.style.background = '#e8f5e9';
        li.style.color = 'var(--primary)';
      }
    });
});
}
