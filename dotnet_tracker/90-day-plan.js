const plan = [
  {
    week: 1, title: ".NET & C# Foundations", level: "easy",
    days: [
      { day: 1,  tasks: ["Introduction to .NET", "What is .NET? Comparing .NET to other technologies", "Advantages, architecture & design goals of the .NET Framework", "Languages used in .NET; assemblies in .NET"], output: "Install .NET SDK + first console 'Hello World'" },
      { day: 2,  tasks: ["Introducing the .NET framework", "CLR and DLR; Class Library", "CTS, MSIL, PE file format", "JIT Compiler"] },
      { day: 3,  tasks: ["Reflection (load types/metadata at runtime)", "Garbage Collection (generations, dispose pattern)"] },
      { day: 4,  tasks: ["What is C#.NET; comparing C# to C++ and Java", "Why C#; features of C#", "C# sample programs"] },
      { day: 5,  tasks: [".NET namespaces", "Command line tools (dotnet CLI)", "Command line arguments in C#"] },
      { day: 6,  tasks: ["Variables, data types, operators, expressions", "Type conversions; boxing and unboxing", "Access modifiers and access specifiers"], weekend: true },
      { day: 7,  tasks: ["Conditional branching (if/else, switch)", "Repeating code blocks (for, while, do-while, foreach)", "Unconditional branching (break, continue, goto, return)", "Practice: calculator + grading system"], weekend: true }
    ]
  },
  {
    week: 2, title: "Arrays, Methods & OOP Basics", level: "easy",
    days: [
      { day: 8,  tasks: ["Introducing arrays; manipulating arrays", "Single, multi-dimensional and jagged arrays", "Arrays as collections"] },
      { day: 9,  tasks: ["Methods (definition, signatures, return types)", "Method overloading", "Static members"] },
      { day: 10, tasks: ["Parameter passing (ref, out, params, in)", "Constants and read-only fields"] },
      { day: 11, tasks: ["Objects & classes", "Constructors and initialization"] },
      { day: 12, tasks: ["Destructors / finalizers", "Properties and indexers", "Auto-implemented properties"] },
      { day: 13, tasks: ["Encapsulation in practice", "Apply access specifiers across a class hierarchy"], weekend: true },
      { day: 14, tasks: ["Mini project: User / Student class system"], weekend: true }
    ]
  },
  {
    week: 3, title: "Advanced OOP", level: "easy",
    days: [
      { day: 15, tasks: ["Inheritance (single, multilevel)", "Base/derived constructors"] },
      { day: 16, tasks: ["Method overriding (virtual, override, new)", "Polymorphism — compile-time and run-time"] },
      { day: 17, tasks: ["Abstract classes", "Sealed classes"] },
      { day: 18, tasks: ["Interfaces", "Implementing services through interfaces"] },
      { day: 19, tasks: ["Operator overloading"] },
      { day: 20, tasks: ["Combine all OOP — Employee management system"], weekend: true },
      { day: 21, tasks: ["Mini project: Bank system"], weekend: true }
    ]
  },
  {
    week: 4, title: "Collections, Generics, Strings & LINQ", level: "easy",
    days: [
      { day: 22, tasks: ["Non-generic collections: ArrayList, HashTable"] },
      { day: 23, tasks: ["Working with Dictionaries, Stacks and Queues", "Generics and Lists (List<T>)"] },
      { day: 24, tasks: ["Generic interfaces", "Generic constraints", "Generics and arrays"] },
      { day: 25, tasks: ["Creating your own generic collection classes"] },
      { day: 26, tasks: ["String and StringBuilder class", "String formatting", "Anonymous types"] },
      { day: 27, tasks: ["Language Integrated Query (LINQ)", "LINQ queries; filtering, ordering, aggregation"], weekend: true },
      { day: 28, tasks: ["LINQ inserts, deletes and updates", "LINQ transformations"], weekend: true }
    ]
  },
  {
    week: 5, title: "Exceptions, Delegates, Events, Async & C# 4+ Features", level: "medium",
    days: [
      { day: 29, tasks: ["Exception fundamentals", "Structured exception handling (try / catch / finally)"] },
      { day: 30, tasks: ["User-defined exception classes", "Inner exceptions; throw / rethrow"] },
      { day: 31, tasks: ["Delegates", "Anonymous methods"] },
      { day: 32, tasks: ["Lambda expressions", "Events (publisher / subscriber pattern)"] },
      { day: 33, tasks: ["Async / await", "Asynchronous programming keywords (Task, ValueTask, ConfigureAwait)", "Simulate API delay"] },
      { day: 34, tasks: ["C# 4+ features — dynamic data type", "Named & optional arguments", "Variance in generic interfaces (in / out)", "Automating Office (overview)"], weekend: true },
      { day: 35, tasks: ["Refactor previous projects using delegates, lambdas, events and async"], weekend: true }
    ]
  },
  {
    week: 6, title: "File I/O, Serialization, XML & GUI", level: "medium",
    days: [
      { day: 36, tasks: ["Introduction to File I/O operations", "Directory and File classes"] },
      { day: 37, tasks: ["FileStream, TextReader, TextWriter", "BinaryWriter, BinaryReader, MemoryStream"] },
      { day: 38, tasks: ["Serialization and deserialization (binary, JSON, XML)", "Convert XPS file to bitmap"] },
      { day: 39, tasks: ["XML in the .NET Framework", "XML namespaces and classes", "XmlReader and XmlWriter"] },
      { day: 40, tasks: [".NET DOM parser", "XML serialization", "XPath and XSLT", "LINQ to XML — manipulating XML documents in memory", "XML and the web"] },
      { day: 41, tasks: ["Introduction to Windows Forms", "Standard WinForm controls; properties and events", "Dialog boxes; menus, progress bar, tree view controls"], weekend: true },
      { day: 42, tasks: ["MDI forms", "Build a small WinForms desktop tool"], weekend: true }
    ]
  },
  {
    week: 7, title: "ADO.NET & Entity Framework Core", level: "medium",
    days: [
      { day: 43, tasks: ["ADO.NET architecture", "Advantages of ADO.NET over ADO / OLEDB", "Connected vs disconnected data access architecture"] },
      { day: 44, tasks: ["Data providers — SQL Server, OLEDB, ODBC, Oracle", "Connection, Command, DataReader"] },
      { day: 45, tasks: ["DataAdapter and DataSet", "Handling tables in a DataSet", "Working with data controls"] },
      { day: 46, tasks: ["Executing queries and SQL statements", "Stored procedures", "Multiple result sets; table schema", "XML and ADO.NET"] },
      { day: 47, tasks: ["Install EF Core", "DbContext + models"] },
      { day: 48, tasks: ["EF Core migrations", "CRUD with EF Core (insert / update / delete)"], weekend: true },
      { day: 49, tasks: ["EF Core relationships (1:1, 1:N, N:N)", "Build Product API with SQL Server"], weekend: true }
    ]
  },
  {
    week: 8, title: "ASP.NET Core Web API", level: "medium",
    days: [
      { day: 50, tasks: ["Create Web API project", "Project structure overview"] },
      { day: 51, tasks: ["Controllers + routing (attribute & conventional)"] },
      { day: 52, tasks: ["GET, POST, PUT and DELETE endpoints"] },
      { day: 53, tasks: ["Dependency injection (compare to Angular services)"] },
      { day: 54, tasks: ["Middleware pipeline", "Configuration (appsettings.json, environments)"] },
      { day: 55, tasks: ["Repository pattern", "Service layer", "DTOs and AutoMapper"], weekend: true },
      { day: 56, tasks: ["Validation (DataAnnotations / FluentValidation)", "Logging", "Global error handling"], weekend: true }
    ]
  },
  {
    week: 9, title: "Authentication & Angular Integration", level: "hard",
    days: [
      { day: 57, tasks: ["Auth basics; ASP.NET Core Identity", "Password hashing"] },
      { day: 58, tasks: ["JWT tokens (issue, validate)"] },
      { day: 59, tasks: ["Role-based authorization", "Secure endpoints"] },
      { day: 60, tasks: ["Refresh tokens"] },
      { day: 61, tasks: ["Connect Angular → API; create HTTP service"] },
      { day: 62, tasks: ["Login UI; route guards", "HTTP interceptor for tokens"], weekend: true },
      { day: 63, tasks: ["Reactive forms + API; build a mini full stack app"], weekend: true }
    ]
  },
  {
    week: 10, title: "Architecture & Advanced APIs", level: "hard",
    days: [
      { day: 64, tasks: ["Layered architecture", "Clean architecture; folder structure"] },
      { day: 65, tasks: ["CQRS intro", "MediatR basics; apply in project"] },
      { day: 66, tasks: ["Caching (in-memory, distributed / Redis)"] },
      { day: 67, tasks: ["Pagination", "Filtering & sorting"] },
      { day: 68, tasks: ["API versioning", "Rate limiting"] },
      { day: 69, tasks: ["Background jobs (Hangfire / Quartz / HostedService)"], weekend: true },
      { day: 70, tasks: ["Optimize API performance"], weekend: true }
    ]
  },
  {
    week: 11, title: "Testing & Debugging", level: "hard",
    days: [
      { day: 71, tasks: ["Unit testing with xUnit"] },
      { day: 72, tasks: ["Mocking (Moq, NSubstitute)"] },
      { day: 73, tasks: ["Integration testing (WebApplicationFactory)"] },
      { day: 74, tasks: ["Test controllers and middleware"] },
      { day: 75, tasks: ["Improve coverage; test naming patterns"] },
      { day: 76, tasks: ["Debugging techniques; diagnostic tools"], weekend: true },
      { day: 77, tasks: ["Practice; refactor with tests"], weekend: true }
    ]
  },
  {
    week: 12, title: "Capstone & Deployment", level: "hard",
    days: [
      { day: "78–82", tasks: ["Build full project: Auth, CRUD, Roles, Angular UI"] },
      { day: 83, tasks: ["Deployment basics (IIS, Kestrel, Docker overview)"] },
      { day: 84, tasks: ["Deploy to Azure App Service"] },
      { day: 85, tasks: ["CI/CD basics (GitHub Actions / Azure DevOps)"] },
      { day: 86, tasks: ["Resume update; LinkedIn polish"] },
      { day: 87, tasks: ["Interview questions practice (C#, .NET, EF, Angular)"] },
      { day: 88, tasks: ["Mock interview"] },
      { day: 89, tasks: ["Fix weak areas"] },
      { day: 90, tasks: ["Final revision; portfolio review"] }
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
