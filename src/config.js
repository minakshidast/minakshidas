module.exports = {
  email: 'minakshid606@gmail.com',

  logo:
    'M 32.55 49.63 L 29.82 42.56 L 12.39 42.56 L 9.8 49.63 L 0 49.63 L 20.65 0 L 21.35 0 L 42.07 49.63 L 32.55 49.63 Z M 14.91 35.77 L 27.23 35.77 L 22.12 22.47 L 20.93 18.55 L 19.81 22.47 L 14.91 35.77 Z',

  logo_alphabet_g_position: 'translate(29.000000, 19.000000)',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/minakshidast',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/minakshi_d_a_s/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/minakshidass',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/minakshi-das-71363217a/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Blogs',
      url: '/#blogs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  tech: [
    {
      name: 'javascript',
      img: 'https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png',
    },
    {
      name: 'React',
      img: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png',
    },
    {
      name: 'Redux',
      img: 'https://cdn.iconscout.com/icon/free/png-512/redux-3629018-3030243.png',
    },
    {
      name: 'nodejs',
      img: 'https://cdn.iconscout.com/icon/free/png-512/node-js-3-1174937.png',
    },
    {
      name: 'mongoDB',
      img: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png',
    },
    {
      name: 'HTML',
      img: 'https://cdn.iconscout.com/icon/free/png-64/html-2752158-2284975.png',
    },
    {
      name: 'CSS',
      img: 'https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png',
    },
    {
      name: 'expressJs',
      img: 'https://pngimage.net/wp-content/uploads/2018/05/express-js-png-7.png',
    },
  ],
  blogs: [
    {
      frontmatter: {
        external:
          'https://minakshid606.medium.com/cloning-the-flipkart-application-with-react-js-34c6190f5f95',
        github: 'https://github.com/minakshidast/Flipkart_clone',
        title: 'Cloning the Flipkart application with React.js',
      },
      html:
        '<p>Hello readers, in this blog I am going to share my experience and learnings from this project. This is a group project. In the very beginning, we have studied the whole Flipkart Website and came up with a plan to divide the key features among the three of us. The plan was to build the landing page first then work on important features.</p>',
    },
    {
      frontmatter: {
        external: 'https://minakshid606.medium.com/the-cloning-of-buffer-com-d8141efa1a0d',
        github: 'https://github.com/AbhishekSardagi/Buffer',
        title: 'The cloning of Buffer.com',
      },
      html:
        '<p> How often, as full stack developer , we chose to execute a duplicate of some element that an outsider site has in our own site? As a beginner at whatever point you need to begin a project you face bunches of difficulties. You have less amount of thought regarding organizing an project and all these. </p>',
    },
    {
      frontmatter: {
        external:
          'https://minakshid606.medium.com/the-making-of-mailchimp-clone-first-project-in-masai-school-a4138886d548',
        github: 'https://github.com/Shubhamsharma585/mailchimp',
        title: 'The Making of Mailchimp Clone- First project in Masai School.',
      },
      html:
        '<p>Cloning mailchimp was the project in Masai School. We, AlkaNanda group of Sumarai- II have cloned the website in three days. We have used HTML,CSS and Javascript to clone the whole website.</p>',
    },
  ],

  projects: [
    {
      title: 'Flipkart_clone',
      tech: ['React', 'Redux', 'Material-UI', 'Javascript', 'Json Server'],
      github: 'https://github.com/minakshidast/Flipkart_clone',
      image: 'https://miro.medium.com/max/700/1*QaXXFwW_nH2RdZ7tdkGwIw.png',
      link: 'https://flipkart-clone-delta.vercel.app/',
      html:
        '<p>An E-commerce platform with a direct-to-consumer model, selling products, connecting sellers and buyers.</p>',
    },
    {
      title: 'Buffer_com',
      tech: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/AbhishekSardagi/Buffer',
      link:
        'https://www.linkedin.com/posts/minakshi-das-71363217a_activity-6827681780447920129-YvRv',
      image: 'https://miro.medium.com/max/1400/1*HdrZsh1UQ_Ub3ZoZ-qIBzA.png',
      html:
        '<p>Buffer is a social media management platform that helps businesses that helps users publish content, engage clients and analyze their social media performance...</p>',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
