interface CheeseProps {
  title: string;
  description: string;
  url: string;
  image: string;
  selected: boolean;
}

export default (props: CheeseProps) => {
  return (
    <div className="bg-slate-400 mt-4 rounded-md p-4">
      <a href={props.url} className="flex justify-between">
        <div>
          <p className="text-lg font-bold">{props.title}</p>
          <p>{props.description}</p>
        </div>

        <img src={props.image} alt={props.title} className="h-32" />
      </a>
    </div>
  );
};
