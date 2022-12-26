import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

// eslint-disable-next-line camelcase
export function formatDate(date: string): string {
  return format(new Date(date), 'dd MMM yyyy', {
    locale: ptBR,
  });
}
