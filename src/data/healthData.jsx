export const anatomicalHealthData = [
  { id: 1, part: 'Healthy Heart', status: 'healthy', color: 'var(--green-healthy)' },
  {id: 2, part: 'Healthy Leg' , status: 'healthy', color: 'var(--blue-healthy'},
  { id: 3, part: 'Lungs', status: 'issue', color: 'var(--red-issue)', date: 'Due 26 Oct 2023' },
  { id: 4, part: 'Teeth', status: 'healthy', color: 'var(--green-healthy)', date: 'Due 26 Oct 2023' },
  { id: 5, part: 'Bone', status: 'warning', color: 'var(--red-issue)', date: 'Due 26 Oct 2023' },
];

export const activityData = {
  appointmentsThisWeek: 3,
  chartBars: [
    { height: '60%', day: 'Mon' },
    { height: '30%', day: 'Tue' },
    { height: '80%', day: 'Wed' },
    { height: '40%', day: 'Thu' },
    { height: '90%', day: 'Fri' },
    { height: '50%', day: 'Sat' },
    { height: '20%', day: 'Sun' },
  ],
};