import httpService from './httpService';
const BASE_URL = 'task'


export default {
  query,
  getById,
};

const gProject = [
  {
    id: 'p101',
    url: 'https://ordamari.github.io/memegen/',
    title: 'Memegen',
    description: 'app that generate meme, this app have gallary of popular memes but if you want another img you can upload one from your computer and use him to create a meme ',
    imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1601924991/uinyfmf5oxcup9aiqpob.jpg',
    createAt: '16/08/20',
    technologies: ['javaScript', 'css', 'canvas', 'SPA']
  },
  {
    id: 'p102',
    url: 'https://quiz-upp.herokuapp.com/#/',
    title: 'Quiz-up',
    description: 'marketplace of quizzes, in this app you can create and edit quizzes, you can play quizzes that you or another users build, you can play in single player or create room and invite your friends to play against you in real time',
    imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1601908789/z7xtpekxpjdipalyzxak.jpg',
    createAt: '30/09/20',
    technologies: ['react', 'sass', 'redux', 'socket.io', 'node.js', 'mongoDB', 'rest API', 'ajax', 'express', 'SPA']
  },
  {
    id: 'p103',
    url: 'https://roitheone.github.io/Apsus/',
    title: 'Apsus',
    description: 'This is my first project in react, this project containing three apps keep,mail and books',
    createAt: '30/08/20',
    imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1601925756/scs7d647uizurltckrsz.jpg',

    technologies: ['react', 'sass', 'redux', 'SPA']
  },
  {
    id: 'p104',
    url: 'https://ordamari.github.io/weather/',
    title: 'Weather',
    description: 'This is my mini app that i create in 4 hours, in this app you can search any city and watch the weather for 5 next day ',
    createAt: '07/10/20',
    imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1602089008/kghgpqct1wonzzlqzo9j.jpg',

    technologies: ['react', 'sass', 'hooks']
  },
  {
    id: 'p105',
    url: 'https://ordamari.github.io/protfolio/#/',
    title: 'Protfolio',
    description: 'This app, app that show my protfolio and experience',
    createAt: '17/10/20',
    imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1602931501/szucvzb8gc1cqbrmrsdh.jpg',

    technologies: ['react', 'sass', 'hooks']
  },

]

function query() {
  return gProject;
}

function getById(projectId) {
  const project = gProject.find(project => project.id === projectId)
  return project
}

