import { PythonIcon, JavaScriptIcon, TypeScriptIcon } from './LanguageIcons';

interface Repository {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
  language?: string;
}

const langToIconMap: Record<string, JSX.Element> = {
  JavaScript: <JavaScriptIcon />,
  Python: <PythonIcon />,
  TypeScript: <TypeScriptIcon />
};

const RepoTile: React.FC<{ key: number; repo: Repository }> = ({ repo }) => {
  const langIcon = repo.language ? langToIconMap[repo.language] : null;
  return (
    <a
      key={repo.id}
      href={repo.html_url}
      className={`repo-tile ${
        repo.language ? `repo-tile-${repo.language.toLowerCase()}` : ''
      } group p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
    >
      {langIcon !== null ? langIcon : ''}
      <div>
        <h2 className="text-2x1 font-semibold text-gray-100">
          {repo.name}
          {repo.fork ? ' (fork)' : ''}
        </h2>
        <p className="text-gray-200">{repo.description}</p>
      </div>
    </a>
  );
};

const RepoList: React.FC<{ repos: Repository[] }> = ({ repos }) => {
  return (
    <div className="repo-list grid grid-cols-3 gap-4">
      {repos.map((repo) => (
        <RepoTile key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
