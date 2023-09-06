import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="header">Contact</h1>
        <p>
          If you want to contact me, you can use the form below. You can also
          find me at:
        </p>
        <SocialLinks />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd_yJtu7CF2hfilcUK5hYIQl_CLfxSxVmjnoAUoIxsjEmEw8g/viewform?embedded=true"
          width="640"
          height="800"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Contact;
