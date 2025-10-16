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

const SERVER_ENDPOINTS = {
  state: './api/state'
};

let persistenceMode = 'localStorage';
let projects = [];
let workLogs = [];

let currentTypeFilter = 'all';
let currentProjectId = null;
let currentTimelineFilter = 'all';
let calendarCursor = new Date();

const timelineRegistry = new Map();
let persistTimer = null;

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
const logDoneSelect = document.getElementById('logDone');
const logMilestoneInput = document.getElementById('logMilestone');
const logFocusInput = document.getElementById('logFocus');
const logMarkTaskInput = document.getElementById('logMarkTask');
const logTaskDueInput = document.getElementById('logTaskDue');
const logTaskPrioritySelect = document.getElementById('logTaskPriority');
const taskDueField = document.getElementById('taskDueField');
const taskPriorityField = document.getElementById('taskPriorityField');
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
const editSummaryButton = document.getElementById('editSummaryButton');
const summaryEditPanel = document.getElementById('summaryEditPanel');
const summaryEditInput = document.getElementById('summaryEditInput');
const saveSummaryButton = document.getElementById('saveSummaryButton');
const cancelSummaryButton = document.getElementById('cancelSummaryButton');

function normalizeStatusValue(status) {
  return typeof status === 'string' ? status.replace(/\s+/g, '') : '';
}

function logStatusIndicatesTask(status) {
  const normalized = normalizeStatusValue(status).replace(/·/g, '-');
  return normalized.startsWith('任务-') || normalized === '任务';
}

function isActiveProjectStatus(status) {
  if (!status) return false;
  return status !== '完成';
}

function mapLogStatusToTask(status) {
  const normalized = normalizeStatusValue(status).replace(/·/g, '-');
  if (!normalized) return '进行中';
  if (normalized === '任务-待认领' || normalized === '任务') return '待启动';
  if (normalized === '任务-进行中') return '进行中';
  if (normalized === '任务-已完成') return '完成';
  if (normalized === '已完成' || normalized === '完成') return '完成';
  if (normalized === '待反馈') return '待反馈';
  return '进行中';
}

function mapTaskStatusToLog(status) {
  const normalized = normalizeStatusValue(status).replace(/·/g, '-');
  if (!normalized) return '进行中';
  if (normalized === '完成') return '任务-已完成';
  if (normalized === '待启动' || normalized === '待认领') return '任务-待认领';
  if (normalized === '待反馈') return '待反馈';
  if (normalized === '进行中') return '任务-进行中';
  return '进行中';
}

function formatLogStatusLabel(status) {
  const normalizedRaw = normalizeStatusValue(status);
  const normalized = normalizedRaw.replace(/·/g, '-');
  if (!normalized) return '进行中';
  if (normalized.startsWith('任务-')) {
    const [, tail] = normalized.split('-');
    const suffixMap = { 待认领: '待认领', 进行中: '跟进中', 已完成: '已完成' };
    const suffix = suffixMap[tail] || tail;
    return `任务 · ${suffix}`;
  }
  if (normalized === '任务' || normalizedRaw === '任务') return '任务';
  if (normalized === '已完成' || normalized === '完成') return '已完成';
  if (normalized === '待反馈') return '待反馈';
  if (normalized === '进行中') return '进行中';
  return status || '进行中';
}

function generateLogTaskKey(log, project) {
  const baseText = (log.task && log.task.trim()) || (log.event && log.event.trim()) || log.id;
  const normalized = baseText
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-');
  const sanitized = normalized.replace(/^-+|-+$/g, '') || log.id;
  const baseKey = `${project.id}-${sanitized}`;
  const existingKeys = new Set(
    (project.tasks || [])
      .filter((task) => task && task.source === 'log' && task.sourceKey)
      .map((task) => task.sourceKey)
  );
  if (!existingKeys.has(baseKey)) {
    return baseKey;
  }
  let counter = 2;
  let candidate = `${baseKey}-${counter}`;
  while (existingKeys.has(candidate)) {
    counter += 1;
    candidate = `${baseKey}-${counter}`;
  }
  return candidate;
}

