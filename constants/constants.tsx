import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export type Menu = {
  title: string;
  type: 'link' | 'email';
  path: string;
  icon?: ReactElement;
};
export type History = {
  period: string;
  name: string;
  duty: string;
  tags: string[];
};
export type HistoryBox = {
  title: string;
  list: History[];
};

type Article = {
  title: string;
  images: ImageData[];
  content: string;
  links: Menu[];
};

export type Blog = {
  id: string;
  date: string;
  title: string;
  brief: string;
  images: ImageData[];
  articles: Article[];
  tags: string[];
};

interface Button {
  title: string;
  link: string;
}

interface CardData {
  header: string;
  title: string;
  content: string;
  buttons?: Button[];
}
export interface ImageData {
  src: string;
}
export interface ImageCard {
  card: CardData;
  images: ImageData[];
}

interface UserIntroduction {
  name: string;
  brief: string;
}
type site_default = {
  logo: string;
  copyright: string;
  portrait_url: string;
  author: UserIntroduction;
  menu: Menu[];
  socialList: Menu[];
  historyList: HistoryBox[];
  siteIntroList: ImageCard[];
  blog?: Blog[];
};
export const site_default: site_default = {
  logo: '<JaehwanKim />',
  copyright: '©2023 powered by Jaehwan Kim.',
  portrait_url: '/images/jaehwankim.jpg',
  author: {
    name: 'Jaehwan Kim',
    brief: `Full-Stack Developer with React, Java and Express`,
  },
  menu: [
    { title: 'Blog', type: 'link', path: '/blog' },
    // { title: 'Projects', type: 'link', path: '/' },
    // { title: 'Components', type: 'link', path: '/' },
    { title: 'About', type: 'link', path: 'about' },
  ],
  socialList: [
    {
      title: 'LinkedIn',
      type: 'link',
      path: 'https://www.linkedin.com/in/kim-jaehwan/',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
    {
      title: 'Email',
      type: 'email',
      path: 'kkjaehwan@gmail.com',
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  ],
  historyList: [
    {
      title: 'Careers',
      list: [
        {
          period: 'Jan 2022 - Present',
          name: 'Infenox Technologies',
          duty: 'React and Java Fullstack Developer',
          tags: [
            'React 17',
            'React 18',
            'Redux Toolkit',
            'NextJs 13',
            'Spring Boot',
            'AWS',
            'Git',
            'TypeScript',
          ],
        },
        {
          period: 'Jun 2020 - Dec 2021',
          name: 'Freelancer',
          duty: 'Fullstack Developer',
          tags: [
            'React 16',
            'React 17',
            'Redux Saga',
            'NextJs 10',
            'Express',
            'Spring Boot',
            'Thymeleaf',
            'AWS',
            'Git',
          ],
        },
        {
          period: 'May 2015 - Apr 2020',
          name: 'Nonghyup Bank',
          duty: 'System Manager and Full Stack Developer',
          tags: [
            'JSP',
            'React 16.8',
            'Java',
            'Private Clouds',
            'Oracle',
            'Tibero',
            'Infomix',
            'DataStage',
            'EasyBuilder',
          ],
        },
        {
          period: 'Dec 2014 - May 2015',
          name: 'Zeniel',
          duty: 'Assistant Manager and Java Full Stack Web Developer',
          tags: ['Spring Boot', 'JSP', 'Git', 'jQuery'],
        },
        {
          period: 'Mar 2011 - Nov 2014',
          name: 'LSware INC',
          duty: 'Assistant Java Full Stack Web Developer',
          tags: ['Struts2', 'JSP', 'SVN', 'jQuery'],
        },
      ],
    },
  ],
  siteIntroList: [
    {
      card: {
        header: 'Explore the Digital Realm',
        title: `Transforming Ideas into Engaging Web Apps`,
        content: `Passionate Web Developer specializing in creating captivating web applications. From e-commerce platforms to social networks, I deliver tailor-made solutions that exceed expectations. Let's collaborate and turn your web app dreams into reality.`,
        buttons: [
          { title: 'Button 1', link: 'link1' },
          { title: 'Button 2', link: 'link2' },
        ],
      },
      images: [
        { src: '/images/pexels-photomix-company-230544.jpg' },
        { src: '/images/pexels-antonio-batinić-4164418.jpg' },
      ],
    },
    {
      card: {
        header: 'Elevate Your Online Presence with Custom Web Solutions',
        title: `Unlock the Power of Exceptional Web Experiences`,
        content: `Unlock the power of exceptional web experiences. As a web development expert, I create visually stunning and user-friendly websites tailored to your unique needs. Let's collaborate and bring your digital dreams to life. Get in touch today!`,
        buttons: [
          { title: 'Button 3', link: 'link3' },
          { title: 'Button 4', link: 'link4' },
        ],
      },
      images: [
        { src: '/images/pexels-rodrigo-santos-3888149.jpg' },
        { src: '/images/pexels-mikael-blomkvist-6476595.jpg' },
      ],
    },
  ],
  blog: [
    {
      id: '1',
      date: '2023-06-01',
      title: 'Exploring the Marvels of Nature',
      brief:
        'Embark on a journey through breathtaking landscapes and awe-inspiring wonders of nature.',
      images: [
        {
          src: 'https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg',
        },
      ],
      articles: [
        {
          title: 'The Majestic Grand Canyon',
          images: [
            {
              src: 'https://images.pexels.com/photos/545960/pexels-photo-545960.jpeg',
            },
          ],
          content:
            "The Grand Canyon, located in Arizona, USA, is a testament to the immense power of natural forces over millions of years. Its vastness and colorful rock formations attract millions of visitors every year. Standing on the edge of the canyon, one can't help but feel a sense of insignificance in the face of such grandeur. Whether you're admiring the canyon from above, hiking along its trails, or rafting through the mighty Colorado River at its base, the Grand Canyon offers a truly humbling experience of nature's magnificence.",
          links: [
            {
              title: 'Grand Canyon National Park',
              type: 'link',
              path: 'https://www.nps.gov/grca/index.htm',
            },
            {
              title: 'Grand Canyon Helicopter Tours',
              type: 'link',
              path: 'https://example.com/helicopter-tours',
            },
          ],
        },
        {
          title: 'The Enchanting Northern Lights',
          images: [
            {
              src: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg',
            },
          ],
          content:
            "The Northern Lights, also known as Aurora Borealis, are a mesmerizing natural phenomenon that illuminates the polar skies with a vibrant display of colors. This celestial dance of shimmering lights is caused by interactions between solar particles and the Earth's magnetic field. From remote locations such as Iceland, Norway, and Canada, one can witness this ethereal spectacle that leaves viewers in awe. Standing beneath the vibrant hues of green, purple, and pink, it feels as if you've stepped into a surreal and magical world, transcending the boundaries of reality.",
          links: [
            {
              title: 'Aurora Borealis: The Ultimate Guide',
              type: 'link',
              path: 'https://example.com/aurora-borealis-guide',
            },
            {
              title: 'Best Places to See the Northern Lights',
              type: 'link',
              path: 'https://example.com/best-places-northern-lights',
            },
          ],
        },
        // Additional articles can be added here
      ],
      tags: ['nature', 'travel'],
    },
    {
      id: '2',
      date: '2023-06-05',
      title: 'Unveiling Ancient Civilizations',
      brief:
        'Delve into the mysteries and marvels of ancient civilizations that shaped our world.',
      images: [
        {
          src: 'https://images.pexels.com/photos/3394069/pexels-photo-3394069.jpeg',
        },
      ],
      articles: [
        {
          title: 'The Legendary Pyramids of Egypt',
          images: [
            {
              src: 'https://images.pexels.com/photos/5928602/pexels-photo-5928602.jpeg',
            },
            {
              src: 'https://images.pexels.com/photos/5928602/pexels-photo-5928602.jpeg',
            },
          ],
          content:
            "The Pyramids of Egypt, particularly the Great Pyramid of Giza, are iconic structures that have fascinated historians, archaeologists, and tourists for centuries. Built as tombs for pharaohs, these magnificent structures showcase the architectural brilliance of ancient Egyptians. Standing before these colossal monuments, one can't help but marvel at the precision with which they were constructed. From exploring the intricate passageways inside to gazing at the Sphinx guarding the pyramids, a visit to Egypt's pyramids is a journey into the enigmatic world of ancient Egyptian civilization.",
          links: [
            {
              title: 'Discovering Ancient Egypt',
              type: 'link',
              path: 'https://example.com/discovering-ancient-egypt',
            },
            {
              title: 'The Secrets of the Pyramids',
              type: 'link',
              path: 'https://example.com/secrets-of-pyramids',
            },
          ],
        },
        {
          title: 'Unearthing the Lost City of Pompeii',
          images: [
            {
              src: 'https://images.pexels.com/photos/15396712/pexels-photo-15396712.jpeg',
            },
          ],
          content:
            'The ancient city of Pompeii, buried under layers of volcanic ash from the eruption of Mount Vesuvius in 79 AD, offers a captivating glimpse into Roman life during that era. Excavations have revealed remarkably preserved buildings, frescoes, and even the remains of its unfortunate inhabitants. Walking through the ancient streets of Pompeii is like stepping back in time, witnessing the daily routines and cultural heritage of an ancient civilization frozen in history. It serves as a poignant reminder of the fragility of human existence and the indelible mark that ancient civilizations have left on our world.',
          links: [
            {
              title: 'Pompeii Archaeological Park',
              type: 'link',
              path: 'https://example.com/pompeii-archaeological-park',
            },
            {
              title: 'The Last Days of Pompeii',
              type: 'link',
              path: 'https://example.com/last-days-pompeii',
            },
          ],
        },
        // Additional articles can be added here
      ],
      tags: ['history', 'archaeology'],
    },
    {
      id: '3',
      date: '2023-06-10',
      title: 'Journey into the Heart of the Amazon Rainforest',
      brief:
        "Discover the wonders and biodiversity of the world's largest tropical rainforest.",
      images: [
        {
          src: 'https://images.pexels.com/photos/709857/pexels-photo-709857.jpeg',
        },
      ],
      articles: [
        {
          title: "Exploring the Amazon's Hidden Treasures",
          images: [
            {
              src: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
            },
          ],
          content:
            "The Amazon Rainforest, often referred to as the 'Lungs of the Earth,' is a vast and biodiverse ecosystem that spans multiple countries in South America. It is home to countless species of plants, animals, and indigenous communities. Exploring the Amazon is an adventure like no other, where you can witness vibrant bird species, encounter rare Amazonian river dolphins, and discover hidden tribes that have thrived in harmony with the forest for centuries. However, it is also a fragile ecosystem under threat from deforestation and climate change, making it all the more important to appreciate its beauty and protect its invaluable resources.",
          links: [
            {
              title: 'Amazon Rainforest Conservation',
              type: 'link',
              path: 'https://example.com/amazon-conservation',
            },
            {
              title: 'Indigenous Communities in the Amazon',
              type: 'link',
              path: 'https://example.com/indigenous-amazon-communities',
            },
          ],
        },
        {
          title: 'The Mysterious Amazon River',
          images: [
            {
              src: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
            },
          ],
          content:
            'The Amazon River, with its vast expanse and powerful currents, is the lifeline of the rainforest. It stretches over 6,400 kilometers, making it the second-longest river in the world. Navigating its waters offers a unique perspective on the surrounding jungle, with opportunities to spot elusive wildlife such as jaguars, giant river otters, and anacondas. The river is also home to fascinating communities of river-dwelling people, known as ribeirinhos, who rely on its resources for their livelihoods. Exploring the Amazon River is a thrilling and immersive experience that reveals the true heartbeat of this extraordinary ecosystem.',
          links: [
            {
              title: 'Cruising the Amazon River',
              type: 'link',
              path: 'https://example.com/cruising-amazon-river',
            },
            {
              title: 'Wildlife of the Amazon River',
              type: 'link',
              path: 'https://example.com/amazon-river-wildlife',
            },
          ],
        },
        // Additional articles can be added here
      ],
      tags: ['nature', 'adventure'],
    },
    {
      id: '4',
      date: '2023-06-15',
      title: 'Captivating Cultural Experiences',
      brief:
        'Immerse yourself in diverse cultures and traditions from around the world.',
      images: [
        {
          src: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
        },
      ],
      articles: [
        {
          title: 'The Magnificent Temples of Angkor',
          images: [
            {
              src: 'https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg',
            },
          ],
          content:
            'The temples of Angkor, located in Cambodia, are a UNESCO World Heritage site and a testament to the architectural genius of the ancient Khmer civilization. The most famous temple, Angkor Wat, is an awe-inspiring structure with intricate carvings and towering spires. Exploring the temple complex, with its hidden passageways and moss-covered ruins, is like stepping into a lost world. Witnessing the sunrise over Angkor Wat is a truly magical experience, as the golden rays illuminate the majestic temple and reflect in the surrounding moat. A visit to Angkor is an unforgettable journey through history, spirituality, and artistic mastery.',
          links: [
            {
              title: 'Angkor Archaeological Park',
              type: 'link',
              path: 'https://example.com/angkor-archaeological-park',
            },
            {
              title: 'Angkor Wat: The Ultimate Guide',
              type: 'link',
              path: 'https://example.com/angkor-wat-guide',
            },
          ],
        },
        {
          title: 'Discovering the Vibrant Culture of India',
          images: [
            {
              src: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg',
            },
          ],
          content:
            "India, with its rich history and diverse cultural heritage, offers an immersive experience like no other. From the bustling streets of Delhi to the serene backwaters of Kerala, each region has its own unique traditions, cuisine, and architecture. Exploring the ancient palaces of Rajasthan, participating in colorful festivals like Holi and Diwali, or embarking on a spiritual journey to Varanasi, India's cultural tapestry is a feast for the senses. With its vibrant colors, aromatic spices, and warm hospitality, India welcomes visitors to embark on a transformative journey of discovery and enlightenment.",
          links: [
            {
              title: 'The Golden Triangle: Delhi, Agra, Jaipur',
              type: 'link',
              path: 'https://example.com/golden-triangle-india',
            },
            {
              title: 'Spiritual Retreats in India',
              type: 'link',
              path: 'https://example.com/spiritual-retreats-india',
            },
          ],
        },
        // Additional articles can be added here
      ],
      tags: ['culture', 'travel'],
    },
    {
      id: '5',
      date: '2023-06-20',
      title: 'Adventures in the Wild',
      brief:
        "Embark on thrilling escapades in some of the world's most captivating natural landscapes.",
      images: [
        {
          src: 'https://images.pexels.com/photos/5919562/pexels-photo-5919562.jpeg',
        },
      ],
      articles: [
        {
          title: 'Trekking the Inca Trail to Machu Picchu',
          images: [
            {
              src: 'https://images.pexels.com/photos/17060504/pexels-photo-17060504/free-photo-of-amandonos-maravillosamente.jpeg',
            },
          ],
          content:
            "The Inca Trail, leading to the mystical ancient city of Machu Picchu in Peru, is a bucket-list adventure for many outdoor enthusiasts. This ancient trail winds through the stunning Andes Mountains, passing through diverse ecosystems and showcasing breathtaking vistas. Trekking along the stone-paved path, traversing cloud forests and high mountain passes, you'll experience the remnants of the Inca Empire and witness the sun rising over the iconic Machu Picchu citadel. The combination of natural beauty, archaeological wonders, and physical challenge makes this journey an unforgettable experience for those seeking an adventure in the wild.",
          links: [
            {
              title: 'Machu Picchu Travel Guide',
              type: 'link',
              path: 'https://example.com/machu-picchu-guide',
            },
            {
              title: 'Hiking the Inca Trail: Tips and Preparation',
              type: 'link',
              path: 'https://example.com/inca-trail-hiking-tips',
            },
          ],
        },
        {
          title: "Exploring the Serengeti's Great Migration",
          images: [
            {
              src: 'https://images.pexels.com/photos/6473041/pexels-photo-6473041.jpeg',
            },
          ],
          content:
            'The Great Migration in the Serengeti National Park, Tanzania, is one of the most spectacular wildlife phenomena on Earth. Every year, millions of wildebeest, zebras, and gazelles undertake a treacherous journey in search of greener pastures. Witnessing the vast herds crossing crocodile-infested rivers and traversing the expansive savannah is a sight that will leave you in awe. The Serengeti also hosts a diverse array of wildlife, including lions, elephants, and giraffes, making it a dream destination for wildlife enthusiasts and photographers. Exploring this untamed wilderness is an adventure that connects you with the raw beauty and power of the natural world.',
          links: [
            {
              title: 'Serengeti National Park: A Wildlife Haven',
              type: 'link',
              path: 'https://example.com/serengeti-national-park',
            },
            {
              title: "The Great Migration: Nature's Epic Journey",
              type: 'link',
              path: 'https://example.com/great-migration-serengeti',
            },
          ],
        },
        // Additional articles can be added here
      ],
      tags: ['adventure', 'wildlife'],
    },
  ],
};
