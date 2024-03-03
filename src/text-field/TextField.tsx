import React, {useState} from "react";

type inputType = "text" | "password"


export interface ITextValid {
    validator: (value: string) => Promise<boolean>,
    message: string
}

interface ITextFieldProps {
    type: inputType,
    label: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (name: string, value: string) => void;
    valid: ITextValid,
    initField: (name: string) => void
}

/**
 * @description
 * 로그인 및 회원가입에서 사용될 TextField
 * @param type input type
 * @param label input label
 * @param name input name
 * @param placeholder
 * @param onChange input name,value를 조회해 상위 컴포넌트로 넘겨주는 함수
 * @param value input value
 * @param valid 유효성 검사 관련 객체
 */
export default function TextField({
                                      type,
                                      label,
                                      name,
                                      placeholder,
                                      onChange,
                                      value,
                                      valid,
                                      initField
                                  }: ITextFieldProps) {

    // 필드 에러 여부
    const [error, setError] = useState<boolean>(false);
    // 에러 메시지
    const [errorMessage, setErrorMessage] = useState<string>("");


    // onBlur Handler
    async function onHandleBlur(event: React.FocusEvent<HTMLInputElement>) {

        const isValid = await valid.validator(event.target.value);

        setError(isValid)
        setErrorMessage(isValid ? valid.message : "")

    }

    // onChange Handler
    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        onChange(name, value)

    }


    return <div className={`bg-Bg-secondary w-full ${error ? "text-Alert" : "text-Text-normal"}`}>

        <label htmlFor={label} className={"body"}>{label}</label>
        <div className={`border-b flex justify-center items-center ${value ? "text-Text-normal" : "text-Fill-normal"}`}>
            <input className={"my-2 outline-none w-full titleS"} type={type} value={value} id={label} name={name}
                   onChange={onHandleChange} onBlur={onHandleBlur} placeholder={placeholder}/>
            {value && <button
                onClick={() => initField(name)}
                className={"flex justify-center content-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className="w-[18px] h-[18px]">
                    <path fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                          clipRule="evenodd"/>
                </svg>

            </button>}
        </div>
        {error && (
            <p className="mt-2 text-sm text-alert-normal min-h-[24px]">
                <span>{errorMessage}</span>
            </p>
        )}
    </div>
}
