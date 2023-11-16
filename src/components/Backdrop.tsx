interface Props {
  onClick: () => void;
}

const Backdrop = ({ onClick }: Props, ...rest: any[]) => {
  return <div onClick={onClick} className="backdrop" {...rest}></div>;
};

export default Backdrop;
