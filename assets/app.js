const DB_NAME = "tasklist_db";
const DB_VERSION = 1;
const STORE_TODOS = "todos";
const STORE_CATEGORIES = "categories";
const STORE_STATE = "state";

const DEFAULT_CATEGORIES = [
  { id: 1, name: "Planning", color: "#4a90e2" },
  { id: 2, name: "Development", color: "#2f7d32" },
  { id: 3, name: "QA", color: "#e0a400" },
  { id: 4, name: "Documentation", color: "#7f8c8d" },
  { id: 5, name: "Release", color: "#c0392b" }
];

const DEFAULT_TODOS = [
  {
    no: 1,
    taskName: "Wireframe list page",
    assignedTo: "Ava Chen",
    status: "In Progress",
    priority: "High",
    startDate: "2026-01-15",
    dueDate: "2026-01-31",
    percentComplete: 60,
    description: "Create initial layout for the list view.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 2,
    taskName: "Finalize validations",
    assignedTo: "Leo Kim",
    status: "Not Started",
    priority: "Medium",
    startDate: "2026-02-01",
    dueDate: "2026-02-05",
    percentComplete: 0,
    description: "Confirm required fields and percent range.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 3,
    taskName: "H2 console check",
    assignedTo: "Mia Patel",
    status: "Completed",
    priority: "Low",
    startDate: "2026-01-10",
    dueDate: "2026-01-12",
    percentComplete: 100,
    description: "Verify /h2-console access and schema.",
    categoryId: 2,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 4,
    taskName: "Theme polish",
    assignedTo: "Noah Park",
    status: "In Progress",
    priority: "High",
    startDate: "2026-01-20",
    dueDate: "2026-02-03",
    percentComplete: 45,
    description: "Align greens and reds to SharePoint style.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 5,
    taskName: "Pagination design",
    assignedTo: "Emma Sato",
    status: "Not Started",
    priority: "Normal",
    startDate: "2026-02-02",
    dueDate: "2026-02-06",
    percentComplete: 0,
    description: "Add paging controls to list view.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 6,
    taskName: "QA test cases",
    assignedTo: "Ryo Tanaka",
    status: "In Progress",
    priority: "High",
    startDate: "2026-02-01",
    dueDate: "2026-02-07",
    percentComplete: 35,
    description: "Draft QA scenarios and cases.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 7,
    taskName: "WBS update",
    assignedTo: "Nina Lee",
    status: "Completed",
    priority: "Medium",
    startDate: "2026-02-01",
    dueDate: "2026-02-02",
    percentComplete: 100,
    description: "Fill WBS template for QA schedule.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 8,
    taskName: "Confirm page review",
    assignedTo: "Kai Zhang",
    status: "Not Started",
    priority: "Low",
    startDate: "2026-02-03",
    dueDate: "2026-02-04",
    percentComplete: 0,
    description: "Check confirm page read-only fields.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 9,
    taskName: "Edit flow validation",
    assignedTo: "Sara Ito",
    status: "In Progress",
    priority: "High",
    startDate: "2026-02-03",
    dueDate: "2026-02-06",
    percentComplete: 50,
    description: "Verify edit flow, including dates.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 10,
    taskName: "Search UX improvements",
    assignedTo: "Paul Kim",
    status: "Not Started",
    priority: "Medium",
    startDate: "2026-02-04",
    dueDate: "2026-02-08",
    percentComplete: 0,
    description: "Tune search input behavior.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 11,
    taskName: "Sort indicators",
    assignedTo: "Liam Wong",
    status: "Completed",
    priority: "Low",
    startDate: "2026-01-25",
    dueDate: "2026-01-26",
    percentComplete: 100,
    description: "Verify sort arrows in header.",
    categoryId: 2,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 12,
    taskName: "Accessibility scan",
    assignedTo: "Olivia Park",
    status: "Not Started",
    priority: "Medium",
    startDate: "2026-02-05",
    dueDate: "2026-02-09",
    percentComplete: 0,
    description: "Basic contrast and focus checks.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 13,
    taskName: "Performance smoke",
    assignedTo: "Hana Cho",
    status: "In Progress",
    priority: "Medium",
    startDate: "2026-02-05",
    dueDate: "2026-02-07",
    percentComplete: 20,
    description: "Quick load-time review.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 14,
    taskName: "Error handling review",
    assignedTo: "Ben Miller",
    status: "Not Started",
    priority: "High",
    startDate: "2026-02-06",
    dueDate: "2026-02-10",
    percentComplete: 0,
    description: "Check validation error UI.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 15,
    taskName: "Documentation update",
    assignedTo: "Yui Nakamura",
    status: "In Progress",
    priority: "Medium",
    startDate: "2026-02-06",
    dueDate: "2026-02-08",
    percentComplete: 40,
    description: "Update README and guides.",
    categoryId: 4,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 16,
    taskName: "Release readiness",
    assignedTo: "Michael Ortiz",
    status: "Not Started",
    priority: "High",
    startDate: "2026-02-07",
    dueDate: "2026-02-09",
    percentComplete: 0,
    description: "Final check before release.",
    categoryId: 5,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 17,
    taskName: "Sprint planning deck",
    assignedTo: "Ava Chen",
    status: "Not Started",
    priority: "Medium",
    startDate: "2026-02-08",
    dueDate: "2026-02-10",
    percentComplete: 0,
    description: "Prepare the next sprint planning deck.",
    categoryId: 1,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 18,
    taskName: "API contract review",
    assignedTo: "Noah Park",
    status: "In Progress",
    priority: "High",
    startDate: "2026-02-08",
    dueDate: "2026-02-11",
    percentComplete: 30,
    description: "Review API contracts with backend.",
    categoryId: 2,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 19,
    taskName: "Test data refresh",
    assignedTo: "Ryo Tanaka",
    status: "Not Started",
    priority: "Medium",
    startDate: "2026-02-09",
    dueDate: "2026-02-12",
    percentComplete: 0,
    description: "Refresh test data for QA cycles.",
    categoryId: 3,
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    no: 20,
    taskName: "User guide draft",
    assignedTo: "Yui Nakamura",
    status: "In Progress",
    priority: "Low",
    startDate: "2026-02-09",
    dueDate: "2026-02-14",
    percentComplete: 20,
    description: "Draft the first version of the user guide.",
    categoryId: 4,
    createdAt: "2026-02-01T00:00:00.000Z"
  }
];

