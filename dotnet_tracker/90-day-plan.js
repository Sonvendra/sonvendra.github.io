const plan = [
  {
    week: 1, title: "C# Basics", level: "easy",
    days: [
      { day: 1,  tasks: ["Install .NET SDK + VS Code/Visual Studio", "Create first console app", "Print variables"], output: "Hello + dynamic name program" },
      { day: 2,  tasks: ["Data types, variables", "Operators", "Mini task: calculator program"] },
      { day: 3,  tasks: ["if/else, switch", "Task: grading system"] },
      { day: 4,  tasks: ["Loops (for, while)", "Task: print patterns"] },
      { day: 5,  tasks: ["Methods", "Task: reusable functions"] },
      { day: 6,  tasks: ["Arrays & Lists", "Solve 5 problems"], weekend: true },
      { day: 7,  tasks: ["Revision", "Build mini console app (student system)"], weekend: true }
    ]
  },
  {
    week: 2, title: "OOP", level: "easy",
    days: [
      { day: 8,  tasks: ["Classes & Objects", "Create User class"] },
      { day: 9,  tasks: ["Encapsulation", "Add getters/setters"] },
      { day: 10, tasks: ["Inheritance", "Base class + derived"] },
      { day: 11, tasks: ["Polymorphism", "Method overriding"] },
      { day: 12, tasks: ["Interfaces", "Implement service"] },
      { day: 13, tasks: ["Combine all OOP", "Task: Employee system"], weekend: true },
      { day: 14, tasks: ["Mini Project: Bank system"], weekend: true }
    ]
  },
  {
    week: 3, title: "Advanced C#", level: "easy",
    days: [
      { day: 15, tasks: ["Exception handling", "Add try/catch in project"] },
      { day: 16, tasks: ["Delegates (basic understanding)"] },
      { day: 17, tasks: ["LINQ", "Filter list"] },
      { day: 18, tasks: ["Collections deep dive"] },
      { day: 19, tasks: ["Async/Await", "Simulate API delay"] },
      { day: 20, tasks: ["File handling", "Save/read file"], weekend: true },
      { day: 21, tasks: ["Revision + small project"], weekend: true }
    ]
  },
  {
    week: 4, title: "ASP.NET Core", level: "easy",
    days: [
      { day: 22, tasks: ["Create Web API project"] },
      { day: 23, tasks: ["Controllers + routing"] },
      { day: 24, tasks: ["GET API"] },
      { day: 25, tasks: ["POST API"] },
      { day: 26, tasks: ["Dependency Injection (compare Angular services)"] },
      { day: 27, tasks: ["Middleware + config"], weekend: true },
      { day: 28, tasks: ["CRUD API (in-memory)"], weekend: true }
    ]
  },
  {
    week: 5, title: "Entity Framework", level: "medium",
    days: [
      { day: 29, tasks: ["Install EF Core"] },
      { day: 30, tasks: ["DbContext + models"] },
      { day: 31, tasks: ["Migrations"] },
      { day: 32, tasks: ["Insert data"] },
      { day: 33, tasks: ["Update / Delete"] },
      { day: 34, tasks: ["Relationships"], weekend: true },
      { day: 35, tasks: ["Build Product API (DB)"], weekend: true }
    ]
  },
  {
    week: 6, title: "API Structure", level: "medium",
    days: [
      { day: 36, tasks: ["Repository pattern"] },
      { day: 37, tasks: ["Service layer"] },
      { day: 38, tasks: ["DTOs"] },
      { day: 39, tasks: ["Validation"] },
      { day: 40, tasks: ["Logging"] },
      { day: 41, tasks: ["Global error handling"], weekend: true },
      { day: 42, tasks: ["Refactor API"], weekend: true }
    ]
  },
  {
    week: 7, title: "Authentication", level: "medium",
    days: [
      { day: 43, tasks: ["Auth basics"] },
      { day: 44, tasks: ["JWT"] },
      { day: 45, tasks: ["Role-based auth"] },
      { day: 46, tasks: ["Secure endpoints"] },
      { day: 47, tasks: ["Refresh tokens"] },
      { day: 48, tasks: ["Implement auth"], weekend: true },
      { day: 49, tasks: ["Test APIs"], weekend: true }
    ]
  },
  {
    week: 8, title: "Angular Integration", level: "medium",
    days: [
      { day: 50, tasks: ["Connect Angular → API"] },
      { day: 51, tasks: ["Create service"] },
      { day: 52, tasks: ["Login UI"] },
      { day: 53, tasks: ["Route guards"] },
      { day: 54, tasks: ["Error handling"] },
      { day: 55, tasks: ["Forms + API"], weekend: true },
      { day: 56, tasks: ["Mini full stack app"], weekend: true }
    ]
  },
  {
    week: 9, title: "Architecture", level: "hard",
    days: [
      { day: 57, tasks: ["Layered architecture"] },
      { day: 58, tasks: ["Clean architecture"] },
      { day: 59, tasks: ["Folder structure"] },
      { day: 60, tasks: ["Refactor project"] },
      { day: 61, tasks: ["CQRS intro"] },
      { day: 62, tasks: ["MediatR basics"], weekend: true },
      { day: 63, tasks: ["Apply in project"], weekend: true }
    ]
  },
  {
    week: 10, title: "Advanced APIs", level: "hard",
    days: [
      { day: 64, tasks: ["Caching"] },
      { day: 65, tasks: ["Pagination"] },
      { day: 66, tasks: ["Filtering"] },
      { day: 67, tasks: ["API versioning"] },
      { day: 68, tasks: ["Rate limiting"] },
      { day: 69, tasks: ["Background jobs"], weekend: true },
      { day: 70, tasks: ["Optimize API"], weekend: true }
    ]
  },
  {
    week: 11, title: "Testing", level: "hard",
    days: [
      { day: 71, tasks: ["Unit testing (xUnit)"] },
      { day: 72, tasks: ["Mocking"] },
      { day: 73, tasks: ["Integration testing"] },
      { day: 74, tasks: ["Test controllers"] },
      { day: 75, tasks: ["Improve coverage"] },
      { day: 76, tasks: ["Debugging"], weekend: true },
      { day: 77, tasks: ["Practice"], weekend: true }
    ]
  },
  {
    week: 12, title: "Final Phase", level: "hard",
    days: [
      { day: "78–82", tasks: ["Build full project: Auth, CRUD, Roles, Angular UI"] },
      { day: 83, tasks: ["Deployment basics"] },
      { day: 84, tasks: ["Deploy to Azure"] },
      { day: 85, tasks: ["CI/CD basics"] },
      { day: 86, tasks: ["Resume update"] },
      { day: 87, tasks: ["Interview questions"] },
      { day: 88, tasks: ["Mock interview"] },
      { day: 89, tasks: ["Fix weak areas"] },
      { day: 90, tasks: ["Final revision"] }
    ]
  }
];

