import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚨  CARDÁPIO  🚨\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ \n`;
        } else if (value === '5') {
          msg += `5️⃣ - _${element.description}_ \n`;
        }
      });

      msg +=
        '\nPara visualizar os produtos, *acesse*: https://wa.me/c/5573999423092\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente ao produto ao qual deseja adquirir:*';
      storage[from].stage = 2;

      return msg;
    } else if (message === '2') {
      return (
        '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE```\n\n' +
        neighborhoods +
        '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE``` '
      );
    } else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return '🔃 Encaminhando você o meu dono. \n⏳ *Aguarde um instante*.';
    }

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};
