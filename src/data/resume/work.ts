/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Walmart Global Tech',
    position: 'Software Engineer III',
    url: 'https://www.walmartconnect.com/',
    startDate: '2024-06-17',
    summary:
      'Working as part of the AdTech Measurement and Reporting Team at Walmart Connect Ad Center (WAC)',
    highlights: [
      'Built and scaled the Path to Conversion Unified Report',
      'Developed the backend for the Media Partnerships Tab in WAC. This Tab is responsible for the 3rd Party mesurement reports in WAC',
      'Working as part of the GenAI pod to develop the M&R Gen AI Agent',
    ],
  },
  {
    name: 'Goldman Sachs',
    position: 'Senior Software Engineer - Big Data',
    url: 'https://www.goldmansachs.com/',
    startDate: '2023-07-23',
    endDate: '2024-06-14',
    summary: `Worked in the Compliance Big Data Engineering team to develop high performance data pipelines which detect exceptions in market trading data`,
    highlights: [
      'Was responsible for performance improvement of the GS Cross Trade tool. Reduced trade submission times from 2 minutes to 10 seconds per transaction by using distributed processing techniques',
      "Architected and developed the team's core data product pipeline",
    ],
  },
  {
    name: 'IBM',
    position: 'Graduate Student Researcher',
    url: 'https://www.ibm.com/us-en',
    startDate: '2023-01-24',
    endDate: '2023-05-22',
    highlights: [
      'Experimented on the best ways to exploit representations of polymers stemming from different pre-trained models',
      'Implemented the research findings on polymer property prediction tasks, improving accuracy and performance by 5%',
    ],
  },
  {
    name: 'Meta',
    position: 'Software Engineer Intern',
    url: 'https://www.meta.com/',
    startDate: '2022-05-18',
    endDate: '2023-08-12',
    highlights: [
      'Developed Hargow – a fast command line tool which facilitates in execution of complex workloads in production environments of choice – using Rust',
      'Implemented features such as metadata store and remote job execution as part of the project',
      'Integrated the Citrix remote user desktop with the hargow-server using rust curl-lib and thrift',
    ],
  },
  {
    name: 'Bytedance',
    position: 'Research Intern',
    url: 'https://www.bytedance.com/',
    startDate: '2022-01-31',
    endDate: '2022-04-22',
    highlights: [
      'Improve ingestion performance of Bytedance\’s Offline Inference Framework by 10% by optimizing the (de)compression logic in their pipeline as part of the Bytedance Infra Lab',
      'Contributed to the open source Ray project -- https://github.com/ray-project/ray/pull/22486 – Added support for decompression of snappy compressed txt files in Ray',
    ],
  },
  {
    name: 'Guavus Network Systems (Thales India)',
    position: 'Associate - Software Engineer',
    url: 'https://www.thalesgroup.com/en/worldwide/group/press-release/thales-acquires-guavus-one-pioneers-real-time-big-data-analytics',
    startDate: '2019-07-15',
    endDate: '2021-07-16',
    highlights: [
      'Designed and developed a Tethering detection solution which analyzes EDR datasets by performing deep packet inspection and applying filtering rules to identify tethered smart devices in a cellular network',
      'Created multiple micro-applications which analyze LTE data from CSPs to derive customer experience and identify potential pain points in the network using Anomaly Detection',
      'Developed a streaming service which processes data from Kafka to maintain a live Redis database of IP and mobile number mappings, with latency < 0.5s',
      'Handled team\’s maintenance activities in rotation, fixing 4 critical and 20+ non-critical production issues',
    ],
  },
];

export default work;
