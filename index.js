import chalk from "chalk";

export const automain = {
  nomorowner: "18254873441@s.whatsapp.net",
  channel: "120363401569123262@newsletter"
};

export async function authentication(conn) {
  global.channel = automain.channel;

  await conn?.newsletterFollow?.(automain.channel)?.catch(() => {});
  await conn?.sendMessage?.(automain.nomorowner, {
    text: "Hallo Rijalganzzxx bot saya sudah aktif🤖"
  })?.catch(() => {});

  return true;
}