const STORAGE_KEY = "ninetyDayPlanProgress";
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

Object.keys(completed).forEach(k => {
  if (completed[k] === true) {
    completed[k] = { date: null };
  }
});

const TOTAL_DAYS = 90;

const levelLabel = { easy: "Beginner", medium: "Intermediate", hard: "Advanced" };

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDateDisplay(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

function render() {
  const container = document.getElementById("weeksContainer");
  container.innerHTML = "";

  plan.forEach(weekObj => {
    const weekEl = document.createElement("section");
    weekEl.className = `week level-${weekObj.level}`;

    const weekDayKeys = weekObj.days.map(d => String(d.day));
    const doneInWeek = weekDayKeys.filter(k => completed[k]).length;

    weekEl.innerHTML = `
      <div class="week-header">
        <h2 class="week-title">
          Week ${weekObj.week} · ${weekObj.title}
          <span class="level-pill">${levelLabel[weekObj.level]}</span>
        </h2>
        <span class="week-progress">${doneInWeek} / ${weekObj.days.length} done</span>
      </div>
      <div class="days-grid"></div>
    `;

    const grid = weekEl.querySelector(".days-grid");

    weekObj.days.forEach(d => {
      const key = String(d.day);
      const isDone = !!completed[key];
      const card = document.createElement("div");
      card.className = `day-card ${d.weekend ? "weekend" : ""} ${isDone ? "done" : ""}`;
      card.dataset.key = key;

      const tasksHtml = d.tasks.map(t => `<li>${t}</li>`).join("");
      const outputHtml = d.output ? `<div class="output-line">Output: ${d.output}</div>` : "";

      const completionDate = isDone ? (completed[key].date || "") : "";
      const dateHtml = isDone
        ? `
          <label class="completed-date" title="Edit completion date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>Completed:</span>
            <input type="date" data-key="${key}" value="${completionDate}" max="${todayISO()}" />
          </label>
        `
        : "";

      card.innerHTML = `
        <div class="day-head">
          <div class="day-label">Day ${d.day}${d.weekend ? " · Weekend" : ""}</div>
          <div class="checkbox">
            <svg viewBox="0 0 24 24"><polyline points="4 12 10 18 20 6"/></svg>
          </div>
        </div>
        <ul class="day-tasks">${tasksHtml}</ul>
        ${outputHtml}
        ${dateHtml}
      `;

      card.addEventListener("click", (e) => {
        if (e.target.closest(".completed-date")) return;
        toggleDay(key);
      });

      const dateInput = card.querySelector('input[type="date"]');
      if (dateInput) {
        dateInput.addEventListener("click", (e) => e.stopPropagation());
        dateInput.addEventListener("change", (e) => {
          e.stopPropagation();
          updateDate(key, e.target.value);
        });
      }

      grid.appendChild(card);
    });

    container.appendChild(weekEl);
  });

  updateOverallProgress();
}

function toggleDay(key) {
  if (completed[key]) delete completed[key];
  else completed[key] = { date: todayISO() };
  saveProgress();
  render();
}

function updateDate(key, value) {
  if (!completed[key]) return;
  completed[key].date = value || null;
  saveProgress();
}

function updateOverallProgress() {
  let doneDays = 0;
  Object.keys(completed).forEach(k => {
    if (k === "78–82") doneDays += 5;
    else doneDays += 1;
  });
  const pct = Math.round((doneDays / TOTAL_DAYS) * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPercent").textContent = pct + "%";
  document.getElementById("progressText").textContent = `${doneDays} of ${TOTAL_DAYS} days completed`;
}

function resetProgress() {
  if (confirm("Reset all progress? This cannot be undone.")) {
    completed = {};
    localStorage.removeItem(STORAGE_KEY);
    render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetProgress);
  render();
});
