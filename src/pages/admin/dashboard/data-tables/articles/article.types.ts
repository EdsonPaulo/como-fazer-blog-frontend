import { Shared } from "src/typescript/enums";
import { IArticle } from "src/typescript/interfaces";
import * as Yup from "yup";

export const ArticleFormSchema = Yup.object().shape({
  [Shared.Title]: Yup.string()
    .min(3, "Título demasiado curto!")
    .max(50, "Título muito longo!")
    .required("O Título é obrigatório"),
  [Shared.Image]: Yup.string(),
  [Shared.Category]: Yup.string().required("A Categoria é obrigatório"),
  [Shared.Body]: Yup.string()
    .min(10, "Artigo demasiado curto!")
    .required("Artigo alguma coisa :)"),
  [Shared.Tags]: Yup.array<String>(),
});

export interface ArticleFormProps {
  onSubmitComment: (payload: IArticle) => void;
  isSubmitting?: boolean;
}