const SORT_FIELDS = new Set([
  "no",
  "taskName",
  "assignedTo",
  "status",
  "priority",
  "startDate",
  "dueDate",
  "percentComplete"
]);

const PAGE_SIZE = 10;

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_TODOS)) {
        db.createObjectStore(STORE_TODOS, { keyPath: "no" });
      }
      if (!db.objectStoreNames.contains(STORE_CATEGORIES)) {
        db.createObjectStore(STORE_CATEGORIES, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_STATE)) {
        db.createObjectStore(STORE_STATE, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function getAllFrom(storeName) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  }));
}

function getItem(storeName, key) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  }));
}

function putItem(storeName, item) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

function clearStore(storeName) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

function deleteItem(storeName, key) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

async function loadCategories() {
  const categories = await getAllFrom(STORE_CATEGORIES);
  if (categories.length > 0) {
    return categories;
  }
  await saveCategories(DEFAULT_CATEGORIES);
  return [...DEFAULT_CATEGORIES];
}

async function saveCategories(categories) {
  await clearStore(STORE_CATEGORIES);
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_CATEGORIES, "readwrite");
    const store = tx.objectStore(STORE_CATEGORIES);
    categories.forEach((category) => store.put(category));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function loadTodos() {
  const todos = await getAllFrom(STORE_TODOS);
  if (todos.length > 0) {
    return todos;
  }
  await saveTodos(DEFAULT_TODOS);
  return [...DEFAULT_TODOS];
}

async function saveTodos(todos) {
  await clearStore(STORE_TODOS);
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_TODOS, "readwrite");
    const store = tx.objectStore(STORE_TODOS);
    todos.forEach((todo) => store.put(todo));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getState(key) {
  const record = await getItem(STORE_STATE, key);
  return record ? record.value : null;
}

async function setState(key, value) {
  await putItem(STORE_STATE, { key, value });
}