function syncTaskFromLog(log) {
  if (!log) return;
  const shouldSync = Boolean(log.asTask) || logStatusIndicatesTask(log.done);
  if (!shouldSync) return;
  log.asTask = true;
  const project = projects.find((item) => item.id === log.projectId);
  if (!project) return;
  if (!Array.isArray(project.tasks)) {
    project.tasks = [];
  }

  if (!log.taskKey) {
    const previous = [...workLogs]
      .filter((item) => item.id !== log.id && item.projectId === log.projectId && item.asTask)
      .reverse()
      .find((item) => {
        if (!item.taskKey) return false;
        if (!log.task || !item.task) return false;
        return item.task.trim() === log.task.trim();
      });
    if (previous && previous.taskKey) {
      log.taskKey = previous.taskKey;
    } else {
      log.taskKey = generateLogTaskKey(log, project);
    }
  }

  const key = log.taskKey;
  const status = mapLogStatusToTask(log.done);
  const priority = log.taskPriority || '中';
  const candidateDue = log.taskDue || project.deadline || log.time || '';

  let task = project.tasks.find((item) => item.source === 'log' && item.sourceKey === key);
  if (!task) {
    task = {
      id: key,
      title: log.task || log.event || '任务事项',
      due: candidateDue,
      priority,
      owner: log.contact || '未指定',
      status,
      source: 'log',
      sourceKey: key,
      linkedLogs: [log.id],
      lastLogTime: log.time,
      notes: log.submission || ''
    };
    project.tasks.push(task);
  } else {
    task.title = log.task || log.event || task.title;
    task.owner = log.contact || task.owner;
    if (log.taskDue) {
      task.due = log.taskDue;
    } else if (!task.due) {
      task.due = candidateDue;
    }
    task.priority = priority || task.priority || '中';
    task.status = status;
    task.lastLogTime = log.time;
    if (log.submission) {
      task.notes = log.submission;
    }
    if (!Array.isArray(task.linkedLogs)) {
      task.linkedLogs = [];
    }
    if (!task.linkedLogs.includes(log.id)) {
      task.linkedLogs.push(log.id);
    }
  }
}

function syncAllLogTasks() {
  projects.forEach((project) => {
    if (!Array.isArray(project.tasks)) {
      project.tasks = [];
      return;
    }
    project.tasks = project.tasks.filter((task) => task.source !== 'log');
  });
  workLogs.forEach((log) => {
    syncTaskFromLog(log);
  });
}

function updateLogsForTaskStatus(projectId, task) {
  if (!task || task.source !== 'log' || !task.sourceKey) return;
  const relatedLogs = workLogs
    .filter((log) => log.projectId === projectId && log.taskKey === task.sourceKey)
    .sort((a, b) => new Date(a.time) - new Date(b.time));
  if (!relatedLogs.length) return;
  const latest = relatedLogs[relatedLogs.length - 1];
  latest.done = mapTaskStatusToLog(task.status);
  latest.asTask = true;
  latest.taskPriority = task.priority || latest.taskPriority || '中';
  if (task.due) {
    latest.taskDue = task.due;
  }
}

function init() {
  syncAllLogTasks();
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
  } else {
    if (editSummaryButton) {
      editSummaryButton.disabled = true;
    }
    if (summaryEditPanel) {
      summaryEditPanel.classList.add('hidden');
    }
    if (summaryEditInput) {
      summaryEditInput.value = '';
    }
  }
  requestPersist(true);
}

function renderOverview() {
  if (!typeOverviewContainer) return;
  typeOverviewContainer.innerHTML = '';

  if (!projects.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = '暂无项目，待创建后可查看各阶段概况。';
    typeOverviewContainer.appendChild(empty);
    return;
  }

  const now = new Date();
  const overallSnapshot = collectStageSnapshot('all', now);
  const focusSnapshot =
    currentTypeFilter === 'all'
      ? overallSnapshot
      : collectStageSnapshot(currentTypeFilter, now);
  const completedCount = projects.filter(
    (project) => normalizeStatusValue(project.status) === '完成'
  ).length;

  const summaryRow = document.createElement('div');
  summaryRow.className = 'stage-digest';
  summaryRow.innerHTML = `
    <div class="digest-main">
      <span class="digest-label">${
        currentTypeFilter === 'all' ? '全部项目' : `${focusSnapshot.label} 项目`
      }</span>
      <strong>${focusSnapshot.active}</strong>
      <span class="digest-sub">进行中</span>
    </div>
    <div class="digest-meta">
      <span>总数 ${focusSnapshot.total}</span>
      <span>平均 ${focusSnapshot.average}%</span>
      <span>预警 ${focusSnapshot.warnings}</span>
      <span>紧迫 ${focusSnapshot.urgent}</span>
    </div>
    <div class="digest-meta secondary">
      <span>全局总数 ${overallSnapshot.total}</span>
      <span>全局完成 ${completedCount}</span>
      <span>全局平均 ${overallSnapshot.average}%</span>
    </div>
  `;
  typeOverviewContainer.appendChild(summaryRow);

  const stageList = document.createElement('div');
  stageList.className = 'stage-chip-list';
  const stageSnapshots = [
    overallSnapshot,
    collectStageSnapshot('规划设计', now),
    collectStageSnapshot('建筑方案', now),
    collectStageSnapshot('施工图', now)
  ];
  stageSnapshots.forEach((snapshot) => {
    stageList.appendChild(createStageChip(snapshot));
  });
  typeOverviewContainer.appendChild(stageList);
}

