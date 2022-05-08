import { Link, Form, useLoaderData } from "@remix-run/react";
import Nav from "~/components/Nav";
import PlatformCard from "~/components/PlatformCard";
import FooterTitle from "~/components/FooterTitle";
import SectionTitle from "~/components/SectionTitle";
import ServiceCard from "~/components/ServiceCard";
import Testimonial from "~/components/Testimonial";
import { navLinks } from "~/utils/navLinks";
import { ChevronRightIcon } from "@heroicons/react/outline";

const services = [
  {
    title: 'Buy airtime',
    description: 'Recharge your phone airtime across all networks instantly. No more running to the shops or scratch cards to purchase airtime',
    image: '/confirmed.svg'
  },
  {
    title: 'Electricity bills',
    description: 'We offer a way for you to check your electric bill balance, due date, and make payments right here',
    image: '/online-payment.svg'
  },
  {
    title: 'TV subscription',
    description: 'Timely check due dates and pay your TV bills to avoid disconnection be it DSTV, GoTV, Startimes or Zuku',
    image: '/monitor.svg'
  },
  {
    title: 'Resellership',
    description: 'Get paid by working with us to integrate our services into your business. Let us do all the heavy lifting while you satisfy your customers',
    image: '/transfer-money.svg'
  },
  {
    title: 'Affiliates',
    description: 'Join our growing list of influences by inviting friends in your circle to use Digipay and get paid everytime they make a purchase. FOREVER!.',
    image: '/affiliates.svg'
  },
  {
    title: 'Water bills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore sint quidem eius explicabo nihil.',
    image: '/bills.svg'
  }
];

const platforms = [
  {
    title: 'USSD',
    description: 'Dial *658*3# from your mobile phone',
    image: '/number-one.svg'
  },
  {
    title: 'SMS',
    description: 'Send the word "HELP" to 21111 from your mobile phone',
    image:'/envelope.svg'
  },
  {
    title: 'Web',
    description: 'Visit www.digipay.com from your browser to enjoy our services',
    image: '/computer.svg'
  },
  {
    title: 'Mobile app',
    description: 'Download our Digipay app from your app store',
    image: '/smartphone.svg'
  }
];

export async function loader({ request }) {
  const queryUrl = 'https://jj90y3k8.api.sanity.io/v1/data/query/production';

  // GROQ queries for specific details
  const statisticsQuery = `*[_type == "statistic"]{customersServed, resellers, yearsInService}`;
  const servicesQuery = `*[_type == "service"]{title, description, image{asset->{url}}}`;
  const platformsQuery = `*[_type == "platform"]{title, description, image{asset->{url}}}`;
  const testimonialQuery = `*[_type == "testimonial"]{name, title, description, image{asset->{url}}}`;

  // Urls with encoded queries
  const statisticsUrl = `${queryUrl}?query=${encodeURIComponent(statisticsQuery)}`;
  const servicesUrl = `${queryUrl}?query=${encodeURIComponent(servicesQuery)}`;
  const platformsUrl = `${queryUrl}?query=${encodeURIComponent(platformsQuery)}`;
  const testimonialsUrl = `${queryUrl}?query=${encodeURIComponent(testimonialQuery)}`;

  const statisticsResponse = await fetch(statisticsUrl);
  const statistics = await statisticsResponse.json();

  const servicesResponse = await fetch(servicesUrl);
  const services = await servicesResponse.json();

  const platformsResponse = await fetch(platformsUrl);
  const platforms = await platformsResponse.json();

  const testimonialsResponse = await fetch(testimonialsUrl);
  const testimonials = await testimonialsResponse.json();

  console.log('Services', services);
  // Use Promise.all() instead 

  return {statistics, services, platforms, testimonials};
}

export async function action({ request }) {
  console.log('Action from the root route');
  const formData = await request.formData();
  
  return null;
}

