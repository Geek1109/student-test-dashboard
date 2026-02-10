const questions = {
  1: [
    { q: "React is a ___?", o: ["Library", "Framework", "DB", "OS"], a: "Library" },
    { q: "JSX stands for?", o: ["Java XML", "JS XML", "JavaScript XML", "JSON"], a: "JavaScript XML" },
    { q: "React uses ___ DOM", o: ["Real", "Virtual", "Shadow", "Browser"], a: "Virtual" },
    { q: "useState is a ___", o: ["Class", "Hook", "API", "Component"], a: "Hook" },
    { q: "React is maintained by?", o: ["Google", "Amazon", "Facebook", "Microsoft"], a: "Facebook" }
  ],

  2: [
    { q: "Which hook runs side effects?", o: ["useFetch", "useState", "useEffect", "useData"], a: "useEffect" },
    { q: "Props are ___", o: ["Mutable", "Immutable", "Private", "Hidden"], a: "Immutable" },
    { q: "State is ___", o: ["Global", "Immutable", "Mutable", "Static"], a: "Mutable" },
    { q: "React apps start from?", o: ["index.js", "App.css", "main.html", "root.js"], a: "index.js" },
    { q: "SPA means?", o: ["Single Page App", "Server Page App", "Simple App", "Static App"], a: "Single Page App" }
  ],

  3: [
    { q: "npm stands for?", o: ["Node Package Manager", "New PM", "Node Process", "Network PM"], a: "Node Package Manager" },
    { q: "Which is NOT a hook?", o: ["useState", "useEffect", "useClass", "useRef"], a: "useClass" },
    { q: "React keys help in?", o: ["Security", "Performance", "Routing", "Styling"], a: "Performance" },
    { q: "useRef is used for?", o: ["API", "DOM access", "CSS", "State"], a: "DOM access" },
    { q: "React.Fragment is used for?", o: ["Loop", "Grouping", "Routing", "State"], a: "Grouping" }
  ],

  4: [
    { q: "Which company created React?", o: ["Google", "Facebook", "Amazon", "Netflix"], a: "Facebook" },
    { q: "Component names must start with?", o: ["Small letter", "Number", "Capital letter", "Symbol"], a: "Capital letter" },
    { q: "JSX allows ___ in JS", o: ["HTML", "CSS", "SQL", "Python"], a: "HTML" },
    { q: "React is written in?", o: ["Java", "Python", "C++", "JavaScript"], a: "JavaScript" },
    { q: "Which hook stores previous value?", o: ["useMemo", "useRef", "useEffect", "useState"], a: "useRef" }
  ],

  5: [
    { q: "Controlled components use?", o: ["DOM", "State", "API", "Props"], a: "State" },
    { q: "Uncontrolled components use?", o: ["State", "DOM", "Hooks", "Redux"], a: "DOM" },
    { q: "React Router is for?", o: ["Styling", "State", "Routing", "Testing"], a: "Routing" },
    { q: "Which hook optimizes performance?", o: ["useEffect", "useMemo", "useRef", "useState"], a: "useMemo" },
    { q: "React StrictMode is for?", o: ["Errors", "Debug", "Security", "Build"], a: "Debug" }
  ]
};

/* Duplicate logically for tests 6–10 */
for (let i = 6; i <= 10; i++) {
  questions[i] = questions[i - 5];
}

export default questions;
