import { string, object, number, setLocale, ref } from 'yup';
import { ptForm } from 'yup-locale-pt';


setLocale(ptForm)


export let projetoSchema = object().shape(

    {

        id: number(),

        email: string().email().required().max(30),

        senha: string().required().min(5),

        local: number().required,

        preco: number().required,

    }

)