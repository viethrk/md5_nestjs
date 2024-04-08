import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class MessageRepository {
  private path_file = './src/data/message.json';

  findAll() {
    const messageStr = readFileSync(this.path_file, { encoding: 'utf-8' });
    return JSON.parse(messageStr);
  }

  findOne(id: string) {
    const messageStr = readFileSync(this.path_file, { encoding: 'utf-8' });
    const messJson = JSON.parse(messageStr);
    return messJson[id];
  }

  create(content: string) {
    const messageStr = readFileSync(this.path_file, { encoding: 'utf-8' });
    const messJson = JSON.parse(messageStr);

    const id = Math.floor(Math.random() * 999);
    messJson[id] = { id, content };

    writeFileSync(this.path_file, JSON.stringify(messJson, null, 2));

    return messJson[id];
  }
}
