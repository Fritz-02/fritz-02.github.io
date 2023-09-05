import { useState, useEffect } from "react";
import RepositoryItem from "../components/projects/Project";

interface Repository {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  html_url: string;
}

const fetctRepos = async () => {
  try {
    const response = await fetch("https://api.github.com/users/fritz-02/repos");

    if (!response.ok) {
      throw new Error(
        `GitHub API request failed with status: ${response.status}`
      );
    }

    const repos = (await response.json()) as Repository[];

    return repos;
  } catch (error: any) {
    console.error("Error fetching GitHub repositories:", error.message);
    return [];
  }
};

const Page = async () => {
    const repos = await fetctRepos();
  
  return (
    <>
      <div>
        <h1>Fritz&apos;s GitHub Repositories</h1>
        {repos.length === 0 ? (
          <p>No public repositories found.</p>
        ) : (
          <ul>
            {repos.map((repo) => (
                <li key={repo.id}>
                    <RepositoryItem repo={repo}/>
                </li>
                
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Page;