function collectStageSnapshot(type, now = new Date()) {
  const scopeProjects =
    type === 'all' ? projects : projects.filter((project) => project.type === type);
  const total = scopeProjects.length;
  const active = scopeProjects.filter((project) => isActiveProjectStatus(project.status)).length;
  const warnings = scopeProjects.filter(
    (project) => normalizeStatusValue(project.status) === '预警'
  ).length;
  const average =
    total === 0
      ? 0
      : Math.round(
          (scopeProjects.reduce((sum, project) => sum + (project.progress || 0), 0) / total) * 100
        );
  const urgent = scopeProjects.reduce(
    (sum, project) => sum + countUrgentTasksForProject(project, now),
    0
  );
  const handover = scopeProjects.filter((project) => isHandoverCandidate(project)).length;
  return {
    key: type === 'all' ? 'all' : type,
    label: type === 'all' ? '全部' : type,
    total,
    active,
    warnings,
    average,
    urgent,
    handover
  };
}

function countUrgentTasksForProject(project, now = new Date()) {
  if (!project || !Array.isArray(project.tasks)) return 0;
  return project.tasks.reduce((sum, task) => {
    if (!task || normalizeStatusValue(task.status) === '完成') return sum;
    const due = new Date(task.due);
    if (Number.isNaN(due.getTime())) return sum;
    const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
    return diffDays <= 3 ? sum + 1 : sum;
  }, 0);
}

function isHandoverCandidate(project) {
  if (!project) return false;
  if (project.type === '施工图') {
    return project.progress >= 0.85;
  }
  return project.progress >= 0.6;
}

function createStageChip(snapshot) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'stage-chip';
  button.dataset.type = snapshot.key;
  if (snapshot.key === 'all') {
    button.classList.add('all');
  }
  if (!snapshot.total) {
    button.classList.add('empty');
  }
  if (currentTypeFilter === snapshot.key) {
    button.classList.add('active');
  }
  const urgentBadge = snapshot.urgent
    ? `<div class="chip-alert">紧迫任务 ${snapshot.urgent}</div>`
    : '';
  button.innerHTML = `
    <div class="chip-top">
      <span class="chip-count">${snapshot.active}</span>
      <span class="chip-label">${snapshot.label}</span>
    </div>
    <div class="chip-meta">平均 ${snapshot.average}% · 总数 ${snapshot.total}</div>
    <div class="chip-meta subtle">预警 ${snapshot.warnings} · ${handoverLabel(snapshot.key)} ${
    snapshot.handover
  }</div>
    ${urgentBadge}
  `;
  button.addEventListener('click', () => applyTypeFilter(snapshot.key));
  return button;
}

