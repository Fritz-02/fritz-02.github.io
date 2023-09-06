import Image from 'next/image';

const Donate = () => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="header">Donate</h1>
        <p>
          If you want to leave a donation, that would be greatly appreciated!
        </p>
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/fritz0/?hidefeed=true&widget=true&embed=true&preview=true"
          height="712"
          title="fritz0"
        ></iframe>
        <a className="kofi" href="https://ko-fi.com/R6R8OXATO" target="_blank">
          <Image
            height="36"
            src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </div>
    </>
  );
};

export default Donate;
