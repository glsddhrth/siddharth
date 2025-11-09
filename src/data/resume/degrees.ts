export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Massachusetts - Amherst',
    degree: 'M.S. Computer Science',
    link: 'https://www.umass.edu/',
    year: 2023,
  },
  {
    school: 'Thapar Institute of Engineering and Technology',
    degree: 'B.E. Computer Engineering',
    link: 'https://www.thapar.edu/',
    year: 2019,
  },
];

export default degrees;
