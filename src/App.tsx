import { Wrench, Scissors, Code, Music, Building2, Bitcoin, Palette, HardHat } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your One-Stop Solution for<br />Physical & Digital Services
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Dedicated to providing convenience, reliability, and exceptional outcomes
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Bills Co.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a diverse array of top-notch physical and digital services designed to cater to your specific requirements. Our expert professionals deliver excellence right to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From physical craftsmanship to digital solutions, we provide comprehensive services to meet all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              Icon={Wrench}
              title="Carpentry"
              description="Expert crafting, repair, and maintenance of wooden structures and furniture"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Scissors}
              title="Beauty Services"
              description="Professional beauty treatments, skincare, and grooming services"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Palette}
              title="Design Services"
              description="Creative interior and exterior design planning and implementation"
              category="Physical Service"
            />
            <ServiceCard
              Icon={HardHat}
              title="Demolition"
              description="Professional and safe demolition of buildings and structures"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Bitcoin}
              title="Crypto Consulting"
              description="Expert advice on cryptocurrencies and blockchain technology"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Code}
              title="Web Development"
              description="Custom website design and development solutions"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Music}
              title="Beat Making"
              description="Professional music beat production for artists"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Building2}
              title="Music Production"
              description="Complete recording, mixing, and mastering services"
              category="Digital Service"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400">
                Get in touch with us for any inquiries or service requests
              </p>
            </div>
            
            <ContactInfo />
            
            <form className="mt-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-[#111111] border-gray-700 text-white shadow-sm focus:border-[#0066FF] focus:ring-[#0066FF]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-[#111111] border-gray-700 text-white shadow-sm focus:border-[#0066FF] focus:ring-[#0066FF]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-[#111111] border-gray-700 text-white shadow-sm focus:border-[#0066FF] focus:ring-[#0066FF]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#0066FF] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;