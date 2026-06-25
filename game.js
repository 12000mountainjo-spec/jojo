const chapter = window.CHAPTER_01;
const saveKey = "jojo_mobile_vn_ch01_save";

const uiText = {
  unknown: "???",
  choice: "\uC120\uD0DD",
  me: "\uB098",
  direction: "\uC5F0\uCD9C",
  system: "\uC2DC\uC2A4\uD15C",
  ending: "1\uD654 \uC885\uB8CC",
  chapter: "1\uD654",
  prologue: "\uD504\uB864\uB85C\uADF8",
  choosePrompt: "\uC5B4\uB5BB\uAC8C \uD560\uAE4C?",
  saved: "\uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.",
  noSave: "\uC800\uC7A5\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
  loaded: "\uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.",
  badSave: "\uC800\uC7A5 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
  noLog: "\uC544\uC9C1 \uC77D\uC740 \uBB38\uC7A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
  noRoute: "\uBD84\uAE30 \uC218\uCE58\uAC00 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4.",
  auto: "\uC790\uB3D9",
  autoStop: "\uC790\uB3D9 \uC911\uC9C0",
  skip: "\uC2A4\uD0B5",
  skipStop: "\uC2A4\uD0B5 \uC911\uC9C0",
  loadFail: "1\uD654 \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
  complete: "1\uD654 \uB9C8\uC9C0\uB9C9 \uBB38\uC7A5\uAE4C\uC9C0 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4.",
};

const state = {
  screen: "main",
  index: 0,
  vars: {},
  log: [],
  auto: false,
  skip: false,
  insertNode: null,
  loggedNodeIds: {},
  choiceHistory: [],
};

const els = {
  stage: document.getElementById("stage"),
  studioSplash: document.getElementById("studioSplash"),
  sceneImage: document.getElementById("sceneImage"),
  spriteLayer: document.getElementById("spriteLayer"),
  titleOverlay: document.getElementById("titleOverlay"),
  mainMenu: document.getElementById("mainMenu"),
  mainMenuNotice: document.getElementById("mainMenuNotice"),
  newGameBtn: document.getElementById("newGameBtn"),
  continueBtn: document.getElementById("continueBtn"),
  cgRecallBtn: document.getElementById("cgRecallBtn"),
  optionsBtn: document.getElementById("optionsBtn"),
  mainSubPanel: document.getElementById("mainSubPanel"),
  mainSubTitle: document.getElementById("mainSubTitle"),
  mainSubBody: document.getElementById("mainSubBody"),
  mainSubCloseBtn: document.getElementById("mainSubCloseBtn"),
  choicePanel: document.getElementById("choicePanel"),
  speakerName: document.getElementById("speakerName"),
  progressText: document.getElementById("progressText"),
  mainText: document.getElementById("mainText"),
  typeLabel: document.getElementById("typeLabel"),
  drawer: document.getElementById("drawer"),
  drawerBody: document.getElementById("drawerBody"),
  menuBtn: document.getElementById("menuBtn"),
  closeDrawerBtn: document.getElementById("closeDrawerBtn"),
  saveBtn: document.getElementById("saveBtn"),
  loadBtn: document.getElementById("loadBtn"),
  autoBtn: document.getElementById("autoBtn"),
  skipBtn: document.getElementById("skipBtn"),
  logBtn: document.getElementById("logBtn"),
  restartBtn: document.getElementById("restartBtn"),
  chapterLabel: document.getElementById("chapterLabel"),
  titleLabel: document.getElementById("titleLabel"),
  mainReturnConfirm: document.getElementById("mainReturnConfirm"),
  confirmMainReturnBtn: document.getElementById("confirmMainReturnBtn"),
  cancelMainReturnBtn: document.getElementById("cancelMainReturnBtn"),
};

let autoTimer = null;
let toastTimer = null;

function clampIndex(index) {
  return Math.max(0, Math.min(index, chapter.nodes.length - 1));
}

function currentNode() {
  if (state.insertNode) return state.insertNode;
  return chapter.nodes[clampIndex(state.index)];
}

