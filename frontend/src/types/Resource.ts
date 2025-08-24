import { User } from './User';

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  tags: string[];
  uploader: User;
  uploadDate: Date;
  downloadCount: number;
  rating: number;
  reviews?: Review[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

export enum ResourceType {
  LECTURE_NOTES = 'LECTURE_NOTES',
  PRESENTATION = 'PRESENTATION',
  ASSIGNMENT = 'ASSIGNMENT',
  EXAM_PAPER = 'EXAM_PAPER',
  STUDY_GUIDE = 'STUDY_GUIDE',
  RESEARCH_PAPER = 'RESEARCH_PAPER',
  TUTORIAL = 'TUTORIAL',
  VIDEO_LECTURE = 'VIDEO_LECTURE',
  AUDIO_LECTURE = 'AUDIO_LECTURE',
  BOOK = 'BOOK',
  ARTICLE = 'ARTICLE',
  CASE_STUDY = 'CASE_STUDY',
  LAB_MANUAL = 'LAB_MANUAL',
  PROJECT_REPORT = 'PROJECT_REPORT',
  OTHER = 'OTHER'
}
