import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu a LILI, A *Assistente Virtual* da Ilimithi VPN. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```QUERO COMPRAR``` \n2️⃣ - ```VERIFICAR TAXAS```\n0️⃣ - ```FALAR COM O DONO```';
  },
};
