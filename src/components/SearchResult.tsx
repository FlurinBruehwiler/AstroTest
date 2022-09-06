interface CheeseProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export default (props: CheeseProps) => {
  return (
    <a className="bg-gray-500" href={props.url}>
      <p className="text-fuchsia-300">{props.title}</p>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </a>
  );
};
