import mails from "@/data/db.json";
import Mail, { MailExtra } from "@/models/Mail";

export function getMails() {
  return mails.reduce((acc: MailExtra[], mail: Mail): MailExtra[] => {
    const sameSender = acc.find(m => m.from == mail.from);

    if (sameSender) {
      if (!sameSender.count) {
        sameSender.count = 1;
      } else {
        sameSender.count += 1;
      }

      return acc.concat({ ...sameSender, ...mail });
    }

    return acc.concat({ ...mail, count: 1 });
  }, []);
}

export function formatTo(to: string): string {
  const [first, others] = to.split(/[,;]/);

  if (first && !others) {
    return first;
  }

  return `${first}, ...`;
}
