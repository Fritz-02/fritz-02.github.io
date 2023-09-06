interface Repository {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
}


const RepoTile: React.FC<{key: number, repo: Repository}> = ({repo}) => {
    return (
          <a key={repo.id} href={repo.html_url} className="repo-tile group bg-green-700 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2x1 font-semibold text-gray-100">{repo.name}

            {repo.fork ? ' (fork)' : ''}
            
            </h2>
            <p className="text-gray-200">{repo.description}</p>
          </a>
      );
}


const RepoList: React.FC<{ repos: Repository[] }> = ({ repos }) => {
  return (
    <div className="repo-list grid grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoTile key={repo.id} repo={repo}/>
      ))}
    </div>
  );
};

export default RepoList;
