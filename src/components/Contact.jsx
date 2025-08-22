const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-300 mb-10">
          Have a project in mind? I'm available for freelance work or collaboration.
        </p>
        <a
          href="mailto:ege@example.com"
          className="bg-primary text-black px-10 py-4 rounded font-semibold text-lg hover:bg-primary-dark transition inline-block"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  )
}

export default Contact