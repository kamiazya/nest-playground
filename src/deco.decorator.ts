import { ReflectMetadata } from '@nestjs/common';

export const Deco = (...args: string[]) => ReflectMetadata('deco', args);
