export interface HealthItem {
    id: number;
    title: string;
    description: string;
    image: string;
    status: 'Available' | 'Unavailable';
  }
  
  export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Dashboard: { username?: string };
    Details: { item: HealthItem };
  };