export default function Index() {
  const { statistics, services, platforms, testimonials } = useLoaderData();
  
  return (
    <>
    <header>
      <Nav />
    </header>
    <main className="">
      <section className=" bg-gradient-to-br from-[#D0D8F4] via-[#EAEBEC] to-[#F7DAC5] h-screen">
        {/* <div className="w-[43.75rem] h-[43.75rem] bg-light-blue absolute -top-64 -left-28 blur-[300px] rounded-full -z-10 hidden " /> */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center  px-6 lg:px-20">
          <div className="mt-28 lg:mt-0  lg:basis-0 lg:grow ">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl mb-5">Buy <span className="text-brand-red">airtime</span>  and pay all your <span className="text-brand-red">bills</span> <br /> in one spot</h1>
            <p className="mb-5 text-xl lg:text-2xl text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, laborum consequuntur enim facilis cum nisi!</p>
            <div className="pr-4 lg:pr-0">

              <Link to="/dashboard" className="">
                <div className="bg-brand-red text-white w-full lg:w-64 h-14 lg:h-16 grid place-items-center rounded-[30px] text-lg lg:text-xl transition ease-in-out duration-300 hover:scale-110">
                  Get started for free
                </div>
              </Link>
            </div>
          </div>
          {/* <div></div> */}
          <div className=" h-72 lg:h-[32rem] w-72 lg:w-[32.5rem] lg:basis-0 lg:grow  mt-10 lg:mt-0">
            <img src="/wave.svg" alt="" height={'100%'} width={'100%'} />
          </div>
        </div>
       
        {/* <div className="w-[43.75rem] h-[43.75rem] bg-light-orange blur-[300px] rounded-full hidden" /> */}
        
      </section>

      <section className="flex justify-center  pt-16 lg:pt-40 bg-gradient-to-bl from-[#F7DAC5] via-[#EAEBEC]">
        <div className="grid grid-cols-1 lg:grid-cols-7 border lg:border-t-[#B8B7B4] lg:border-4 lg:w-2/3">
          <div className=" grid place-items-center lg:border-4 lg:border-l-none lg:border-b-none  lg:border-r-[#B8B7B4] mb-10 lg:mb-0 col-span-2 pt-0 lg:py-10">
            <p className="text-4xl lg:text-5xl font-bold">{statistics.result[0].yearsInService}</p>
            <p className="text-2xl">Years in service</p>
          </div>
          <div className="grid place-items-center lg:border-4 col-span-3 lg:border-r-[#B8B7B4] mb-10 lg:mb-0 lg:mr-10 pt-0 lg:py-10">
            <p className="text-4xl lg:text-5xl font-bold">{statistics.result[0].customersServed}</p>
            <p className="text-2xl">Customers served</p>
          </div>
          <div className="grid place-items-center col-span-2 lg:border mb-10 lg:mb-0 lg:mr-10 pt-0 lg:py-10">
            <p className="text-4xl lg:text-5xl font-bold">{statistics.result[0].resellers}</p>
            <p className="text-2xl">Resellers</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-10 lg:mt-28" id="services">
        <SectionTitle title='Our Services' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-8 lg:w-4/5  mt-12 lg:mt-20">
          {services.result.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
        <div className="mb-10 lg:mb-0">
          <Link to="/contact">
            <div className="bg-brand-red text-white w-48 lg:w-64 h-14 lg:h-16 grid place-items-center rounded-[30px] text-lg lg:text-xl transition ease-in-out duration-300 hover:scale-110">
              Take action
            </div>
          </Link>
        </div>
      </section>

      <section className="w-full mt-10 lg:mt-28 h-auto lg:h-96 bg-center bg-cover text-white" id="about" style={{backgroundImage: "url('about.jpg')"}}>
        <div className="w-full h-full flex flex-col items-center px-8 pt-14 bg-black bg-opacity-70">
          {/* About / Who we are */}
          <SectionTitle title="About us" />
          <p className="my-10 mx-8 text-center lg:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, et doloribus laudantium ea adipisci asperiores corporis? Nam voluptatem recusandae voluptate. Libero repudiandae sunt obcaecati sit necessitatibus autem minus officia veniam?</p>
          <div className="mb-14 lg:mb-0">
            <Link to="/contact">
              <div className="bg-brand-red text-white w-48 lg:w-64 h-14 lg:h-16 grid place-items-center rounded-[30px] text-lg lg:text-xl transition ease-in-out duration-300 hover:scale-110">
                Contact us
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse items-center px-5 lg:px-10 mt-10 lg:mt-28">
        {/* SMS, USSD, web, mobile app */}
        {/* Our platforms */}
        <SectionTitle title='Find us on all platforms'/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 lg:mt-0">
            {platforms.result.map((platform, index) => (
               <PlatformCard platform={platform} key={index} />
              // <ServiceCard service={platform} key={index} />
            ))}
        </div>
      </section>

      <section className="flex flex-col items-center mt-10 lg:mt-28">
        {/* image sliders */}
        <SectionTitle title='What it looks like' />
        <div className="mt-14 lg:mt-20">
          <div className="w-64 h-64 lg:w-96 lg:h-96">
            <img 
              src="/slider.svg" 
              width='100%'
              height='100%'
              alt="" 
            />
          </div>
        </div>
      </section>

      <section className="mt-2 lg:mt-8">
        <div className=" bg-light-orange blur-[300px]" />
        <SectionTitle title='What people say' />
        <div className="flex justify-center mt-10 lg:mt-20">
          <div className="flex flex-col lg:flex-row justify-between lg:w-3/4">
          {testimonials.result.map((testimonial, index) => (
              <Testimonial testimonial={testimonial} key={index} />
            ))}

          {testimonials.result.map((testimonial, index) => (
            <Testimonial testimonial={testimonial} key={index} />
          ))}

          {testimonials.result.map((testimonial, index) => (
            <Testimonial testimonial={testimonial} key={index} />
          ))}
          
          </div>
        </div>
        {/* </div> */}
        
      </section>

      <section>
        {/* Affiliates Logos */}
      </section>
    </main>
    <footer className="bg-white px-16 mt-28 pt-16">
    <div className="flex flex-col lg:flex-row justify-between items-start">
      <div className="h-14 w-40">
        <img src="/new-logo.png" alt="Digipay logo" width='100%' height='100%' />
      </div>
      <div className="mt-4 lg:mt-0">
        <FooterTitle title='Our solutions' />
        <ul>
          {navLinks.slice(6).map((navLink, index) => (
            <li className="flex items-center mt-2 hover:underline" key={index}>
              <Link to={navLink.path} prefetch='intent'>
                <ChevronRightIcon className="text-brand-red h-5 w-5 inline" />
                {" "}{navLink.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>
      <div className="mt-7 lg:mt-0">
        <FooterTitle title='Quick links' />
        <ul>
          {navLinks.slice(0, 6).map((navLink, index) => (
            <li className="flex items-center mt-2 hover:underline" key={index}>
              <Link to={navLink.path} prefetch='intent'>
                <ChevronRightIcon className="text-brand-red h-5 w-5 inline" />
                {" "}{navLink.name}
              </Link>
            </li>
          ))}
          {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li> */}
        </ul>
      </div>
      <div className="mt-7 lg:mt-0">
        {/* Form and social media links */}
        <FooterTitle title='Get in touch' />
        <Form method="post" id="contact">
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="block rounded border border-black w-full" />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="block rounded border border-black w-full" />
          </div>
          <div className="mb-2">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" className="block rounded border border-black" />
          </div>
          <button type='submit' className="w-full h-10 bg-red-500 rounded-[30px] text-white">
            Submit
          </button>
        </Form>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <div className="flex justify-between w-40">
        <div className="h-7 w-7">
          <img src="/facebook.svg" alt="" width='100%' height='100%' />
        </div>
        <div className="h-7 w-7">
          <img src="/twitter.svg" alt="" width='100%' height='100%' />
        </div>
        <div className="h-7 w-7">
          <img src="/instagram.svg" alt="" width='100%' height='100%' />
        </div>
        <div className="h-7 w-7">
          <img src="/whatsapp.svg" alt="" width='100%' height='100%' />
        </div>
      </div>
    </div>
    <span className="flex justify-center text-black mt-3">Copyright{" "}&copy; {new Date().getFullYear()}</span>
  </footer>
  </>
  );
}
