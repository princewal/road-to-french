import "../css/style.css"

const questions = [
  {
    prompt: "How would you describe your French right now?",
    options: [
      "I do not speak any French",
      "I know a few isolated words",
      "I can make simple everyday sentences",
      "I can hold comfortable conversations",
      "I speak fluently, including nuance",
    ],
  },
  {
    prompt: "Can you introduce yourself and say where you live in French?",
    options: [
      "No",
      "Only with a script",
      "Yes, simply",
      "Yes, in detail",
      "Yes, and I adapt my register",
    ],
  },
  {
    prompt:
      "How do you handle past tenses such as passe compose and imparfait?",
    options: [
      "I have never used them",
      "I recognize them",
      "I use passe compose",
      "I switch between both",
      "I use them automatically",
    ],
  },
  {
    prompt: "When reading a French news article, I...",
    options: [
      "Understand nothing",
      "Catch a few words",
      "Understand the general topic",
      "Follow the argument",
      "Catch tone and implication",
    ],
  },
  {
    prompt: "In a work meeting held in French, I...",
    options: [
      "Could not attend",
      "Would need a translator",
      "Could follow with effort",
      "Could participate",
      "Could lead the discussion",
    ],
  },
  {
    prompt: "When writing an email in French, I...",
    options: [
      "Could not write one",
      "Would copy a template",
      "Could write a short, simple email",
      "Could write a structured professional email",
      "Could write a nuanced, persuasive email",
    ],
  },
  {
    prompt: "The subjunctive is...",
    options: [
      "New to me",
      "A word I have heard",
      "Something I recognize",
      "Something I use sometimes",
      "Natural to me",
    ],
  },
  {
    prompt: "When listening to a French podcast at normal speed, I...",
    options: [
      "Understand nothing",
      "Catch isolated words",
      "Follow the main points",
      "Follow almost everything",
      "Understand it fully",
    ],
  },
  {
    prompt: "Defending an opinion with arguments in French is...",
    options: [
      "Not possible yet",
      "Possible with single words",
      "Possible with simple reasons",
      "Possible with structured arguments",
      "Possible with nuance and counter-arguments",
    ],
  },
  {
    prompt: "Have you studied or been evaluated in French before?",
    options: [
      "Never",
      "A little at school",
      "A beginner course",
      "An intermediate course",
      "A certified exam such as TCF, TEF, or SLE",
    ],
  },
]

const levels = [
  {
    code: "A1",
    title: "A1 - Complete beginner",
    description:
      "You are starting with the foundations: greetings, pronunciation, basic phrases, and everyday vocabulary.",
    roadmap:
      "Recommended route: build an A1 foundation before moving toward A2 and the NCLC roadmap.",
  },
  {
    code: "A2",
    title: "A2 - Elementary",
    description:
      "You can manage predictable everyday exchanges and communicate in simple French on familiar topics.",
    roadmap:
      "Recommended route: strengthen everyday French and move toward B1 with structured practice.",
  },
  {
    code: "B1",
    title: "B1 - Intermediate",
    description:
      "You can hold your own on familiar topics, follow clear speech, and explain your opinions with support.",
    roadmap:
      "Recommended route: develop fluency, accuracy, and exam skills toward B2 and NCLC 7.",
  },
  {
    code: "B2",
    title: "B2 - Upper intermediate",
    description:
      "You can interact with useful fluency, understand complex material, and argue a point of view.",
    roadmap:
      "Recommended route: focus on TEF/TCF task performance and the four-skill NCLC 7 target.",
  },
]

const test = document.querySelector("#level-test")
const questionContainer = document.querySelector("#level-test-question")
const progress = document.querySelector("#level-test-progress")
const backButton = document.querySelector("#level-test-back")
const nextButton = document.querySelector("#level-test-next")
const result = document.querySelector("#level-test-result")
const resultTitle = document.querySelector("#level-test-result-title")
const resultDescription = document.querySelector(
  "#level-test-result-description",
)
const resultRoadmap = document.querySelector("#level-test-result-roadmap")
const resultField = document.querySelector("#level-test-result-field")
const routeField = document.querySelector("#level-test-route-field")

if (test && questionContainer) {
  let currentQuestion = 0
  const answers = Array(questions.length).fill(null)

  const renderQuestion = () => {
    const question = questions[currentQuestion]
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`
    questionContainer.innerHTML = `
      <fieldset>
        <legend class="text-2xl font-semibold leading-tight text-theme-text sm:text-3xl">${question.prompt}</legend>
        <div class="mt-7 grid gap-3">
          ${question.options
            .map(
              (option, optionIndex) => `
                <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4 text-base leading-7 text-slate-700 transition hover:border-theme-primary has-checked:border-theme-primary has-checked:bg-theme-primary-faint">
                  <input class="mt-1 h-4 w-4 accent-theme-primary" type="radio" name="question-${currentQuestion}" value="${optionIndex}" ${answers[currentQuestion] === optionIndex ? "checked" : ""} />
                  <span>${option}</span>
                </label>
              `,
            )
            .join("")}
        </div>
      </fieldset>
    `
    backButton.disabled = currentQuestion === 0
    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "See my result"
        : "Next question"
  }

  const saveAnswer = () => {
    const selected = questionContainer.querySelector("input:checked")
    if (!selected) {
      questionContainer
        .querySelector("fieldset")
        .insertAdjacentHTML(
          "beforeend",
          '<p class="mt-5 text-sm font-bold text-theme-primary" role="alert">Choose one answer to continue.</p>',
        )
      return false
    }
    answers[currentQuestion] = Number(selected.value)
    return true
  }

  const showResult = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0)
    const average = total / answers.length
    const levelIndex =
      average < 1.25 ? 0 : average < 2.5 ? 1 : average < 3.6 ? 2 : 3
    const selectedLevel = levels[levelIndex]
    resultTitle.textContent = selectedLevel.title
    resultDescription.textContent = selectedLevel.description
    resultRoadmap.textContent = selectedLevel.roadmap
    resultField.value = `${selectedLevel.code} - ${selectedLevel.title.replace(`${selectedLevel.code} - `, "")}`
    routeField.value =
      selectedLevel.code === "B2"
        ? "PR Classic track / NCLC 7 preparation"
        : `${selectedLevel.code} foundation toward NCLC 7`
    result.classList.remove("hidden")
    nextButton.classList.add("hidden")
    backButton.classList.add("hidden")
    result.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  nextButton.addEventListener("click", () => {
    if (!saveAnswer()) return
    if (currentQuestion === questions.length - 1) {
      showResult()
      return
    }
    currentQuestion += 1
    renderQuestion()
  })

  backButton.addEventListener("click", () => {
    if (currentQuestion === 0) return
    currentQuestion -= 1
    renderQuestion()
  })

  test.addEventListener("submit", (event) => {
    if (result.classList.contains("hidden")) event.preventDefault()
  })

  renderQuestion()
}
