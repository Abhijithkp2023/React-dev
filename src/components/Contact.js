const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h1 className="text-3xl font-bold p-4 m-4">Contact us</h1>
        <form>
          <input
            type="text"
            placeholder="name"
            className="border border-black p-4 m-4 rounded-md"
          />
          <input
            type="email"
            placeholder="email"
            className="border border-black p-4 m-4 rounded-md"
          />
          <button className="border border-black m-2 p-2 bg-gray-200 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
