interface CheeseProps {
  title: string;
  description: string;
  url: string;
  image: string;
  selected: boolean;
  isRight: boolean;
}

export default (props: CheeseProps) => {
  return (
    <div
      className={`${
        props.selected ? "bg-cc-100" : "bg-cc-100"
      }  bg-cc-100 mt-4 rounded-md p-4`}
    >
      <a
        href={props.url}
        className={`${
          props.isRight ? "flex-row" : "flex-row-reverse"
        } flex justify-between items-center gap-5`}
      >
        <div>
          <p className="text-lg font-bold text-cc-400">{props.title}</p>
          <p className="text-cc-300">{props.description}</p>
        </div>

        <img src={props.image} alt={props.title} className="h-32" />
      </a>
    </div>
  );
};
