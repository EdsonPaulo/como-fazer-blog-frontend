import { Shared } from "src/typescript/enums";
import { IComment } from "src/typescript/interfaces";
import * as Yup from "yup";

export const CommentSchema = Yup.object().shape({
  [Shared.Name]: Yup.string()
    .min(3, "Nome demasiado curto!")
    .max(50, "Nome muito longo!")
    .required("O nome é obrigatório"),
  [Shared.Body]: Yup.string()
    .min(3, "Comentário demasiado curto!")
    .max(200, "Comentário muito longo! (máx. 200 caractéres)")
    .required("Comente alguma coisa :)"),
  [Shared.Email]: Yup.string()
    .email("Email inválido. Informe um válido!")
    .required("O email é obrigatório"),
  [Shared.CreatedAt]: Yup.date().default(new Date()),
});

export interface CommentProps {
  [Shared.Comment]: IComment;
}

export interface CommentsProps {
  [Shared.Slug]: string;
  [Shared.Comments]?: IComment[];
}

export interface CommentFormProps {
  onSubmitComment: (payload: IComment) => void;
  isSubmitting?: boolean;
}
