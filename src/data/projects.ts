export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'zeek',
    title: 'Zeek Cyberpunk Dashboard',
    description:
      'PyQt5 dashboard to visualize Zeek logs, suspicious activity, and system telemetry.',
    tech: ['Python', 'PyQt5', 'Zeek'],
    repo: 'https://github.com/smcc1213/Cyberpunk-Python-Dashboard',
  },
  {
    id: 'flashcards',
    title: 'Flashcard App',
    description: 'Offline Electron flashcard app powered by JSON datasets.',
    tech: ['TypeScript', 'Electron'],
    repo: 'https://github.com/smcc1213/FlashcardApp',
  },
  {
    id: 'gasquest',
    title: 'GasQuest Mobile App',
    description:
      'Xamarin app to track gas usage and find nearby gas stations. Senior capstone project. Built with Adam Nethaway.',
    tech: ['C#', 'Xamarin', 'Google Maps API'],
    repo: 'https://github.com/smcc1213/GasQuest',
  },
  {
    id: 'meditation',
    title: 'Meditation and Journal App',
    description:
      'Console application to be for meditating and journaling. Built for a college course final project.',
    tech: ['C++'],
    repo: 'https://github.com/smcc1213/Self-Care-Console-Application',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'My personal portfolio website (this website) to showcase my projects and experience.',
    tech: ['React', 'TypeScript', 'Vite', 'Sass'],
    repo: 'https://github.com/smcc1213/my-portfolio',
  },
  {
    id: 'simpletask',
    title: 'Simple Tasks To-Do App',
    description:
      'A simple cross-platform ASP.NET Core Razor Pages Todo App built with Entity Framework Core and SQLite.Runs on Ubuntu + VS Code but works anywhere .NET 9 is supported.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite'],
    repo: 'https://github.com/smcc1213/Simple-Tasks',
  },
];
