export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Explore Beautiful Windows & Doors for Your Home</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Since 1969, we’ve been providing high-quality windows and doors designed to bring comfort,
          style, and security to every home.
        </p>
        <button className="bg-[#0c1527] text-white px-6 py-3 rounded-full hover:bg-[#1c2947]">
          Get a Free Quote
        </button>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 px-6 max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border rounded-xl shadow p-6 text-center">
            <img
              src="/window-sample.jpg"
              alt="Windows"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Windows</h3>
            <p className="text-gray-600">
              Energy-efficient, stylish, and durable windows for every space in your home.
            </p>
          </div>
          <div className="border rounded-xl shadow p-6 text-center">
            <img
              src="/door-sample.jpg"
              alt="Doors"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Doors</h3>
            <p className="text-gray-600">
              Secure, elegant, and built to last — doors that make a statement.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-4">
          With over 50 years of experience, we are trusted by homeowners for quality craftsmanship,
          excellent service, and lasting products. Your satisfaction is our goal.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Upgrade Your Home?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today and let’s bring light, style, and security to your home.
        </p>
        <button className="bg-[#0c1527] text-white px-6 py-3 rounded-full hover:bg-[#1c2947]">
          Contact Us
        </button>
      </section>
    </main>
  );
}