async function removeState(key) {
  await deleteItem(STORE_STATE, key);
}

function getRagStatus(todo) {
  const progress = Number.isFinite(todo.percentComplete) ? todo.percentComplete : 0;
  const status = (todo.status || "").toLowerCase();
  if (status === "completed") {
    return "Green";
  }
  if (status === "cancelled") {
    return "Red";
  }
  if (progress >= 80) {
    return "Green";
  }
  if (progress >= 30) {
    return "Amber";
  }
  if (status === "on hold" || status === "merged") {
    return "Amber";
  }
  return "Red";
}

function getRagClass(todo) {
  const rag = getRagStatus(todo);
  if (rag === "Green") {
    return "rag-green";
  }
  if (rag === "Amber") {
    return "rag-amber";
  }
  return "rag-red";
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatCsvValue(value) {
  const str = value == null ? "" : String(value);
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
}

function getCategoryName(categoryId, categories) {
  const category = categories && categories.find((item) => item.id === categoryId);
  return category ? category.name : "";
}

function downloadCsv(todos, categories) {
  const headers = [
    "ID",
    "TaskName",
    "Owner",
    "Status",
    "Start Date",
    "Due Date",
    "Complete %",
    "Category",
    "Description"
  ];
  const rows = todos.map((todo) => [
    todo.no,
    todo.taskName,
    todo.assignedTo,
    todo.status,
    todo.startDate,
    todo.dueDate,
    Number.isFinite(todo.percentComplete) ? todo.percentComplete : "",
    getCategoryName(todo.categoryId, categories),
    todo.description || ""
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map(formatCsvValue).join(","))
    .join("\r\n");
  const bom = "\uFEFF";
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  a.href = url;
  a.download = `tasklist_${y}${m}${d}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function applyDefaults(todo) {
  if (!todo.status) {
    todo.status = "Not Started";
  }
  if (!todo.priority) {
    todo.priority = "Medium";
  }
  if (!Number.isFinite(todo.percentComplete)) {
    todo.percentComplete = 0;
  }
}

function parseQuery() {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get("q") || "",
    categoryId: params.get("categoryId"),
    sort: params.get("sort") || "no",
    dir: params.get("dir") || "asc",
    page: parseInt(params.get("page") || "0", 10),
    size: parseInt(params.get("size") || "20", 10),
    no: params.get("no")
  };
}

function buildQuery(params) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }
    query.set(key, String(value));
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

function formatDate(value) {
  return value || "";
}

function todayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDueDateState(dueDate) {
  if (!dueDate) {
    return "";
  }
  const today = todayDateString();
  if (dueDate < today) {
    return "overdue";
  }
  const due = new Date(`${dueDate}T00:00:00`);
  const current = new Date(`${today}T00:00:00`);
  const diffDays = Math.floor((due - current) / 86400000);
  if (diffDays <= 3) {
    return "soon";
  }
  return "";
}

function renderDueDateCell(dueDate) {
  const formatted = formatDate(dueDate);
  const state = getDueDateState(dueDate);
  if (!state) {
    return formatted;
  }
  const className = state === "overdue" ? "date-alert date-alert-overdue" : "date-alert date-alert-soon";
  const label = state === "overdue" ? "Overdue" : "Due soon";
  return `<span class="${className}" title="${label}">${formatted}</span>`;
}

function buildCategoryOptions(select, categories, includeAll) {
  select.innerHTML = "";
  if (includeAll) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "All Categories";
    select.appendChild(option);
  } else {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No Category";
    select.appendChild(option);
  }
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = String(category.id);
    option.textContent = category.name;
    select.appendChild(option);
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function initIndex() {
  const categories = await loadCategories();
  const todos = await loadTodos();
  const query = parseQuery();

  const size = PAGE_SIZE;
  const sortField = SORT_FIELDS.has(query.sort) ? query.sort : "no";
  const sortDir = query.dir === "desc" ? "desc" : "asc";

  const categorySelect = document.getElementById("categorySelect");
  buildCategoryOptions(categorySelect, categories, true);

  const form = document.getElementById("searchForm");
  form.elements.q.value = query.q;
  form.elements.categoryId.value = query.categoryId || "";
  form.elements.sort.value = sortField;
  form.elements.dir.value = sortDir;
  form.elements.size.value = String(size);

  const clearLink = document.getElementById("clearLink");
  const showClear = query.q || query.categoryId;
  clearLink.style.display = showClear ? "inline-flex" : "none";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const params = {
      q: form.elements.q.value.trim(),
      categoryId: form.elements.categoryId.value,
      sort: form.elements.sort.value,
      dir: form.elements.dir.value,
      page: 0,
      size
    };
    window.location.href = `index.html${buildQuery(params)}`;
  });

  const filtered = todos.filter((todo) => {
    const matchesQuery = query.q
      ? todo.taskName.toLowerCase().includes(query.q.toLowerCase())
      : true;
    const matchesCategory = query.categoryId
      ? String(todo.categoryId || "") === String(query.categoryId)
      : true;
    return matchesQuery && matchesCategory;
  });

  const downloadCsvButton = document.getElementById("downloadCsvButton");
  if (downloadCsvButton) {
    downloadCsvButton.addEventListener("click", () => downloadCsv(filtered, categories));
  }

  filtered.sort((a, b) => {
    const dir = sortDir === "desc" ? -1 : 1;
    const field = sortField;
    let left = a[field];
    let right = b[field];
    if (field === "no" || field === "percentComplete") {
      left = Number(left) || 0;
      right = Number(right) || 0;
      if (left !== right) {
        return left > right ? dir : -dir;
      }
    } else if (field === "startDate" || field === "dueDate") {
      left = left || "";
      right = right || "";
      if (left !== right) {
        return left > right ? dir : -dir;
      }
    } else {
      left = (left || "").toLowerCase();
      right = (right || "").toLowerCase();
      if (left !== right) {
        return left > right ? dir : -dir;
      }
    }
    return a.no > b.no ? 1 : -1;
  });

  const totalElements = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalElements / size));
  const page = clamp(Number.isFinite(query.page) ? query.page : 0, 0, totalPages - 1);

  const startIndex = page * size;
  const endIndex = startIndex + size;
  const pageItems = filtered.slice(startIndex, endIndex);

  const table = document.getElementById("todoTable");
  const selectAllRows = document.getElementById("selectAllRows");
  const bulkDeleteButton = document.getElementById("bulkDeleteButton");
  table.innerHTML = "";
  if (selectAllRows) {
    selectAllRows.checked = false;
    selectAllRows.indeterminate = false;
  }
  if (bulkDeleteButton) {
    bulkDeleteButton.disabled = true;
  }

  if (pageItems.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 12;
    cell.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-title">No tasks found</p>
        <p class="empty-state-copy">Try changing the search text, selecting a different category, or resetting the current filters.</p>
        <div class="empty-state-actions">
          <a class="btn btn-secondary" href="index.html">Reset Filters</a>
          <a class="btn btn-primary" href="create.html">Create Task</a>
        </div>
      </div>
    `;
    row.appendChild(cell);
    table.appendChild(row);
  } else {
    pageItems.forEach((todo) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td class="checkbox-col"><input class="row-checkbox" data-select-row="${todo.no}" type="checkbox" aria-label="Select task ${todo.no}" /></td>
        <td>${todo.no}</td>
        <td><a class="task-link" href="view.html${buildQuery({ no: todo.no })}">${todo.taskName}</a></td>
        <td><span class="cell-text" title="${todo.assignedTo || ""}">${todo.assignedTo || ""}</span></td>
        <td>${renderCategoryBadge(todo, categories)}</td>
        <td>${renderStatusBadge(todo.status)}</td>
        <td>${renderPriorityBadge(todo.priority)}</td>
        <td>${formatDate(todo.startDate)}</td>
        <td>${renderDueDateCell(todo.dueDate)}</td>
        <td>${Number.isFinite(todo.percentComplete) ? todo.percentComplete : ""}</td>
        <td><span class="rag ${getRagClass(todo)}" title="${getRagStatus(todo)}" aria-label="${getRagStatus(todo)}"></span></td>
        <td>
          <div class="actions">
            <a class="btn btn-primary" href="create.html${buildQuery({ no: todo.no })}">Edit</a>
            <button class="btn btn-danger-subtle" data-delete="${todo.no}" type="button">Delete</button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }

  const rowCheckboxes = Array.from(table.querySelectorAll("[data-select-row]"));

  function updateSelectionState() {
    const checkedCount = rowCheckboxes.filter((checkbox) => checkbox.checked).length;
    if (bulkDeleteButton) {
      bulkDeleteButton.disabled = checkedCount === 0;
    }
    if (selectAllRows) {
      selectAllRows.checked = rowCheckboxes.length > 0 && checkedCount === rowCheckboxes.length;
      selectAllRows.indeterminate = checkedCount > 0 && checkedCount < rowCheckboxes.length;
    }
  }

  if (selectAllRows) {
    selectAllRows.addEventListener("change", () => {
      rowCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAllRows.checked;
      });
      updateSelectionState();
    });
  }

  rowCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectionState);
  });

  if (bulkDeleteButton) {
    bulkDeleteButton.addEventListener("click", async () => {
      const selectedNos = rowCheckboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => Number(checkbox.getAttribute("data-select-row")))
        .filter((value) => Number.isFinite(value));
      if (selectedNos.length === 0) {
        return;
      }
      if (!window.confirm(`Delete ${selectedNos.length} selected task(s)?`)) {
        return;
      }
      const selectedSet = new Set(selectedNos);
      const updated = (await loadTodos()).filter((todo) => !selectedSet.has(todo.no));
      await saveTodos(updated);
      window.location.href = `index.html${buildQuery({
        q: query.q,
        categoryId: query.categoryId,
        sort: sortField,
        dir: sortDir,
        page,
        size
      })}`;
    });
  }

  table.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      const no = Number(button.getAttribute("data-delete"));
      if (!Number.isFinite(no)) {
        return;
      }
      if (!window.confirm("Delete this task?")) {
        return;
      }
      const updated = (await loadTodos()).filter((todo) => todo.no !== no);
      await saveTodos(updated);
      window.location.href = `index.html${buildQuery({
        q: query.q,
        categoryId: query.categoryId,
        sort: sortField,
        dir: sortDir,
        page,
        size
      })}`;
    });
  });

  const summary = document.getElementById("summary");
  const start = totalElements === 0 ? 0 : startIndex + 1;
  const end = totalElements === 0 ? 0 : Math.min(endIndex, totalElements);
  if (totalElements === 0) {
    summary.textContent = "No tasks";
  } else {
    summary.textContent = `Showing ${start}-${end} of ${totalElements}`;
  }

  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (totalPages > 1) {
    const prevLink = buildPageLink("Prev", page - 1, page === 0, sortField, sortDir, size, query);
    pagination.appendChild(prevLink);

    for (let p = 0; p < totalPages; p += 1) {
      const link = buildPageLink(String(p + 1), p, false, sortField, sortDir, size, query);
      if (p === page) {
        link.classList.add("active");
      }
      pagination.appendChild(link);
    }

    const nextLink = buildPageLink("Next", page + 1, page + 1 >= totalPages, sortField, sortDir, size, query);
    pagination.appendChild(nextLink);
  }

  document.querySelectorAll("[data-sort]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const field = link.getAttribute("data-sort");
      if (!SORT_FIELDS.has(field)) {
        return;
      }
      const nextDir = field === sortField && sortDir === "asc" ? "desc" : "asc";
      const params = {
        q: query.q,
        categoryId: query.categoryId,
        sort: field,
        dir: nextDir,
        page: 0,
        size
      };
      window.location.href = `index.html${buildQuery(params)}`;
    });
  });

  document.querySelectorAll("[data-sort-indicator]").forEach((span) => {
    const field = span.getAttribute("data-sort-indicator");
    const link = span.closest("a");
    if (field === sortField) {
      span.textContent = sortDir === "asc" ? "\u2191" : "\u2193";
      if (link) {
        link.classList.add("sort-active");
      }
    } else {
      span.textContent = "\u2195";
      if (link) {
        link.classList.remove("sort-active");
      }
    }
  });
}

