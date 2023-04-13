export interface FormInterface {
    text: string,
    date: string,
    select: string,
    checkbox: boolean,
    switcher: string,
    file: FileList
}

export interface FormState {
    form: FormInterface[]
}