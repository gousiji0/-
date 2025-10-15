const defaultProjects = [
  {
    id: 'plan-01',
    name: '城市更新总体策划',
    type: '规划设计',
    status: '执行中',
    progress: 0.68,
    client: '星河置业集团',
    manager: '李然',
    team: ['规划一所', '交通专项组', '景观策略组'],
    location: '深圳·前海',
    start: '2024-03-01',
    deadline: '2024-08-15',
    summary:
      '围绕前海核心片区开展城市更新策略与概念空间结构梳理，联动TOD节点和公共空间体系，支撑集团整体投资节奏。',
    tags: ['TOD', '公共空间', '多方协同'],
    health: '良好',
    monthlyProgress: [
      { month: '2024年03月', completion: 55, deliveries: 2, risks: 1 },
      { month: '2024年04月', completion: 68, deliveries: 3, risks: 1 },
      { month: '2024年05月', completion: 78, deliveries: 4, risks: 1 }
    ],
    timeline: [
      {
        id: 'plan-01-kickoff',
        date: '2024-03-05',
        title: '启动会&需求确认',
        description: '与甲方梳理总体定位与交付节奏，明确关键决策节点。',
        clientRequest: '4月提交现状问题梳理与策略方向，纳入各部门意见。',
        owner: '李然',
        status: '完成',
        type: 'milestone',
        importance: '高',
        notes: '同步甲方新引进的区域商业团队信息。'
      },
      {
        id: 'plan-01-research',
        date: '2024-04-12',
        title: '现状调研成果评审',
        description: '完成地块现状调查、指标盘点及交通现状分析，与甲方评审。',
        clientRequest: '补充沿江公共活动动线分析，形成可视化成果。',
        owner: '赵冰',
        status: '进行中',
        type: 'regular',
        importance: '中',
        notes: '需协调景观策略组补齐资料，4月20日前完成。'
      },
      {
        id: 'plan-01-risk',
        date: '2024-05-03',
        title: '规划条件风险提示',
        description: '新区城市设计导则即将更新，可能影响地块容积率。',
        clientRequest: '若导则调整，需同步提出应对策略及示范区优化方案。',
        owner: '黄谨',
        status: '预警',
        type: 'risk',
        importance: '高',
        notes: '已联系规自局获取最新导则草案，预计5月中旬发布。'
      },
      {
        id: 'plan-01-milestone',
        date: '2024-05-18',
        title: '概念成果提交',
        description: '输出整体概念结构、公共空间系统与关键节点形象。',
        clientRequest: '突出湾区门户形象，形成甲方可内部宣讲的材料包。',
        owner: '李然',
        status: '待提交',
        type: 'milestone',
        importance: '高',
        notes: '材料需包含动画快闪版，配合甲方高层路演。'
      }
    ],
    tasks: [
      {
        id: 'plan-task-01',
        title: '补充交通节点3D演示',
        due: '2024-05-20',
        priority: '高',
        owner: '交通专项组',
        status: '进行中'
      },
      {
        id: 'plan-task-02',
        title: '完成导则变更应对说明',
        due: '2024-05-24',
        priority: '高',
        owner: '黄谨',
        status: '进行中'
      },
      {
        id: 'plan-task-03',
        title: '准备概念成果汇报彩排',
        due: '2024-05-22',
        priority: '中',
        owner: '李然',
        status: '待启动'
      }
    ]
  },
  {
    id: 'scheme-01',
    name: '创新产业园建筑方案',
    type: '建筑方案',
    status: '预警',
    progress: 0.52,
    client: '嘉禾科创',
    manager: '周潇',
    team: ['建筑二所', '结构顾问', '商业运营方'],
    location: '广州·科学城',
    start: '2024-02-20',
    deadline: '2024-07-30',
    summary:
      '面向新一代科技制造企业的开放式产业社区，重点打造共享中庭与复合办公空间，要求兼顾快速施工与品牌形象。',
    tags: ['智能制造', '模块化', '绿色建筑'],
    health: '受控',
    monthlyProgress: [
      { month: '2024年03月', completion: 45, deliveries: 1, risks: 2 },
      { month: '2024年04月', completion: 52, deliveries: 2, risks: 2 },
      { month: '2024年05月', completion: 60, deliveries: 3, risks: 1 }
    ],
    timeline: [
      {
        id: 'scheme-01-concept',
        date: '2024-03-02',
        title: '概念方案确认',
        description: '与甲方确认总体设计方向，确定共享中庭概念。',
        clientRequest: '突出环形连廊，确保模块化施工可行。',
        owner: '周潇',
        status: '完成',
        type: 'milestone',
        importance: '高',
        notes: '保留双层展示空间，兼容未来展厅。'
      },
      {
        id: 'scheme-01-structure',
        date: '2024-04-10',
        title: '结构深化协调',
        description: '与结构顾问讨论大跨空间的结构体系，形成成本评估。',
        clientRequest: '控制钢结构成本，提供两套备选方案。',
        owner: '梁珊',
        status: '延期',
        type: 'risk',
        importance: '高',
        notes: '需补充节点做法与安装节奏说明。'
      },
      {
        id: 'scheme-01-sunshine',
        date: '2024-04-26',
        title: '日照及消防专审反馈',
        description: '收到专审反馈，需要调整塔楼高度与裙房疏散距离。',
        clientRequest: '5月中旬给出调整方案并模拟新的日照结果。',
        owner: '苏杭',
        status: '处理中',
        type: 'regular',
        importance: '高',
        notes: '需提前锁定消防审批窗口，避免影响报建。'
      },
      {
        id: 'scheme-01-workshop',
        date: '2024-05-15',
        title: '方案深化协同工作坊',
        description: '组织甲方运营、施工、机电顾问进行跨专业工作坊。',
        clientRequest: '重点回应运营动线与机电竖井整合问题。',
        owner: '周潇',
        status: '计划中',
        type: 'milestone',
        importance: '中',
        notes: '需要准备VR漫游稿与机电整合草图。'
      }
    ],
    tasks: [
      {
        id: 'scheme-task-01',
        title: '塔楼高度调整模型',
        due: '2024-05-19',
        priority: '高',
        owner: '建筑团队B组',
        status: '进行中'
      },
      {
        id: 'scheme-task-02',
        title: '消防顾问复核会议',
        due: '2024-05-18',
        priority: '高',
        owner: '苏杭',
        status: '待启动'
      },
      {
        id: 'scheme-task-03',
        title: '运营动线场景沙盘',
        due: '2024-05-25',
        priority: '中',
        owner: '商业运营方',
        status: '进行中'
      }
    ]
  },
  {
    id: 'cd-01',
    name: '滨江展示区施工图',
    type: '施工图',
    status: '执行中',
    progress: 0.81,
    client: '盛景文旅',
    manager: '陈曦',
    team: ['施工图中心', '机电顾问', '幕墙顾问'],
    location: '杭州·滨江',
    start: '2024-01-15',
    deadline: '2024-06-20',
    summary:
      '展示区需在6月开放，施工图阶段同步深化幕墙与灯光细节，确保施工落地与体验品质兼备。',
    tags: ['快速交付', '灯光秀', '文化展示'],
    health: '稳定',
    monthlyProgress: [
      { month: '2024年03月', completion: 72, deliveries: 4, risks: 1 },
      { month: '2024年04月', completion: 81, deliveries: 5, risks: 0 },
      { month: '2024年05月', completion: 88, deliveries: 6, risks: 0 }
    ],
    timeline: [
      {
        id: 'cd-01-delivery',
        date: '2024-03-28',
        title: '立面深化成果提交',
        description: '完成立面节点大样及幕墙系统深化，提交甲方确认。',
        clientRequest: '补充夜景灯光控制逻辑，确保演艺需求。',
        owner: '陈曦',
        status: '完成',
        type: 'milestone',
        importance: '高',
        notes: '同步幕墙顾问，确认光源与能耗。'
      },
      {
        id: 'cd-01-mep',
        date: '2024-04-18',
        title: '机电综合协调',
        description: '与机电顾问完成综合管线排布协调，并出图指引。',
        clientRequest: '确保展陈区域层高净空，避免灯光设备受限。',
        owner: '刘尧',
        status: '完成',
        type: 'regular',
        importance: '中',
        notes: '针对水景泵房需额外降噪措施。'
      },
      {
        id: 'cd-01-sample',
        date: '2024-05-08',
        title: '样板段复核',
        description: '现场复核幕墙样板段，确认金属格栅安装方式。',
        clientRequest: '10日前提交复核报告及问题整改清单。',
        owner: '陈曦',
        status: '进行中',
        type: 'regular',
        importance: '高',
        notes: '重点关注灯光线路隐藏方式，需现场照片。'
      },
      {
        id: 'cd-01-check',
        date: '2024-05-28',
        title: '全套施工图出图',
        description: '完成全专业出图，提交审图机构。',
        clientRequest: '必须同步提交材料选型表及灯光控制策略。',
        owner: '陈曦',
        status: '计划中',
        type: 'milestone',
        importance: '高',
        notes: '提前锁定印刷档期，准备出图清单。'
      }
    ],
    tasks: [
      {
        id: 'cd-task-01',
        title: '样板段问题整改清单',
        due: '2024-05-11',
        priority: '高',
        owner: '施工图中心',
        status: '进行中'
      },
      {
        id: 'cd-task-02',
        title: '灯光控制系统说明书',
        due: '2024-05-16',
        priority: '中',
        owner: '灯光顾问',
        status: '待启动'
      },
      {
        id: 'cd-task-03',
        title: '出图资料整理',
        due: '2024-05-25',
        priority: '中',
        owner: '资料管理组',
        status: '进行中'
      }
    ]
  }
];