function buildPageLink(label, page, disabled, sortField, sortDir, size, query) {
  const link = document.createElement("a");
  link.className = "page-link";
  if (disabled) {
    link.classList.add("disabled");
  }
  link.textContent = label;
  const params = {
    q: query.q,
    categoryId: query.categoryId,
    sort: sortField,
    dir: sortDir,
    page: disabled ? 0 : page,
    size
  };
  link.href = `index.html${buildQuery(params)}`;
  return link;
}

function renderCategoryBadge(todo, categories) {
  const category = categories.find((item) => item.id === todo.categoryId);
  if (!category) {
    return "";
  }
  return `<span class="badge badge-tone-${category.id}">${category.name}</span>`;
}

function renderStatusBadge(status) {
  if (!status) {
    return "";
  }
  return `<span class="status-pill status-${slugify(status)}">${status}</span>`;
}

function renderPriorityBadge(priority) {
  if (!priority) {
    return "";
  }
  return `<span class="priority-pill priority-${slugify(priority)}">${priority}</span>`;
}

async function initCreate() {
  const categories = await loadCategories();
  const todos = await loadTodos();
  const query = parseQuery();
  const form = document.getElementById("todoForm");
  const title = document.getElementById("formTitle");
  const ragRow = document.getElementById("ragRow");
  const ragValue = document.getElementById("ragValue");

  buildCategoryOptions(form.elements.categoryId, categories, false);

  let todo = null;
  let isEdit = false;

  const draft = await getState("draft");
  if (draft) {
    todo = draft;
    await removeState("draft");
  } else if (query.no) {
    todo = todos.find((item) => String(item.no) === String(query.no)) || null;
  }

  if (todo && todo.no) {
    isEdit = true;
    title.textContent = "Edit Task";
  } else {
    todo = {
      taskName: "",
      assignedTo: "",
      status: "Not Started",
      priority: "Medium",
      startDate: "",
      dueDate: "",
      percentComplete: 0,
      description: "",
      categoryId: ""
    };
    title.textContent = "New Task";
  }

  form.elements.no.value = todo.no || "";
  form.elements.title.value = todo.taskName || "";
  form.elements.author.value = todo.assignedTo || "";
  form.elements.categoryId.value = todo.categoryId ? String(todo.categoryId) : "";
  form.elements.status.value = todo.status || "Not Started";
  form.elements.priority.value = todo.priority || "Medium";
  form.elements.startDate.value = todo.startDate || "";
  form.elements.dueDate.value = todo.dueDate || "";
  form.elements.percentComplete.value = Number.isFinite(todo.percentComplete) ? todo.percentComplete : 0;
  form.elements.detail.value = todo.description || "";

  setupCreateHints(form);

  if (todo.priority && !Array.from(form.elements.priority.options).some((opt) => opt.value === todo.priority)) {
    const option = document.createElement("option");
    option.value = todo.priority;
    option.textContent = todo.priority;
    form.elements.priority.appendChild(option);
    form.elements.priority.value = todo.priority;
  }

  if (isEdit) {
    const rag = getRagStatus(todo);
    ragValue.textContent = rag;
    ragValue.className = `rag ${getRagClass(todo)}`;
    ragRow.style.display = "grid";
  } else {
    ragRow.style.display = "none";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearErrors(form);
    const nextTodo = buildTodoFromForm(form);
    const errors = validateTodo(nextTodo);
    if (Object.keys(errors).length > 0) {
      showErrors(form, errors);
      return;
    }
    applyDefaults(nextTodo);
    if (form.elements.no.value) {
      nextTodo.no = Number(form.elements.no.value);
      const existing = todos.find((item) => item.no === nextTodo.no);
      if (existing && existing.createdAt) {
        nextTodo.createdAt = existing.createdAt;
      }
    }
    await setState("pending", nextTodo);
    window.location.href = "confirm.html";
  });
}