function mainBackgroundImage() {
  return (
    (chapter.backgrounds && chapter.backgrounds.auto_protagonist_reveal) ||
    (chapter.backgrounds && chapter.backgrounds.protagonist_reveal) ||
    imageFor(chapter.nodes[0])
  );
}

function updateContinueButton() {
  const hasSave = !!localStorage.getItem(saveKey);
  els.continueBtn.disabled = !hasSave;
  els.continueBtn.setAttribute("aria-disabled", hasSave ? "false" : "true");
}

function showMainMenu(message = "") {
  state.screen = "main";
  setAuto(false);
  setSkip(false);
  hideDrawer();
  hideMainReturnConfirm();
  hideMainSubPanel();
  els.stage.dataset.screen = "main";
  els.stage.dataset.cinematic = "";
  els.stage.dataset.nodeType = "";
  els.stage.classList.remove("flash-burst");
  els.sceneImage.src = mainBackgroundImage();
  els.spriteLayer.innerHTML = "";
  els.spriteLayer.dataset.spriteSrc = "";
  els.titleOverlay.classList.add("hidden");
  els.choicePanel.classList.add("hidden");
  els.mainMenu.classList.remove("hidden");
  els.mainMenuNotice.textContent = message;
  updateContinueButton();
}

function finishStudioSplash() {
  document.body.classList.remove("splashing");
  if (!els.studioSplash) return;
  window.setTimeout(() => {
    els.studioSplash.classList.add("hidden");
  }, 2100);
}

function startNewGame() {
  resetGameState();
  state.screen = "game";
  els.stage.dataset.screen = "game";
  els.mainMenu.classList.add("hidden");
  hideMainSubPanel();
  hideMainReturnConfirm();
  render();
}

function resetGameState() {
  state.index = 0;
  state.vars = {};
  state.log = [];
  state.insertNode = null;
  state.loggedNodeIds = {};
  state.choiceHistory = [];
  setAuto(false);
  setSkip(false);
}

function restoreSavePayload(payload) {
  state.index = clampIndex(Number(payload.index || 0));
  state.vars = payload.vars || {};
  state.log = payload.log || [];
  state.insertNode = payload.insertNode || null;
  state.loggedNodeIds = payload.loggedNodeIds || {};
  state.choiceHistory = payload.choiceHistory || [];
}

function continueFromMain() {
  const raw = localStorage.getItem(saveKey);
  if (!raw) {
    showMainMenu(uiText.noSave);
    return;
  }

  try {
    restoreSavePayload(JSON.parse(raw));
    state.screen = "game";
    els.stage.dataset.screen = "game";
    els.mainMenu.classList.add("hidden");
    hideMainSubPanel();
    render();
    showToast(uiText.loaded);
  } catch {
    showMainMenu(uiText.badSave);
  }
}

function showMainSubPanel(title, text) {
  els.mainSubTitle.textContent = title;
  els.mainSubBody.textContent = text;
  els.mainSubPanel.classList.remove("hidden");
}

function hideMainSubPanel() {
  els.mainSubPanel.classList.add("hidden");
}

function showCgRecall() {
  showMainSubPanel(
    "CG 회상",
    [
      "프롤로그 CG",
      "",
      "01. 주인공 등장",
      "02. 사무실 장면",
      "03. 고조 클로즈업",
      "",
      "현재는 기본 목록만 구성되어 있습니다. 이후 CG 해금 플래그와 썸네일 그리드를 연결합니다.",
    ].join("\n")
  );
}

function showOptions() {
  showMainSubPanel(
    "옵션",
    [
      "텍스트 속도: 기본",
      "자동 진행 속도: 기본",
      "효과음: 기본",
      "화면 플래시: 켜짐",
      "",
      "현재는 기본 얼개입니다. 다음 단계에서 실제 슬라이더와 토글을 연결합니다.",
    ].join("\n")
  );
}

function showMainReturnConfirm() {
  setAuto(false);
  setSkip(false);
  els.mainReturnConfirm.classList.remove("hidden");
}

