import { FC } from 'react'

interface IProps { 
  className?: string;
  image: string;
  alt: string;
  onClick?: () => void
}

const Character: FC<IProps> = ({ className, image, alt="", onClick}) => (
    <img className={className} src={image} alt={alt} onClick={onClick}/>
  )

export default Character