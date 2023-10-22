interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Btn = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    <button className={"btn_close btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
