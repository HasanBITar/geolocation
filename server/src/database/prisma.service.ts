import {
  INestApplication,
  Injectable,
  OnModuleInit,
  Scope,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client/edge';

@Injectable({ scope: Scope.REQUEST })
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
