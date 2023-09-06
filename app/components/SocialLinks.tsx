const SocialLinks = () => {
  const sites = [{ name: 'Github', link: 'https://github.com/fritz-02' }];
  return (
    <div>
      <ul className="list-disc pl-4">
        {sites.map((site, index) => (
          <li key={index}>
            <a href={site.link} className="text-blue-500 hover:underline">
              {site.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
