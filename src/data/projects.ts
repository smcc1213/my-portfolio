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
  },
  {
    id: 'flashcards',
    title: 'Flashcard App',
    description: 'Offline Electron flashcard app powered by JSON datasets.',
    tech: ['TypeScript', 'Electron'],
  },
  {
    id: 'gasquest',
    title: 'GasQuest Mobile App',
    description:
      'Xamarin app to track gas usage and find nearby gas stations. Senior capstone project. Built with Adam Nethaway.',
    tech: ['C#', 'Xamarin', 'Google Maps API'],
  },
  {
    id: 'meditation',
    title: 'Meditation and Journal App',
    description:
      'Console application to be for meditating and journaling. Built for a college course final project.',
    tech: ['C++'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'My personal portfolio website (this website) to showcase my projects and experience.',
    tech: ['React', 'TypeScript', 'Vite', 'Sass'],
  },
];