function handoverLabel(type) {
  if (type === '施工图') return '交付冲刺';
  if (type === '建筑方案') return '待移交施工';
  if (type === '规划设计') return '待移交方案';
  return '跨阶段协同';
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
    if (editSummaryButton) {
      editSummaryButton.disabled = true;
    }
    if (summaryEditPanel) {
      summaryEditPanel.classList.add('hidden');
    }
    if (summaryEditInput) {
      summaryEditInput.value = '';
    }
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
    const eventType = log.milestone ? 'milestone' : log.focus ? 'risk' : 'log';
    pushEvent({
      projectId: project.id,
      projectName: project.name,
      projectType: project.type,
      id: `log-${log.id}`,
      title: log.event,
      detail: log.task,
      source: 'log',
      type: eventType,
      status: formatLogStatusLabel(log.done),
      dateKey,
      datetime: log.time,
      logRef: log,
      milestone: Boolean(log.milestone),
      focus: Boolean(log.focus),
      asTask: Boolean(log.asTask)
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
      : event.type === 'milestone'
      ? '里程碑记录'
      : event.type === 'risk'
      ? '关注记录'
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
      taskRef: task,
      notes: task.notes
    });
  });

  workLogs
    .filter((log) => log.projectId === project.id)
    .forEach((log) => {
      const eventType = log.milestone ? 'milestone' : log.focus ? 'risk' : 'log';
      entries.push({
        ...baseInfo,
        id: `log-${log.id}`,
        title: log.event,
        description: log.task,
        owner: log.contact,
        status: formatLogStatusLabel(log.done),
        channel: log.channel,
        submission: log.submission,
        attachments: log.attachments,
        type: eventType,
        source: 'log',
        datetime: log.time,
        date: log.time,
        logRef: log,
        milestone: Boolean(log.milestone),
        focus: Boolean(log.focus),
        asTask: Boolean(log.asTask)
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
  const summaryItems = [
    { label: '所属阶段', value: project.type, fallback: '—' },
    { label: '项目位置', value: project.location, fallback: '待定' },
    {
      label: '进度',
      value: `${Math.round(project.progress * 100)}%`,
      fallback: '0%'
    },
    { label: '项目负责人', value: project.manager, fallback: '—' },
    { label: '甲方单位', value: project.client, fallback: '—' },
    {
      label: '团队协作',
      value: project.team && project.team.length ? project.team.join(' / ') : '',
      fallback: '—'
    },
    {
      label: '概述',
      value: project.summary || '',
      fallback: '待补充',
      className: 'summary-text'
    }
  ];

  projectSummaryBody.innerHTML = '';
  summaryItems.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'summary-item';
    if (item.className) {
      row.classList.add(item.className);
    }
    const label = document.createElement('span');
    label.textContent = item.label;
    const value = document.createElement('strong');
    const displayValue = item.value && String(item.value).trim().length ? item.value : item.fallback;
    value.textContent = displayValue;
    row.append(label, value);
    projectSummaryBody.appendChild(row);
  });

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
  if (summaryEditInput) {
    summaryEditInput.value = project.summary || '';
  }
  if (summaryEditPanel) {
    summaryEditPanel.classList.add('hidden');
  }
  if (editSummaryButton) {
    editSummaryButton.disabled = false;
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
    const flagBadges = [];
    if (event.source === 'log') {
      if (event.asTask) flagBadges.push('<span class="timeline-flag task">任务</span>');
      if (event.milestone) flagBadges.push('<span class="timeline-flag milestone">里程碑</span>');
      if (event.focus) flagBadges.push('<span class="timeline-flag focus">关注</span>');
    }
    const flagSection = flagBadges.length ? `<div class="timeline-flags">${flagBadges.join('')}</div>` : '';
    item.innerHTML = `
      <div class="timeline-meta">
        <span>${formatTimelineDate(event.datetime || event.date)}</span>
        <span>${metaLabel}</span>
      </div>
      <h4>${event.title}</h4>
      <p>${summary}</p>
      ${flagSection}
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
    const flagLabels = [];
    if (log.asTask) flagLabels.push('同步任务');
    if (log.milestone) flagLabels.push('里程碑');
    if (log.focus) flagLabels.push('关注项');
    const sections = [
      `<div><strong>记录时间：</strong>${formatDateTime(log.time)}</div>`
    ];
    if (flagLabels.length) {
      sections.push(`<div><strong>标记：</strong>${flagLabels.join(' / ')}</div>`);
    }
    sections.push(
      `<div><strong>事件：</strong>${log.event}</div>`,
      `<div><strong>对接人：</strong>${log.contact || '—'}</div>`,
      `<div><strong>任务内容：</strong>${log.task || '—'}</div>`,
      `<div><strong>完成情况：</strong>${formatLogStatusLabel(log.done)}</div>`,
      `<div><strong>提交内容：</strong>${log.submission || '—'}</div>`,
      `<div><strong>渠道：</strong>${log.channel || '—'}</div>`
    );
    if (log.asTask) {
      const dueLabel = log.taskDue
        ? String(log.taskDue).includes('T')
          ? formatDateTime(log.taskDue)
          : formatDate(log.taskDue)
        : '未设置';
      sections.push(`<div><strong>任务截止：</strong>${dueLabel}</div>`);
      sections.push(`<div><strong>优先级：</strong>${log.taskPriority || '中'}</div>`);
    }
    eventBody.innerHTML = sections.join('');
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
    const dueLabel = event.date
      ? String(event.date).includes('T')
        ? formatDateTime(event.date)
        : formatDate(event.date)
      : '未设置';
    eventBody.innerHTML = `
      <div><strong>任务名称：</strong>${event.title}</div>
      <div><strong>责任人：</strong>${event.owner}</div>
      <div><strong>截止日期：</strong>${dueLabel}</div>
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
    .sort((a, b) => {
      const dateA = new Date(a.due);
      const dateB = new Date(b.due);
      const timeA = Number.isNaN(dateA.getTime()) ? Infinity : dateA.getTime();
      const timeB = Number.isNaN(dateB.getTime()) ? Infinity : dateB.getTime();
      return timeA - timeB;
    })
    .forEach((task) => {
      const card = document.createElement('div');
      card.className = 'task-card';
      const priorityLabel = task.priority || '中';
      const statusLabel = task.status || '进行中';
      card.dataset.priority = priorityLabel;
      card.dataset.status = statusLabel;
      card.dataset.source = task.source || 'manual';
      const actionLabel = task.status === '完成' ? '重新开启' : '标记完成';
      const dueLabel = task.due
        ? String(task.due).includes('T')
          ? formatDateTime(task.due)
          : formatDate(task.due)
        : '未设置';
      const badge = task.source === 'log' ? '<span class="task-badge">工作记录</span>' : '';
      const lastSync = task.lastLogTime ? formatDateTime(task.lastLogTime) : '—';
      const sourceInfo =
        task.source === 'log'
          ? `<div class="task-source">${badge}<span>最近同步：${lastSync}</span></div>`
          : '';
      const noteBlock = task.notes ? `<div class="task-note">${task.notes}</div>` : '';
      card.innerHTML = `
        <h4>${task.title}</h4>
        ${sourceInfo}
        <div class="task-meta">
          <span>责任人：${task.owner || '—'}</span>
          <span class="highlight">${dueLabel}</span>
        </div>
        <div class="task-meta">
          <span>状态：${statusLabel}</span>
          <span>优先级：${priorityLabel}</span>
        </div>
        ${noteBlock}
        <div class="task-actions">
          <button class="ghost-button" data-action="advance">${actionLabel}</button>
        </div>
      `;
      card.querySelector('[data-action="advance"]').addEventListener('click', () => {
        task.status = task.status === '完成' ? '进行中' : '完成';
        updateLogsForTaskStatus(project.id, task);
        renderTasks(project);
        renderOverview();
        renderReminders();
        renderBoardOverview();
        renderCalendar();
        renderTimeline(project);
        renderLogTable();
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
      if (!task.due) return;
      const due = new Date(task.due);
      if (Number.isNaN(due.getTime())) return;
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
    const badges = [];
    if (log.asTask) badges.push('<span class="log-badge task">任务</span>');
    if (log.milestone) badges.push('<span class="log-badge milestone">里程碑</span>');
    if (log.focus) badges.push('<span class="log-badge focus">关注</span>');
    const flagHtml = badges.length ? `<div class="log-flags">${badges.join('')}</div>` : '';
    const taskDueLabel = log.taskDue
      ? String(log.taskDue).includes('T')
        ? formatDateTime(log.taskDue)
        : formatDate(log.taskDue)
      : '未设置';
    const taskMeta = log.asTask
      ? `
        <div><strong>任务截止：</strong>${taskDueLabel}</div>
        <div><strong>优先级：</strong>${log.taskPriority || '中'}</div>
      `
      : '';
    entry.innerHTML = `
      <header>
        <span>${formatDateTime(log.time)}</span>
        <span>${project ? project.name : ''}</span>
      </header>
      ${flagHtml}
      <div><strong>事件：</strong>${log.event}</div>
      <div><strong>对接人：</strong>${log.contact || '—'}</div>
      <div><strong>任务：</strong>${log.task || '—'}</div>
      <div><strong>完成情况：</strong>${formatLogStatusLabel(log.done)}</div>
      <div><strong>提交内容：</strong>${log.submission || '—'}</div>
      <div><strong>渠道：</strong>${log.channel || '—'}</div>
      ${taskMeta}
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

  if (editSummaryButton) {
    editSummaryButton.addEventListener('click', () => {
      if (!currentProjectId || !summaryEditPanel) return;
      summaryEditPanel.classList.remove('hidden');
      if (summaryEditInput) {
        summaryEditInput.focus();
        const value = summaryEditInput.value || '';
        summaryEditInput.setSelectionRange(value.length, value.length);
      }
    });
  }

  if (cancelSummaryButton) {
    cancelSummaryButton.addEventListener('click', () => {
      if (summaryEditPanel) {
        summaryEditPanel.classList.add('hidden');
      }
      if (summaryEditInput && currentProjectId) {
        const project = projects.find((p) => p.id === currentProjectId);
        summaryEditInput.value = (project && project.summary) || '';
      }
    });
  }

  if (saveSummaryButton) {
    saveSummaryButton.addEventListener('click', () => {
      if (!currentProjectId) return;
      const project = projects.find((p) => p.id === currentProjectId);
      if (!project) return;
      const nextSummary = summaryEditInput ? summaryEditInput.value.trim() : '';
      project.summary = nextSummary;
      renderProjectSummary(project);
      renderProjects();
      requestPersist();
    });
  }

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
    updateTaskFieldVisibility();
  });

  cancelLogBtn.addEventListener('click', () => {
    logForm.reset();
    logForm.classList.add('hidden');
    const now = new Date();
    logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
    if (currentProjectId) {
      logProjectSelect.value = currentProjectId;
    }
    updateTaskFieldVisibility();
  });

  if (logMarkTaskInput) {
    logMarkTaskInput.addEventListener('change', updateTaskFieldVisibility);
  }
  if (logDoneSelect) {
    logDoneSelect.addEventListener('change', updateTaskFieldVisibility);
  }

  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newLog = await buildLogFromForm();
    workLogs.push(newLog);
    syncTaskFromLog(newLog);
    logForm.reset();
    logForm.classList.add('hidden');
    const defaultProject = currentProjectId || newLog.projectId;
    if (defaultProject) {
      logProjectSelect.value = defaultProject;
    }
    const now = new Date();
    logTimeInput.value = `${now.toISOString().slice(0, 16)}`;
    updateTaskFieldVisibility();
    renderLogTable();
    const targetProject = projects.find((p) => p.id === newLog.projectId);
    if (targetProject && newLog.asTask && currentProjectId === targetProject.id) {
      renderTasks(targetProject);
    }
    if (currentProjectId) {
      const activeProject = projects.find((p) => p.id === currentProjectId);
      if (activeProject) {
        renderTimeline(activeProject);
        if (activeProject.id === newLog.projectId) {
          highlightTimelineEvent(activeProject.id, `log-${newLog.id}`);
        }
      }
    }
    renderOverview();
    renderReminders();
    renderBoardOverview();
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
        if (editSummaryButton) {
          editSummaryButton.disabled = true;
        }
        if (summaryEditPanel) {
          summaryEditPanel.classList.add('hidden');
        }
        if (summaryEditInput) {
          summaryEditInput.value = '';
        }
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

  updateTaskFieldVisibility();
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

function formatDateTimeForInput(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
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

function updateTaskFieldVisibility() {
  if (!taskDueField || !taskPriorityField) return;
  const statusValue = logDoneSelect ? logDoneSelect.value : '';
  const statusIndicatesTask = logStatusIndicatesTask(statusValue);
  let manualChecked = false;
  if (logMarkTaskInput) {
    if (statusIndicatesTask) {
      logMarkTaskInput.checked = true;
      logMarkTaskInput.disabled = true;
      logMarkTaskInput.dataset.autoChecked = 'true';
    } else {
      const wasAuto = logMarkTaskInput.dataset.autoChecked === 'true';
      logMarkTaskInput.disabled = false;
      if (wasAuto) {
        logMarkTaskInput.checked = false;
      }
      delete logMarkTaskInput.dataset.autoChecked;
    }
    manualChecked = logMarkTaskInput.checked;
  }
  const enabled = statusIndicatesTask || manualChecked;
  taskDueField.classList.toggle('hidden', !enabled);
  taskPriorityField.classList.toggle('hidden', !enabled);
  if (!enabled) {
    if (logTaskDueInput) {
      logTaskDueInput.value = '';
    }
    if (logTaskPrioritySelect) {
      logTaskPrioritySelect.value = '中';
    }
    return;
  }
  if (logTaskPrioritySelect && !logTaskPrioritySelect.value) {
    logTaskPrioritySelect.value = '中';
  }
  if (logTaskDueInput && !logTaskDueInput.value) {
    let suggestion = '';
    const targetProjectId = logProjectSelect ? logProjectSelect.value : null;
    const project = projects.find((item) => item.id === (targetProjectId || currentProjectId));
    if (project && project.deadline) {
      const deadlineDate = new Date(project.deadline);
      if (!Number.isNaN(deadlineDate.getTime())) {
        suggestion = formatDateTimeForInput(deadlineDate);
      }
    }
    if (!suggestion && logTimeInput && logTimeInput.value) {
      const reference = new Date(logTimeInput.value);
      if (!Number.isNaN(reference.getTime())) {
        suggestion = formatDateTimeForInput(reference);
      }
    }
    if (!suggestion) {
      suggestion = formatDateTimeForInput(new Date());
    }
    if (suggestion) {
      logTaskDueInput.value = suggestion;
    }
  }
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
  const done = logDoneSelect ? logDoneSelect.value : document.getElementById('logDone').value;
  const submission = document.getElementById('logSubmission').value;
  const channel = document.getElementById('logChannel').value;
  const attachmentsInput = document.getElementById('logAttachment');
  const attachments = await collectAttachments(attachmentsInput.files);
  const milestone = logMilestoneInput ? logMilestoneInput.checked : false;
  const focus = logFocusInput ? logFocusInput.checked : false;
  const asTaskFlag = logMarkTaskInput ? logMarkTaskInput.checked : false;
  const statusAsTask = logStatusIndicatesTask(done);
  const asTask = statusAsTask || asTaskFlag;
  const taskDue = logTaskDueInput ? logTaskDueInput.value : '';
  const taskPriority = logTaskPrioritySelect ? logTaskPrioritySelect.value || '中' : '中';
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
    attachments,
    milestone,
    focus,
    asTask,
    taskDue,
    taskPriority,
    taskKey: ''
  };
}

async function collectAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return [];

  if (window.electronAPI && window.electronAPI.storeAttachments) {
    try {
      const payload = files.map((file) => ({
        name: file.name,
        path: file.path || file.webkitRelativePath || file.name
      }));
      const stored = await window.electronAPI.storeAttachments(payload);
      if (Array.isArray(stored)) {
        return stored.map((item) => normalizeAttachmentEntry(item)).filter(Boolean);
      }
    } catch (error) {
      console.warn('附件保存失败，将使用临时数据。', error);
    }
  }

  const readers = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(
          normalizeAttachmentEntry({
            name: file.name,
            url: reader.result,
            path: file.webkitRelativePath || file.name
          })
        );
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
  const header = [
    '记录时间',
    '事件/节点',
    '对接人',
    '任务',
    '完成情况',
    '提交内容',
    '提交渠道',
    '同步任务',
    '里程碑',
    '关注项',
    '任务截止',
    '任务优先级',
    '附件'
  ];
  const rows = logs.map((log) => {
    const isTask = Boolean(log.asTask);
    const dueLabel = isTask && log.taskDue
      ? String(log.taskDue).includes('T')
        ? formatDateTime(log.taskDue)
        : formatDate(log.taskDue)
      : '';
    return [
      formatDateTime(log.time),
      log.event,
      log.contact || '',
      log.task || '',
      formatLogStatusLabel(log.done),
      log.submission || '',
      log.channel || '',
      isTask ? '是' : '否',
      log.milestone ? '是' : '否',
      log.focus ? '是' : '否',
      dueLabel,
      isTask ? log.taskPriority || '中' : '',
      (log.attachments || []).map((file) => file.path || file.name).join('、')
    ];
  });
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
    const tasks = (Array.isArray(item.tasks) ? item.tasks : base.tasks || []).map((task) => ({
      ...task,
      source: task && task.source ? task.source : 'manual',
      sourceKey: task && task.sourceKey ? task.sourceKey : null,
      linkedLogs: Array.isArray(task && task.linkedLogs) ? task.linkedLogs : [],
      priority: task && task.priority ? task.priority : '中',
      notes: typeof task?.notes === 'string' ? task.notes : task?.notes ? String(task.notes) : ''
    }));
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
  return (list || []).map((item) => {
    const doneStatus = item.done || '进行中';
    return {
      ...item,
      done: doneStatus,
      attachments: Array.isArray(item.attachments)
        ? item.attachments.map((file) => normalizeAttachmentEntry(file)).filter(Boolean)
        : [],
      asTask: Boolean(item.asTask) || logStatusIndicatesTask(doneStatus),
      milestone: Boolean(item.milestone),
      focus: Boolean(item.focus),
      taskDue: item.taskDue || '',
      taskPriority: item.taskPriority || '中',
      taskKey: item.taskKey || ''
    };
  });
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
    if (!clone.taskPriority) {
      clone.taskPriority = '中';
    }
    if (!clone.done) {
      clone.done = '进行中';
    }
    if (logStatusIndicatesTask(clone.done)) {
      clone.asTask = true;
    }
    return clone;
  });
}

function normalizeAttachmentEntry(file) {
  if (!file) return null;
  const attachment = {
    name: file.name || file.title || '附件',
    path: file.path || '',
    url: file.url || ''
  };
  if (!attachment.path && typeof file.url === 'string' && file.url.startsWith('file://')) {
    attachment.path = decodeURIComponent(file.url.replace('file://', ''));
  }
  if (!attachment.url && attachment.path) {
    attachment.url = toFileUrl(attachment.path);
  }
  return attachment;
}

function toFileUrl(filePath) {
  if (!filePath) return '';
  if (filePath.startsWith('file://')) return filePath;
  const normalized = filePath.replace(/\\/g, '/');
  return `file://${encodeURI(normalized)}`;
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
    const result = persistState();
    if (result && typeof result.catch === 'function') {
      result.catch((error) => console.warn('保存数据失败', error));
    }
    return;
  }
  if (persistTimer) {
    clearTimeout(persistTimer);
  }
  persistTimer = window.setTimeout(() => {
    const result = persistState();
    if (result && typeof result.catch === 'function') {
      result.catch((error) => console.warn('保存数据失败', error));
    }
    persistTimer = null;
  }, 260);
}

function loadFromLocalStorage(key, fallback) {
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

function hasFetchSupport() {
  return typeof window !== 'undefined' && typeof window.fetch === 'function';
}

async function loadStateFromServer() {
  if (!hasFetchSupport()) return null;
  try {
    const response = await fetch(SERVER_ENDPOINTS.state, {
      cache: 'no-store'
    });
    if (!response.ok) {
      if (response.status === 404) {
        return { projects: [], logs: [] };
      }
      return null;
    }
    const payload = await response.json();
    return {
      projects: Array.isArray(payload?.projects) ? payload.projects : [],
      logs: Array.isArray(payload?.logs) ? payload.logs : []
    };
  } catch (error) {
    console.warn('服务器存档读取失败。', error);
    return null;
  }
}

function saveStateToServer(payload) {
  if (!hasFetchSupport()) return Promise.resolve();
  return fetch(SERVER_ENDPOINTS.state, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    cache: 'no-store'
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`服务器返回异常状态码: ${response.status}`);
    }
    return response.json().catch(() => ({}));
  });
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
  if (persistenceMode === 'electron' && window.electronAPI && window.electronAPI.saveState) {
    return window.electronAPI.saveState({
      projects,
      logs: workLogs
    });
  }
  if (persistenceMode === 'server') {
    return saveStateToServer({
      projects,
      logs: workLogs
    });
  }
  if (typeof window === 'undefined' || !window.localStorage) return Promise.resolve();
  try {
    window.localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
    window.localStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(workLogs));
  } catch (error) {
    console.warn('自动保存失败', error);
  }
  return Promise.resolve();
}

async function bootstrap() {
  let projectState = null;
  let logState = null;

  if (window.electronAPI && window.electronAPI.loadState) {
    try {
      const stored = await window.electronAPI.loadState();
      if (stored && Array.isArray(stored.projects)) {
        projectState = stored.projects;
      }
      if (stored && Array.isArray(stored.logs)) {
        logState = stored.logs;
      }
      persistenceMode = 'electron';
    } catch (error) {
      console.warn('读取文件存储失败，回退到浏览器本地存储。', error);
      persistenceMode = 'localStorage';
    }
  }

  if (persistenceMode !== 'electron') {
    const serverState = await loadStateFromServer();
    if (serverState) {
      projectState = serverState.projects;
      logState = serverState.logs;
      persistenceMode = 'server';
    }
  }

  if (persistenceMode === 'localStorage') {
    const fallbackProjects = loadFromLocalStorage(STORAGE_KEYS.projects, defaultProjects);
    const fallbackLogs = loadFromLocalStorage(STORAGE_KEYS.logs, defaultWorkLogs);
    projectState = Array.isArray(projectState) ? projectState : fallbackProjects;
    logState = Array.isArray(logState) ? logState : fallbackLogs;
  }

  const projectSource = Array.isArray(projectState) && projectState.length ? projectState : defaultProjects;
  const logSource = Array.isArray(logState) && logState.length ? logState : defaultWorkLogs;

  projects = rehydrateProjects(projectSource, defaultProjects);
  workLogs = ensureLogIdentifiers(rehydrateLogs(logSource));

  init();

  if ((persistenceMode === 'electron' || persistenceMode === 'server') && (!projectState || !projectState.length || !logState || !logState.length)) {
    requestPersist(true);
  }
}

bootstrap();
