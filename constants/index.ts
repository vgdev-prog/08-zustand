export const API_URL = 'https://notehub-public.goit.study/api';

export const TAGS = {
  WORK: 'Work',
  PERSONAL: 'Personal', 
  MEETING: 'Meeting',
  SHOPPING: 'Shopping',
  TODO: 'Todo'
} ;

export type TagValue = typeof TAGS[keyof typeof TAGS];

export const TAG_LIST: { id: keyof typeof TAGS; name: TagValue }[] = [
  { id: 'WORK', name: TAGS.WORK },
  { id: 'PERSONAL', name: TAGS.PERSONAL },
  { id: 'MEETING', name: TAGS.MEETING },
  { id: 'SHOPPING', name: TAGS.SHOPPING },
  { id: 'TODO', name: TAGS.TODO }
];
