import React from 'react';
import * as Yup from "yup";

export const requiredField = values => {
    const errors = {};
    if (!values.post) {
        errors.post = 'Вы не ввели сообщение';
    }else if ((values.post.length > 30)
    ) {
        errors.post = 'Не больше 30 символов';
    }
    return errors;
};




export const PostFormSchema = Yup.object().shape({
    post: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a first name that long"),
});
export const MessageFormSchema = Yup.object().shape({
    message: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a first name that long"),
});
