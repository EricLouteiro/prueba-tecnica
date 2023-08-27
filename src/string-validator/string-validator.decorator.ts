import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export function IsValidBracketString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidBracketString',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') {
            return false;
          }

          const validPattern = /^(?:[\[\](){}]+)$/;

          return validPattern.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must only contain the characters "(){}[]" in any order.`;
        },
      },
    });
  };
}

export const BracketString = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);
