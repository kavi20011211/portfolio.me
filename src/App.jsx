import './App.css'
import {motion, useScroll} from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Job from './assets/Job.png';
import Degree from './assets/Degree.png';
import Freelance from './assets/Freelance.png'
import Facebook from './assets/Facebook.png';
import Instagram from './assets/Instagram.png';
import LinkedIn from './assets/LinkedIn.png';
import GitHub from './assets/GitHub.png';
import Crown from './assets/crown.png';
import Star from './assets/star.png';
import Rainbow from './assets/rainbow.png';
import Mail from './assets/mail.png';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div style={{ scaleX: scrollYProgress }} /> 

    {/* Introduction part, this can be change in the future */}
      <div className='w-full text-center'>
          <p className='text-4xl md:text-5xl lg:text-7xl mb-3 font-black'>Uvindu Kavishka</p>
          <p className='font-extrabold'>Hello, I'm an indie <span className='text-text-highlighter'>full-stack developer</span> and a <span className='text-text-highlighter'>mobile application developer</span>. Currently I'm following a specialized Information Technology bachelore degree at SLIIT university.</p>
      </div>
    {/* Project section */}
      <div className='mt-7'>
          <div className='flex justify-normal'>
            <div>
            <img src={Star} height={40} width={40}/>
            </div>
            <div>
            <p className='underline underline-offset-8 text-lg font-black'>Favourite <span className='text-text-highlighter'>Projects</span></p>
            <p className='mt-5 pl-3 w-full font-extrabold'>These are some of my favourite projects that I have build as a group and indie</p>
            </div>
          </div>

          <div className='grid justify-items-center space-y-4  lg:flex flex-row lg:space-y-0 lg:justify-evenly lg:space-x-4 mt-7'>
              <div className='w-56 h-96 border-2 border-white grid grid-rows-2'>
                  <div></div>
                  <div>
                    <p className='font-bold text-center'>Shade styles is a mobile app that is build for visual disability people to e-shopping.</p>
                    <a href='https://github.com/kavi20011211/WE_86' className='underline underline-offet-8'>Github Link</a>
                  </div>
              </div>
              <div className='w-56 h-96 border-2 border-white grid grid-rows-2'>
                  <div></div>
                  <div>
                    <p className='font-bold text-center'>Java server-client chat application using sockets. Multiple clients can connect to the server and can chat with it.</p>
                    <a href='https://github.com/kavi20011211/Java-chat-application' className='underline underline-offet-8'>Github Link</a>
                  </div>
              </div>
              <div className='w-56 h-96 border-2 border-white grid grid-rows-2'>
                  <div></div>
                  <div>
                    <p className='font-bold text-center'>IP address tracking system using python. Using the IP address program shows the exact location address and visually present it on a map.</p>
                    <a href='https://github.com/kavi20011211/IP-address-Tracker' className='underline underline-offet-8'>Github Link</a>
                  </div>
              </div>
          </div>

          {/* Experience section */}
          <div className='mt-7'>
              <div className='flex justify-normal'>
                <div>
                <img src={Crown} height={40} width={40}/>
                </div>
                <div>
                <p className='underline underline-offset-8 text-lg font-black'>Experience <span className='text-text-highlighter'>Timeline </span></p>
                </div>
              </div>

              <div className='mt-7'>
                <VerticalTimeline>
                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    date='2021 - present'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                      <h3 className="vertical-timeline-element-title bg-white text-black font-black">Bachelor of Science in Information Technology specialized in IT</h3>
                      <h4 className="vertical-timeline-element-subtitle bg-white text-black">SLIIT</h4>
                      <p className='bg-white text-black'>
                        Full-stack developing, Mobile Application developing
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--work"
                    date='2023 - 2024'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                      <h3 className="vertical-timeline-element-title bg-white text-black font-black">Intern QA Engineer</h3>
                      <h4 className="vertical-timeline-element-subtitle bg-white text-black">LSEG Sri Lanka</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--work"
                    date='2024 - present'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                      <h3 className="vertical-timeline-element-title bg-white text-black font-black">Freelance Developer</h3>
                      <h4 className="vertical-timeline-element-subtitle bg-white text-black">Web developing & Mobile app developing</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
          </div>

          {/* Social Medias */}
          <div className='mt-7'>
          <div className='flex justify-normal'>
            <div>
            <img src={Rainbow} height={40} width={40}/>
            </div>
            <div>
            <p className='underline underline-offset-8 text-lg font-black'>Social <span className='text-text-highlighter'>Medias</span></p>
            <p className='mt-5 pl-3 w-full font-extrabold'>I have mentioned my social media links below. Feel free to go through all of them and make sure to follow.</p>
            </div>
          </div>

              <div className='mt-5 flex flex-row justify-center space-x-2 lg:space-x-4'>
                  <div>
                    <img src={GitHub} height={20} width={20}/>
                  </div>
                  <div>
                    <img src={LinkedIn} height={20} width={20}/>
                  </div>
                  <div>
                    <img src={Instagram} height={20} width={20}/>
                  </div>
                  <div>
                    <img src={Facebook} height={20} width={20}/>
                  </div>
              </div>
        </div>
        
        {/* Contact Info */}
        <div className='mt-7'>
        <div className='flex justify-normal'>
          <div>
          <img src={Mail} height={40} width={40}/>
          </div>
          <div>
          <p className='underline underline-offset-8 text-lg font-black'>Contact <span className='text-text-highlighter'>Informations</span></p>
          <p className='mt-5 pl-3 w-full font-extrabold'>You can contact me via e-mail -&gt; <span className='text-text-highlighter underline underline-offset-8'>kavishkauvindu0@gmail.com</span></p>
          </div>
        </div>
        </div>

        <div className='w-full h-5 mt-7 flex justify-center'>
          <p className='text-xs font-extrabold'>Copyright © 2024 | Design concept by Retro Gaming</p>
        </div>
      </div>
    </>
  )
}
export default App