function hideMainReturnConfirm() {
  els.mainReturnConfirm.classList.add("hidden");
}

function speakerFor(node) {
  if (node.type === "dialogue") return node.speaker || uiText.unknown;
  if (node.type === "choice") return uiText.choice;
  if (node.type === "monologue") return node.speaker || uiText.me;
  if (node.type === "effect") return uiText.direction;
  if (node.type === "title") return "TITLE";
  if (node.type === "ending") return uiText.ending;
  return node.speaker || uiText.system;
}

function typeFor(node) {
  const labels = {
    narration: "ADV",
    dialogue: "TALK",
    monologue: "MIND",
    effect: "EVENT",
    choice: "SELECT",
    system: "SYS",
    title: "TITLE",
    ending: "RESULT",
  };
  return labels[node.type] || node.type;
}

function textFor(node) {
  if (node.type === "choice") return node.prompt || uiText.choosePrompt;
  if (node.type === "ending") return endingText();
  return node.text || "";
}

function imageFor(node) {
  const firstBackground = Object.keys(chapter.backgrounds || {})[0];
  const bgKey = node.bg || chapter.defaultBackground || firstBackground;
  return chapter.backgrounds[bgKey] || chapter.backgrounds[firstBackground] || "";
}

function spriteFor(node) {
  if (node.clearSprite) return null;
  if (node.sprite) return node.sprite;
  for (let i = state.index - 1; i >= 0; i -= 1) {
    const previous = chapter.nodes[i];
    if (previous && previous.clearSprite) return null;
    if (previous && previous.sprite) return previous.sprite;
  }
  return null;
}

function renderSprite(node) {
  const sprite = spriteFor(node);
  if (!sprite) {
    els.spriteLayer.innerHTML = "";
    els.spriteLayer.dataset.spriteSrc = "";
    return;
  }

  const character = chapter.characters && chapter.characters[sprite.character];
  if (!character || !character.sprites) return;

  const expression = sprite.expression || "normal";
  const src = character.sprites[expression] || character.sprites.normal;
  if (!src) return;

  const position = sprite.position || "center";
  const className = `character-sprite position-${position} expression-${expression}`;
  if (els.spriteLayer.dataset.spriteSrc === src) {
    const current = els.spriteLayer.querySelector(".character-sprite");
    if (current) {
      current.className = className;
      current.alt = character.name || "";
      return;
    }
  }

  els.spriteLayer.innerHTML = "";
  els.spriteLayer.dataset.spriteSrc = src;
  const img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = character.name || "";
  els.spriteLayer.appendChild(img);
}

function renderChoices(node) {
  els.choicePanel.innerHTML = "";
  if (node.type !== "choice" || !node.choices.length) {
    els.choicePanel.classList.add("hidden");
    return;
  }

  node.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.className = `choice-button choice-tone-${choiceTone(choice)}`;
    button.type = "button";
    button.innerHTML = [
      `<span class="choice-index">0${choiceIndex + 1}</span>`,
      `<span class="choice-label">${escapeHtml(choice.label)}</span>`,
    ].join("");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      choose(choice, choiceIndex);
    });
    els.choicePanel.appendChild(button);
  });
  els.choicePanel.classList.remove("hidden");
}

function renderTitle(node) {
  els.titleOverlay.classList.toggle("hidden", !node.showTitle);
}

function recordNode(node) {
  if (!node || state.loggedNodeIds[node.id]) return;
  const text = textFor(node).trim();
  if (!text) return;
  state.loggedNodeIds[node.id] = true;
  state.log.push({
    speaker: speakerFor(node),
    type: typeFor(node),
    text,
  });
  if (state.log.length > 200) state.log.shift();
}

