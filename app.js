const projects = [
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

const workLogs = [
  {
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

let currentTypeFilter = 'all';
let currentProjectId = null;
let currentTimelineFilter = 'all';

const overviewGrid = document.getElementById('overviewGrid');
const monthlyProgressContainer = document.getElementById('monthlyProgress');
const currentMonthLabel = document.getElementById('currentMonth');
const reminderList = document.getElementById('reminderList');
const urgentCount = document.getElementById('urgentCount');
const projectGrid = document.getElementById('projectGrid');
const exportButton = document.getElementById('exportButton');
const projectStatus = document.getElementById('projectStatus');
const projectSummaryBody = document.getElementById('projectSummaryBody');
const projectTags = document.getElementById('projectTags');
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

function init() {
  renderOverview();
  renderMonthlyProgress();
  renderProjects();
  populateLogProjectOptions();
  renderLogTable();
  renderReminders();
  setupListeners();
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
}

function renderOverview() {
  const total = projects.length;
  const executing = projects.filter((p) => p.status === '执行中').length;
  const warning = projects.filter((p) => p.status === '预警').length;
  const averageProgress = Math.round(
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
      label: '规划 / 方案 / 施工图',
      value: `${typeStats['规划设计'] || 0} / ${typeStats['建筑方案'] || 0} / ${typeStats['施工图'] || 0}`,
      sub: '多类型协同推进'
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
  projectSummaryBody.innerHTML = `
    <div class="summary-item"><span>项目位置</span><strong>${project.location}</strong></div>
    <div class="summary-item"><span>进度</span><strong>${Math.round(project.progress * 100)}%</strong></div>
    <div class="summary-item"><span>项目负责人</span><strong>${project.manager}</strong></div>
    <div class="summary-item"><span>甲方单位</span><strong>${project.client}</strong></div>
    <div class="summary-item"><span>团队协作</span><strong>${project.team.join(' / ')}</strong></div>
    <div class="summary-item"><span>概述</span><strong>${project.summary}</strong></div>
  `;
  projectTags.innerHTML = '';
  project.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = tag;
    projectTags.appendChild(span);
  });
}

function renderTimeline(project) {
  timelineContainer.innerHTML = '';
  const events = project.timeline.filter((event) => {
    if (currentTimelineFilter === 'milestone') return event.type === 'milestone';
    if (currentTimelineFilter === 'risk') return event.type === 'risk';
    return true;
  });
  events
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((event) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.dataset.type = event.type;
      item.innerHTML = `
        <div class="timeline-meta">
          <span>${formatDate(event.date)}</span>
          <span>${event.status}</span>
        </div>
        <h4>${event.title}</h4>
        <p>${event.description}</p>
      `;
      item.addEventListener('click', () => {
        document.querySelectorAll('.timeline-item').forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
        renderEventDetail(event);
      });
      timelineContainer.appendChild(item);
    });
  if (!events.length) {
    timelineContainer.innerHTML = '<p class="empty">当前筛选下暂无事件。</p>';
  }
}

function renderEventDetail(event) {
  eventType.textContent = event.type === 'milestone' ? '里程碑' : event.type === 'risk' ? '关注' : '推进';
  eventBody.innerHTML = `
    <div><strong>事件名称：</strong>${event.title}</div>
    <div><strong>日期：</strong>${formatDate(event.date)}</div>
    <div><strong>甲方要求：</strong>${event.clientRequest}</div>
    <div><strong>责任人：</strong>${event.owner}</div>
    <div><strong>当前状态：</strong>${event.status}</div>
    <div><strong>工作情况：</strong>${event.notes}</div>
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
        renderReminders();
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
        img.title = file.name;
        attachmentWrap.appendChild(img);
      });
      entry.appendChild(attachmentWrap);
    }
    logTable.appendChild(entry);
  });
}

function setupListeners() {
  typeFilterSelect.addEventListener('change', (event) => {
    currentTypeFilter = event.target.value;
    renderProjects();
    const filtered = getFilteredProjects();
    if (!filtered.some((project) => project.id === currentProjectId)) {
      if (filtered.length) {
        selectProject(filtered[0].id);
      } else {
        currentProjectId = null;
        exportButton.disabled = true;
        projectSummaryBody.innerHTML = '<p class="empty">请选择项目。</p>';
        projectTags.innerHTML = '';
        timelineContainer.innerHTML = '';
        resetEventDetail();
        taskList.innerHTML = '';
        taskCount.textContent = '0 项';
        renderLogTable();
      }
    }
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
    if (currentProjectId) {
      logProjectSelect.value = currentProjectId;
    }
    const now = new Date();
    logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
    renderLogTable();
  });

  exportButton.addEventListener('click', exportCurrentProjectLogs);
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
      reader.onload = () => resolve({ name: file.name, url: reader.result });
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
    (log.attachments || []).map((file) => file.name).join('、')
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

init();