function setupCreateHints(form) {
  const titleInput = form.querySelector("#title");
  const detailInput = form.querySelector("#detail");
  const titleHint = form.querySelector("#titleHint");
  const detailHint = form.querySelector("#detailHint");

  const updateTitleHint = () => {
    if (!titleHint) {
      return;
    }
    const length = titleInput.value.trim().length;
    titleHint.textContent = `Use a concise, descriptive task title. ${length} / 100`;
  };

  const updateDetailHint = () => {
    if (!detailHint) {
      return;
    }
    const length = detailInput.value.trim().length;
    detailHint.textContent = `Optional notes, scope, or handoff details. ${length} / 500`;
  };

  if (titleInput) {
    titleInput.addEventListener("input", updateTitleHint);
    updateTitleHint();
  }

  if (detailInput) {
    detailInput.addEventListener("input", updateDetailHint);
    updateDetailHint();
  }
}

function buildTodoFromForm(form) {
  const percentValue = form.elements.percentComplete.value;
  const percent = percentValue === "" ? null : Number(percentValue);
  return {
    no: form.elements.no.value ? Number(form.elements.no.value) : null,
    taskName: form.elements.title.value.trim(),
    assignedTo: form.elements.author.value.trim(),
    status: form.elements.status.value,
    priority: form.elements.priority.value,
    startDate: form.elements.startDate.value,
    dueDate: form.elements.dueDate.value,
    percentComplete: Number.isFinite(percent) ? percent : null,
    description: form.elements.detail.value.trim(),
    categoryId: form.elements.categoryId.value ? Number(form.elements.categoryId.value) : null
  };
}