const defaultWorkLogs = [
  {
    id: 'log-plan-traffic',
    projectId: 'plan-01',
    time: '2024-04-29T14:30',
    event: '交通节点协调会',
    contact: '甲方开发部-杨静',
    task: '确认3D演示重点',
    done: '进行中',
    submission: '输出会议纪要及补充交通流线草图',
    channel: '腾讯会议',
    attachments: [
      {
        name: '交通演示示意.svg',
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTUwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwZTVmZiIgc3RvcC1vcGFjaXR5PSIwLjgiIC8+CiAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNWZmIiBzdG9wLW9wYWNpdHk9IjAuMiIgLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxNTAiIGhlaWdodD0iODAiIGZpbGw9InVybCgjZykiIHJ4PSIyMCIgcnk9IjIwIiBvcGFjaXR5PSIwLjciIC8+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CiAgPHBhdGggZD0iTTcwIDU1IEM4NSA0NSA5MCAzNSAxMTAgMzUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2UtZGFzaGFycmF5PSI1IDYiLz4KPC9zdmc+'
      }
    ]
  },
  {
    id: 'log-scheme-fire',
    projectId: 'scheme-01',
    time: '2024-05-02T11:00',
    event: '消防反馈对接',
    contact: '甲方工程部-林工',
    task: '梳理专审问题',
    done: '待反馈',
    submission: '整理反馈清单并标注重点整改要求',
    channel: '企业微信',
    attachments: []
  },
  {
    id: 'log-cd-review',
    projectId: 'cd-01',
    time: '2024-05-06T09:20',
    event: '样板段现场复核',
    contact: '甲方展示部-吴越',
    task: '记录幕墙安装情况',
    done: '已完成',
    submission: '提交现场复核照片与问题汇总',
    channel: '现场实地+共享盘',
    attachments: [
      {
        name: '现场复核.jpg',
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTUwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIG9wYWNpdHk9IjAuNSI+CiAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzMCIgZmlsbD0iI2ZmNiIgLz4KICAgIDxjaXJjbGUgY3g9IjExMCIgY3k9IjQwIiByPSIzMCIgZmlsbD0iI2ZmNyIgLz4KICA8L2c+CiAgPHBhdGggZD0iTTY1IDQ1IEw4NSA1NSBMOTUgNDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC42Ii8+CiAgPHJlY3QgeD0iMjAiIHk9IjY1IiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDBlNWZmIiBvcGFjaXR5PSIwLjYiIHJ4PSI1Ii8+Cjwvc3ZnPg=='
      }
    ]
  }
];

const STORAGE_KEYS = {
  projects: 'atlas-design-projects',
  logs: 'atlas-design-worklogs'
};

const rawProjectState = loadState(STORAGE_KEYS.projects, defaultProjects);
const rawLogState = loadState(STORAGE_KEYS.logs, defaultWorkLogs);

let projects = rehydrateProjects(rawProjectState, defaultProjects);
let workLogs = ensureLogIdentifiers(rehydrateLogs(rawLogState));

let currentTypeFilter = 'all';
let currentProjectId = null;
let currentTimelineFilter = 'all';
let calendarCursor = new Date();

const timelineRegistry = new Map();
let persistTimer = null;

const overviewGrid = document.getElementById('overviewGrid');
const typeOverviewContainer = document.getElementById('typeOverview');
const monthlyProgressContainer = document.getElementById('monthlyProgress');
const currentMonthLabel = document.getElementById('currentMonth');
const calendarMonthLabel = document.getElementById('calendarLabel');
const calendarWeekdayContainer = document.getElementById('calendarWeekdays');
const calendarDaysContainer = document.getElementById('calendarDays');
const calendarPrevBtn = document.getElementById('calendarPrev');
const calendarNextBtn = document.getElementById('calendarNext');
const calendarPanel = document.getElementById('calendarPanel');
const calendarPopover = document.getElementById('calendarPopover');
const reminderList = document.getElementById('reminderList');
const urgentCount = document.getElementById('urgentCount');
const projectGrid = document.getElementById('projectGrid');
const exportButton = document.getElementById('exportButton');
const projectStatus = document.getElementById('projectStatus');
const projectSummaryBody = document.getElementById('projectSummaryBody');
const projectTags = document.getElementById('projectTags');
const boardOverviewContainer = document.getElementById('boardOverview');
const pushAlertContainer = document.getElementById('pushAlertList');
const timelineContainer = document.getElementById('timeline');
const eventBody = document.getElementById('eventBody');
const eventType = document.getElementById('eventType');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const typeFilterSelect = document.getElementById('typeFilter');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const logProjectSelect = document.getElementById('logProject');
const logForm = document.getElementById('logForm');
const toggleLogFormBtn = document.getElementById('toggleLogForm');
const cancelLogBtn = document.getElementById('cancelLog');
const logTable = document.getElementById('logTable');
const logTimeInput = document.getElementById('logTime');
const addProjectButton = document.getElementById('addProjectButton');
const projectFormPanel = document.getElementById('projectFormPanel');
const projectForm = document.getElementById('projectForm');
const projectFormTitle = document.getElementById('projectFormTitle');
const closeProjectFormBtn = document.getElementById('closeProjectForm');
const projectNameInput = document.getElementById('projectNameInput');
const projectTypeInput = document.getElementById('projectTypeInput');
const projectStatusInput = document.getElementById('projectStatusInput');
const projectManagerInput = document.getElementById('projectManagerInput');
const projectClientInput = document.getElementById('projectClientInput');
const projectLocationInput = document.getElementById('projectLocationInput');
const projectStartInput = document.getElementById('projectStartInput');
const projectDeadlineInput = document.getElementById('projectDeadlineInput');
const projectProgressInput = document.getElementById('projectProgressInput');
const projectTeamInput = document.getElementById('projectTeamInput');
const projectTagsInput = document.getElementById('projectTagsInput');
const projectSummaryInput = document.getElementById('projectSummaryInput');
const projectTypeControl = document.getElementById('projectTypeControl');
const projectStatusControl = document.getElementById('projectStatusControl');
const deleteProjectButton = document.getElementById('deleteProjectButton');

function init() {
  renderOverview();
  renderMonthlyProgress();
  renderProjects();
  populateLogProjectOptions();
  renderLogTable();
  renderReminders();
  renderCalendar();
  setupListeners();
  setupAutoSave();
  currentMonthLabel.textContent = new Date().toLocaleDateString('zh-CN', {
    month: 'long',
    year: 'numeric'
  });
  const now = new Date();
  logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
  const firstProject = getFilteredProjects()[0];
  if (firstProject) {
    selectProject(firstProject.id);
  }
  requestPersist(true);
}

