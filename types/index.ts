export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export interface CaseStudyProps {
  title: string;
  platform: string;
  influencer: string;
  followers: string;
  engagement: string;
  revenue: string;
  duration: string;
  category: string;
}

export interface CompetitorProps {
  name: string;
  platform: string;
  followers: string;
  engagementRate: string;
  contentFrequency: string;
  topContent: string;
}

export interface TrendProps {
  title: string;
  platform: string;
  views: string;
  likes: string;
  shares: string;
  comments: string;
  category: string;
}

export interface ThemeProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FeatureProps extends BaseComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Add more interfaces as needed for other components

