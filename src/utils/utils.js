// Тут пишем функции хелперы, это файл для экспорта тут ничего не должно исполняться

import { mobileDays, desctopDays } from './var';

export const findTypeOfContent = width => (width >= 1280 ? desctopDays : mobileDays);

export default { findTypeOfContent };