function validateTodo(todo) {
  const errors = {};
  if (!todo.taskName) {
    errors.title = "Task Name is required.";
  } else if (todo.taskName.length > 100) {
    errors.title = "Task Name must be 100 characters or fewer.";
  }
  if (!todo.assignedTo) {
    errors.author = "Assigned To is required.";
  } else if (todo.assignedTo.length > 50) {
    errors.author = "Assigned To must be 50 characters or fewer.";
  }
  if (todo.description && todo.description.length > 500) {
    errors.detail = "Description must be 500 characters or fewer.";
  }
  if (todo.percentComplete !== null) {
    if (todo.percentComplete < 0 || todo.percentComplete > 100) {
      errors.percentComplete = "% Complete must be between 0 and 100.";
    }
  }
  if (todo.startDate && todo.dueDate && todo.dueDate < todo.startDate) {
    errors.dueDate = "Due Date must be on or after Start Date.";
  }
  return errors;
}

function clearErrors(form) {
  form.querySelectorAll("[data-error-for]").forEach((node) => {
    node.textContent = "";
  });
  form.querySelectorAll(".input-invalid").forEach((node) => {
    node.classList.remove("input-invalid");
    node.removeAttribute("aria-invalid");
  });
}

function showErrors(form, errors) {
  let firstInvalidField = null;
  Object.entries(errors).forEach(([field, message]) => {
    const target = form.querySelector(`[data-error-for="${field}"]`);
    if (target) {
      target.textContent = message;
    }
    const control = getFieldControl(form, field);
    if (control) {
      control.classList.add("input-invalid");
      control.setAttribute("aria-invalid", "true");
      if (!firstInvalidField) {
        firstInvalidField = control;
      }
    }
  });
  if (firstInvalidField) {
    firstInvalidField.focus();
  }
}

