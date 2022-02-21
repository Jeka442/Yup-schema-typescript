import * as yup from 'yup';

interface IPerson {
  firstName: string;
  lastName: string;
  mobile?:number;
  withoutExtraValidation:string;
  address: IAddress;
}

interface IAddress {
  City: string;
  Street: string;
  Zip: string;
}

const schemaAddress: yup.SchemaOf<IAddress> = yup.object({
  City: yup.string().required(),
  Street: yup.string().required(),
  Zip: yup.string().required(),
});

export const baseSchema: yup.SchemaOf<IPerson> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  mobile:yup.number().optional(),
  withoutExtraValidation:yup.string().defined(),
  address: schemaAddress,
});