function render() {
  const node = currentNode();
  const image = imageFor(node);

  if (els.sceneImage.getAttribute("src") !== image) {
    els.sceneImage.src = image;
  }

  els.stage.dataset.cinematic = node.cinematic || "";
  els.stage.dataset.nodeType = node.type || "";
  els.stage.dataset.screen = "game";
  els.stage.classList.remove("flash-burst");
  if (node.flash) {
    void els.stage.offsetWidth;
    els.stage.classList.add("flash-burst");
  }
  els.chapterLabel.textContent = chapter.chapterLabel || uiText.chapter;
  els.titleLabel.textContent = chapter.title || uiText.prologue;
  els.speakerName.textContent = speakerFor(node);
  els.mainText.textContent = textFor(node);
  els.mainText.scrollTop = 0;
  els.typeLabel.textContent = typeFor(node);
  els.progressText.textContent = `${state.index + 1} / ${chapter.nodes.length}`;

  renderSprite(node);
  renderTitle(node);
  renderChoices(node);
  recordNode(node);
  refreshMenuState();
}

function next() {
  if (state.screen !== "game") return;
  const node = currentNode();
  if (node.type === "choice") return;
  if (state.insertNode) {
    state.insertNode = null;
    render();
    return;
  }
  if (state.index < chapter.nodes.length - 1) {
    state.index += 1;
    render();
  } else {
    setAuto(false);
    setSkip(false);
    showDrawer(routeReport());
  }
}

function choose(choice, choiceIndex) {
  const choiceNode = currentNode();
  applyEffects(choice.effects || []);
  state.choiceHistory.push({
    index: choiceIndex,
    label: choice.label,
    effects: choice.effects || [],
    result: choice.result || null,
  });
  state.log.push({
    speaker: uiText.choice,
    type: "SELECT",
    text: `${choiceIndex + 1}. ${choice.label}`,
  });
  showToast(choiceFeedback(choice));
  state.index = clampIndex(state.index + 1);
  state.insertNode = createChoiceResultNode(choiceNode, choice, choiceIndex);
  render();
}

function createChoiceResultNode(choiceNode, choice, choiceIndex) {
  const result = choice.result || {};
  const nextNode = chapter.nodes[clampIndex(state.index)] || choiceNode;
  const expression = result.spriteExpression || expressionFromChoice(choice);
  return {
    id: `${choiceNode.id}_result_${choiceIndex}`,
    type: "effect",
    speaker: uiText.direction,
    text: result.text || choiceFeedback(choice),
    bg: result.bg || choiceNode.bg || nextNode.bg,
    cg: result.cg || "",
    choices: [],
    routeTag: choiceNode.routeTag || "",
    effects: [],
    meta: {
      generatedResult: true,
      choiceLabel: choice.label,
    },
    sprite: {
      character: "prologue_wife",
      expression,
      position: "center",
    },
  };
}

function expressionFromChoice(choice) {
  const effects = choice.effects || [];
  if (effects.some((effect) => effect.key.endsWith(".dominance"))) return "startled";
  if (effects.some((effect) => effect.key.endsWith(".dependence"))) return "shy";
  if (effects.some((effect) => effect.key.endsWith(".desire"))) return "soft";
  if (effects.some((effect) => effect.key.endsWith(".trust"))) return "trust";
  return "normal";
}

function applyEffects(effects) {
  effects.forEach((effect) => {
    const oldValue = Number(state.vars[effect.key] || 0);
    state.vars[effect.key] = oldValue + Number(effect.value || 0);
  });
}

function routeValue(name) {
  return Number(state.vars[`prologue_wife.${name}`] || 0);
}

function routeScores() {
  const trust = routeValue("trust");
  const guard = routeValue("guard");
  const desire = routeValue("desire");
  const affection = routeValue("affection");
  const dependence = routeValue("dependence");
  const dominance = routeValue("dominance");
  return { trust, guard, desire, affection, dependence, dominance };
}

function endingName() {
  const s = routeScores();
  const highRiskChoices = state.choiceHistory.filter((choice) =>
    choice.effects.some((effect) => effect.key.endsWith(".guard") && effect.value >= 14)
  ).length;
  if (s.guard >= 48 || highRiskChoices >= 3) return "\uC2E4\uD328";
  if (s.dominance >= 36 && s.guard < 48) return "\uC8FC\uC885\uAD00\uACC4";
  if (s.affection + s.desire + s.trust >= 38) return "\uC5F0\uC778";
  return "\uCE5C\uAD6C";
}

