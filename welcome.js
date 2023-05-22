import os from "os";

export function hello() {
  return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
