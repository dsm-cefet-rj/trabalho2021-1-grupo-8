import { string, object, number, setLocale, ref } from 'yup';
import { ptForm } from 'yup-locale-pt';


setLocale(ptForm)


export let projetoSchema = object().shape(

    {

        username: string().email().required(),
        password: string().min(6).max(9).required(),

        //local: number().required,

        //preco: number().required,

    }

)