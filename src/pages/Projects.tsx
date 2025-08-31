import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((p) => (
          <article className="card" id={p.id} key={p.id}>
            <header>
              <h3>{p.title}</h3>
              <p className="small">{p.tech.join(' · ')}</p>
            </header>
            <p>{p.description}</p>
            <div className="actions">
              {p.repo && (
                <a className="repo-button" href={p.repo} target="_blank">
                  Repo
                </a>
              )}
              {p.demo && (
                <a className="button" href={p.demo} target="_blank">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
