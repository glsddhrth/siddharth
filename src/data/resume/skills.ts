export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Java',
    competency: 4,
    category: ['Big Data', 'Languages', 'Backend Development'],
  },
  {
    title: 'Scala',
    competency: 5,
    category: ['Big Data', 'Languages', 'Backend Development'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Big Data', 'Languages'],
  },
  {
    title: 'Rust',
    competency: 2,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 5,
    category: ['Big Data', 'Languages', 'Databases'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Google Cloud Services',
    competency: 4,
    category: ['Big Data', 'Tools'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Vim',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Big Data', 'Tools'],
  },
  {
    title: 'Jira / Agile',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases', 'Big Data'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Buck',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Airflow',
    competency: 2,
    category: ['Tools', 'Big Data'],
  },
  {
    title: 'Hadoop/HDFS',
    competency: 5,
    category: ['Big Data', 'Databases'],
  },
  {
    title: 'Spark',
    competency: 5,
    category: ['Big Data'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Big Data', 'Databases'],
  },
  {
    title: 'Hive',
    competency: 4,
    category: ['Big Data', 'Databases'],
  },
  {
    title: 'Iceberg',
    competency: 4,
    category: ['Big Data', 'Databases'],
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Tools', 'Backend Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Big Data'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Big Data'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Big Data'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  // '#cc7b94',
  // '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
