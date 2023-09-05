import { NextPage } from "next";

interface Repository {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
  
}

const RepositoryItem: NextPage<{ repo: Repository }> = ({ repo }) => {
  return (
    <>
        <a href={repo.html_url}>{repo.name}</a>: {repo.description}
      </>
  );
};

export default RepositoryItem;