function renderOverview() {
  const total = projects.length;
  const executing = projects.filter((p) => p.status === '执行中').length;
  const warning = projects.filter((p) => p.status === '预警').length;
  const averageProgress =
    total === 0
      ? 0
      : Math.round(
          (projects.reduce((sum, p) => sum + p.progress, 0) / total) * 100
        );
  const typeStats = projects.reduce((acc, project) => {
    acc[project.type] = (acc[project.type] || 0) + 1;
    return acc;
  }, {});
  overviewGrid.innerHTML = '';
  const cards = [
    { label: '在研项目', value: total, sub: `${executing} 个执行中` },
    { label: '平均完成度', value: `${averageProgress}%`, sub: `${warning} 个预警项目` },
    {
      label: '跨阶段协同',
      value: `${typeStats['规划设计'] || 0} / ${typeStats['建筑方案'] || 0} / ${
        typeStats['施工图'] || 0
      }`,
      sub: '规划-方案-施工全链路联动'
    }
  ];
  cards.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'overview-card';
    div.innerHTML = `
      <div>
        <p>${card.label}</p>
        <strong>${card.value}</strong>
      </div>
      <span>${card.sub}</span>
    `;
    overviewGrid.appendChild(div);
  });

  if (typeOverviewContainer) {
    typeOverviewContainer.innerHTML = '';
    const typeOrder = [
      { key: '规划设计', label: '规划设计' },
      { key: '建筑方案', label: '建筑方案' },
      { key: '施工图', label: '施工图' }
    ];
    const counterRow = document.createElement('div');
    counterRow.className = 'type-counter-row';
    const now = new Date();
    const allButton = document.createElement('button');
    allButton.type = 'button';
    allButton.className = 'type-counter';
    allButton.dataset.type = 'all';
    if (currentTypeFilter === 'all') {
      allButton.classList.add('active');
    }
    allButton.setAttribute('aria-pressed', currentTypeFilter === 'all');
    allButton.innerHTML = `
      <span class="label">全部</span>
      <strong>${projects.length}</strong>
      <span class="meta">全局总览</span>
    `;
    allButton.addEventListener('click', () => applyTypeFilter('all'));
    counterRow.appendChild(allButton);
    typeOrder.forEach((entry) => {
      const typedProjects = projects.filter((project) => project.type === entry.key);
      const count = typedProjects.length;
      const avgProgress =
        count === 0
          ? 0
          : Math.round(
              (typedProjects.reduce((sum, project) => sum + project.progress, 0) /
                count) *
                100
            );
      const warnings = typedProjects.filter((project) => project.status === '预警').length;
      const handovers =
        entry.key === '施工图'
          ? typedProjects.filter((project) => project.progress >= 0.85).length
          : typedProjects.filter((project) => project.progress >= 0.6).length;
      const urgentTasks = typedProjects.reduce((sum, project) => {
        return (
          sum +
          project.tasks.filter((task) => {
            if (task.status === '完成') return false;
            const due = new Date(task.due);
            if (Number.isNaN(due.getTime())) return false;
            const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
            return diffDays <= 3;
          }).length
        );
      }, 0);

      const counterButton = document.createElement('button');
      counterButton.type = 'button';
      counterButton.className = 'type-counter';
      counterButton.dataset.type = entry.key;
      if (currentTypeFilter === entry.key) {
        counterButton.classList.add('active');
      }
      counterButton.setAttribute('aria-pressed', currentTypeFilter === entry.key);
      counterButton.innerHTML = `
        <span class="label">${entry.label}</span>
        <strong>${count}</strong>
        <span class="meta">平均 ${avgProgress}%</span>
      `;
      counterButton.addEventListener('click', () => applyTypeFilter(entry.key));
      counterRow.appendChild(counterButton);

      const card = document.createElement('div');
      card.className = 'type-card';
      card.dataset.type = entry.key;
      if (!count) {
        card.classList.add('empty');
      }
      if (currentTypeFilter === entry.key) {
        card.classList.add('active');
      }
      card.tabIndex = 0;
      card.innerHTML = `
        <header>
          <span>${entry.label}</span>
          <strong>${count}</strong>
        </header>
        <div class="type-progress"><span style="width: ${avgProgress}%"></span></div>
        <footer>
          <span>${avgProgress}% 平均进度</span>
          <span class="warning">预警 ${warnings}</span>
          <span class="handover">${
            handovers ? `${handoverLabel(entry.key)} ${handovers}` : '关注阶段衔接'
          }</span>
          <span class="urgent-count${urgentTasks ? ' active' : ''}">${
            urgentTasks ? `紧迫任务 ${urgentTasks}` : '暂无紧急任务'
          }</span>
        </footer>
      `;
      card.addEventListener('click', () => {
        applyTypeFilter(entry.key);
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          card.click();
        }
      });
      typeOverviewContainer.appendChild(card);
    });
    typeOverviewContainer.prepend(counterRow);
  }
}

function handoverLabel(type) {
  if (type === '施工图') return '交付冲刺';
  if (type === '建筑方案') return '待移交施工';
  return '待移交方案';
}

function applyTypeFilter(type) {
  currentTypeFilter = type;
  if (typeFilterSelect) {
    typeFilterSelect.value = type;
  }
  renderProjects();
  renderReminders();
  renderOverview();
  const filtered = getFilteredProjects();
  if (filtered.length) {
    const fallback = filtered[0].id;
    const existing = filtered.find((project) => project.id === currentProjectId);
    selectProject(existing ? existing.id : fallback);
  } else {
    currentProjectId = null;
    exportButton.disabled = true;
    projectSummaryBody.innerHTML = '<p class="empty">请选择项目。</p>';
    projectTags.innerHTML = '';
    projectStatus.textContent = '';
    delete projectStatus.dataset.status;
    timelineContainer.innerHTML = '';
    resetEventDetail();
    taskList.innerHTML = '';
    taskCount.textContent = '0 项';
    renderLogTable();
  }
}

function renderMonthlyProgress() {
  monthlyProgressContainer.innerHTML = '';
  const aggregated = aggregateMonthlySnapshots();
  aggregated.forEach((snap) => {
    const card = document.createElement('div');
    card.className = 'month-card';
    card.innerHTML = `
      <h4>${snap.month}</h4>
      <div class="month-bar"><span style="width: ${snap.completion}%"></span></div>
      <div class="month-meta">
        <p>交付节点：<strong>${snap.deliveries}</strong></p>
        <p>风险关注：<strong>${snap.risks}</strong></p>
      </div>
    `;
    monthlyProgressContainer.appendChild(card);
  });
}

function aggregateMonthlySnapshots() {
  const map = new Map();
  projects.forEach((project) => {
    project.monthlyProgress.forEach((item) => {
      if (!map.has(item.month)) {
        map.set(item.month, { ...item });
      } else {
        const curr = map.get(item.month);
        curr.completion = Math.min(100, Math.round((curr.completion + item.completion) / 2));
        curr.deliveries += item.deliveries;
        curr.risks += item.risks;
      }
    });
  });
  return Array.from(map.values()).sort((a, b) => a.month.localeCompare(b.month));
}

