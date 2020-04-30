export default interface Mail {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  date: string;
  attachment: string | null;
}

export interface MailExtra extends Mail {
  count: number;
}