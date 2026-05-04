import { techStackIcons, techStackImgs } from '../constants'
import TitleHeader from '../components/TitleHeader'
import TechIcon from '../components/Models/TevhLogo.jsx/TechIcon'
import { useGSAP} from '@gsap/react';
import { gsap } from 'gsap';

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card',{v:50, opacity:0}, {
      y:0,
      opacity:1,
      duration:1,
      ease:'power2.inOut',
      stagger:0.2,
      scrollTrigger:{
        trigger:'#skills',
        start:'top center',
      }
    })
  })
  return (
    <div id='skills' className='flex-centre section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title='My Preferred Tech Stack'
          sub=" 👋 The Skill I Bring to the Table"
        />

        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-caed overflow-hidden group xl:rounded-full rounded-lg'>
              {/* ISKO THIK karna hai */}
              {/* <div className='tech-card-animated-bg'/> */}
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon}/>
                </div>

                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

{/* <----------------this is 2d image if 3d model doesnot find---------------->
          {techStackImgs.map((icon) => (
            <div key={icon.name} className='card-border tech-caed overflow-hidden group xl:rounded-full rounded-lg'>
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img src={icon.imgPath} />
                </div>

                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
*/}

        </div>
      </div>
    </div>
  )
}

export default TechStack