function renderCalendar() {
  if (!calendarDaysContainer || !calendarMonthLabel) return;
  hideCalendarPopover();

  if (calendarWeekdayContainer) {
    const weekdays = ['一', '二', '三', '四', '五', '六', '日'];
    calendarWeekdayContainer.innerHTML = '';
    weekdays.forEach((weekday) => {
      const cell = document.createElement('div');
      cell.className = 'calendar-weekday';
      cell.textContent = weekday;
      calendarWeekdayContainer.appendChild(cell);
    });
  }

  const baseDate = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  calendarMonthLabel.textContent = `${year}年${String(month + 1).padStart(2, '0')}月`;

  calendarDaysContainer.innerHTML = '';
  const offset = (baseDate.getDay() + 6) % 7;
  for (let i = 0; i < offset; i += 1) {
    const placeholder = document.createElement('div');
    placeholder.className = 'calendar-day placeholder';
    calendarDaysContainer.appendChild(placeholder);
  }

  const eventsMap = buildCalendarEventMap();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = startOfDay(new Date());

  for (let day = 1; day <= daysInMonth; day += 1) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const events = eventsMap.get(key) || [];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'calendar-day';
    button.innerHTML = `<span class="date-number">${day}</span>`;
    const ariaLabelParts = [`${year}年${String(month + 1).padStart(2, '0')}月${String(day).padStart(2, '0')}日`];
    if (events.length) {
      ariaLabelParts.push(`${events.length} 个事项`);
    }
    button.setAttribute('aria-label', ariaLabelParts.join('，'));

    const currentDate = new Date(year, month, day);
    if (startOfDay(currentDate).getTime() === today.getTime()) {
      button.classList.add('today');
    }

    if (events.length) {
      button.classList.add('has-event');
      button.disabled = false;
      const tooltipText = events.map(describeCalendarEvent).join('\n');
      button.dataset.tooltip = tooltipText;
      const badges = document.createElement('div');
      badges.className = 'event-badges';
      const typeSet = new Set(events.map((event) => event.source));
      typeSet.forEach((type) => {
        const dot = document.createElement('span');
        dot.className = `event-dot ${type}`;
        badges.appendChild(dot);
      });
      button.appendChild(badges);

      const severity = events.reduce(
        (acc, event) => {
          if (event.severity === 'overdue') acc.overdue = true;
          if (event.severity === 'urgent') acc.urgent = true;
          if (event.severity === 'soon') acc.soon = true;
          return acc;
        },
        { overdue: false, urgent: false, soon: false }
      );
      const severityLevel = severity.overdue
        ? 'overdue'
        : severity.urgent
        ? 'urgent'
        : severity.soon
        ? 'soon'
        : 'normal';
      button.dataset.severity = severityLevel;
      if (severity.overdue) {
        button.classList.add('is-overdue', 'pulse');
        button.style.setProperty('--pulse-color', 'rgba(255, 107, 107, 0.42)');
      } else if (severity.urgent) {
        button.classList.add('is-urgent', 'pulse');
        button.style.setProperty('--pulse-color', 'rgba(255, 183, 77, 0.36)');
      } else if (severity.soon) {
        button.classList.add('is-soon');
        button.style.setProperty('--pulse-color', 'rgba(77, 208, 225, 0.35)');
      } else {
        button.style.removeProperty('--pulse-color');
      }

      button.addEventListener('click', (event) => {
        event.stopPropagation();
        showCalendarPopover(events, button);
      });
    } else {
      button.disabled = true;
    }

    calendarDaysContainer.appendChild(button);
  }
}

function buildCalendarEventMap() {
  const map = new Map();
  const today = startOfDay(new Date());

  const pushEvent = (event) => {
    if (!event.dateKey) return;
    if (!map.has(event.dateKey)) {
      map.set(event.dateKey, []);
    }
    const bucket = map.get(event.dateKey);
    const eventDate = startOfDay(event.datetime ? new Date(event.datetime) : new Date(event.dateKey));
    const diffDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    let severity = 'normal';
    if (diffDays < 0) severity = 'overdue';
    else if (diffDays <= 3) severity = 'urgent';
    else if (diffDays <= 7) severity = 'soon';
    event.severity = severity;
    bucket.push(event);
  };

  projects.forEach((project) => {
    const baseInfo = { projectId: project.id, projectName: project.name, projectType: project.type };
    (project.timeline || []).forEach((item) => {
      const dateKey = normalizeDateKey(item.date);
      if (!dateKey) return;
      pushEvent({
        ...baseInfo,
        id: item.id,
        title: item.title,
        detail: item.description,
        source: 'timeline',
        type: item.type,
        status: item.status,
        dateKey,
        datetime: item.date
      });
    });

    (project.tasks || []).forEach((task) => {
      if (!task.due || task.status === '完成') return;
      const dateKey = normalizeDateKey(task.due);
      if (!dateKey) return;
      pushEvent({
        ...baseInfo,
        id: `task-${task.id || task.title}`,
        title: task.title,
        detail: `责任人：${task.owner}`,
        source: 'task',
        type: 'task',
        status: task.status,
        priority: task.priority,
        dateKey,
        datetime: task.due,
        taskRef: task
      });
    });
  });

  workLogs.forEach((log) => {
    const project = projects.find((item) => item.id === log.projectId);
    if (!project) return;
    const dateKey = normalizeDateKey(log.time);
    if (!dateKey) return;
    pushEvent({
      projectId: project.id,
      projectName: project.name,
      projectType: project.type,
      id: `log-${log.id}`,
      title: log.event,
      detail: log.task,
      source: 'log',
      type: 'log',
      status: log.done,
      dateKey,
      datetime: log.time,
      logRef: log
    });
  });

  map.forEach((events) => {
    events.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  });

  return map;
}

function describeCalendarEvent(event) {
  const typeLabel =
    event.source === 'timeline'
      ? event.type === 'milestone'
        ? '里程碑'
        : event.type === 'risk'
        ? '风险'
        : '节点'
      : event.source === 'task'
      ? '任务'
      : '记录';
  const statusLabel = event.status ? ` · ${event.status}` : '';
  return `【${event.projectName}】${event.projectType} · ${typeLabel} · ${event.title}${statusLabel}`;
}

function buildTimelineEntries(project) {
  const entries = [];
  const baseInfo = { projectId: project.id, projectName: project.name };

  (project.timeline || []).forEach((event) => {
    entries.push({
      ...event,
      ...baseInfo,
      source: 'timeline',
      datetime: event.date,
      id: event.id
    });
  });

  (project.tasks || []).forEach((task) => {
    if (!task.due) return;
    entries.push({
      ...baseInfo,
      id: `task-${task.id || task.title}`,
      title: task.title,
      description: task.taskDescription || '',
      owner: task.owner,
      status: task.status,
      priority: task.priority,
      type: 'task',
      source: 'task',
      datetime: task.due,
      date: task.due,
      taskRef: task
    });
  });

  workLogs
    .filter((log) => log.projectId === project.id)
    .forEach((log) => {
      entries.push({
        ...baseInfo,
        id: `log-${log.id}`,
        title: log.event,
        description: log.task,
        owner: log.contact,
        status: log.done,
        channel: log.channel,
        submission: log.submission,
        attachments: log.attachments,
        type: 'log',
        source: 'log',
        datetime: log.time,
        date: log.time,
        logRef: log
      });
    });

  return entries.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
}

function formatTimelineDate(dateStr) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  const hasTime = typeof dateStr === 'string' && dateStr.includes('T');
  const options = hasTime
    ? { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    : { month: '2-digit', day: '2-digit' };
  return date.toLocaleString('zh-CN', options);
}

function normalizeDateKey(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return null;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
}

function startOfDay(date) {
  const value = new Date(date.getTime());
  value.setHours(0, 0, 0, 0);
  return value;
}

function showCalendarPopover(events, anchor) {
  if (!calendarPopover || !calendarPanel) {
    navigateToEvent(events[0]);
    return;
  }
  calendarPopover.innerHTML = '';
  const header = document.createElement('header');
  const dayNumber = Number(anchor.querySelector('.date-number').textContent);
  const displayDate = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), dayNumber);
  header.textContent = `${displayDate.getFullYear()}年${String(displayDate.getMonth() + 1).padStart(2, '0')}月${String(
    displayDate.getDate()
  ).padStart(2, '0')}日事项`;
  calendarPopover.appendChild(header);
  const list = document.createElement('div');
  list.className = 'popover-list';
  events.forEach((event) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = `popover-item ${event.source}`;
    item.innerHTML = `
      <strong>${event.projectName}</strong>
      <span>${event.title}</span>
      <span class="meta">${event.projectType} · ${
      event.source === 'task' ? '任务' : event.source === 'log' ? '记录' : '节点'
    }${event.status ? ` · ${event.status}` : ''}</span>
    `;
    item.addEventListener('click', (clickEvent) => {
      clickEvent.stopPropagation();
      hideCalendarPopover();
      navigateToEvent(event);
    });
    list.appendChild(item);
  });
  calendarPopover.appendChild(list);
  calendarPopover.classList.remove('hidden');

  requestAnimationFrame(() => {
    const anchorRect = anchor.getBoundingClientRect();
    const panelRect = calendarPanel.getBoundingClientRect();
    const popRect = calendarPopover.getBoundingClientRect();
    let left = anchorRect.left - panelRect.left + anchorRect.width / 2 - popRect.width / 2;
    left = Math.max(12, Math.min(left, panelRect.width - popRect.width - 12));
    const top = anchorRect.bottom - panelRect.top + 12;
    calendarPopover.style.left = `${left}px`;
    calendarPopover.style.top = `${top}px`;
  });
}

