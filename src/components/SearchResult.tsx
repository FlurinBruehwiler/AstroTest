import '../global.css';

interface CheeseProps {
  title: string;
  description: string;
  url: string;
  image: string;
  selected: boolean;
}

export default (props: CheeseProps) => {
  return (
    <div className="bg-red-600" >
      <a href={props.url}>
        <p className="text-red-900 bg-black">{props.title}</p>
        <p>{props.description}</p>
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );
};
