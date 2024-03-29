import { ARGS, Configuration, Crypt_Value, EncryptOutput, Users } from './types';

export function guardConfiguration(obj: any): obj is Configuration {
  return (
    obj !== null &&
    obj !== undefined &&
    obj instanceof Object &&
    typeof obj.id === 'string' &&
    (typeof obj.salt_1 === 'string' && obj.salt_1.length === 32) &&
    (typeof obj.salt_2 === 'string' && obj.salt_2.length === 32)
  );
}

export function guardEncryptOutput(obj: any): obj is EncryptOutput {
  return (
    obj !== null &&
    obj !== undefined &&
    obj instanceof Object &&
    typeof obj.content === 'string' &&
    typeof obj.iv === 'string' &&
    typeof obj.salt === 'string'
  );
}

export function guardCrypt_Value(obj: any): obj is Crypt_Value {
  return (
    obj !== null &&
    obj !== undefined &&
    obj instanceof Object &&
    typeof obj.rowid === 'number' &&
    typeof obj.created_at === 'string' &&
    typeof obj.label === 'string' &&
    typeof obj.content === 'string' &&
    typeof obj.salt === 'string' &&
    typeof obj.iv === 'string'
  );
}

export function guardUsers(obj: any): obj is Users {
  return (
    obj !== null &&
    obj !== undefined &&
    obj instanceof Object &&
    typeof obj.rowid === 'number' &&
    typeof obj.created_at === 'string' &&
    typeof obj.uuid === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.salt === 'string' &&
    typeof obj.pass === 'string' &&
    typeof obj.default_user === 'number'
  );
}

export function guardARGS(obj: any): obj is ARGS {
  return (
    (typeof obj.help === 'boolean' || obj.help === undefined) &&
    (typeof obj.use === 'string' || obj.use === undefined) &&
    (typeof obj.force === 'boolean' || obj.force === undefined) &&
    (typeof obj.purge === 'boolean' || obj.purge === undefined) &&
    (typeof obj.set === 'string' || obj.set === undefined) &&
    (typeof obj.salt === 'string' || obj.salt === undefined) &&
    (typeof obj.noclip === 'boolean' || obj.noclip === undefined) &&
    (typeof obj.output === 'string' || obj.output === undefined) &&
    (typeof obj.get === 'string' || obj.get === undefined)
  );
}