function hideCalendarPopover() {
  if (!calendarPopover) return;
  calendarPopover.classList.add('hidden');
}

function navigateToEvent(eventRef) {
  if (!eventRef) return;
  if (currentTimelineFilter !== 'all') {
    currentTimelineFilter = 'all';
    toggleButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === 'all');
    });
  }
  selectProject(eventRef.projectId);
  setTimeout(() => {
    highlightTimelineEvent(eventRef.projectId, eventRef.id);
  }, 120);
}

function highlightTimelineEvent(projectId, eventId) {
  const events = timelineRegistry.get(projectId) || [];
  const event = events.find((item) => item.id === eventId);
  if (!event) return;
  const element = timelineContainer.querySelector(`[data-event-id="${eventId}"]`);
  if (!element) return;
  document.querySelectorAll('.timeline-item').forEach((el) => el.classList.remove('active'));
  element.classList.add('active');
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  renderEventDetail(event);
}

function getFilteredProjects() {
  if (currentTypeFilter === 'all') return [...projects];
  return projects.filter((p) => p.type === currentTypeFilter);
}

function renderProjects() {
  const filtered = getFilteredProjects();
  projectGrid.innerHTML = '';
  filtered.forEach((project) => {
    const card = document.createElement('div');
    card.className = `project-card${project.id === currentProjectId ? ' active' : ''}`;
    card.dataset.projectId = project.id;
    card.innerHTML = `
      <div class="project-meta">
        <span>${project.type}</span>
        <span>${formatDate(project.start)} - ${formatDate(project.deadline)}</span>
      </div>
      <h4>${project.name}</h4>
      <p class="project-manager">负责人：${project.manager}</p>
      <div class="progress"><span style="width: ${project.progress * 100}%"></span></div>
      <div class="project-meta">
        <span>甲方：${project.client}</span>
        <span>${Math.round(project.progress * 100)}%</span>
      </div>
    `;
    card.addEventListener('click', () => selectProject(project.id));
    projectGrid.appendChild(card);
  });
  if (!filtered.length) {
    projectGrid.innerHTML = '<p class="empty">当前类别暂无项目。</p>';
  }
  renderBoardOverview();
  renderCalendar();
}

function renderBoardOverview() {
  if (!boardOverviewContainer || !pushAlertContainer) return;
  if (currentTypeFilter !== 'all') {
    boardOverviewContainer.classList.add('hidden');
    pushAlertContainer.classList.add('hidden');
    return;
  }

  boardOverviewContainer.classList.remove('hidden');
  pushAlertContainer.classList.remove('hidden');

  if (!projects.length) {
    boardOverviewContainer.innerHTML =
      '<p class="empty">暂无项目，请通过“新增项目”创建。</p>';
    pushAlertContainer.innerHTML = '<p class="empty">暂无需要重点推进的项目。</p>';
    return;
  }

  const total = projects.length;
  const averageProgress = Math.round(
    (projects.reduce((sum, project) => sum + project.progress, 0) / total) * 100
  );
  const typeStats = projects.reduce((acc, project) => {
    acc[project.type] = (acc[project.type] || 0) + 1;
    return acc;
  }, {});
  const statusStats = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});
  const handoverCandidates = projects.filter(
    (project) => project.type !== '施工图' && project.progress >= 0.6
  ).length;

  const pushEntries = buildPushEntries();
  const urgentCount = pushEntries.filter((entry) => entry.level === 'urgent').length;
  const attentionCount = pushEntries.filter(
    (entry) => entry.level === 'soon' || entry.level === 'handover'
  ).length;

  boardOverviewContainer.innerHTML = `
    <div class="portfolio-card">
      <h4>项目总数</h4>
      <strong>${total}</strong>
      <span>平均完成度 ${averageProgress}%</span>
    </div>
    <div class="portfolio-card">
      <h4>状态监测</h4>
      <strong>${statusStats['执行中'] || 0} 执行中</strong>
      <span>预警 ${statusStats['预警'] || 0} · 完成 ${statusStats['完成'] || 0}</span>
    </div>
    <div class="portfolio-card">
      <h4>阶段协同</h4>
      <strong>${typeStats['规划设计'] || 0} / ${typeStats['建筑方案'] || 0} / ${
    typeStats['施工图'] || 0
  }</strong>
      <span>${
        handoverCandidates ? `${handoverCandidates} 个项目接近移交` : '关注跨部门衔接'
      }</span>
    </div>
    <div class="portfolio-card">
      <h4>推进提醒</h4>
      <strong>${pushEntries.length}</strong>
      <span>紧迫 ${urgentCount} · 关注 ${attentionCount}</span>
    </div>
  `;

  if (!pushEntries.length) {
    pushAlertContainer.innerHTML = '<p class="empty">暂无需要重点推进的项目。</p>';
    return;
  }

  pushAlertContainer.innerHTML = '';
  pushEntries.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'push-card';
    item.dataset.level = entry.level;
    const listItems = [];
    entry.tasks
      .sort((a, b) => a.diffDays - b.diffDays)
      .forEach((task) => {
        const dueLabel =
          task.diffDays <= 0
            ? `已逾期（${formatDate(task.due)}）`
            : `剩余${task.diffDays}天（${formatDate(task.due)}）`;
        listItems.push(`<li>${task.title} · ${dueLabel}</li>`);
      });
    entry.reasons.forEach((reason) => {
      listItems.push(`<li>${reason}</li>`);
    });
    const detailList = listItems.length ? `<ul>${listItems.join('')}</ul>` : '';
    item.innerHTML = `
      <header>
        <h4>${entry.project.name}</h4>
        <span>${entry.levelLabel}${entry.dueLabel ? ` · ${entry.dueLabel}` : ''}</span>
      </header>
      <div class="project-meta">
        <span>${entry.project.type}</span>
        <span>${Math.round(entry.project.progress * 100)}%</span>
      </div>
      ${detailList}
    `;
    item.addEventListener('click', () => selectProject(entry.project.id));
    pushAlertContainer.appendChild(item);
  });
}

function buildPushEntries() {
  const now = new Date();
  const entriesMap = new Map();

  const ensureEntry = (project) => {
    if (!entriesMap.has(project.id)) {
      entriesMap.set(project.id, {
        project,
        tasks: [],
        reasons: [],
        level: 'info',
        dueLabel: '',
        levelLabel: '关注'
      });
    }
    return entriesMap.get(project.id);
  };

  projects.forEach((project) => {
    (project.tasks || []).forEach((task) => {
      if (task.status === '完成') return;
      const due = new Date(task.due);
      if (Number.isNaN(due.getTime())) return;
      const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
      if (diffDays <= 7) {
        const entry = ensureEntry(project);
        entry.tasks.push({ title: task.title, due: task.due, diffDays });
        if (diffDays <= 0 || diffDays <= 3) {
          entry.level = 'urgent';
        } else if (entry.level !== 'urgent') {
          entry.level = 'soon';
        }
      }
    });

    if (project.type !== '施工图' && project.progress >= 0.6) {
      const entry = ensureEntry(project);
      entry.reasons.push(`接近移交至${getNextProjectType(project.type)}`);
      if (entry.level === 'info') {
        entry.level = 'handover';
      }
    }

    if (project.status === '预警') {
      const entry = ensureEntry(project);
      if (!entry.reasons.includes('处于预警状态')) {
        entry.reasons.push('处于预警状态');
      }
      if (entry.level !== 'urgent') {
        entry.level = entry.level === 'handover' ? 'handover' : 'soon';
      }
    }
  });

  const levelOrder = { urgent: 0, soon: 1, handover: 2, info: 3 };

  return Array.from(entriesMap.values())
    .map((entry) => {
      if (entry.tasks.length) {
        const soonest = entry.tasks.reduce((prev, curr) =>
          curr.diffDays < prev.diffDays ? curr : prev
        );
        entry.dueLabel =
          soonest.diffDays <= 0 ? '已到期' : `剩余${soonest.diffDays}天`;
      } else if (entry.level === 'handover') {
        entry.dueLabel = '建议提前部署';
      } else if (entry.level === 'soon') {
        entry.dueLabel = '请关注进度';
      } else {
        entry.dueLabel = '';
      }

      entry.levelLabel =
        entry.level === 'urgent'
          ? '紧迫推进'
          : entry.level === 'soon'
          ? '近期跟进'
          : entry.level === 'handover'
          ? '移交筹备'
          : '关注';

      return entry;
    })
    .sort((a, b) => {
      const levelDiff = (levelOrder[a.level] || 3) - (levelOrder[b.level] || 3);
      if (levelDiff !== 0) return levelDiff;
      const aDiff = a.tasks.length
        ? Math.min(...a.tasks.map((task) => task.diffDays))
        : 999;
      const bDiff = b.tasks.length
        ? Math.min(...b.tasks.map((task) => task.diffDays))
        : 999;
      return aDiff - bDiff;
    });
}

