import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Produto *CANCELADO* com sucesso. \n Volte Sempre!';
    }

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
      `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Produto: *${desserts}* \n🚚 Taxa de entrega: *a confirmar*. \n💰 Valor do produto: *${
        total * 6
      },00 reais*. \n⏳ Tempo de entrega: *2 minutos*. \n\n` +
        '🔊 ```Agora, diga a forma de pagamento, por gentileza.```'
    );

    return '✅ *Prontinho, pedido feito!*\n\n⏳ *Aguarde um instante*.';
  },
};
