const QA_MODE = new URLSearchParams(window.location.search).has("qa");
const STORAGE_KEY = QA_MODE ? "autumn-job-workbench-qa" : "autumn-job-workbench-v1";

const seededJobs = [
  { id: "minimax-mkt", company: "MiniMax", title: "AI 产品市场营销", priority: "P0", direction: "海外市场", location: "上海", type: "社招", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/minimax_7637046296842504498/AI%E4%BA%A7%E5%93%81%E5%B8%82%E5%9C%BA%E8%90%A5%E9%94%80-%E7%A8%80%E5%AE%87%E7%A7%91%E6%8A%80", source: "MiniMax 单岗位详情页", summary: "参与 AI 产品全球市场推广，覆盖品牌定位、市场渗透与 GTM；需要理解欧美市场及 Discord、TikTok、Reddit、Instagram、YouTube 等渠道，强调英文表达与 0→1 经验。", tags: ["AI", "GTM", "海外社媒"] },
  { id: "kimi-campus", company: "月之暗面 Kimi", title: "SEO & GEO 增长实习生（AI 方向）", priority: "P0", direction: "用户增长", location: "北京", type: "实习", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/c286-48/SEO-%26-GEO-%E5%A2%9E%E9%95%BF%E5%AE%9E%E4%B9%A0%E7%94%9F-AI-%E6%96%B9%E5%90%91-%E6%9C%88%E4%B9%8B%E6%9A%97%E9%9D%A2", source: "Kimi 单岗位详情页", summary: "参与 AI 产品全球化增长，负责全球高潜关键词与搜索意图洞察、英文内容运营、外链建设、SEO 数据监控，并探索生成式引擎优化 GEO；英语六级以上、AI Agent 重度使用者优先。", tags: ["AI", "GEO", "全球增长"] },
  { id: "kimi-growth-intern", company: "月之暗面 Kimi", title: "用户增长投放数据实习生", priority: "P0", direction: "用户增长", location: "北京", type: "实习", status: "开放", verified: "2026.09.12", url: "https://xiaozhaobao.com.cn/job/1064640", source: "校招宝 · 源自官网", summary: "拆解用户获取、激活、留存与转化数据，搭建增长投放看板，支持 A/B Test、素材效果、人群分层和渠道质量分析。适合作为 AI 增长与用户研究的交叉切口。", tags: ["AI", "增长", "数据"] },
  { id: "byte-gmpt", company: "字节跳动", title: "GMPT 产品运营 / 广告产品运营", priority: "P0", direction: "GTM", location: "北京 / 上海 / 杭州 / 深圳 / 海外", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://www.wondercv.com/xiaozhao/bytedance-gmpt-2027-campus-hiring-13330-bb3298/", source: "GMPT 2027 秋招公告", summary: "国际商业化产品与技术团队服务 TikTok 等全球业务，运营方向覆盖产品运营、创意产品运营、商业分析和广告产品运营；业务区域包括北美、新加坡、欧洲、中东。", tags: ["大厂", "出海", "商业化"] },
  { id: "feishu-gtm", company: "飞书 / 字节跳动", title: "GTM 运营 BP — 飞书商业化", priority: "P0", direction: "GTM", location: "北京", type: "实习", status: "开放", verified: "2026.09.12", url: "https://www.shushuqiuzhi.com/position/384455", source: "飞书商业化岗位页", summary: "参与将飞书产品推向中国与国际市场，结合行业洞察、市场策略和销售运营推动客户增长；ByteIntern 面向 2027 届，AI 工具重度使用或咨询/销售运营经历加分。", tags: ["大厂", "GTM", "B2B"] },
  { id: "anker-campus", company: "安克创新", title: "LATAM（拉美）区域市场营销实习生", priority: "P0", direction: "海外市场", location: "深圳", type: "实习", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/c522-c3c43a3d939186ca/LATAM-%E6%8B%89%E7%BE%8E-%E5%8C%BA%E5%9F%9F%E5%B8%82%E5%9C%BA%E8%90%A5%E9%94%80%E5%AE%9E%E4%B9%A0%E7%94%9F-%E5%AE%89%E5%85%8B%E5%88%9B%E6%96%B0", source: "安克创新单岗位详情页", summary: "面向 2027 届储备，参与拉美市场整合营销、内容创意、本土网红合作、用户与竞品洞察、UGC 和社群活动；英语可作为工作语言，西语或葡语加分，表现优秀可争取转正。", tags: ["出海", "拉美", "社媒营销"] },
  { id: "transsion-gtm", company: "传音控股", title: "海东青计划 · GTM（Go-to-Market）方向", priority: "P0", direction: "GTM", location: "深圳", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://jobs.uhomes.com/jobs/7LQ892kN", source: "传音单岗位详情页", summary: "面向 2027 届的 GTM 培养岗位，偏好市场营销、国际商务和西语、葡语、俄语等小语种背景；强调数据分析、市场敏感度与海外业务潜力。", tags: ["出海", "GTM", "管培"] },
  { id: "xiaomi-ecom", company: "小米", title: "手机品类电商运营 — 国际业务", priority: "P0", direction: "海外运营", location: "北京", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://watchjobs.net/zh/explore/job/XIAOMI_7642610103274981675/%E6%89%8B%E6%9C%BA%E5%93%81%E7%B1%BB%E7%94%B5%E5%95%86%E8%BF%90%E8%90%A5-2027%E5%B1%8A-%E5%B0%8F%E7%B1%B3", source: "小米招聘岗位聚合页", summary: "对接总部 GTM 团队，参与各国电商销售策略规划、数据分析与复盘；需要英语口语沟通能力，可向 GTM、市场或销售策略等方向延展。", tags: ["大厂", "国际电商", "GTM"] },
  { id: "xiaomi-field-gtm", company: "小米", title: "GTM 运营专员 — 外派", priority: "P0", direction: "GTM", location: "约翰内斯堡 / 开罗", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://hireportal.us.com/eg/job/bp8q9kz657w1/gtm", source: "小米 2027 校招岗位聚合页", summary: "面向海外一线市场的 GTM 运营岗位，工作地点为约翰内斯堡或开罗，适合愿意外派并直接参与区域市场进入、上市节奏和销售运营的人选。", tags: ["出海", "外派", "GTM"] },
  { id: "meituan-overseas", company: "美团", title: "2027 秋招 · 客服工具运营（Keeta）", priority: "P0", direction: "海外运营", location: "北京", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/c259-f9197f89c79edc41/2027%E7%A7%8B%E6%8B%9B-%E5%AE%A2%E6%9C%8D%E5%B7%A5%E5%85%B7%E8%BF%90%E8%90%A5-%E7%BE%8E%E5%9B%A2", source: "美团单岗位详情页", summary: "服务美团国际外卖品牌 Keeta，分析运营数据、用户反馈和市场信息，推动客服工具、自动化、AI/NLP 与流程优化项目；接受应届生和 0–2 年经验，要求流利英语。", tags: ["大厂", "Keeta", "AI运营"] },
  { id: "xiaohongshu-ops", company: "小红书", title: "马当路练习生 · 视频作者产品运营", priority: "P0", direction: "内容运营", location: "上海 / 北京 / 深圳", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://xiaozhaobao.com.cn/job/1064240", source: "小红书单岗位详情页", summary: "围绕视频作者生态做需求调研、产品方案与项目推进，协调研发、设计和运营完成上线并基于数据复盘迭代；适合有内容社区、用户研究或产品运营经历的候选人。", tags: ["大厂", "社区", "产品运营"] },
  { id: "hisense-brand", company: "海信全球营销中心", title: "海外品牌营销", priority: "P0", direction: "海外市场", location: "青岛 / 海外", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://career.gdut.edu.cn/campus/view/id/1020919", source: "海信 2027 全球营销校招", summary: "面向海外区域进行品牌定位、整合传播与市场推广，专业偏好市场营销、新闻传播和广告；作为海外公司储备梯队，有择优外派机会。", tags: ["出海", "品牌", "外派"] },
  { id: "hisense-product", company: "海信全球营销中心", title: "海外产品营销", priority: "P0", direction: "海外市场", location: "青岛 / 佛山 / 海外", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://career.gdut.edu.cn/campus/view/id/1020919", source: "海信 2027 全球营销校招", summary: "连接产品与海外市场，参与产品卖点提炼、区域需求洞察、上市推广和市场反馈闭环；市场营销或外语背景优先。", tags: ["出海", "产品营销", "GTM"] },
  { id: "hisense-ecom", company: "海信全球营销中心", title: "海外电商运营", priority: "P0", direction: "海外运营", location: "青岛 / 海外", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://career.gdut.edu.cn/campus/view/id/1020919", source: "海信 2027 全球营销校招", summary: "负责海外电商渠道运营与销售增长，适合电子商务、国际贸易和外语背景；岗位属于海外人才储备梯队。", tags: ["出海", "电商", "运营"] },
  { id: "dahua-gtm", company: "大华股份", title: "海外市场产品管培生", priority: "P0", direction: "GTM", location: "杭州 / 海外", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://watchjobs.net/zh/explore/job/c498-06e9539a-c7cd-4e21-b795-598e62167c7b/%E6%B5%B7%E5%A4%96%E8%90%A5%E9%94%80%E4%B8%AD%E5%BF%83-2027%E5%B1%8A%E6%B5%B7%E5%A4%96%E5%B8%82%E5%9C%BA%E4%BA%A7%E5%93%81%E7%AE%A1%E5%9F%B9%E7%94%9F-%E7%90%86%E5%B7%A5%E7%A7%91-J24508-%E5%A4%A7%E5%8D%8E%E8%82%A1%E4%BB%BD", source: "大华招聘岗位聚合页", summary: "参与产品上市推广 GTM、组织 workshop、支持二级客户新产品导入；强调英语、产品理解和海外挑战意愿，理工科背景更有优势。", tags: ["出海", "GTM", "B2B"] },
  { id: "airjelly-gtm", company: "AirJelly", title: "海外 GTM", priority: "P0", direction: "GTM", location: "北京", type: "社招", status: "开放", verified: "2026.09.12", url: "https://bonjour.bio/jobs-mapping/jobs/3ebe631d-4597-4eb2-8ae0-f1330b19d6ce?src=list", source: "AI 公司找工地图", summary: "负责 AI 产品从 0 到 1 出海，亲自跑 Product Hunt、X、Reddit、Discord、Hacker News、YouTube 等渠道。岗位偏 1–2 年经验，若你已有完整海外增长项目可作为冲刺项。", tags: ["AI", "0→1", "海外社区"] },
  { id: "kingdee-mkt", company: "金蝶", title: "客户经理（校招）", priority: "P0", direction: "市场营销", location: "太原", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/c525-d745dd5a1170f264/%E5%AE%A2%E6%88%B7%E7%BB%8F%E7%90%86-%E6%A0%A1%E6%8B%9B-%E9%87%91%E8%9D%B6", source: "金蝶单岗位详情页", summary: "面向 2027 届，负责企业级 SaaS 产品的市场拓展、客户需求挖掘、数字化咨询、方案讲解与客户经营；市场营销等专业对口，适合 B2B 商业化方向。", tags: ["AI", "B2B", "客户经营"] },
  { id: "shein-ops", company: "SHEIN", title: "供应商关系管理专员（广州）", priority: "P0", direction: "海外运营", location: "广州", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://watchjobs.net/zh/explore/job/c275-6241/%E4%BE%9B%E5%BA%94%E5%95%86%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86%E4%B8%93%E5%91%98-%E5%B9%BF%E5%B7%9E-2027%E5%B1%8A-%E5%B8%8C%E9%9F%B3", source: "SHEIN 单岗位详情页", summary: "面向 2027 届，参与供应商分层策略、关系维护、项目协同和数据分析，连接全球电商业务与产业带供给；适合沟通协调强、对跨境电商运营感兴趣的候选人。", tags: ["出海", "电商", "供应商运营"] },
  { id: "lotus-ops", company: "路特创新", title: "海外社媒 / 用户运营方向", priority: "P1", direction: "社群运营", location: "深圳 / 常州", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://job.hust.edu.cn/zpinfo1/2413807.htm", source: "路特创新 2027 校招", summary: "运营类岗位覆盖内容运营、海外社媒、品牌传播、新媒体、电商和用户运营；同时产品类开放用户研究与产品体验方向。", tags: ["社媒", "用户运营", "品牌"] },
  { id: "le-elements-uxr", company: "乐元素", title: "游戏用户研究", priority: "P1", direction: "用户研究", location: "上海", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://www.nowcoder.com/jobs/detail/464461", source: "乐元素 2027 校招", summary: "通过市场分析、定性/定量研究和玩家访谈支持游戏研发与发行，关注全球游戏行业动态；要求至少一门外语可工作使用，需附完整游戏经历。", tags: ["用户研究", "全球市场", "游戏"] },
  { id: "dji-campus", company: "DJI 大疆", title: "数字管理构建者计划", priority: "P1", direction: "商业运营", location: "深圳 / 上海 / 北京", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://careers.dji.com/zh-CN/campus/digital-recruitment", source: "DJI 官方单项目详情页", summary: "进入营销、服务等真实业务场景，梳理流程并用数据、AI 和自动化推动运营决策升级；面向 2027 届及优秀 2026 届，理工科与编程背景优先，投递不占普通校招次数。", tags: ["AI", "商业运营", "数字化"] },
  { id: "galanz-overseas", company: "格兰仕", title: "海外营销类", priority: "P1", direction: "海外市场", location: "佛山", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://myjob.dlmu.edu.cn/campus/view/id/868540", source: "格兰仕 2027 校招", summary: "面向 2027 届的海外营销岗位，专业不限，适合作为制造业品牌出海和海外渠道方向的稳健选择。", tags: ["出海", "制造业", "渠道"] },
  { id: "37games-growth", company: "三七互娱", title: "海外广告优化 / 海外营销策划", priority: "P1", direction: "海外市场", location: "广州 / 全球", type: "实习", status: "开放", verified: "2026.09.12", url: "https://scc.pku.edu.cn/upload/recruitmentinfo/202603/20260318123247fb1c42698798448ab096cc9fa5f1f669.pdf", source: "三七互娱 2027 实习生招聘", summary: "面向 26–27 届，市场推广方向包括海外广告优化和海外广告营销策划；适合积累效果营销、素材策略与游戏出海经验。", tags: ["游戏出海", "投放", "营销"] },
  { id: "baidu-business", company: "百度", title: "北京 · 新媒体运营（J100705）", priority: "P1", direction: "内容运营", location: "北京", type: "2027校招", status: "开放", verified: "2026.09.13", url: "https://xiaozhaobao.com.cn/job/1063910", source: "百度单岗位详情页", summary: "负责微博、微信、抖音、视频号等官方账号运营和内容创作，策划传播方案、分析内容数据并跟踪平台趋势；市场营销或新闻传播背景优先，鼓励用 AIGC 提升生产效率。", tags: ["大厂", "AIGC", "新媒体"] },
  { id: "lotus-uxr", company: "路特创新", title: "用户研究 / 产品体验方向", priority: "P2", direction: "用户研究", location: "深圳 / 常州", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://job.hust.edu.cn/zpinfo1/2413807.htm", source: "路特创新 2027 校招", summary: "产品类岗位覆盖用户研究、产品策划与交互体验，接受心理学、市场营销和人因等背景；适合作为用户研究方向的补充池。", tags: ["用户研究", "体验", "智能硬件"] },
  { id: "galanz-domestic", company: "格兰仕", title: "中国市场营销类（含电商）", priority: "P2", direction: "市场营销", location: "佛山", type: "2027校招", status: "开放", verified: "2026.09.12", url: "https://myjob.dlmu.edu.cn/campus/view/id/868540", source: "格兰仕 2027 校招", summary: "国内市场营销与电商综合岗位，专业不限，适合作为传统消费品牌营销和渠道运营方向的保底选择。", tags: ["市场", "电商", "消费品牌"] }
];

const defaultState = {
  selectedJobIds: [],
  applications: [],
  folders: [
    { id: "folder-resume", name: "简历版本库", category: "简历版本", description: "按岗位方向维护中文、英文和定制版本", color: "#4663f3", items: [] },
    { id: "folder-stories", name: "STAR 故事库", category: "面试准备", description: "沉淀项目经历、挑战、行动与量化结果", color: "#ff6933", items: [] },
    { id: "folder-research", name: "公司研究", category: "公司研究", description: "行业地图、产品体验、竞品与商业模式", color: "#23856d", items: [] }
  ],
  checklist: [
    { id: "c1", text: "完成海外 GTM 简历 v1", done: false },
    { id: "c2", text: "整理 3 个可量化 STAR 案例", done: false },
    { id: "c3", text: "输出 1 份 AI 产品海外 launch 方案", done: false },
    { id: "c4", text: "完成 P0 公司第一轮投递", done: false }
  ]
};

const stages = [
  { id: "preparing", label: "准备中", color: "#f0a83a" },
  { id: "ready", label: "待投递", color: "#6176e8" },
  { id: "applied", label: "已投递", color: "#4663f3" },
  { id: "process", label: "笔面试", color: "#8a5ad9" },
  { id: "offer", label: "Offer", color: "#23856d" }
];

let state = loadState();
let currentView = "jobs";
let activePriority = "all";
let activeFolderId = null;
let draggedApplicationId = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(message = "已保存") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const el = $("#saveState");
  el.lastChild.textContent = ` ${message}`;
  clearTimeout(saveState.timer);
  saveState.timer = setTimeout(() => { el.lastChild.textContent = " 已保存到本机"; }, 1400);
  renderCounts();
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function initials(name) {
  const clean = name.replace(/[（）()·/\s]/g, "");
  return clean.slice(0, 2).toUpperCase();
}

function paletteFor(index) {
  const palettes = [
    ["#eef1ff", "#4663f3"], ["#fff0e9", "#d64e1d"], ["#e8f6f1", "#23856d"],
    ["#fff6da", "#9b6a00"], ["#f5ebff", "#8153b5"], ["#e9f4ff", "#3578af"]
  ];
  return palettes[index % palettes.length];
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900);
}

function renderCounts() {
  $("#navJobCount").textContent = seededJobs.length;
  $("#navBoardCount").textContent = state.applications.length;
  $("#navFolderCount").textContent = state.folders.length;
  $("#p0Metric").textContent = seededJobs.filter(j => j.priority === "P0").length;
  $("#selectedMetric").textContent = state.applications.length;
  $("#todoMetric").textContent = state.applications.filter(a => ["preparing", "ready", "process"].includes(a.stage)).length;
}

function setView(view) {
  currentView = view;
  $$(".nav-item").forEach(btn => {
    const active = btn.dataset.view === view;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-current", active ? "page" : "false");
  });
  $$(".view").forEach(panel => panel.classList.toggle("active", panel.dataset.viewPanel === view));
  const titles = { jobs: "岗位检索", board: "投递看板", prep: "求职准备" };
  $("#viewTitle").textContent = titles[view];
  const action = $("#contextActionBtn");
  action.textContent = view === "prep" ? "＋ 新建文件夹" : "＋ 自行添加岗位";
  if (view === "board") renderBoard();
  if (view === "prep") renderPrep();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function populateFilters() {
  const directions = [...new Set(seededJobs.map(j => j.direction))].sort();
  $("#directionFilter").innerHTML = '<option value="all">全部方向</option>' + directions.map(d => `<option value="${escapeHTML(d)}">${escapeHTML(d)}</option>`).join("");
}

function filteredJobs() {
  const query = $("#jobSearch").value.trim().toLowerCase();
  const direction = $("#directionFilter").value;
  const type = $("#jobTypeFilter").value;
  return seededJobs.filter(job => {
    const haystack = [job.company, job.title, job.direction, job.location, job.summary, ...job.tags].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) && (activePriority === "all" || job.priority === activePriority) && (direction === "all" || job.direction === direction) && (type === "all" || job.type === type);
  });
}

function renderJobs() {
  const jobs = filteredJobs();
  $("#resultCount").textContent = `${jobs.length} 个机会`;
  $("#jobEmpty").classList.toggle("hidden", jobs.length > 0);
  $("#jobList").innerHTML = jobs.map((job, index) => {
    const [bg, ink] = paletteFor(seededJobs.indexOf(job));
    const selected = state.selectedJobIds.includes(job.id);
    return `<article class="job-card" data-job-id="${job.id}">
      <div class="job-company-row">
        <span class="company-avatar" style="--avatar:${bg};--avatar-ink:${ink}">${escapeHTML(initials(job.company))}</span>
        <div class="job-company"><strong>${escapeHTML(job.company)}</strong><small>${escapeHTML(job.location)}</small></div>
      </div>
      <div class="job-role"><strong>${escapeHTML(job.title)}</strong><small>${job.tags.map(tag => escapeHTML(tag)).join(" · ")}</small></div>
      <div class="job-meta"><span class="tag priority ${job.priority}">${job.priority}</span><span class="tag">${escapeHTML(job.type)}</span></div>
      <div class="job-actions">
        <button class="expand-button" type="button" aria-label="查看 JD 摘要">JD 摘要⌄</button>
        <a class="link-button" href="${job.url}" target="_blank" rel="noopener noreferrer" aria-label="打开职位详情" title="打开职位详情">JD</a>
        <label class="select-label"><input class="job-select" type="checkbox" ${selected ? "checked" : ""} /><span>${selected ? "已加入" : "加入看板"}</span></label>
      </div>
      <div class="job-details"><p>${escapeHTML(job.summary)}</p><div class="job-details-meta">${escapeHTML(job.source)}<br>核验 ${job.verified} · ${job.status}</div></div>
    </article>`;
  }).join("");
}

function toggleJobSelection(jobId, checked) {
  const job = seededJobs.find(j => j.id === jobId);
  if (!job) return;
  if (checked) {
    if (!state.selectedJobIds.includes(jobId)) state.selectedJobIds.push(jobId);
    if (!state.applications.some(a => a.jobId === jobId)) {
      state.applications.push({ id: `app-${Date.now()}-${jobId}`, jobId, company: job.company, title: job.title, priority: job.priority, direction: job.direction, url: job.url, stage: "preparing", resume: "", appliedDate: "", nextDate: "", note: "" });
    }
    showToast("已加入投递看板");
  } else {
    state.selectedJobIds = state.selectedJobIds.filter(id => id !== jobId);
    state.applications = state.applications.filter(a => a.jobId !== jobId);
    showToast("已从投递看板移除");
  }
  saveState();
  renderJobs();
}

function getBoardApplications() {
  const priority = $("#boardPriorityFilter").value;
  const resume = $("#boardResumeFilter").value;
  return state.applications.filter(app => (priority === "all" || app.priority === priority) && (resume === "all" || (app.resume || "未指定") === resume));
}

function renderBoardFilters() {
  const resumes = [...new Set(state.applications.map(a => a.resume || "未指定"))].sort();
  const select = $("#boardResumeFilter");
  const previous = select.value;
  select.innerHTML = '<option value="all">全部简历版本</option>' + resumes.map(r => `<option value="${escapeHTML(r)}">${escapeHTML(r)}</option>`).join("");
  if ([...select.options].some(o => o.value === previous)) select.value = previous;
}

function renderBoard() {
  renderBoardFilters();
  const apps = getBoardApplications();
  $("#boardEmpty").classList.toggle("hidden", state.applications.length > 0);
  $("#kanbanBoard").classList.toggle("hidden", state.applications.length === 0);
  $("#kanbanBoard").innerHTML = stages.map(stage => {
    const stageApps = apps.filter(a => a.stage === stage.id);
    return `<section class="kanban-column" data-stage="${stage.id}" style="--stage-color:${stage.color}">
      <header class="column-head"><span class="column-title"><i></i>${stage.label}</span><span class="column-count">${stageApps.length}</span></header>
      <div class="column-cards">${stageApps.map(applicationCardHTML).join("")}</div>
    </section>`;
  }).join("");
  const progressed = state.applications.filter(a => ["applied", "process", "offer"].includes(a.stage)).length;
  const percent = state.applications.length ? Math.round(progressed / state.applications.length * 100) : 0;
  $("#progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressCopy").textContent = state.applications.length ? `${progressed} / ${state.applications.length} 个机会已进入投递流程` : "先从岗位检索里挑出最想投的机会";
}

function applicationCardHTML(app) {
  const next = app.nextDate ? `下一步 ${formatDate(app.nextDate)}` : "还未设置下一步";
  return `<article class="application-card" draggable="true" data-app-id="${app.id}" tabindex="0" role="button" aria-label="编辑 ${escapeHTML(app.company)} ${escapeHTML(app.title)}">
    <div class="application-top"><strong>${escapeHTML(app.company)}</strong><span class="tag priority ${app.priority}">${app.priority}</span></div>
    <h3>${escapeHTML(app.title)}</h3>
    <p>${escapeHTML(app.note || next)}</p>
    <footer class="application-foot"><span class="resume-pill">${escapeHTML(app.resume || "未指定简历")}</span><span>${escapeHTML(app.nextDate ? formatDate(app.nextDate) : "待安排")}</span></footer>
  </article>`;
}

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${month}.${day}`;
}

function openJobModal(application = null) {
  const form = $("#jobForm");
  form.reset();
  $("#jobModalTitle").textContent = application ? "编辑投递" : "自行添加投递";
  $("#deleteApplicationBtn").classList.toggle("hidden", !application);
  if (application) {
    Object.entries(application).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value ?? ""; });
  } else {
    form.elements.id.value = "";
    form.elements.stage.value = "preparing";
  }
  $("#jobModal").showModal();
}

function saveApplicationFromForm() {
  const form = $("#jobForm");
  if (!form.reportValidity()) return false;
  const data = Object.fromEntries(new FormData(form).entries());
  if (data.id) {
    const existing = state.applications.find(a => a.id === data.id);
    if (existing) Object.assign(existing, data);
  } else {
    state.applications.push({ ...data, id: `custom-${Date.now()}`, jobId: null });
  }
  saveState();
  renderBoard();
  showToast(data.id ? "投递记录已更新" : "已添加到投递看板");
  return true;
}

function renderPrep() {
  const palettes = [
    ["#4663f3", "#eef1ff", "#4056bd"], ["#ff6933", "#fff0e9", "#b4451d"], ["#23856d", "#e8f6f1", "#1d705d"], ["#9a63d4", "#f5ebff", "#7543aa"], ["#d39b24", "#fff6da", "#8c640d"]
  ];
  $("#folderSummary").textContent = `${state.folders.length} 个文件夹 · 共 ${state.folders.reduce((sum, f) => sum + (f.items?.length || 0), 0)} 份资料`;
  $("#folderGrid").innerHTML = state.folders.map((folder, index) => {
    const [color, bg, ink] = palettes[index % palettes.length];
    return `<button class="folder-card" data-folder-id="${folder.id}" style="--folder-color:${folder.color || color};--folder-bg:${bg};--folder-ink:${ink}">
      <i class="folder-tab"></i><span class="folder-icon">▰</span><h3>${escapeHTML(folder.name)}</h3><p>${escapeHTML(folder.description || "还没有说明")}</p><small>${folder.items?.length || 0} 份资料 · ${escapeHTML(folder.category)}</small>
    </button>`;
  }).join("");
  $("#focusChecklist").innerHTML = state.checklist.map(item => `<label class="focus-item"><input type="checkbox" data-check-id="${item.id}" ${item.done ? "checked" : ""} /><span>${escapeHTML(item.text)}</span></label>`).join("");
  const done = state.checklist.filter(i => i.done).length;
  $("#focusCount").textContent = `${done}/${state.checklist.length}`;
  $("#focusProgress").style.width = `${state.checklist.length ? done / state.checklist.length * 100 : 0}%`;
}

function createFolderFromForm() {
  const form = $("#folderForm");
  if (!form.reportValidity()) return false;
  const data = Object.fromEntries(new FormData(form).entries());
  state.folders.push({ ...data, id: `folder-${Date.now()}`, color: paletteFor(state.folders.length)[1], items: [] });
  saveState();
  renderPrep();
  showToast("文件夹已创建");
  return true;
}

function openFolderDetail(folderId) {
  const folder = state.folders.find(f => f.id === folderId);
  if (!folder) return;
  activeFolderId = folderId;
  $("#folderDetailTitle").textContent = folder.name;
  $("#folderDetailCategory").textContent = folder.category.toUpperCase();
  $("#folderDetailDescription").textContent = folder.description || "把相关资料都收在这里。";
  renderAssets(folder);
  $("#folderDetailModal").showModal();
}

function renderAssets(folder) {
  const items = folder.items || [];
  $("#assetList").innerHTML = items.length ? items.map(item => {
    const isLink = /^https?:\/\//i.test(item.content);
    return `<div class="asset-item" data-asset-id="${item.id}"><span class="asset-type">${escapeHTML(item.type)}</span><div class="asset-copy"><strong>${escapeHTML(item.title)}</strong>${isLink ? `<a href="${escapeHTML(item.content)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.content)}</a>` : `<small>${escapeHTML(item.content)}</small>`}</div><button class="asset-remove" type="button" aria-label="删除资料">×</button></div>`;
  }).join("") : '<div class="empty-state" style="padding:30px 10px"><p>这里还没有资料，从下方添加第一份吧。</p></div>';
}

function exportData() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), data: state }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `秋招工作台备份-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("备份已导出");
}

async function importData(file) {
  try {
    const parsed = JSON.parse(await file.text());
    const next = parsed.data || parsed;
    if (!Array.isArray(next.applications) || !Array.isArray(next.folders)) throw new Error("格式不正确");
    state = { ...structuredClone(defaultState), ...next };
    saveState();
    renderAll();
    showToast("备份已恢复");
  } catch {
    showToast("导入失败：文件格式不正确");
  }
}

function renderAll() {
  renderCounts();
  renderJobs();
  renderBoard();
  renderPrep();
}

function registerWebMCPTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  window.__jobWorkbenchTools?.abort();
  const lifecycle = new AbortController();
  window.__jobWorkbenchTools = lifecycle;

  const register = tool => {
    try {
      void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
    } catch {}
  };

  register({
    name: "search_jobs",
    title: "检索求职机会",
    description: "按关键词、优先级或岗位方向检索当前工作台中的校招和初级岗位。只读取数据，不改变工作台。",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "公司、岗位或关键词，例如 AI、GTM、用户研究" },
        priority: { type: "string", enum: ["P0", "P1", "P2"] },
        direction: { type: "string", description: "岗位方向，例如 海外市场、GTM、用户研究" }
      },
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute(input = {}) {
      if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("输入必须是对象");
      if (Object.keys(input).some(key => !["query", "priority", "direction"].includes(key))) throw new Error("包含不支持的筛选字段");
      if (input.query !== undefined && typeof input.query !== "string") throw new Error("query 必须是文本");
      if (input.priority !== undefined && !["P0", "P1", "P2"].includes(input.priority)) throw new Error("优先级必须是 P0、P1 或 P2");
      if (input.direction !== undefined && typeof input.direction !== "string") throw new Error("direction 必须是文本");
      const query = typeof input.query === "string" ? input.query.trim().toLowerCase() : "";
      const matches = seededJobs.filter(job => {
        const text = [job.company, job.title, job.direction, job.summary, ...job.tags].join(" ").toLowerCase();
        return (!query || text.includes(query)) && (!input.priority || job.priority === input.priority) && (!input.direction || job.direction === input.direction);
      }).slice(0, 20);
      return { count: matches.length, jobs: matches.map(job => ({ id: job.id, company: job.company, title: job.title, priority: job.priority, direction: job.direction, type: job.type, url: job.url })) };
    }
  });

  register({
    name: "add_job_to_board",
    title: "加入投递看板",
    description: "把岗位检索池中的一个机会加入投递看板，初始进度设为准备中。",
    inputSchema: {
      type: "object",
      properties: { jobId: { type: "string", description: "search_jobs 返回的岗位 id" } },
      required: ["jobId"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input.jobId !== "string") throw new Error("jobId 必填");
      const job = seededJobs.find(item => item.id === input.jobId);
      if (!job) throw new Error("未找到这个岗位");
      if (!state.selectedJobIds.includes(job.id)) toggleJobSelection(job.id, true);
      renderAll();
      return { added: true, applicationId: state.applications.find(app => app.jobId === job.id)?.id, company: job.company, title: job.title, stage: "preparing" };
    }
  });

  register({
    name: "update_application",
    title: "更新投递进度",
    description: "更新投递看板中一条记录的进度，并可同步填写简历版本、下一步日期和备注。",
    inputSchema: {
      type: "object",
      properties: {
        applicationId: { type: "string" },
        stage: { type: "string", enum: ["preparing", "ready", "applied", "process", "offer", "closed"] },
        resume: { type: "string" },
        nextDate: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
        note: { type: "string" }
      },
      required: ["applicationId", "stage"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input.applicationId !== "string") throw new Error("applicationId 必填");
      if (!["preparing", "ready", "applied", "process", "offer", "closed"].includes(input.stage)) throw new Error("进度值不正确");
      const application = state.applications.find(app => app.id === input.applicationId);
      if (!application) throw new Error("未找到这条投递记录");
      application.stage = input.stage;
      if (typeof input.resume === "string") application.resume = input.resume;
      if (typeof input.nextDate === "string") application.nextDate = input.nextDate;
      if (typeof input.note === "string") application.note = input.note;
      saveState("进度已更新");
      renderBoard();
      return { updated: true, applicationId: application.id, stage: application.stage, resume: application.resume || "" };
    }
  });

  register({
    name: "create_prep_folder",
    title: "新建求职准备文件夹",
    description: "在求职准备区新建一个资料文件夹，用于整理简历、面试、公司研究或作品案例。",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", minLength: 1 },
        category: { type: "string", enum: ["公司研究", "简历版本", "面试准备", "作品与案例", "其他"] },
        description: { type: "string" }
      },
      required: ["name"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input.name !== "string" || !input.name.trim()) throw new Error("文件夹名称必填");
      const folder = { id: `folder-${Date.now()}`, name: input.name.trim(), category: input.category || "其他", description: typeof input.description === "string" ? input.description : "", color: paletteFor(state.folders.length)[1], items: [] };
      state.folders.push(folder);
      saveState();
      renderPrep();
      return { created: true, folderId: folder.id, name: folder.name, category: folder.category };
    }
  });
}

document.addEventListener("click", event => {
  const nav = event.target.closest(".nav-item");
  if (nav) setView(nav.dataset.view);

  const go = event.target.closest("[data-go]");
  if (go) setView(go.dataset.go);

  const expand = event.target.closest(".expand-button");
  if (expand) {
    const card = expand.closest(".job-card");
    card.classList.toggle("expanded");
    expand.textContent = card.classList.contains("expanded") ? "收起⌃" : "JD 摘要⌄";
  }

  const priorityBtn = event.target.closest("#priorityFilter button");
  if (priorityBtn) {
    activePriority = priorityBtn.dataset.filter;
    $$("#priorityFilter button").forEach(btn => btn.classList.toggle("active", btn === priorityBtn));
    renderJobs();
  }

  const appCard = event.target.closest(".application-card");
  if (appCard) {
    const app = state.applications.find(a => a.id === appCard.dataset.appId);
    if (app) openJobModal(app);
  }

  const folderCard = event.target.closest(".folder-card");
  if (folderCard) openFolderDetail(folderCard.dataset.folderId);
});

document.addEventListener("change", event => {
  if (event.target.matches(".job-select")) {
    toggleJobSelection(event.target.closest(".job-card").dataset.jobId, event.target.checked);
  }
  if (event.target.matches("#directionFilter, #jobTypeFilter")) renderJobs();
  if (event.target.matches("#boardPriorityFilter, #boardResumeFilter")) renderBoard();
  if (event.target.matches(".focus-item input")) {
    const item = state.checklist.find(i => i.id === event.target.dataset.checkId);
    if (item) item.done = event.target.checked;
    saveState();
    renderPrep();
  }
});

$("#jobSearch").addEventListener("input", renderJobs);

$("#contextActionBtn").addEventListener("click", () => currentView === "prep" ? $("#folderModal").showModal() : openJobModal());
$("#newFolderBtn").addEventListener("click", () => $("#folderModal").showModal());

$("#saveJobBtn").addEventListener("click", event => {
  event.preventDefault();
  if (saveApplicationFromForm()) $("#jobModal").close();
});

$("#deleteApplicationBtn").addEventListener("click", () => {
  const id = $("#jobForm").elements.id.value;
  const app = state.applications.find(a => a.id === id);
  if (!app || !confirm(`删除 ${app.company} 的这条投递记录？`)) return;
  state.applications = state.applications.filter(a => a.id !== id);
  if (app.jobId) state.selectedJobIds = state.selectedJobIds.filter(jobId => jobId !== app.jobId);
  saveState();
  $("#jobModal").close();
  renderAll();
  showToast("投递记录已删除");
});

$("#folderForm").addEventListener("submit", event => {
  event.preventDefault();
  if (createFolderFromForm()) { $("#folderModal").close(); event.target.reset(); }
});

$("#closeFolderDetail").addEventListener("click", () => $("#folderDetailModal").close());
$("#doneFolderDetail").addEventListener("click", () => $("#folderDetailModal").close());

$("#assetForm").addEventListener("submit", event => {
  event.preventDefault();
  const folder = state.folders.find(f => f.id === activeFolderId);
  if (!folder || !event.target.reportValidity()) return;
  const data = Object.fromEntries(new FormData(event.target).entries());
  folder.items ||= [];
  folder.items.push({ ...data, id: `asset-${Date.now()}` });
  event.target.reset();
  saveState();
  renderAssets(folder);
  renderPrep();
  showToast("资料已添加");
});

$("#assetList").addEventListener("click", event => {
  const remove = event.target.closest(".asset-remove");
  if (!remove) return;
  const folder = state.folders.find(f => f.id === activeFolderId);
  const item = remove.closest(".asset-item");
  if (folder && item) folder.items = folder.items.filter(i => i.id !== item.dataset.assetId);
  saveState();
  renderAssets(folder);
  renderPrep();
});

$("#deleteFolderBtn").addEventListener("click", () => {
  const folder = state.folders.find(f => f.id === activeFolderId);
  if (!folder || !confirm(`删除文件夹“${folder.name}”以及其中的资料？`)) return;
  state.folders = state.folders.filter(f => f.id !== activeFolderId);
  saveState();
  $("#folderDetailModal").close();
  renderPrep();
  showToast("文件夹已删除");
});

$("#resetChecklistBtn").addEventListener("click", () => {
  state.checklist.forEach(item => item.done = false);
  saveState();
  renderPrep();
});

$("#exportDataBtn").addEventListener("click", exportData);
$("#importDataInput").addEventListener("change", event => { const [file] = event.target.files; if (file) importData(file); event.target.value = ""; });

$("#kanbanBoard").addEventListener("dragstart", event => {
  const card = event.target.closest(".application-card");
  if (!card) return;
  draggedApplicationId = card.dataset.appId;
  event.dataTransfer.effectAllowed = "move";
});

$("#kanbanBoard").addEventListener("dragover", event => {
  const column = event.target.closest(".kanban-column");
  if (!column) return;
  event.preventDefault();
  $$(".kanban-column").forEach(c => c.classList.toggle("drag-over", c === column));
});

$("#kanbanBoard").addEventListener("dragleave", event => {
  const column = event.target.closest(".kanban-column");
  if (column && !column.contains(event.relatedTarget)) column.classList.remove("drag-over");
});

$("#kanbanBoard").addEventListener("drop", event => {
  const column = event.target.closest(".kanban-column");
  if (!column || !draggedApplicationId) return;
  event.preventDefault();
  const app = state.applications.find(a => a.id === draggedApplicationId);
  if (app) app.stage = column.dataset.stage;
  draggedApplicationId = null;
  saveState("进度已更新");
  renderBoard();
  showToast("投递进度已更新");
});

$("#kanbanBoard").addEventListener("dragend", () => {
  draggedApplicationId = null;
  $$(".kanban-column").forEach(c => c.classList.remove("drag-over"));
});

$("#todayLabel").textContent = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()).replaceAll("/", ".");
populateFilters();
renderAll();
registerWebMCPTools();