function selectProject(projectId) {
  currentProjectId = projectId;
  document.querySelectorAll('.project-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.projectId === projectId);
  });
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  exportButton.disabled = false;
  renderProjectSummary(project);
  renderTimeline(project);
  renderTasks(project);
  renderLogTable();
  resetEventDetail();
  if (logProjectSelect) {
    logProjectSelect.value = project.id;
  }
}

function renderProjectSummary(project) {
  projectStatus.textContent = project.status;
  projectStatus.dataset.status = project.status;
  const location = project.location || '待定';
  const teamInfo = project.team && project.team.length ? project.team.join(' / ') : '—';
  const summaryText = project.summary || '待补充';
  projectSummaryBody.innerHTML = `
    <div class="summary-item"><span>所属阶段</span><strong>${project.type}</strong></div>
    <div class="summary-item"><span>项目位置</span><strong>${location}</strong></div>
    <div class="summary-item"><span>进度</span><strong>${Math.round(project.progress * 100)}%</strong></div>
    <div class="summary-item"><span>项目负责人</span><strong>${project.manager}</strong></div>
    <div class="summary-item"><span>甲方单位</span><strong>${project.client}</strong></div>
    <div class="summary-item"><span>团队协作</span><strong>${teamInfo}</strong></div>
    <div class="summary-item"><span>概述</span><strong>${summaryText}</strong></div>
  `;
  projectTags.innerHTML = '';
  if (project.tags && project.tags.length) {
    project.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = tag;
      projectTags.appendChild(span);
    });
  } else {
    const span = document.createElement('span');
    span.className = 'chip muted';
    span.textContent = '暂无标签';
    projectTags.appendChild(span);
  }
  if (projectTypeControl) {
    projectTypeControl.value = project.type;
  }
  if (projectStatusControl) {
    projectStatusControl.value = project.status;
  }
}

