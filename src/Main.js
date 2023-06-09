// import logo from './logo.svg';
import './App.css';
import GuestLayout from './layouts/GuestLayout';
import ServiceCard from './components/service';
import server from './assets/Server.png';
import circle from "./assets/Circle.png";
import service_a from './assets/servicea.png';
import service_b from './assets/serviceb.png';
import service_c from './assets/servicec.png';
import Input from './components/input';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import about from './assets/about.jpg';
import CarouselContainer from './components/carousel/container';
import CarouselItem from './components/carousel/item';
import dots from "./assets/dots.png";
import Button from './components/carousel/button';
import ch_left from "./assets/ch_left.svg";
import ch_right from "./assets/ch_right.svg";
import { useState } from 'react';

function App() {

  const [testimonial, setTestimonial] = useState(0);
  const [animateTestimony, setAnimateTestimony] = useState(false);

  const testimonials = [
    {
      name: 'John Doe',
      testimony: 'I had the great pleasure of working with FM Data Center in Bahir Dar, Ethiopia. They provided excellent service and took care of my needs quickly and professionally. They have been a great partner in helping me to make sure that my data is secure and up to date. I highly recommend FM Data Center in Bahir Dar, Ethiopia.'
    },
    {
      name: 'Manuhe Leulseged',
      testimony: 'I had the great pleasure of working with FM Data Center in Bahir Dar, Ethiopia. They provided excellent service and took care of my needs quickly and professionally. They have been a great partner in helping me to make sure that my data is secure and up to date. I highly recommend FM Data Center in Bahir Dar, Ethiopia.'
    },
    {
      name: 'Yididya Goitom',
      testimony: 'I had the great pleasure of working with FM Data Center in Bahir Dar, Ethiopia. They provided excellent service and took care of my needs quickly and professionally. They have been a great partner in helping me to make sure that my data is secure and up to date. I highly recommend FM Data Center in Bahir Dar, Ethiopia.'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Security & Reliability',
      alt_text: 'Meaningful solutions, Fast',
      image: service_a,
      text: 'FM Data Center provides secure and reliable data-center services to businesses of all sizes. Our dedicated team of professionals will guide you through the entire process, from start to finish, making sure your data is safe and secure. We offer a wide range of services, including server colocation, cloud hosting, managed hosting, and more. With the most advanced technologies, our services will help you keep your data safe and your business running smoothly.',
      right: false,
      imageWidth: '24rem',
      upperPadding: '1rem'
    },
    {
      id: 2,
      title: 'Backup & Disaster Recovery',
      alt_text: 'Meaningful solutions, Fast',
      image: service_b,
      text: 'The service provides organizations with an automated and secure way to backup and protect their data, ensuring it is always available in the event of an emergency.',
      right: true,
      imageWidth: '40rem',
      upperPadding: '1rem'
    },
    {
      id: 3,
      title: 'Virtualization',
      alt_text: 'Meaningful solutions, Fast',
      image: service_c,
      text: 'This service provides businesses with a virtualized environment for their applications and services, allowing them to optimize their infrastructure and reduce costs.',
      right: false,
      imageWidth: '24rem',
      upperPadding: '0rem'
    },
  ]

  const center = {
    lat: 9.675553,
    lng: 39.5287661,
  }


  const iconPerson = new L.Icon({
    iconUrl: require('./assets/marker-icon.png'),
    iconRetinaUrl: require('./assets/marker-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 35),
  });

  const gallery = [
    'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const handleTestimony = (index) => {
    if (index < 0) index = 0;
    else if (index >= testimonials.length) index = testimonials.length - 1;

    setTestimonial(index);
    setAnimateTestimony(true);

    setTimeout(() => {
      setAnimateTestimony(false);
    }, 100);
  }

  return (
    <>
      <GuestLayout>
        {/* Banner */}
        <div className="relative flex items-center justify-between overflow-hidden">
          {/* <div className=""> */}
          <img src={circle} className="absolute overflow-hidden z-0" style={{ height: '100rem', top: '-45rem', right: '-50rem' }} alt="circle" />
          {/* </div> */}
          <div className='flex-col items-center justify-start py-40 pl-40 w-3/5 space-y-7'>
            <h5 className='text-primary-a uppercase tracking-widest font-bold text-xs'>Any Channel . Any Way . Any Time</h5>
            <h1 className='text-white capitalize text-7xl  font-bold leading-normal'>Empowering Debre Birhan With FM</h1>
            <p className='text-base text-white leading-relaxed'>
              FM Data Center in Debre Birhan, Ethiopia is a state-of-the-art facility
              offering reliable and secure data storage, cloud computing, and IT
              infrastructure solutions to businesses of all sizes. With cutting-edge
              technology, knowledgeable staff, and a commitment to customer
              satisfaction, FM Data Center is the go-to choice for the best data center
              services in Ethiopia.
            </p>
          </div>
          <div className='relative'>
            {/* Image */}
            <img src={server} className='overflow-x-hidden hover:scale-95 hover:-rotate-3 duration-1000' alt="Server" />
          </div>
        </div>
        {/* Banner End */}

        {/* Gallery */}
        <div className='relative'>
          {/* absolute Dots Image */}
          <img className='absolute -top-16 h-40 left-96' src={dots} alt="dots" />
          {/* Use a package here or create a custom carousel */}
          <CarouselContainer>
            {gallery.map((g, i) => {
              return <CarouselItem key={i}>
                <img className='w-full shadow-2xl my-10 border border-blue-200 rounded-3xl' src={g} alt={`gallery item #${i + 1}`} />
              </CarouselItem>
            })}
          </CarouselContainer>
        </div>
        {/* Gallery End */}

        {/* Testimonials */}
        <div className='absolute left-0 right-0 container m-auto mt-10'>
          {/* <div className='absolute w-full h-1/2 bottom-0 bg-white' /> */}
          <div className='bg-white border shadow-md' style={{ borderRadius: '5rem' }}>
            <div className='py-24 px-36'>
              <div className='flex items-center gap-16'>
                <div className='w-1/4 flex-col items-center space-y-5'>
                  <h5 className='text-primary-a uppercase tracking-widest text-sm font-bold'>Testimonials</h5>
                  <h2 className='capitalize text-4xl font-bold leading-normal'>What our Clients Think About Us?</h2>
                </div>
                <div className='w-3/4 flex-col space-y-5'>
                  {/* <div  className='whitespace-nowrap overflow-hidden'> */}
                  <p className={animateTestimony ? 'opacity-0' : 'opacity-100' && `text-base leading-relaxed transition-opacity ease-in duration-500`}>"{testimonials[testimonial].testimony}"</p>
                  {/* </div> */}
                  <div className='flex justify-between items-center'>
                    <p className={animateTestimony ? 'opacity-0' : 'opacity-100' && `font-bold text-base transition-opacity ease-in duration-500`}>{testimonials[testimonial].name}</p>
                    <div className='flex space-x-5'>
                      {/* Left Chevron Icon */}
                      <Button disabled={testimonial === 0} action={() => handleTestimony(testimonial - 1)} classname={'shadow'} src={ch_left} />
                      {/* Right Chevron Icon */}
                      <Button disabled={testimonial === testimonials.length - 1} action={() => handleTestimony(testimonial + 1)} classname={'shadow'} src={ch_right} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials End */}

        <div className='h-80 bg-white' style={{ marginTop: '18rem' }} />

        {/* Services */}
        <div className='bg-white'>
          <div className='mx-auto w-auto container space-y-10 pb-10'>
            {/* Service Component */}
            {services.map((s) =>
              <ServiceCard
                key={s.id}
                right={s.right}
                alt_text={s.alt_text}
                text={s.text}
                title={s.title}
                image={s.image}
                imageWidth={s.imageWidth}
                upperPadding={s.upperPadding}
              />
            )}
          </div>
        </div>
        {/* Services End */}

        {/* Contact */}
        <div className='bg-white'>
          <div className='flex'>
            <div className='w-1/2 space-y-4 p-20 pl-48 pr-32'>
              <h5 className='text-primary-a uppercase tracking-widest text-sm font-bold'>Contact Us</h5>
              <p className='text-lg'>Please fill out this form if you have any question about our data center services.</p>
              {/* Contact Form */}
              <div className='space-y-5'>
                <Input id={'name'} type={'text'} name={'Name'} placeholder={'Name'} />
                <Input id={'email'} type={'email'} name={'Email'} placeholder={'you@company.com'} />
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-bold text-black">Your message</label>
                  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-xl border shadow focus:shadow-md duration-300 outline-none" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button className='bg-primary-b text-white w-full py-3 shadow border font-bold tracking-wide duration-300 hover:shadow-xl rounded-xl'>Send Message</button>
              </div>
              {/* Contact Form End */}
            </div>
            <div className='w-1/2'>
              {/* Map */}
              <MapContainer className='h-full' center={center} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; FM Data Center'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={iconPerson} draggable={false} position={center} />
              </MapContainer>
            </div>
          </div>
        </div>
        {/* Contact End */}

        {/* About Us */}
        <div className='flex items-center bg-primary-b'>
          <div className='relative w-1/2'>
            {/* Data center Image */}
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full bg-primary-b opacity-40 z-10' />
            <img className='z-0' src={about} alt="About Us" />
          </div>
          <div className='w-1/2 space-y-5 p-20'>
            <h5 className='text-primary-a uppercase tracking-widest text-sm font-bold'>About Us</h5>
            <h2 className='capitalize text-4xl text-white font-bold'>Logo</h2>
            <p className='text-base text-white'>
              FM data center is a business located in Debre Birhan, Ethiopia. We Specialize in providing IT and data services
              to our clients. Our goal is to provide top-notch service and customer satisfaction to our customers.
              We offer a wide range of services such as web hosting, domain registration, online marketing, ecommerce solutions, and more.
              We also provide managed services such as system administration, managed hosting, and cloud computing.
            </p>
            <p className='text-base text-white'>
              At FM data center, we are committed to staying up-to-date with
              the latest technology and trends in the IT and data industry. We
              have a team of experienced professionals who are dedicated to
              providing our clients with the best service possible. We also strive
              to provide our customers with the most secure and reliable data
              storage and hosting solutions. Our team of experts understand
              the importance of data security and are dedicated to ensuring
              that our clients data is safe and secure.
            </p>
          </div>
        </div>
        {/* About Us End */}
      </GuestLayout>
    </>
  );
}

export default App;
