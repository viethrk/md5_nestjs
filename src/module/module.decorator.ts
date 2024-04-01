import { SetMetadata } from '@nestjs/common';

export const Module = (...args: string[]) => SetMetadata('module', args);