function renderTimeline(project) {
  timelineContainer.innerHTML = '';
  const events = buildTimelineEntries(project);
  timelineRegistry.set(project.id, events);
  const filtered = events.filter((event) => {
    if (currentTimelineFilter === 'milestone') return event.type === 'milestone';
    if (currentTimelineFilter === 'risk') return event.type === 'risk';
    return true;
  });

  filtered.forEach((event) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.dataset.type = event.type;
    item.dataset.source = event.source;
    item.dataset.eventId = event.id;
    const metaLabel =
      event.source === 'task'
        ? `${event.status}${event.priority ? ` · ${event.priority}` : ''}`
        : event.status || '';
    const summary =
      event.source === 'task'
        ? `责任人：${event.owner || '—'}`
        : event.source === 'log'
        ? `对接：${event.owner || '—'}${event.description ? ` · ${event.description}` : ''}`
        : event.description || '';
    item.innerHTML = `
      <div class="timeline-meta">
        <span>${formatTimelineDate(event.datetime || event.date)}</span>
        <span>${metaLabel}</span>
      </div>
      <h4>${event.title}</h4>
      <p>${summary}</p>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.timeline-item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      renderEventDetail(event);
    });
    timelineContainer.appendChild(item);
  });

  if (!filtered.length) {
    timelineContainer.innerHTML = '<p class="empty">当前筛选下暂无事件。</p>';
  }
}

function renderEventDetail(event) {
  if (!event) return;
  if (event.source === 'log') {
    const log = event.logRef || workLogs.find((item) => `log-${item.id}` === event.id);
    if (!log) return;
    eventType.textContent = '工作记录';
    eventBody.innerHTML = `
      <div><strong>记录时间：</strong>${formatDateTime(log.time)}</div>
      <div><strong>事件：</strong>${log.event}</div>
      <div><strong>对接人：</strong>${log.contact}</div>
      <div><strong>任务内容：</strong>${log.task}</div>
      <div><strong>完成情况：</strong>${log.done}</div>
      <div><strong>提交内容：</strong>${log.submission || '—'}</div>
      <div><strong>渠道：</strong>${log.channel || '—'}</div>
    `;
    if (log.attachments && log.attachments.length) {
      const attachmentWrap = document.createElement('div');
      attachmentWrap.className = 'attachment-preview';
      log.attachments.forEach((file) => {
        const img = document.createElement('img');
        img.src = file.url;
        img.alt = file.name;
        img.title = file.path || file.name;
        attachmentWrap.appendChild(img);
      });
      eventBody.appendChild(attachmentWrap);
    }
    return;
  }

  if (event.source === 'task') {
    const task = event.taskRef;
    eventType.textContent = '任务节点';
    eventBody.innerHTML = `
      <div><strong>任务名称：</strong>${event.title}</div>
      <div><strong>责任人：</strong>${event.owner}</div>
      <div><strong>截止日期：</strong>${formatDate(event.date)}</div>
      <div><strong>优先级：</strong>${event.priority || '—'}</div>
      <div><strong>当前状态：</strong>${event.status}</div>
      <div><strong>说明：</strong>${(task && task.notes) || '—'}</div>
    `;
    return;
  }

  eventType.textContent = event.type === 'milestone' ? '里程碑' : event.type === 'risk' ? '关注' : '推进';
  eventBody.innerHTML = `
    <div><strong>事件名称：</strong>${event.title}</div>
    <div><strong>日期：</strong>${formatDate(event.date)}</div>
    <div><strong>甲方要求：</strong>${event.clientRequest || '—'}</div>
    <div><strong>责任人：</strong>${event.owner || '—'}</div>
    <div><strong>当前状态：</strong>${event.status || '—'}</div>
    <div><strong>工作情况：</strong>${event.notes || event.description || '—'}</div>
  `;
}

function resetEventDetail() {
  eventType.textContent = '';
  eventBody.innerHTML = '<p>从时间轴选择事件以查看甲方要求、责任人及最新进展。</p>';
}

function renderTasks(project) {
  taskList.innerHTML = '';
  if (!project.tasks.length) {
    taskList.innerHTML = '<p class="empty">暂无任务。</p>';
  }
  project.tasks
    .sort((a, b) => new Date(a.due) - new Date(b.due))
    .forEach((task) => {
      const card = document.createElement('div');
      card.className = 'task-card';
      card.dataset.priority = task.priority;
      card.dataset.status = task.status;
      const actionLabel = task.status === '完成' ? '重新开启' : '标记完成';
      card.innerHTML = `
        <h4>${task.title}</h4>
        <div class="task-meta">
          <span>责任人：${task.owner}</span>
          <span class="highlight">${formatDate(task.due)}</span>
        </div>
        <div class="task-meta">
          <span>状态：${task.status}</span>
          <span>优先级：${task.priority}</span>
        </div>
        <div class="task-actions">
          <button class="ghost-button" data-action="advance">${actionLabel}</button>
        </div>
      `;
      card.querySelector('[data-action="advance"]').addEventListener('click', () => {
        task.status = task.status === '完成' ? '进行中' : '完成';
        renderTasks(project);
        renderOverview();
        renderReminders();
        renderBoardOverview();
        renderCalendar();
        requestPersist();
      });
      taskList.appendChild(card);
    });
  taskCount.textContent = `${project.tasks.length} 项`;
}

function renderReminders() {
  const reminders = [];
  const now = new Date();
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      const due = new Date(task.due);
      const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
      if (task.status !== '完成') {
        let level = 'normal';
        if (diffDays <= 0) level = 'urgent';
        else if (diffDays <= 3) level = 'urgent';
        else if (diffDays <= 7) level = 'soon';
        if (level !== 'normal') {
          reminders.push({
            projectId: project.id,
            projectName: project.name,
            title: task.title,
            due: formatDate(task.due),
            level,
            diffDays
          });
        }
      }
    });
  });
  reminderList.innerHTML = '';
  if (!reminders.length) {
    reminderList.innerHTML = '<p class="empty">暂无紧急提醒。</p>';
  } else {
    reminders
      .sort((a, b) => a.diffDays - b.diffDays)
      .forEach((reminder) => {
        const item = document.createElement('div');
        item.className = `reminder-item ${reminder.level}`;
        const statusLabel =
          reminder.diffDays <= 0 ? '已到期' : reminder.diffDays <= 3 ? '即将到期' : '一周内关注';
        item.innerHTML = `
          <h4>${reminder.projectName}</h4>
          <p>${reminder.title}</p>
          <div class="task-meta">
            <span>${statusLabel}</span>
            <span class="highlight">${reminder.due}</span>
          </div>
        `;
        item.addEventListener('click', () => selectProject(reminder.projectId));
        reminderList.appendChild(item);
      });
  }
  urgentCount.textContent = reminders.filter((r) => r.level === 'urgent').length;
}

function populateLogProjectOptions() {
  logProjectSelect.innerHTML = '';
  projects.forEach((project) => {
    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.name;
    logProjectSelect.appendChild(option);
  });
}

function renderLogTable() {
  const rows = [...workLogs]
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .filter((log) => !currentProjectId || log.projectId === currentProjectId);
  logTable.innerHTML = '';
  if (!rows.length) {
    logTable.innerHTML = '<p class="empty">暂无记录，点击“新增记录”补充工作内容。</p>';
    return;
  }
  rows.forEach((log) => {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    const project = projects.find((p) => p.id === log.projectId);
    entry.innerHTML = `
      <header>
        <span>${formatDateTime(log.time)}</span>
        <span>${project ? project.name : ''}</span>
      </header>
      <div><strong>事件：</strong>${log.event}</div>
      <div><strong>对接人：</strong>${log.contact}</div>
      <div><strong>任务：</strong>${log.task}</div>
      <div><strong>完成情况：</strong>${log.done}</div>
      <div><strong>提交内容：</strong>${log.submission || '—'}</div>
      <div><strong>渠道：</strong>${log.channel || '—'}</div>
    `;
    if (log.attachments && log.attachments.length) {
      const attachmentWrap = document.createElement('div');
      attachmentWrap.className = 'attachment-preview';
      log.attachments.forEach((file) => {
        const img = document.createElement('img');
        img.src = file.url;
        img.alt = file.name;
        img.title = file.path || file.name;
        attachmentWrap.appendChild(img);
      });
      entry.appendChild(attachmentWrap);
    }
    logTable.appendChild(entry);
  });
}

function setupListeners() {
  typeFilterSelect.addEventListener('change', (event) => {
    applyTypeFilter(event.target.value);
  });

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggleButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      currentTimelineFilter = button.dataset.filter;
      const project = projects.find((p) => p.id === currentProjectId);
      if (project) {
        renderTimeline(project);
      }
    });
  });

  toggleLogFormBtn.addEventListener('click', () => {
    logForm.classList.toggle('hidden');
    if (!logForm.classList.contains('hidden') && currentProjectId) {
      logProjectSelect.value = currentProjectId;
    }
  });

  cancelLogBtn.addEventListener('click', () => {
    logForm.reset();
    logForm.classList.add('hidden');
    const now = new Date();
    logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
    if (currentProjectId) {
      logProjectSelect.value = currentProjectId;
    }
  });

  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newLog = await buildLogFromForm();
    workLogs.push(newLog);
    logForm.reset();
    logForm.classList.add('hidden');
    const defaultProject = currentProjectId || newLog.projectId;
    if (defaultProject) {
      logProjectSelect.value = defaultProject;
    }
    const now = new Date();
    logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
    renderLogTable();
    if (currentProjectId) {
      const project = projects.find((p) => p.id === currentProjectId);
      if (project) {
        renderTimeline(project);
        highlightTimelineEvent(project.id, `log-${newLog.id}`);
      }
    }
    renderCalendar();
    requestPersist();
  });

  if (addProjectButton) {
    addProjectButton.addEventListener('click', () => {
      openProjectForm();
    });
  }

  if (closeProjectFormBtn) {
    closeProjectFormBtn.addEventListener('click', () => {
      toggleProjectForm(false);
    });
  }

  if (projectForm) {
    projectForm.addEventListener('submit', handleProjectFormSubmit);
  }

  if (projectTypeControl) {
    projectTypeControl.addEventListener('change', () => {
      if (!currentProjectId) return;
      const project = projects.find((p) => p.id === currentProjectId);
      if (!project) return;
      project.type = projectTypeControl.value;
      currentTypeFilter = 'all';
      typeFilterSelect.value = 'all';
      renderOverview();
      renderMonthlyProgress();
      renderProjects();
      renderReminders();
      selectProject(project.id);
      renderCalendar();
      requestPersist();
    });
  }

  if (projectStatusControl) {
    projectStatusControl.addEventListener('change', () => {
      if (!currentProjectId) return;
      const project = projects.find((p) => p.id === currentProjectId);
      if (!project) return;
      project.status = projectStatusControl.value;
      renderOverview();
      renderProjects();
      renderReminders();
      selectProject(project.id);
      renderCalendar();
      requestPersist();
    });
  }

  if (deleteProjectButton) {
    deleteProjectButton.addEventListener('click', () => {
      if (!currentProjectId) return;
      const project = projects.find((p) => p.id === currentProjectId);
      if (!project) return;
      if (!confirm(`确定删除项目「${project.name}」吗？`)) {
        return;
      }
      const index = projects.findIndex((p) => p.id === project.id);
      if (index === -1) return;
      projects.splice(index, 1);
      for (let i = workLogs.length - 1; i >= 0; i -= 1) {
        if (workLogs[i].projectId === project.id) {
          workLogs.splice(i, 1);
        }
      }
      currentTypeFilter = 'all';
      typeFilterSelect.value = 'all';
      currentProjectId = null;
      renderOverview();
      renderMonthlyProgress();
      renderProjects();
      populateLogProjectOptions();
      renderReminders();
      renderLogTable();
      if (projects.length) {
        selectProject(projects[0].id);
      } else {
        exportButton.disabled = true;
        projectSummaryBody.innerHTML = '<p class="empty">请选择项目。</p>';
        projectTags.innerHTML = '';
        projectStatus.textContent = '';
        delete projectStatus.dataset.status;
        timelineContainer.innerHTML = '';
        resetEventDetail();
        taskList.innerHTML = '';
        taskCount.textContent = '0 项';
      }
      renderCalendar();
      requestPersist();
    });
  }

  exportButton.addEventListener('click', exportCurrentProjectLogs);

  if (calendarPrevBtn) {
    calendarPrevBtn.addEventListener('click', () => {
      calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
      renderCalendar();
    });
  }

  if (calendarNextBtn) {
    calendarNextBtn.addEventListener('click', () => {
      calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
      renderCalendar();
    });
  }

  document.addEventListener('click', (event) => {
    if (!calendarPopover || calendarPopover.classList.contains('hidden')) return;
    if (
      !calendarPopover.contains(event.target) &&
      !event.target.closest('.calendar-day.has-event')
    ) {
      hideCalendarPopover();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideCalendarPopover();
    }
  });
}

function openProjectForm() {
  if (!projectFormPanel) return;
  if (projectForm) {
    projectForm.reset();
  }
  if (projectFormTitle) {
    projectFormTitle.textContent = '新增项目';
  }
  const today = new Date();
  if (projectStartInput) {
    projectStartInput.value = formatDateForInput(today);
  }
  if (projectDeadlineInput) {
    const deadline = new Date(today.getTime());
    deadline.setDate(deadline.getDate() + 30);
    projectDeadlineInput.value = formatDateForInput(deadline);
  }
  toggleProjectForm(true);
  setTimeout(() => {
    projectFormPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
}

function toggleProjectForm(show) {
  if (!projectFormPanel) return;
  if (show) {
    projectFormPanel.classList.remove('hidden');
  } else {
    projectFormPanel.classList.add('hidden');
    if (projectForm) {
      projectForm.reset();
    }
  }
}

function handleProjectFormSubmit(event) {
  event.preventDefault();
  if (!projectForm) return;
  const name = projectNameInput.value.trim();
  if (!name) {
    alert('请填写项目名称');
    return;
  }
  const type = projectTypeInput.value;
  const status = projectStatusInput.value;
  const manager = projectManagerInput.value.trim();
  const client = projectClientInput.value.trim();
  const location = projectLocationInput.value.trim() || '待定';
  const start = projectStartInput.value;
  const deadline = projectDeadlineInput.value;
  const progressRaw = Number(projectProgressInput.value);
  const progressPercent = Number.isNaN(progressRaw)
    ? 0
    : Math.min(100, Math.max(0, progressRaw));
  const newProject = {
    id: generateProjectId(type),
    name,
    type,
    status,
    progress: progressPercent / 100,
    client,
    manager,
    team: toArrayFromInput(projectTeamInput.value),
    location,
    start,
    deadline,
    summary: projectSummaryInput.value.trim(),
    tags: toArrayFromInput(projectTagsInput.value),
    health: status === '预警' ? '受控' : '良好',
    monthlyProgress: buildInitialMonthlySnapshot(start, progressPercent),
    timeline: [],
    tasks: []
  };
  projects.push(newProject);
  toggleProjectForm(false);
  currentTypeFilter = 'all';
  typeFilterSelect.value = 'all';
  renderOverview();
  renderMonthlyProgress();
  renderProjects();
  populateLogProjectOptions();
  renderReminders();
  selectProject(newProject.id);
  renderCalendar();
  requestPersist();
}

function toArrayFromInput(value) {
  if (!value) return [];
  return value
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildInitialMonthlySnapshot(startDate, progressPercent) {
  const date = new Date(startDate);
  if (Number.isNaN(date.getTime())) return [];
  const monthLabel = `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月`;
  return [
    {
      month: monthLabel,
      completion: progressPercent,
      deliveries: 0,
      risks: 0
    }
  ];
}

function formatDateForInput(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function generateProjectId(type) {
  const prefix = type === '规划设计' ? 'plan' : type === '建筑方案' ? 'scheme' : 'cd';
  const base = `${prefix}-${Date.now()}`;
  let candidate = base;
  let counter = 1;
  while (projects.some((project) => project.id === candidate)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }
  return candidate;
}

function getNextProjectType(type) {
  if (type === '规划设计') return '建筑方案';
  if (type === '建筑方案') return '施工图';
  return '交付运营';
}

function generateLogId() {
  let base = Date.now();
  let candidate = `log-${base}`;
  while (workLogs.some((log) => log.id === candidate)) {
    base += 1;
    candidate = `log-${base}`;
  }
  return candidate;
}

async function buildLogFromForm() {
  const projectId = logProjectSelect.value || currentProjectId;
  const time = document.getElementById('logTime').value;
  const eventName = document.getElementById('logEvent').value;
  const contact = document.getElementById('logContact').value;
  const task = document.getElementById('logTask').value;
  const done = document.getElementById('logDone').value;
  const submission = document.getElementById('logSubmission').value;
  const channel = document.getElementById('logChannel').value;
  const attachmentsInput = document.getElementById('logAttachment');
  const attachments = await readFilesAsDataUrl(attachmentsInput.files);
  return {
    id: generateLogId(),
    projectId,
    time,
    event: eventName,
    contact,
    task,
    done,
    submission,
    channel,
    attachments
  };
}

function readFilesAsDataUrl(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return Promise.resolve([]);
  const readers = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve({
          name: file.name,
          url: reader.result,
          path: file.webkitRelativePath || file.name
        });
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });
  return Promise.all(readers);
}

function exportCurrentProjectLogs() {
  if (!currentProjectId) return;
  const project = projects.find((p) => p.id === currentProjectId);
  const logs = workLogs.filter((log) => log.projectId === currentProjectId);
  if (!logs.length) {
    alert('当前项目暂无可导出的记录。');
    return;
  }
  const header = ['记录时间', '事件/节点', '对接人', '任务', '完成情况', '提交内容', '提交渠道', '附件'];
  const rows = logs.map((log) => [
    formatDateTime(log.time),
    log.event,
    log.contact,
    log.task,
    log.done,
    log.submission || '',
    log.channel || '',
    (log.attachments || []).map((file) => file.path || file.name).join('、')
  ]);
  const csvContent = [header, ...rows].map((row) => row.map(escapeCsv).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csvContent], {
    type: 'text/csv;charset=utf-8;'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${project.name}-工作记录.xlsx`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 2000);
}