function getFieldControl(form, field) {
  const fieldMap = {
    title: "title",
    author: "author",
    dueDate: "dueDate",
    percentComplete: "percentComplete",
    detail: "detail"
  };
  const id = fieldMap[field];
  return id ? form.querySelector(`#${id}`) : null;
}

async function initConfirm() {
  const pending = await getState("pending");
  if (!pending) {
    window.location.href = "create.html";
    return;
  }
  const todo = pending;
  const categories = await loadCategories();
  const category = categories.find((item) => item.id === todo.categoryId);

  setText("confirmTitle", todo.taskName);
  setText("confirmAuthor", todo.assignedTo);
  setText("confirmCategory", category ? category.name : "");
  setText("confirmStatus", todo.status || "");
  setText("confirmPriority", todo.priority || "");
  setText("confirmStart", formatDate(todo.startDate));
  setText("confirmDue", formatDate(todo.dueDate));
  setText("confirmPercent", Number.isFinite(todo.percentComplete) ? todo.percentComplete : "");
  setText("confirmDetail", todo.description || "");

  const rag = getRagStatus(todo);
  const ragNode = document.getElementById("confirmRag");
  ragNode.textContent = "";
  ragNode.title = rag;
  ragNode.setAttribute("aria-label", rag);
  ragNode.className = `rag ${getRagClass(todo)}`;

  document.getElementById("saveButton").addEventListener("click", async () => {
    const todos = await loadTodos();
    let targetNo = todo.no;
    if (!targetNo) {
      targetNo = nextNo(todos);
      todo.no = targetNo;
      todo.createdAt = new Date().toISOString();
      todos.push(todo);
    } else {
      const index = todos.findIndex((item) => item.no === targetNo);
      if (index !== -1) {
        todo.createdAt = todos[index].createdAt || new Date().toISOString();
        todos[index] = todo;
      } else {
        todos.push(todo);
      }
    }
    applyDefaults(todo);
    await saveTodos(todos);
    await removeState("pending");
    await removeState("draft");
    window.location.href = `complete.html${buildQuery({ no: targetNo })}`;
  });

  document.getElementById("backButton").addEventListener("click", async () => {
    await setState("draft", todo);
    await removeState("pending");
    const query = todo.no ? buildQuery({ no: todo.no }) : "";
    window.location.href = `create.html${query}`;
  });
}

