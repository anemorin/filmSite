import styled from "styled-components";
import { colors } from "../enums";

export interface Props {
  /** Иконка кнопки */
  icon?: string;
  /** Позиция иконки (справа/слева от текста) */
  iconPosition?: 'left' | 'right' | 'center';
  /** Текст кнопки */
  children?: string | React.ReactNode;
  /** Действие при клике */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Высота кнопки */
  height?: number;
  /** Ширина кнопки */
  width?: number;
  /** Текст в тултипе */
  title?: string;
}

const ButtonComponent = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  font-weight: 500;
  font-size: ${(props) => (props.icon ? '14px' : '16px')};
  line-height: ${(props) => (props.icon ? '17px' : '20px')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
`;

const Icon = styled.img`
  background-color: ${colors.white};
`

const Button: React.FC<Props> = ({
    children,
    onClick,
    icon,
    iconPosition = 'left',
    height,
    width,
    title,
  }) => (
    <ButtonComponent
      height={height}
      icon={icon}
      iconPosition={iconPosition}
      onClick={onClick}
      title={title}
      width={width}
    >
      <div>
        {icon && (
          <Icon
            alt="icon"
            src={icon}
          />
        )}
      { children && <div>{children}</div> }
      </div>
    </ButtonComponent>
  );

  export default Button;