function escapeCsv(value) {
  if (value == null) return '';
  const str = String(value).replace(/"/g, '""');
  if (str.includes(',') || str.includes('\n')) {
    return `"${str}"`;
  }
  return str;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('zh-CN', {
    month: '2-digit',
    day: '2-digit'
  });
}

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  if (Number.isNaN(date.getTime())) return dateTimeStr;
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function rehydrateProjects(list, fallback) {
  const fallbackMap = new Map((fallback || []).map((item) => [item.id, item]));
  return (list || []).map((item) => {
    const base = fallbackMap.get(item.id) || {};
    const timeline = Array.isArray(item.timeline) ? item.timeline : base.timeline || [];
    const tasks = Array.isArray(item.tasks) ? item.tasks : base.tasks || [];
    const monthlyProgress = Array.isArray(item.monthlyProgress)
      ? item.monthlyProgress
      : base.monthlyProgress || [];
    const tags = Array.isArray(item.tags) ? item.tags : base.tags || [];
    const team = Array.isArray(item.team) ? item.team : base.team || [];
    const normalizedProgress = normalizeProgressValue(
      typeof item.progress === 'number'
        ? item.progress
        : typeof item.progressPercent === 'number'
        ? item.progressPercent / 100
        : typeof base.progress === 'number'
        ? base.progress
        : 0
    );
    return {
      ...base,
      ...item,
      progress: normalizedProgress,
      timeline,
      tasks,
      monthlyProgress: monthlyProgress.map((entry) => ({
        month: entry.month,
        completion: typeof entry.completion === 'number' ? entry.completion : Number(entry.completion) || 0,
        deliveries: typeof entry.deliveries === 'number' ? entry.deliveries : Number(entry.deliveries) || 0,
        risks: typeof entry.risks === 'number' ? entry.risks : Number(entry.risks) || 0
      })),
      tags,
      team
    };
  });
}

function rehydrateLogs(list) {
  return (list || []).map((item) => ({
    ...item,
    attachments: Array.isArray(item.attachments) ? item.attachments : []
  }));
}

function ensureLogIdentifiers(logs) {
  const used = new Set();
  return (logs || []).map((log) => {
    const clone = { ...log };
    if (!clone.id) {
      let seed = Date.now() + Math.floor(Math.random() * 1000);
      let candidate = `log-${seed}`;
      while (used.has(candidate)) {
        seed += 1;
        candidate = `log-${seed}`;
      }
      clone.id = candidate;
    }
    used.add(clone.id);
    if (!clone.attachments) {
      clone.attachments = [];
    }
    return clone;
  });
}

function normalizeProgressValue(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return 0;
  if (value > 1) {
    return Math.min(1, value / 100);
  }
  return Math.min(1, Math.max(0, value));
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function requestPersist(immediate = false) {
  if (typeof window === 'undefined') return;
  if (immediate) {
    if (persistTimer) {
      clearTimeout(persistTimer);
      persistTimer = null;
    }
    persistState();
    return;
  }
  if (persistTimer) {
    clearTimeout(persistTimer);
  }
  persistTimer = window.setTimeout(() => {
    persistState();
    persistTimer = null;
  }, 260);
}

function loadState(key, fallback) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return deepClone(fallback);
    }
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return deepClone(fallback);
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return deepClone(fallback);
    }
    return parsed;
  } catch (error) {
    console.warn('读取本地数据失败，使用默认数据。', error);
    return deepClone(fallback);
  }
}

function setupAutoSave() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.addEventListener('beforeunload', () => requestPersist(true));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      requestPersist(true);
    }
  });
}

function persistState() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
    window.localStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(workLogs));
  } catch (error) {
    console.warn('自动保存失败', error);
  }
}

init();
