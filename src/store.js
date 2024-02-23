import { defineStore } from 'pinia'

// assets - projects
import jjiHeat from '@/assets/projects/jji-heat.png'
import gammaBets from '@/assets/projects/gammabets-example.png'

// assets - tech
import cssIcon from '@/assets/program-icons/css-icon.png'
import expressIcon from '@/assets/program-icons/express-icon.png'
import figmaIcon from '@/assets/program-icons/figma-icon.png'
import htmlIcon from '@/assets/program-icons/html-icon.png'
import mongodbIcon from '@/assets/program-icons/mongodb-icon.png'
import nodeIcon from '@/assets/program-icons/node-icon.png'
import pythonIcon from '@/assets/program-icons/python-icon.png'
import reactIcon from '@/assets/program-icons/react-icon.png'
import vueIcon from '@/assets/program-icons/vue-icon.png'

export const useProjectStore = defineStore('project', {
  state: () => {
    return {
      projects: [
        {
          projectImage: jjiHeat,
          projectName: 'Health Equity Assessment Tool',
          companyName: 'Rutgers Data Science Consulting',
          yearStart: 2022,
          yearEnd: 2022,
          position: 'Computer Science Project Lead',
          projectDescription:
            "As the Computer Science Project Lead at Rutgers Data Science Consulting, we collaborated with Johnson & Johnson Innovations on a grant aimed at developing a system for generating personalized survey results in PDF format. Our team's overarching goal was to streamline the survey result generation process for innovators who had taken the Health Equity Assessment Tool survey. My key responsibilities on the project included designing a visually appealing mockup of the report, developing a robust system capable of generating personalized reports, and leveraging SFTP to seamlessly upload the PDF reports to J&J Innovation's server. This project required close collaboration with key stakeholders, including technical and non-technical teams, to ensure a smooth and effective implementation of the solution.",
          github: '',
          externalLink: '',
          techStack: [pythonIcon, htmlIcon, cssIcon, figmaIcon]
        },
        {
          projectImage: gammaBets,
          projectName: 'GammaBets',
          companyName: 'Personal Project',
          yearStart: 2021,
          yearEnd: 2022,
          position: 'Lead Developer',
          projectDescription:
            'As the Lead Developer at GammaBets, I developed a comprehensive backend system that efficiently managed various aspects of the website, including mini-games, trades, transactions, and more. Additionally, I was responsible for designing the frontend of the website based on a mockup, ensuring a user-friendly and intuitive interface. GammaBets provided Rust players with a platform to engage in thrilling mini-games and trade valuable in-game items with other players. Although GammaBets never launched, my experience as a full-stack web developer was greatly enhanced by the project.',
          github: 'https://github.com/TerryLDev/GammaBets',
          externalLink: '',
          techStack: [nodeIcon, expressIcon, vueIcon, mongodbIcon, htmlIcon, cssIcon, figmaIcon]
        }
      ],
      skills: {
        backend: ['Node.js', 'Python', 'Express.js'],
        frontend: ['Vue.js', 'Solid.js', 'React', 'JavaScript', 'HTML5', 'CSS3'],
        database: ['MongoDB', 'MySQL'],
        other: ['Figma', 'Git', 'Bash Script', 'Heroku', 'Arduino', 'C/C++', 'Fusion 360']
      }
    }
  }
})