function endingText() {
  const name = endingName();
  const s = routeScores();
  return [
    `\uD504\uB864\uB85C\uADF8 1\uD654\uAC00 \uB05D\uB0AC\uB2E4.`,
    `\uD6C4\uC18D \uB8E8\uD2B8: ${name}`,
    "",
    `\uD638\uAC10 ${s.trust + s.affection} / \uC758\uC874 ${s.dependence} / \uC9C0\uBC30 ${s.dominance} / \uACBD\uACC4 ${s.guard}`,
  ].join("\n");
}

function routeReport() {
  const s = routeScores();
  return [
    `\uD6C4\uC18D \uB8E8\uD2B8: ${endingName()}`,
    "",
    `\uD638\uAC10: ${s.trust + s.affection}`,
    `\uC758\uC874: ${s.dependence}`,
    `\uC9C0\uBC30: ${s.dominance}`,
    `\uACBD\uACC4: ${s.guard}`,
    "",
    "\uC120\uD0DD \uAE30\uB85D",
    ...state.choiceHistory.map((choice, idx) => `${idx + 1}. ${choice.label}`),
  ].join("\n");
}

function choiceTone(choice) {
  const keys = (choice.effects || []).map((effect) => effect.key);
  if (keys.some((key) => key.endsWith(".dominance"))) return "red";
  if (keys.some((key) => key.endsWith(".trust"))) return "gold";
  return "blue";
}

function choiceMeta(choice) {
  const effects = choice.effects || [];
  const words = [];
  const add = (suffix, label, positive = true) => {
    const effect = effects.find((item) => item.key.endsWith(suffix));
    if (!effect) return;
    if (suffix === ".guard" && effect.value < 0) {
      words.push("\uACBD\uACC4 \uC644\uD654");
      return;
    }
    words.push(`${label} ${positive && effect.value > 0 ? "\uC0C1\uC2B9" : "\uBCC0\uD654"}`);
  };
  add(".trust", "\uC2E0\uB8B0");
  add(".affection", "\uD638\uAC10");
  add(".desire", "\uC778\uB825");
  add(".dependence", "\uC758\uC874");
  add(".dominance", "\uC8FC\uB3C4\uAD8C");
  add(".guard", "\uACBD\uACC4");
  return words.length ? words.join(" / ") : "\uBD84\uAE30 \uAE30\uB85D";
}

function choiceFeedback(choice) {
  const meta = choiceMeta(choice);
  if (meta.includes("\uACBD\uACC4 \uC644\uD654")) return "\uADF8\uB140\uC758 \uACBD\uACC4\uAC00 \uC870\uAE08 \uD480\uB838\uB2E4.";
  if (meta.includes("\uC8FC\uB3C4\uAD8C")) return "\uBD84\uC704\uAE30\uC758 \uC8FC\uB3C4\uAD8C\uC744 \uC7A1\uC558\uB2E4.";
  if (meta.includes("\uC758\uC874")) return "\uADF8\uB140\uC758 \uC2DC\uC120\uC774 \uB354 \uC624\uB798 \uBA38\uBB3C\uB800\uB2E4.";
  return "\uC120\uD0DD\uC774 \uAE30\uB85D\uB418\uC5C8\uB2E4.";
}

