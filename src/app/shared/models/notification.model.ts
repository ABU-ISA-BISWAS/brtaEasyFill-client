export interface Notification {
  id: number;
  instituteId: number;
  userId: number;
  message: string;
  createdAt: string;
  readStatus: 'READ' | 'UNREAD';
}
