import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { getRepository } from "typeorm";

@ValidatorConstraint({ name: "exists", async: true })
export class ExistOnDatabaseConstraint implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    let entity_class = "class_entity_";

    if (Array.isArray(args.value)) {
      entity_class += args.value[0].constructor.name;
    } else {
      entity_class += args.value.constructor.name;
    }

    /* @ts-ignore*/
    const req_id = args.object[args.property] || -1;
    const [items, count] = await getRepository(entity_class).findAndCount({
      id: req_id,
    });
    return !(count > 0);
  }
}

export function ExistOnDatabaseValidator(
  entity: Function,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [entity],
      validator: ExistOnDatabaseConstraint,
    });
  };
}