function showToast(message) {
  let toast = document.getElementById("gameToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "gameToast";
    toast.className = "game-toast";
    els.stage.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function saveGame() {
  const payload = {
    index: state.index,
    vars: state.vars,
    log: state.log,
    insertNode: state.insertNode,
    loggedNodeIds: state.loggedNodeIds,
    choiceHistory: state.choiceHistory,
  };
  localStorage.setItem(saveKey, JSON.stringify(payload));
  updateContinueButton();
  showDrawer(uiText.saved);
}

function loadGame() {
  const raw = localStorage.getItem(saveKey);
  if (!raw) {
    showDrawer(uiText.noSave);
    return;
  }

  try {
    restoreSavePayload(JSON.parse(raw));
    state.screen = "game";
    els.mainMenu.classList.add("hidden");
    render();
    showDrawer(uiText.loaded);
  } catch {
    showDrawer(uiText.badSave);
  }
}

function restartGame() {
  resetGameState();
  hideDrawer();
  render();
}

function setAuto(enabled) {
  state.auto = enabled;
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
  if (enabled) {
    autoTimer = setInterval(() => {
      if (els.drawer.classList.contains("hidden")) next();
    }, 1800);
  }
  refreshMenuState();
}

function setSkip(enabled) {
  state.skip = enabled;
  if (enabled) {
    setAuto(false);
    skipForward();
  }
  refreshMenuState();
}

function skipForward() {
  if (!state.skip) return;
  const node = currentNode();
  if (node.type === "choice" || state.index >= chapter.nodes.length - 1) {
    setSkip(false);
    return;
  }
  state.index += 1;
  render();
  window.setTimeout(skipForward, 160);
}

function showLog() {
  if (!state.log.length) {
    showDrawer(uiText.noLog);
    return;
  }
  const lines = state.log
    .slice(-80)
    .map((entry) => `[${entry.speaker}] ${entry.text}`)
    .join("\n\n");
  showDrawer(lines);
}

function showRouteState() {
  const keys = Object.keys(state.vars).sort();
  if (!keys.length) return uiText.noRoute;
  return routeReport();
}

function showDrawer(text) {
  els.drawerBody.textContent = text || showRouteState();
  els.drawer.classList.remove("hidden");
}

function hideDrawer() {
  els.drawer.classList.add("hidden");
}

function refreshMenuState() {
  els.autoBtn.textContent = state.auto ? uiText.autoStop : uiText.auto;
  els.skipBtn.textContent = state.skip ? uiText.skipStop : uiText.skip;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function bindEvents() {
  els.stage.addEventListener("click", (event) => {
    if (state.screen !== "game") return;
    if (event.target.closest("button, aside, .choice-panel")) return;
    next();
  });

  els.menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    showMainReturnConfirm();
  });
  els.newGameBtn.addEventListener("click", startNewGame);
  els.continueBtn.addEventListener("click", continueFromMain);
  els.cgRecallBtn.addEventListener("click", showCgRecall);
  els.optionsBtn.addEventListener("click", showOptions);
  els.mainSubCloseBtn.addEventListener("click", hideMainSubPanel);
  els.mainSubPanel.addEventListener("click", (event) => {
    if (event.target === els.mainSubPanel) hideMainSubPanel();
  });
  els.confirmMainReturnBtn.addEventListener("click", () => {
    showMainMenu();
  });
  els.cancelMainReturnBtn.addEventListener("click", hideMainReturnConfirm);
  els.mainReturnConfirm.addEventListener("click", (event) => {
    if (event.target === els.mainReturnConfirm) hideMainReturnConfirm();
  });
  els.closeDrawerBtn.addEventListener("click", hideDrawer);
  els.drawer.addEventListener("click", (event) => {
    if (event.target === els.drawer) hideDrawer();
  });

  els.saveBtn.addEventListener("click", saveGame);
  els.loadBtn.addEventListener("click", loadGame);
  els.autoBtn.addEventListener("click", () => {
    setAuto(!state.auto);
    hideDrawer();
  });
  els.skipBtn.addEventListener("click", () => {
    setSkip(!state.skip);
    hideDrawer();
  });
  els.logBtn.addEventListener("click", showLog);
  els.restartBtn.addEventListener("click", restartGame);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideMainReturnConfirm();
      hideMainSubPanel();
      hideDrawer();
      return;
    }
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      next();
    }
  });
}

if (!chapter || !Array.isArray(chapter.nodes)) {
  document.body.classList.remove("splashing");
  document.body.textContent = uiText.loadFail;
} else {
  bindEvents();
  showMainMenu();
  window.setTimeout(finishStudioSplash, 7000);
}