async function initComplete() {
  const query = parseQuery();
  const todos = await loadTodos();
  const categories = await loadCategories();
  const todo = todos.find((item) => String(item.no) === String(query.no));
  if (!todo) {
    window.location.href = "index.html";
    return;
  }
  const category = categories.find((item) => item.id === todo.categoryId);
  setText("completeTitle", todo.taskName);
  setText("completeAuthor", todo.assignedTo);
  setText("completeCategory", category ? category.name : "");
  setText("completeStatus", todo.status || "");
  setText("completePriority", todo.priority || "");
  setText("completeStart", formatDate(todo.startDate));
  setText("completeDue", formatDate(todo.dueDate));
  setText("completePercent", Number.isFinite(todo.percentComplete) ? todo.percentComplete : "");
  setText("completeDetail", todo.description || "");
  const ragNode = document.getElementById("completeRag");
  ragNode.textContent = "";
  ragNode.title = getRagStatus(todo);
  ragNode.setAttribute("aria-label", getRagStatus(todo));
  ragNode.className = `rag ${getRagClass(todo)}`;
  document.getElementById("completeEdit").href = `create.html${buildQuery({ no: todo.no })}`;
}

async function initView() {
  const query = parseQuery();
  const todos = await loadTodos();
  const categories = await loadCategories();
  const todo = todos.find((item) => String(item.no) === String(query.no));
  if (!todo) {
    window.location.href = "index.html";
    return;
  }
  const category = categories.find((item) => item.id === todo.categoryId);
  setText("viewTitle", todo.taskName);
  setText("viewAuthor", todo.assignedTo);
  setText("viewCategory", category ? category.name : "");
  setText("viewStatus", todo.status || "");
  setText("viewPriority", todo.priority || "");
  setText("viewStart", formatDate(todo.startDate));
  setText("viewDue", formatDate(todo.dueDate));
  setText("viewPercent", Number.isFinite(todo.percentComplete) ? todo.percentComplete : "");
  setText("viewDetail", todo.description || "");
  const ragNode = document.getElementById("viewRag");
  ragNode.textContent = "";
  ragNode.title = getRagStatus(todo);
  ragNode.setAttribute("aria-label", getRagStatus(todo));
  ragNode.className = `rag ${getRagClass(todo)}`;
  document.getElementById("viewEdit").href = `create.html${buildQuery({ no: todo.no })}`;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value || "";
  }
}

function nextNo(todos) {
  return todos.reduce((max, todo) => Math.max(max, todo.no || 0), 0) + 1;
}

async function init() {
  const page = document.body.dataset.page;
  if (!page) {
    return;
  }
  if (page === "index") {
    await initIndex();
  } else if (page === "create") {
    await initCreate();
  } else if (page === "confirm") {
    await initConfirm();
  } else if (page === "complete") {
    await initComplete();
  } else if (page === "view") {
    await initView();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    console.error(error);
    alert("Failed to load data. Please refresh the page.");
  });
});
