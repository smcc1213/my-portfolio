import { Link } from 'react-router-dom';

const item = [
  { title: 'Zeek Cyberpunk Dashboard', href: '/projects#zeek' },
  { title: 'Flashcard App', href: '/projects#flashcards' },
  { title: 'GasQuest Mobile App', href: '/projects#gasquest' },
  { title: 'Meditation and Journal App', href: '/projects#meditation' },
  { title: 'Portfolio Website', href: '/projects#portfolio' },
];

export default function SelectedProjects() {
  return (
    <section className="selected-projects" aria-labelledby="seleted-heading">
      <h3 id="seleted-heading">SELECTED PROJECTS</h3>
      <ul>
        {item.map((project) => (
          <li key={project.title}>
            <Link to={project.href} className="project-link">
              <span>{project.title}</span>
              <span className="arrow" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
