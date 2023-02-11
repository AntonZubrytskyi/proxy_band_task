import {FC} from "react";
import './button.scss'
import classNames from "classnames";


interface IProps {
    children: string,
    styleClass: string,
    onClick?: () => void
}

const Button: FC<IProps> = ({styleClass, onClick, children, ...arg}) => {

    const className = classNames('btn', styleClass);

    return (
        <button
            className={className}
            onClick={onClick}
            {...arg}>
            {children}
        </button>
    );
};

export {Button};
